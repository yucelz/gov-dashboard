# gov-dashboard

A static dashboard hosted on GitHub Pages.

## Project structure

```
.
├── index.html            # MoF Dashboard (Claude Design export)
├── support.js            # runtime required by the export
├── _ds/                  # design-system CSS/JS bundle used by index.html
├── .nojekyll             # required: lets Pages serve the _ds/ folder as-is
├── .github/workflows/pages.yml  # optional Actions-based deploy
└── README.md
```

## Publishing on GitHub Pages

Follow the [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart):

1. Push this repo to GitHub (repo name `gov-dashboard`).
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose either:
   - **GitHub Actions** — uses `.github/workflows/pages.yml`, or
   - **Deploy from a branch** → `main` / `/ (root)`.
4. Wait for the deploy, then open `https://<your-username>.github.io/gov-dashboard/`.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

All asset paths are relative so the site works both locally and under the
`/gov-dashboard/` sub-path on GitHub Pages.
