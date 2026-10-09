"""
Step 1: saved PYQ pages (one .html/.txt per exam) -> playable paper tests + an index.

  python tools/pyq/pyq_extract.py --src <folder with saved pages> --out . [--diagrams pyq_diagrams.md]

Writes (relative to --out):
  pyq/papers/<yyyy-mon-dd-sN>-p1.md / -p2.md   one single-file test per paper, in our usual format
  pyq/pyq-index.json                           every question (incl. quarantined) as plain text, for classification
  pyq/pyq-review.txt                           things a human should look at

Re-running OVERWRITES pyq/papers/*.md, so do hand-edits AFTER the final extraction run.
"""
import argparse, datetime, glob, json, os, re, sys
from bs4 import BeautifulSoup, NavigableString, Tag

MONTHS = {m: i for i, m in enumerate(['January', 'February', 'March', 'April', 'May', 'June', 'July',
                                      'August', 'September', 'October', 'November', 'December'], 1)}
PARTIAL_RE = re.compile(r"left (them |it )?out|not included|did not include|omitted|too (dense|small|blurry)", re.I)
VERIFY_RE = re.compile(r"hardest|please check|blurry in|cropped|unlabel|not shown", re.I)


# ------------------------------------------------------------------ html -> markdown
def esc(t):
    t = t.replace('\\', '\\\\').replace('<', '&lt;').replace('>', '&gt;').replace('*', r'\*').replace('|', r'\|')
    return re.sub(r'(?<![A-Za-z0-9])_|_(?![A-Za-z0-9])', r'\_', t)


def inline_child(c, img_cb):
    if isinstance(c, NavigableString):
        return esc(re.sub(r'\s+', ' ', str(c).replace('\xa0', ' ')))
    if c.name == 'br':
        return '<br>\n'
    if c.name in ('strong', 'b', 'em', 'i'):
        inner = inline(c, img_cb)
        core = inner.strip()
        if not core:
            return ''
        mark = '**' if c.name in ('strong', 'b') else '*'
        return (' ' if inner[:1].isspace() else '') + f'{mark}{core}{mark}' + (' ' if inner[-1:].isspace() else '')
    if c.name == 'code':
        return '`' + c.get_text().replace('`', "'") + '`'
    if c.name == 'img':
        return img_cb(c)
    if c.name in ('ul', 'ol', 'table', 'pre', 'p', 'div'):
        return '\n\n' + block(c, img_cb) + '\n\n'
    return inline(c, img_cb)


def inline(node, img_cb):
    kids, out = list(node.children), []
    for i, c in enumerate(kids):
        if isinstance(c, Tag) and c.name == 'br':
            nxt = next((k for k in kids[i + 1:] if not (isinstance(k, NavigableString) and not str(k).strip())), None)
            before = ''.join(out).rstrip()
            after = nxt.get_text().lstrip() if nxt is not None else ''
            # lowercase continuation after a line that doesn't end a sentence = soft wrap from the PDF source
            out.append(' ' if (after[:1].islower() and before[-1:] not in '.:;?!)') else '<br>\n')
        else:
            out.append(inline_child(c, img_cb))
    return re.sub(r' {2,}', ' ', re.sub(r'(<br>\n) +', r'\1', ''.join(out)))


def table_md(t, img_cb):
    rows = []
    for tr in t.find_all('tr'):
        cells = [re.sub(r'\s*\n\s*', ' ', inline(td, img_cb).replace('<br>\n', '<br>')).strip() or ' '
                 for td in tr.find_all(['th', 'td'])]
        if cells:
            rows.append(cells)
    if not rows:
        return ''
    w = max(len(r) for r in rows)
    rows = [r + [' '] * (w - len(r)) for r in rows]
    lines = ['| ' + ' | '.join(rows[0]) + ' |', '|' + '---|' * w] + ['| ' + ' | '.join(r) + ' |' for r in rows[1:]]
    return '\n'.join(lines)


def block(node, img_cb, depth=0):
    chunks, buf = [], []

    def flush():
        s = ''.join(buf).strip()
        buf.clear()
        if s:
            chunks.append(s)

    for c in node.children:
        if isinstance(c, NavigableString):
            buf.append(esc(re.sub(r'\s+', ' ', str(c).replace('\xa0', ' '))))
        elif c.name == 'p':
            flush(); chunks.append(inline(c, img_cb).strip())
        elif c.name in ('ul', 'ol'):
            flush()
            items = []
            for n, li in enumerate(c.find_all('li', recursive=False), 1):
                body = block(li, img_cb, depth + 1).replace('\n', '\n   ')
                items.append(('- ' if c.name == 'ul' else f'{n}. ') + body)
            chunks.append('\n'.join(items))
        elif c.name == 'table':
            flush(); chunks.append(table_md(c, img_cb))
        elif c.name == 'pre':
            flush(); chunks.append('```\n' + c.get_text().strip('\n') + '\n```')
        elif c.name == 'blockquote':
            flush(); chunks.append('\n'.join('> ' + l for l in block(c, img_cb).split('\n')))
        elif c.name == 'hr':
            flush(); chunks.append('---')
        elif c.name == 'img':
            flush(); chunks.append(img_cb(c))
        elif c.name in ('div', 'section', 'figure', 'li'):
            flush(); chunks.append(block(c, img_cb, depth))
        else:
            buf.append(inline_child(c, img_cb))
    flush()
    return '\n\n'.join(x for x in chunks if x)


def plain(node):
    return re.sub(r'\s+', ' ', node.get_text(' ', strip=True).replace('\xa0', ' ')).strip() if node else ''


# ------------------------------------------------------------------ diagrams file
def parse_diagrams(path):
    """{basename: [ {label, kind, code, partial, verify, title} ]}"""
    if not path or not os.path.exists(path):
        return {}
    text = open(path, encoding='utf-8').read()
    out = {}
    for blk in re.split(r'^## \d+\.\s*', text, flags=re.M)[1:]:
        title = blk.split('\n', 1)[0].strip()
        src = re.search(r'Source:\s*(.+)', blk)
        fence = re.search(r'```(mermaid|text)\n(.*?)```', blk, re.S)
        if not src or not fence:
            continue
        names = re.findall(r'(q\d+(?:-\d+)?-[a-z0-9\-]+\.(?:png|jpe?g))', src.group(1))
        labels = re.findall(r'(\d+_[a-z]{3}_\d{4})_assets', src.group(1))
        notes = blk.split('```')[0]
        d = dict(kind=fence.group(1), code=fence.group(2).rstrip(), title=title,
                 partial=bool(PARTIAL_RE.search(notes)) or len(names) > 1, verify=bool(VERIFY_RE.search(notes)),
                 labels=labels)
        for n in names:
            out.setdefault(n, []).append(d)
    return out


# ------------------------------------------------------------------ extraction
def sitting_info(soup, h2_text):
    g = soup.find('h2', string=re.compile('at a glance'))
    gl = re.sub(r'\s+', ' ', (g.find_parent('section') or g.parent).get_text(' ', strip=True)) if g else ''
    m = re.search(r'([A-Z][a-z]+ \d{1,2}, \d{4})\s*·\s*Shift (\d)', h2_text)
    if not m:
        m = re.search(r'Exam date\(s\)\s+([A-Z][a-z]+ \d{1,2}, \d{4})\s+Shift\(s\)\s+Shift (\d)', gl)
    if not m:
        raise ValueError('cannot read exam date/shift')
    d = datetime.datetime.strptime(m.group(1), '%B %d, %Y').date()
    return d, int(m.group(2))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', required=True); ap.add_argument('--out', default='.'); ap.add_argument('--diagrams')
    a = ap.parse_args()
    files = sorted(glob.glob(os.path.join(a.src, '*.txt')) + glob.glob(os.path.join(a.src, '*.html')))
    files = [f for f in files if re.match(r'^\d+_[a-z]{3}_\d{4}\.(txt|html)$', os.path.basename(f))]
    diagrams = parse_diagrams(a.diagrams)
    used_diagrams, kept_images, review = set(), [], []
    papers, questions = [], []
    os.makedirs(os.path.join(a.out, 'pyq', 'papers'), exist_ok=True)

    for f in files:
        flabel = re.match(r'^\d+_([a-z]{3}_\d{4})', os.path.basename(f)).group(0)
        soup = BeautifulSoup(open(f, encoding='utf-8').read(), 'html.parser')
        sections = {}
        for ol in soup.select('ol'):
            qs = [c for c in ol.find_all('li', recursive=False) if re.fullmatch(r'q\d+', c.get('id', ''))]
            if qs:
                h2 = ol.find_previous('h2').get_text(' ', strip=True)
                sections.setdefault(h2, []).extend(qs)
        for h2, qs in sections.items():
            paper = 'p1' if h2.startswith('Paper 1') else 'p2'
            d, shift = sitting_info(soup, h2)
            mon = d.strftime('%b'); mon3 = mon.lower()
            sitting = f'{d.year}-{mon3}-{d.day:02d}-s{shift}'
            slug = f'{sitting}-{paper}'
            short = f'{mon} {d.year}'
            title = f'UGC NET {mon} {d.year} ({d.day} {mon}, Shift {shift})'
            md = [f'<!-- {title} · Paper {paper[1]} · generated by pyq_extract.py from {os.path.basename(f)} -->\n']
            playable = 0

            for q in qs:
                qnum = int(q['id'][1:])
                kids = {k: None for k in ('stem', 'attach', 'opts', 'ans', 'expl')}
                for ch in q.find_all(recursive=False):
                    cls = ' '.join(ch.get('class', []))
                    if ch.name == 'div' and 'markdown-content' in cls: kids['stem'] = ch
                    elif ch.name == 'div' and 'bg-gradient' in cls: kids['attach'] = ch
                    elif ch.name == 'ol': kids['opts'] = ch
                    elif ch.name == 'p' and re.match(r'(Answer|Accepted)', ch.get_text(strip=True)): kids['ans'] = ch
                    elif ch.name == 'div' and 'pyq-explanation' in cls: kids['expl'] = ch

                def img_cb(img, _ctx={'label': flabel}):
                    src = img.get('src', '')
                    if src.startswith('//'): src = 'https:' + src
                    base = src.split('?')[0].rsplit('/', 1)[-1]
                    cands = diagrams.get(base, [])
                    pick = next((c for c in cands if _ctx['label'] in c['labels']), None) or (cands[0] if len(cands) == 1 else None)
                    if pick:
                        used_diagrams.add((base, tuple(pick['labels'])))
                        if pick['kind'] == 'mermaid' and not pick['partial']:
                            if pick['verify']: review.append(f'VERIFY diagram vs image: {slug} {base} ({pick["title"]})')
                            return '```mermaid\n' + pick['code'] + '\n```'
                        if pick['kind'] == 'text':
                            return f'![{base}]({src})\n\n```text\n' + pick['code'] + '\n```'
                    kept_images.append((slug, qnum, base, 'partial diagram - real image kept' if pick else 'no diagram yet'))
                    return f'![{base}]({src})'

                stem_md = block(kids['stem'], img_cb) if kids['stem'] else ''
                attach_md = block(kids['attach'], img_cb) if kids['attach'] else ''
                opts = []
                for li in (kids['opts'].find_all('li', recursive=False) if kids['opts'] else []):
                    spans = li.find_all('span', recursive=False)
                    body = spans[1] if len(spans) > 1 else li
                    opts.append((inline(body, img_cb).strip() or '(see figure)', plain(body),
                                 'border-green' in ' '.join(li.get('class', []))))
                greens = {chr(65 + i) for i, o in enumerate(opts) if o[2]}
                ans_txt = kids['ans'].get_text(' ', strip=True) if kids['ans'] else ''
                first = re.match(r'(?:Answer|Accepted answers?):\s*\(([A-E])\)', ans_txt)
                first = first.group(1) if first else None
                # green markers are the source of truth (one green normally, several for NTA 'accepted answers');
                # the Answer: line is only a cross-check on its FIRST letter.
                letters = sorted(greens) or ([first] if first else [])
                expl_c = kids['expl'].find('div', class_=re.compile('markdown-content')) if kids['expl'] else None
                expl_md = block(expl_c, img_cb) if expl_c else ''

                reasons = []
                if any('OCR review required' in o[1] for o in opts) or 'OCR review required' in plain(kids['stem']): reasons.append('ocr-damaged')
                if len(opts) != 4: reasons.append(f'{len(opts)} options')
                if 'Source matching prompt' in plain(kids['stem']) + plain(kids['attach']): reasons.append('no question text in source (placeholder)')
                if not letters: reasons.append('no answer')
                elif greens and first and first not in greens: reasons.append('answer line disagrees with green marker')
                if len(letters) > 1 and not reasons: review.append(f'MULTI-ACCEPTED {slug} Q{qnum}: {", ".join(letters)}')

                ref = f'{slug}-q{qnum}'
                questions.append(dict(
                    ref=ref, slug=slug, sitting=sitting, paper=paper, qnum=qnum, date=d.isoformat(),
                    text=(plain(kids['stem']) + ' ' + plain(kids['attach']))[:700],
                    options=[o[1][:160] for o in opts], expl=plain(expl_c)[:420], answer=letters,
                    playable=not reasons, reasons=reasons, has_img=bool(q.find('img')),
                    passage=(paper == 'p1' and len(plain(kids['attach']).split()) >= 150)))
                if reasons:
                    review.append(f'QUARANTINED {slug} Q{qnum}: {"; ".join(reasons)}')
                    continue
                playable += 1
                src_line = f'**Source:** {title} · Paper {paper[1]} · Q{qnum}'
                md.append(f'## Q{qnum}\n{stem_md}\n\n{attach_md}\n'.replace('\n\n\n', '\n\n'))
                md.append(f'## Q{qnum} - Options\n' + '\n'.join(f'({chr(65 + i)}) {o[0]}' for i, o in enumerate(opts)) + '\n')
                md.append(f'## Q{qnum} - Hint\n**Answer:** {", ".join(letters)}\n{src_line}\n\n{expl_md}\n')

            path = os.path.join(a.out, 'pyq', 'papers', slug + '.md')
            open(path, 'w', encoding='utf-8').write('\n'.join(md))
            papers.append(dict(slug=slug, sitting=sitting, paper=paper, date=d.isoformat(), shift=shift, short=short,
                               title=title, file=f'pyq/papers/{slug}.md', total=len(qs), playable=playable,
                               quarantined=len(qs) - playable))
            print(f'{slug:<22} {len(qs):>3} questions, {playable:>3} playable')

    papers.sort(key=lambda p: (p['date'], p['shift']), reverse=True)
    json.dump(dict(papers=papers, questions=questions), open(os.path.join(a.out, 'pyq', 'pyq-index.json'), 'w', encoding='utf-8'), ensure_ascii=False)

    unused = [(b, l) for b, ds in diagrams.items() for d in ds for l in [tuple(d['labels'])] if (b, l) not in used_diagrams]
    rep = ['# PYQ extraction review\n', f'{len(questions)} questions, {sum(p["playable"] for p in papers)} playable.\n']
    rep += ['\n## Needs a human look\n'] + [f'- {r}' for r in review]
    rep += ['\n## Images that stayed as images (no faithful Mermaid diagram)\n'] + [f'- {s} Q{n} {b}: {why}' for s, n, b, why in kept_images]
    rep += ['\n## Diagram blocks never matched to an image\n'] + [f'- {b} {l}' for b, l in unused]
    open(os.path.join(a.out, 'pyq', 'pyq-review.txt'), 'w', encoding='utf-8').write('\n'.join(rep) + '\n')
    print(f'\nTotal {len(questions)} questions; review notes -> pyq/pyq-review.txt')


if __name__ == '__main__':
    main()
