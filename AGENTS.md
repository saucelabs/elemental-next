# AGENTS.md

Guidance for AI agents (and humans) working in this repository.

## What this is

Elemental Selenium (https://elementalselenium.com) is a free learning resource: about 70 short "tips", each showing
how to automate one use case with Selenium (upload a file, work with frames, handle alerts, ...). The site is built
with Docusaurus. The aim is for every code sample shown on the site to be **real code that CI runs**, so readers
know it works.

## Layout

```
.github/workflows/      CI: site build/deploy + one workflow per language that runs every tips/*/code/<lang>
frontend/               Docusaurus site (all npm commands run here)
  docusaurus.config.js  Site config. Tips are the docs plugin content (path: tips)
  src/components/       DisplayTips (language tabs), TipCode (embeds a code file), DefaultAvatar, ...
  src/css/custom.css    Theme colors and global styles
  src/pages/            index, tips listing, community, resources, subscribe, ...
  tips/<n>-<slug>/      One directory per tip
  tips/images/          Shared images for tips
  static/               Static assets (img/cards/* are social cards)
netlify.toml            Netlify build config (base: frontend/)
TIP-TEMPLATE.MD         Template for writing a new tip
```

## Tip structure (the target pattern)

Tips 1 to 6 follow the full pattern. Use them as the reference (e.g., `frontend/tips/1-upload-a-file`):

```
tips/1-upload-a-file/
  main.mdx              Frontmatter (title, id, slug, number, level, tags, category, ...), the problem,
                        the solution, a <DisplayTips languages={[...]}/> block, a summary and the authors
  _python.mdx           One partial per language. It embeds the real file with
  _java.mdx               <TipCode codePath={"1-upload-a-file/code/java/..."} language={"java"}/>
  _csharp.mdx           and then walks through the code ("Lines X to Y ...") and explains how to run it.
  _javascript.mdx
  _ruby.mdx
  _selenide.mdx
  code/<lang>/          A runnable project per language, with a README.md showing how to run it
```

- `DisplayTips` lazy-imports `@site/tips/<frontmatter id>/_<value>.mdx` for each language, so the frontmatter `id`
  must match the directory name and the `value` must match the partial file name.
- `TipCode` loads the file via `raw-loader`, relative to `frontend/tips/`. Line numbers referenced in the
  walkthrough prose must stay in sync with the code file.
- Target languages: Python, Java, C#, JavaScript, Ruby. Selenide and Serenity/JS examples exist for some tips and
  are kept.
- Per-language conventions in `code/`:
  - Python: `requirements.txt` + pytest test file (`pytest <file>.py`)
  - Java: Maven `pom.xml`, JUnit 5, `src/test/java/com/elemental/selenium/*Test.java` (`mvn test`)
  - C#: `csharp.csproj` + MSTest (`dotnet test`)
  - JavaScript: `package.json` + Mocha tests in `test/` (`npm test`)
  - Ruby: `Gemfile` + RSpec (`bundle exec rspec ...`)
  - Selenide: Maven project, like Java
- Most examples hit https://the-internet.herokuapp.com and rely on Selenium Manager for browser drivers.

### How the site is put together

- `main.mdx` is the only file Docusaurus turns into a page. In `docusaurus.config.js`, the docs plugin uses
  `include: ['**/*.mdx']` and `exclude: ['**/_*.mdx', 'cards/**/*']`, which is what keeps the `_<lang>.mdx` partials
  from becoming pages of their own.
- `sidebarItemsGenerator` is overridden to produce a single "More Tips" category with the tips in reverse order.
- A local `metadata` plugin (also in `docusaurus.config.js`) collects the frontmatter of every tip and exposes it as
  global data (`aggregateFrontMatter`). The `/tips` page (`src/pages/tips.js`) reads it to list, filter, and sort the
  tips, so the frontmatter fields (`number`, `level`, `category`, `tags`, `publish_date`) matter.

### Adding a new tip

1. Create `frontend/tips/<number>-<kebab-title>/` with a `main.mdx` (see `TIP-TEMPLATE.MD` for the frontmatter).
2. Add the runnable code under `code/<lang>/`, following the conventions above. It must work on Ubuntu, Windows and
   macOS, since CI runs it on all three.
3. Add one `_<lang>.mdx` partial per language and list them in the `<DisplayTips>` block of `main.mdx`.
4. Every path in a `<TipCode codePath=...>` must exist under `frontend/tips/`, or the site build fails.

### Status of the tips

- Tips 1 to 6 use the full pattern (code in `code/`, run in CI).
- About 15 tips have partials for several languages, but the code is pasted inline in fenced blocks and is not run
  by CI.
- Most of the other tips are Ruby only, with inline code (copied from the original Elemental Selenium).
- A few tips are prose only (e.g., 18, 21, 28, 31, 36, 71).
- Reference for older multi-language examples: https://github.com/saucelabs-training/elemental-selenium-tips

## CI

- `test-build.yml`: builds the site on every PR.
- `deploy-on-push-to-main.yml`: builds and deploys to GitHub Pages (`gh-pages` branch) on push to main.
- `<lang>-tips.yml`: run nightly, and on PRs/pushes that touch `**/code/<lang>/**`. They find every
  `*/code/<lang>` directory and run its tests on Ubuntu, Windows and macOS (with Xvfb on Linux and retries).
  A new `code/<lang>` directory is picked up automatically, as long as it follows the conventions above.
- Renovate (`renovate.json`) keeps dependencies updated.

## Common commands

```bash
cd frontend
npm install
npm run start   # dev server at http://localhost:3000
npm run build   # production build into frontend/build (fails on broken links/MDX errors)
npm run serve   # serve the production build
npm run clear   # clear the Docusaurus cache (try it when the dev server shows stale content)
```

Run a single example from its `code/<lang>` directory (see that directory's README.md).

## Deployment

- Pushing to `main` deploys the site to GitHub Pages (the `gh-pages` branch), which serves
  https://elementalselenium.com.
- Netlify (`netlify.toml`) builds a deploy preview for each pull request.

## Conventions

- Commits follow Conventional Commits (e.g., `feat(tips): ...`, `fix(deps): ...`, `chore(ci): ...`) and
  are signed off (DCO), see CONTRIBUTING.md.
- Keep the code examples simple and readable: they are teaching material, not a framework.
- When you change a code file, update the line references in the matching `_<lang>.mdx` walkthrough.
