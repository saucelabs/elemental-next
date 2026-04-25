# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository shape

Two things live here:

1. **A Docusaurus 3 site** in `frontend/` that renders "tips" about Selenium test automation.
2. **Per-language, runnable example projects** nested under each tip at `frontend/tips/<tip>/code/<language>/` (Java/Selenide use Maven, others are Python/Ruby/JS/C# scripts). These are not built by the website — they are imported as raw text.

All `npm` commands must be run from `frontend/` (the root has no `package.json`).

## Common commands

```bash
cd frontend
npm install          # Node >= 18 required
npm run start        # dev server on http://localhost:3000
npm run build        # static build into frontend/build
npm run serve        # serve the built site
npm run clear        # clear Docusaurus cache
```

For a specific language's example code, `cd` into its folder (e.g. `frontend/tips/1-upload-a-file/code/java`) and run `mvn test` (Java 11 for `code/java`, Java 17 for `code/selenide`). There is no root-level test runner — CI finds every `**/code/<lang>/` directory and iterates.

## How a tip is structured

Each tip is one folder under `frontend/tips/` named `<number>-<kebab-title>` (e.g. `1-upload-a-file`). The folder contains:

- `main.mdx` — the only file Docusaurus turns into a page. Frontmatter (title, id, slug, level, tags, category, publish_date, image) drives routing and the tips listing.
- `_<language>.mdx` partials (e.g. `_java.mdx`, `_python.mdx`). These are **imported** by `main.mdx` via the `<DisplayTips>` component and tab-rendered; they are not standalone pages.
- `code/<language>/...` — real, executable source (`UploadTest.java`, `upload.py`, etc.). Partials reference these files via `<TipCode codePath="<tip>/code/<lang>/path/to/file" language="..."/>`, which uses `raw-loader` to embed the file verbatim in a code block.

In `docusaurus.config.js`:
- `include: ['**/*.mdx']` + `exclude: ['**/_*.mdx', 'cards/**/*']` is what makes underscore-prefixed partials non-pages.
- `sidebarItemsGenerator` is overridden to produce a single "More Tips" category with items in reverse order.
- A local `metadata` plugin walks every doc's frontmatter and exposes `aggregateFrontMatter` as global data — the `/tips` listing page (`src/pages/tips.js`) reads this to filter/sort.

**Practical consequence:** adding a new tip means creating the folder, writing `main.mdx`, adding at least one `_<lang>.mdx` partial, and putting runnable code under `code/<lang>/`. If you reference code via `<TipCode>`, the path must exist under `frontend/tips/` or the site will fail to build. See `TIP-TEMPLATE.MD` at the repo root for the canonical frontmatter shape.

## CI layout

`.github/workflows/` has one file per language (`java-tips.yml`, `selenide-tips.yml`, `python-tips.yml`, `ruby-tips.yml`, `javascript-tips.yml`, `dotnet-tips.yml`, `serenity-js-tips.yml`) plus `test-build.yml` for the site. Each language workflow:

- Triggers on schedule (nightly) and on PR/push touching `**/code/<lang>/**`.
- Runs a matrix of `ubuntu-latest / windows-latest / macos-latest` — if you add code, it must work on all three.
- Finds every `**/code/<lang>/` directory and runs the language's test command inside each.

`test-build.yml` only verifies `npm run build` succeeds; it does not run tip tests.

## Deployment

`npm run deploy` pushes `frontend/build` to the `gh-pages` branch; the live site is https://elementalselenium.com. `netlify.toml` exists but GitHub Pages is the active target.
