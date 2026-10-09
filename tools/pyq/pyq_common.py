"""Shared helpers for the PYQ pipeline (extract -> classify -> build)."""
import json, os, re

SECTION_RE = re.compile(r'^##\s+(Q\d+(?:\s*-\s*(?:Options|Hint))?)\s*$', re.MULTILINE)
LABEL_RE = re.compile(r'^(Q\d+)(?:\s*-\s*(Options|Hint))?$')


# ---------------------------------------------------------------- md questions
def split_questions(text):
    """Parse a single-file test .md into {qid: {'stem','options','hint'}} (document order).
    'hint' is the whole body of the '## Qn - Hint' section: hint text + Answer/Topic/Source/explanation."""
    parts = SECTION_RE.split(text)
    out = {}
    for i in range(1, len(parts), 2):
        m = LABEL_RE.match(parts[i].strip())
        if not m:
            continue
        qid, kind = m.group(1), m.group(2)
        body = (parts[i + 1] or '').strip()
        q = out.setdefault(qid, {'stem': '', 'options': '', 'hint': ''})
        q[{'Options': 'options', 'Hint': 'hint', None: 'stem'}[kind]] = body
    return out


def join_question(qid, q):
    return f"## {qid}\n{q['stem']}\n\n## {qid} - Options\n{q['options']}\n\n## {qid} - Hint\n{q['hint']}\n"


def renumber(qid_old, qid_new, q):
    return dict(q)  # bodies never mention their own Qn, so renumbering is only the headings


def answer_letters(hint_body):
    m = re.search(r'\*\*Answer:\*\*\s*([^\n]+)', hint_body)
    return re.findall(r'\b([A-E])\b', m.group(1)) if m else []


def set_topic_line(hint_body, topic_name):
    """Idempotently put '**Topic:** name' directly after the '**Answer:**' line."""
    lines = hint_body.split('\n')
    lines = [l for l in lines if not l.startswith('**Topic:**')]
    for i, l in enumerate(lines):
        if l.startswith('**Answer:**'):
            if topic_name:
                lines.insert(i + 1, f'**Topic:** {topic_name}')
            break
    return '\n'.join(lines)


# ---------------------------------------------------------------- taxonomy
def _phrase_regex(p):
    p = p.strip().lower()
    tail = ''
    if p.endswith('$'):
        p, tail = p[:-1], r'(?![a-z0-9])'
    return re.compile(r'(?<![a-z0-9])' + re.escape(p).replace(r'\ ', r'\s+') + tail, re.I)


def load_taxonomy(path):
    """Returns {'units': {paper: {n: name}}, 'topics': {paper: [topic,...]}}"""
    units, topics = {}, {}
    cur_units = cur_topics = cur = None
    for raw in open(path, encoding='utf-8'):
        line = raw.rstrip('\n')
        s = line.strip()
        if not s or s.startswith('#'):
            continue
        if s.startswith('@units'):
            cur_units = units.setdefault(s.split()[1], {}); cur_topics = None; cur = None
        elif s.startswith('@topics'):
            cur_topics = topics.setdefault(s.split()[1], []); cur_units = None; cur = None
        elif cur_units is not None:
            n, name = [x.strip() for x in s.split('|', 1)]
            cur_units[int(n)] = name
        elif cur_topics is not None:
            if s[0] in '!.':
                phrases = [x.strip() for x in s[1:].split(';') if x.strip()]
                cur['kw'] += [(_phrase_regex(p), 3 if s[0] == '!' else 1) for p in phrases]
            else:
                tid, unit, star, name = [x.strip() for x in s.split('|', 3)]
                cur = {'id': tid, 'unit': int(unit), 'star': star == '*', 'name': name, 'kw': []}
                cur_topics.append(cur)
    return {'units': units, 'topics': topics}


# ---------------------------------------------------------------- index / sittings
def load_index(root):
    return json.load(open(os.path.join(root, 'pyq', 'pyq-index.json'), encoding='utf-8'))


# ---------------------------------------------------------------- marks file
def resolve_slug(text, slugs):
    """'2026-jun-p2' / '2023-mar-15-p2' / full slug -> exactly one real paper slug (or raise)."""
    t = text.strip().lower()
    if t in slugs:
        return t
    m = re.match(r'^(\d{4})-([a-z]{3})(?:-(\d{1,2}))?(?:-s(\d))?-(p[12])$', t)
    if not m:
        raise ValueError(f"can't read paper name '{text}'")
    y, mon, day, shift, p = m.groups()
    hits = [s for s in slugs if s.startswith(f'{y}-{mon}-') and s.endswith('-' + p)
            and (not day or f'-{int(day):02d}-' in s) and (not shift or f'-s{shift}-' in s)]
    if len(hits) != 1:
        raise ValueError(f"'{text}' matches {len(hits)} papers {hits} - add the day, e.g. {y}-{mon}-15-{p}")
    return hits[0]


def parse_marks(path, slugs, valid_topics):
    """pyq-marks.txt lines:  <paper> Q21,Q35,Q40-Q44 = C23     (assign topic)
                              <paper> Q21,Q35 *               (personal star)
       returns (topic_override {qref: topicid}, starred set, errors [str])"""
    over, starred, errors = {}, set(), []
    if not os.path.exists(path):
        return over, starred, errors
    for n, raw in enumerate(open(path, encoding='utf-8'), 1):
        line = raw.split('#', 1)[0].strip()
        if not line:
            continue
        try:
            m = re.match(r'^(\S+)\s+([Qq0-9,\-\s]+?)\s*(?:=\s*(\S+)|(\*))\s*$', line)
            if not m:
                raise ValueError("expected:  <paper> Q1,Q5-Q9 = TOPICID   or   <paper> Q1,Q5 *")
            slug = resolve_slug(m.group(1), slugs)
            nums = []
            for part in re.split(r'\s*,\s*', m.group(2).strip()):
                r = re.match(r'^[Qq]?(\d+)(?:\s*-\s*[Qq]?(\d+))?$', part)
                if not r:
                    raise ValueError(f"bad question number '{part}'")
                a, b = int(r.group(1)), int(r.group(2) or r.group(1))
                nums += list(range(a, b + 1))
            for q in nums:
                ref = f'{slug}-q{q}'
                if m.group(3):
                    tid = m.group(3).upper()
                    if tid not in valid_topics:
                        raise ValueError(f"unknown topic id '{tid}'")
                    over[ref] = tid
                else:
                    starred.add(ref)
        except ValueError as e:
            errors.append(f'pyq-marks.txt line {n}: {e}')
    return over, starred, errors


def final_topic_map(root, tax, index):
    """topic-map.json (rules/AI) + pyq-marks.txt overrides -> ({ref: topicid}, starred, errors)"""
    path = os.path.join(root, 'pyq', 'topic-map.json')
    tmap = {}
    if os.path.exists(path):
        tmap = {k: v['topic'] for k, v in json.load(open(path, encoding='utf-8')).get('map', {}).items() if v.get('topic')}
    slugs = {p['slug'] for p in index['papers']}
    valid = {t['id'] for ts in tax['topics'].values() for t in ts}
    over, starred, errors = parse_marks(os.path.join(root, 'pyq-marks.txt'), slugs, valid)
    tmap.update(over)
    return tmap, starred, errors
