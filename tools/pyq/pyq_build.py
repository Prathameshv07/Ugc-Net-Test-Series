"""
Step 3: topics + ranking + topic-wise practice sets + manifest.

  python tools/pyq/pyq_build.py --root .

Reads   pyq/pyq-index.json, pyq/papers/*.md, pyq/topic-map.json, pyq-marks.txt, tools/pyq/pyq-topics.txt
Writes  pyq/papers/*.md            ('**Topic:**' lines injected/updated - safe to re-run, hand edits elsewhere are kept)
        pyq/sets/*.md              topic-wise practice sets (GENERATED - rebuilt every run, don't hand-edit)
        assets/pyq-manifest.js     test registrations for the picker (GENERATED)
        assets/priority-data.js    data for priority.html (GENERATED)
"""
import argparse, collections, datetime, json, math, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from pyq_common import (SECTION_RE, split_questions, join_question, set_topic_line,
                        load_taxonomy, load_index, final_topic_map)

SET_MAX = 25            # questions per practice set
W_TOTAL, W_RECENT, W_COVER = 0.5, 0.3, 0.2
TIER1_CUM, TIER2_CUM = 0.50, 0.80
CAT = {'mine': 'PYQ 0 · My marked questions', 't1': 'PYQ 1 · Paper 2 — Tier 1 topics (study first)',
       't2': 'PYQ 2 · Paper 2 — Tier 2 topics', 't3': 'PYQ 3 · Paper 2 — Tier 3 topics',
       'p2': 'PYQ 4 · Paper 2 — Full papers by year', 'p1t': 'PYQ 5 · Paper 1 — Topics',
       'p1': 'PYQ 6 · Paper 1 — Full papers by year'}


def read_md(path):
    text = open(path, encoding='utf-8').read()
    m = SECTION_RE.search(text)
    return (text[:m.start()] if m else ''), split_questions(text)


def minutes_for(n, official=None):
    return official if official else max(5, round(1.2 * n))


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('--root', default='.')
    root = ap.parse_args().root
    tax = load_taxonomy(os.path.join(os.path.dirname(__file__), 'pyq-topics.txt'))
    index = load_index(root)
    tmap, starred, errors = final_topic_map(root, tax, index)
    methods = {k: v.get('method', 'rules') for k, v in json.load(open(os.path.join(root, 'pyq', 'topic-map.json')))['map'].items()} \
        if os.path.exists(os.path.join(root, 'pyq', 'topic-map.json')) else {}
    topic_by_id = {t['id']: t for ts in tax['topics'].values() for t in ts}
    papers, questions = index['papers'], index['questions']

    # ---- 1. inject topic names into the playable paper files
    parsed = {}
    for p in papers:
        path = os.path.join(root, p['file'])
        header, qs = read_md(path)
        out = []
        for qid, q in qs.items():
            tid = tmap.get(f"{p['slug']}-q{qid[1:]}")
            q['hint'] = set_topic_line(q['hint'], topic_by_id[tid]['name'] if tid in topic_by_id else None)
            out.append(join_question(qid, q))
        open(path, 'w', encoding='utf-8').write(header + '\n'.join(out))
        parsed[p['slug']] = qs

    # ---- 2. ranking (per paper)
    priority = {'generated': datetime.date.today().isoformat(), 'errors': errors, 'papers': {}}
    ranking = {}
    for pk in ('p2', 'p1'):
        tkey = 'paper' + pk[1]
        sit = [p for p in papers if p['paper'] == pk]            # already newest-first
        recent = {p['slug'] for p in sit[:5]}
        qs = [q for q in questions if q['paper'] == pk]
        stats = {t['id']: dict(total=0, sittings=set(), recent=0) for t in tax['topics'][tkey]}
        for q in qs:
            tid = tmap.get(q['ref'])
            if tid in stats:
                s = stats[tid]; s['total'] += 1; s['sittings'].add(q['slug']); s['recent'] += q['slug'] in recent
        mx_total = max((s['total'] for s in stats.values()), default=1) or 1
        mx_recent = max((s['recent'] for s in stats.values()), default=1) or 1
        rows = []
        for t in tax['topics'][tkey]:
            s = stats[t['id']]
            score = W_TOTAL * s['total'] / mx_total + W_RECENT * s['recent'] / mx_recent + W_COVER * len(s['sittings']) / max(1, len(sit))
            rows.append(dict(id=t['id'], name=t['name'], unit=t['unit'], unit_name=tax['units'][tkey][t['unit']], star=t['star'],
                             total=s['total'], appeared=len(s['sittings']), recent=s['recent'],
                             avg=round(s['total'] / max(1, len(sit)), 2), marks=round(2 * s['total'] / max(1, len(sit)), 1),
                             score=round(score, 4)))
        rows.sort(key=lambda r: (-r['score'], -r['total']))
        classified = sum(r['total'] for r in rows) or 1
        cum = 0
        for i, r in enumerate(rows, 1):
            r['rank'] = i
            before = cum / classified
            cum += r['total']
            r['cum'] = round(cum / classified, 4)
            r['tier'] = 0 if r['total'] == 0 else (1 if before < TIER1_CUM else 2 if before < TIER2_CUM else 3)
        ranking[pk] = rows
        unit_tot = collections.Counter()
        for r in rows: unit_tot[r['unit']] += r['total']
        ref_methods = collections.Counter(('marks' if q['ref'] in starred or q['ref'] in tmap and methods.get(q['ref']) is None else methods.get(q['ref']))
                                          for q in qs if q['ref'] in tmap)
        priority['papers'][pk] = dict(
            sittings=[dict(slug=p['slug'], title=p['title']) for p in sit], n_sittings=len(sit), n_questions=len(qs),
            classified=sum(1 for q in qs if tmap.get(q['ref']) in stats), quarantined=sum(1 for q in qs if not q['playable']),
            methods=dict(ref_methods), topics=rows,
            units=[dict(unit=u, name=n, total=unit_tot[u]) for u, n in tax['units'][tkey].items()])
    priority['draft'] = any(m == 'rules' for m in methods.values())

    # ---- 3. practice sets
    entries, sets_by_topic = [], collections.defaultdict(list)
    sets_dir = os.path.join(root, 'pyq', 'sets')
    os.makedirs(sets_dir, exist_ok=True)
    for f in os.listdir(sets_dir):
        if f.endswith('.md'): os.remove(os.path.join(sets_dir, f))
    order = {p['slug']: i for i, p in enumerate(papers)}                  # newest first
    pool = collections.defaultdict(list)
    for p in papers:
        for qid, q in parsed[p['slug']].items():
            ref = f"{p['slug']}-q{qid[1:]}"
            pool[tmap.get(ref)].append((order[p['slug']], int(qid[1:]), q, ref))

    def write_sets(items, slug_base, title_base, category, minutes_each=None):
        items.sort(key=lambda x: (x[0], x[1]))
        n = len(items)
        k = max(1, math.ceil(n / SET_MAX))
        sizes = [n // k + (1 if i < n % k else 0) for i in range(k)]
        pos, made = 0, []
        for i, size in enumerate(sizes, 1):
            chunk = items[pos:pos + size]; pos += size
            slug = f'{slug_base}-{i}' if k > 1 else slug_base
            body = [f'<!-- GENERATED by pyq_build.py - {title_base} - do not hand-edit, rebuild instead -->\n']
            for j, (_, _, q, _) in enumerate(chunk, 1):
                body.append(join_question(f'Q{j}', q))
            rel = f'pyq/sets/{slug}.md'
            open(os.path.join(root, rel), 'w', encoding='utf-8').write('\n'.join(body))
            entries.append(dict(slug=slug, title=title_base + (f' ({i}/{k})' if k > 1 else ''), category=category, file=rel,
                                questions=len(chunk), minutes=minutes_for(len(chunk)), marksPerQuestion=2, negativeMarking=0))
            made.append(slug)
        return made

    skipped = []
    for pk in ('p2', 'p1'):
        for r in ranking[pk]:
            items = pool.get(r['id'], [])
            if len(items) < 3:
                if items: skipped.append(f"{r['id']} {r['name']} ({len(items)} playable)")
                continue
            badge = ('★ ' if r['star'] else '') + (f"T{r['tier']} · " if pk == 'p2' else '')
            cat = CAT['p1t'] if pk == 'p1' else CAT['t%d' % r['tier']]
            made = write_sets(list(items), f"set-{pk}-{r['id'].lower()}", f"{badge}{r['name']}", cat)
            sets_by_topic[(pk, r['id'])] = made
    mine = [x for p in papers for qid, q in parsed[p['slug']].items()
            for x in [(order[p['slug']], int(qid[1:]), q, f"{p['slug']}-q{qid[1:]}")] if x[3] in starred]
    if mine:
        write_sets(mine, 'set-marked', 'My marked questions', CAT['mine'])
    for pk in ('p2', 'p1'):
        for r in ranking[pk]:
            r['sets'] = sets_by_topic.get((pk, r['id']), [])

    # ---- 4. full-paper tests + manifest
    for p in papers:
        official = {'p2': 120, 'p1': 60}[p['paper']] if p['quarantined'] == 0 and p['total'] == {'p2': 100, 'p1': 50}[p['paper']] else None
        entries.append(dict(slug=p['slug'], title=f"Paper {p['paper'][1]} — {p['title'].replace('UGC NET ', '')}",
                            category=CAT[p['paper']], file=p['file'], questions=p['playable'],
                            minutes=minutes_for(p['playable'], official), marksPerQuestion=2, negativeMarking=0))
    js = lambda e: '  ' + json.dumps(e, ensure_ascii=False)
    open(os.path.join(root, 'assets', 'pyq-manifest.js'), 'w', encoding='utf-8').write(
        '/* GENERATED by tools/pyq/pyq_build.py - do not edit by hand. Appends PYQ tests to TESTS_MANIFEST. */\n'
        'TESTS_MANIFEST.push(\n' + ',\n'.join(js(e) for e in entries) + '\n);\n')
    open(os.path.join(root, 'assets', 'priority-data.js'), 'w', encoding='utf-8').write(
        '/* GENERATED by tools/pyq/pyq_build.py - do not edit by hand. */\nvar PRIORITY = ' + json.dumps(priority, ensure_ascii=False) + ';\n')

    n_sets = sum(1 for e in entries if e['slug'].startswith('set-'))
    print(f"papers {len(papers)} | topic sets {n_sets} | manifest entries {len(entries)} | starred {len(starred)}")
    for pk in ('p2', 'p1'):
        d = priority['papers'][pk]
        print(f"Paper {pk[1]}: {d['classified']}/{d['n_questions']} classified, {d['quarantined']} quarantined, tiers "
              f"{[sum(1 for r in d['topics'] if r['tier'] == t) for t in (1, 2, 3)]}")
    if skipped: print('Too few playable questions for a set:', '; '.join(skipped))
    for e in errors: print('!!', e)


if __name__ == '__main__':
    main()
