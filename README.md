# gov-dashboard

A static dashboard hosted on GitHub Pages.

## Project structure

```
.
├── index.html            # Entry page (required at repo root for Pages)
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── data/sample.json      # Static data consumed by the dashboard
├── .nojekyll             # Serve files as-is (skip Jekyll build)
├── .github/workflows/pages.yml  # Optional Actions-based deploy
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
