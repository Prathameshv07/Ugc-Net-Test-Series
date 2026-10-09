"""
Step 2: give every PYQ question exactly one topic ID from the closed list in pyq-topics.txt.

  python tools/pyq/pyq_classify.py --root .                # keyword rules only (free, instant, ~75-80% precise: a DRAFT)
  python tools/pyq/pyq_classify.py --root . --ai-only      # RECOMMENDED: Gemini classifies every question (~150 calls, ~20 min).
                                                           #   Resumable: if it stops, run the same command again.
  python tools/pyq/pyq_classify.py --root . --ai           # rules first, Gemini only for the ones rules couldn't decide
  python tools/pyq/pyq_classify.py --root . --report       # just print coverage, write nothing

Writes pyq/topic-map.json. Your hand edits in pyq-marks.txt are applied later, on top of this.
Needs for --ai:  pip install google-genai  and  export GEMINI_API_KEY=...
"""
import argparse, json, os, re, sys, time
sys.path.insert(0, os.path.dirname(__file__))
from pyq_common import load_taxonomy, load_index, final_topic_map

MODEL = 'gemini-3.5-flash-lite'
SECONDS_BETWEEN_CALLS = 7
MIN_SCORE, MIN_MARGIN = 6, 3
# the source site's own per-unit counts for Paper 2 (all 15 sittings) - used only as a sanity check
SITE_UNIT_COUNTS = {1: 173, 2: 133, 3: 141, 4: 137, 5: 156, 6: 146, 7: 143, 8: 167, 9: 170, 10: 133}


def rule_classify(q, topics):
    if q.get('passage'):                                  # Paper 1 comprehension: long prose passage attached
        return 'A03', 99
    head = q['text'].lower()
    tail = (' '.join(q['options']) + ' ' + q['expl']).lower()
    res = []
    for t in topics:
        s = strong = 0
        for rx, w in t['kw']:
            if rx.search(head): s += 2 * w; strong += (w == 3)
            elif rx.search(tail): s += w; strong += (w == 3)
        res.append((s, strong, t['id']))
    res.sort(reverse=True)
    (b, bstrong, bid), (s2, _, _) = res[0], res[1]
    # a confident pick needs at least one STRONG keyword and a clear lead over the runner-up
    if bstrong >= 1 and b >= MIN_SCORE and b - s2 >= MIN_MARGIN:
        return bid, b
    return None, b


def build_prompt(topics, units, batch):
    lines = [f"{t['id']} - {t['name']} (Unit {t['unit']}: {units[t['unit']]})" for t in topics]
    qs = []
    for q in batch:
        opts = ' | '.join(f"{chr(65 + i)}) {o[:90]}" for i, o in enumerate(q['options']))
        qs.append(f"[{q['ref']}] {q['text'][:420]} || {opts} || site explanation: {q['expl'][:200]}")
    return ("You classify UGC NET exam questions into exactly ONE topic from this closed list. "
            "Pick the topic the question is mainly testing. Never invent an ID.\n\nTOPICS:\n" + '\n'.join(lines) +
            "\n\nQUESTIONS:\n" + '\n'.join(qs) +
            "\n\nReply with ONLY a JSON object mapping each question ref (the text inside the square brackets) "
            "to its topic ID, e.g. {\"2026-jun-22-s2-p2-q5\": \"C23\"}. No commentary.")


def call_model(prompt):  # separate function so tests can replace it
    from google import genai
    client = genai.Client(api_key=os.environ['GEMINI_API_KEY'])
    return client.models.generate_content(model=MODEL, contents=prompt).text


def parse_reply(text, valid_ids, refs):
    m = re.search(r'\{.*\}', text, re.S)
    if not m:
        return {}
    try:
        data = json.loads(m.group(0))
    except json.JSONDecodeError:
        return {}
    return {r: str(t).strip().upper() for r, t in data.items() if r in refs and str(t).strip().upper() in valid_ids}


def report(tax, index, tmap):
    for paper in ('p2', 'p1'):
        pk = 'paper' + paper[1]
        topics = {t['id']: t for t in tax['topics'][pk]}
        qs = [q for q in index['questions'] if q['paper'] == paper]
        done = [q for q in qs if tmap.get(q['ref']) in topics]
        print(f"\n=== Paper {paper[1]}: {len(done)}/{len(qs)} classified ({100 * len(done) / len(qs):.0f}%) ===")
        by_unit = {}
        for q in done:
            u = topics[tmap[q['ref']]]['unit']
            by_unit[u] = by_unit.get(u, 0) + 1
        print(f"{'unit':<5}{'ours':>6}{'share':>8}" + (f"{'site':>7}{'site share':>12}" if paper == 'p2' else '') + '  name')
        tot_site = sum(SITE_UNIT_COUNTS.values())
        for u, name in tax['units'][pk].items():
            row = f"{u:<5}{by_unit.get(u, 0):>6}{100 * by_unit.get(u, 0) / max(1, len(done)):>7.1f}%"
            if paper == 'p2':
                row += f"{SITE_UNIT_COUNTS[u]:>7}{100 * SITE_UNIT_COUNTS[u] / tot_site:>11.1f}%"
            print(row + '  ' + name)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', default='.'); ap.add_argument('--ai', action='store_true')
    ap.add_argument('--ai-only', action='store_true'); ap.add_argument('--report', action='store_true')
    ap.add_argument('--batch', type=int, default=15); ap.add_argument('--spotcheck', type=int, default=0)
    a = ap.parse_args()
    tax = load_taxonomy(os.path.join(os.path.dirname(__file__), 'pyq-topics.txt'))
    index = load_index(a.root)
    path = os.path.join(a.root, 'pyq', 'topic-map.json')
    cur = json.load(open(path, encoding='utf-8')) if os.path.exists(path) else {'map': {}}
    mp = cur['map']

    if a.report:
        report(tax, index, {k: v['topic'] for k, v in mp.items() if v.get('topic')}); return

    if a.ai_only:
        a.ai = True
        mp = {k: v for k, v in mp.items() if v.get('method') == 'ai'}      # keep earlier AI answers (resume), drop rule guesses
    else:
        for q in index['questions']:
            pk = 'paper' + q['paper'][1]
            if q['ref'] in mp and mp[q['ref']].get('method') == 'ai':
                continue
            tid, score = rule_classify(q, tax['topics'][pk])
            if tid: mp[q['ref']] = {'topic': tid, 'method': 'rules', 'score': score}
            else: mp.pop(q['ref'], None)
    save = lambda: json.dump({'map': mp}, open(path, 'w', encoding='utf-8'), indent=0)
    save()

    if a.ai:
        if not os.environ.get('GEMINI_API_KEY'):
            sys.exit("Set GEMINI_API_KEY first.")
        for paper in ('p2', 'p1'):
            pk = 'paper' + paper[1]
            todo = [q for q in index['questions'] if q['paper'] == paper and q['ref'] not in mp]
            valid = {t['id'] for t in tax['topics'][pk]}
            print(f"Paper {paper[1]}: {len(todo)} questions for Gemini")
            for i in range(0, len(todo), a.batch):
                batch = todo[i:i + a.batch]
                got = parse_reply(call_model(build_prompt(tax['topics'][pk], tax['units'][pk], batch)), valid, {q['ref'] for q in batch})
                for r, t in got.items(): mp[r] = {'topic': t, 'method': 'ai'}
                save()
                print(f"  batch {i // a.batch + 1}: {len(got)}/{len(batch)} classified")
                time.sleep(SECONDS_BETWEEN_CALLS)

    tmap, _, errors = final_topic_map(a.root, tax, index)
    report(tax, index, tmap)
    if a.spotcheck:
        import random
        names = {t['id']: t['name'] for ts in tax['topics'].values() for t in ts}
        random.seed(1)
        pick = random.sample([q for q in index['questions'] if q['ref'] in tmap], min(a.spotcheck, len(tmap)))
        with open(os.path.join(a.root, 'pyq', 'spotcheck.txt'), 'w', encoding='utf-8') as f:
            f.write('Eyeball these. Wrong topic? Fix it in pyq-marks.txt (see the comments in that file).\n\n')
            for q in pick:
                f.write(f"{q['slug']} Q{q['qnum']}  ->  {tmap[q['ref']]} {names[tmap[q['ref']]]}  [{mp.get(q['ref'], {}).get('method', 'marks')}]\n    {q['text'][:150]}\n\n")
        print(f"Wrote pyq/spotcheck.txt ({len(pick)} questions to eyeball)")
    for e in errors: print('!!', e)
    print(f"\nWrote {path}")


if __name__ == '__main__':
    main()
