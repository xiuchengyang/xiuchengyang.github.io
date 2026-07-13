# Dr. Xiucheng Yang Personal Website

This is a lightweight researcher website that can be published with GitHub Pages.

## Current Structure

- `index.html`: compact About page with profile overview, contact links, appointments, education, and news.
- `research.html`: research topics with selected papers.
- `publications.html`: published papers sorted new to old, with the oldest numbered #1.
- `data-code.html`: apps, data products, and code resources.
- `styles.css`: visual design and responsive layout.
- `script.js`: small browser enhancement for the footer year.
- `assets/images/`: website images.
- `documents/`: local source documents. These are ignored by Git so they do not publish by default.
- `data/`: notes for datasets, apps, and code links.

## What To Add Next

1. LinkedIn profile URL.
2. GitHub username or preferred GitHub Pages repository name.
3. A headshot, if you want one.
4. Any preferred short bio wording.
5. Status changes when manuscripts move from review to accepted or published.
6. Any dataset DOIs, Zenodo records, GitHub repositories, or Earth Engine apps not already listed.
7. Paper PDFs, if you want individual publication PDF buttons instead of DOI links.

## Preview Locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Publish With GitHub Pages

The easiest path is to create a GitHub repository named:

`YOUR_GITHUB_USERNAME.github.io`

Then push these files to the repository's `main` branch and enable GitHub Pages from the repository settings.
