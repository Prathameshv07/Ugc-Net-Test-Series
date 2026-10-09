"""
Optional step: download remote images used in the PYQ papers into the repo, so nothing depends on the
source site's CDN staying up. Run it on YOUR machine (it needs internet), BEFORE pyq_build.py:

  python tools/pyq/pyq_localize_images.py --root .
  python tools/pyq/pyq_build.py --root .

Images go to pyq/assets/<paper>/<file>; the paper .md files are rewritten to the local path.
Safe to re-run: already-local images are skipped, failed downloads keep their remote URL.
"""
import argparse, glob, os, re

IMG_RE = re.compile(r'!\[([^\]]*)\]\((https?://[^)\s]+)\)')


def download(url):
    import requests
    r = requests.get(url, timeout=20, headers={'User-Agent': 'Mozilla/5.0'})
    r.raise_for_status()
    return r.content


def main(fetch=download):
    ap = argparse.ArgumentParser(); ap.add_argument('--root', default='.')
    root = ap.parse_args().root
    done = failed = 0
    for path in sorted(glob.glob(os.path.join(root, 'pyq', 'papers', '*.md'))):
        slug = os.path.basename(path)[:-3]
        text = open(path, encoding='utf-8').read()

        def swap(m):
            nonlocal done, failed
            alt, url = m.groups()
            name = url.split('?')[0].rsplit('/', 1)[-1] or 'image.png'
            rel = f'pyq/assets/{slug}/{name}'
            dest = os.path.join(root, rel)
            if not os.path.exists(dest):
                try:
                    data = fetch(url)
                    os.makedirs(os.path.dirname(dest), exist_ok=True)
                    open(dest, 'wb').write(data)
                except Exception as e:
                    failed += 1
                    print(f'  FAILED {url} ({e}) - kept the remote link')
                    return m.group(0)
            done += 1
            return f'![{alt}]({rel})'

        new = IMG_RE.sub(swap, text)
        if new != text:
            open(path, 'w', encoding='utf-8').write(new)
    print(f'localized {done} image reference(s), {failed} failed')


if __name__ == '__main__':
    main()
