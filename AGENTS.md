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
  _playwright.mdx       One partial per other tool (Playwright, WebdriverIO, Vibium), same idea
  _webdriverio.mdx
  _vibium.mdx
  _playwright-python.mdx  Playwright and Vibium have more than one language: `_<tool>-<language>.mdx` and
  _playwright-csharp.mdx  `code/<tool>-<language>/` (TypeScript and JavaScript use `_<tool>.mdx` and `code/<tool>/`)
  _playwright-java.mdx
  _vibium-python.mdx
  _vibium-java.mdx
  code/<lang>/          A runnable project per language or tool, with a README.md showing how to run it
```

- `DisplayTips` lazy-imports `_<value>.mdx` from the folder of the page for each language, so the `value` must match
  the partial file name. An entry can set a `tool` (e.g., `{label: 'TypeScript', value: 'playwright', tool:
  'Playwright'}`; the default is Selenium). When a tip has more than one tool, the page shows a row of tool tabs and,
  inside each, a row of language tabs. Selenide is a tool of its own: `{label: 'Selenide', value: 'selenide'}` shows
  as the Java tab of a Selenide tool tab (see `KNOWN_TOOLS` in `displayTips.js`).
- `TipCode` loads the file via `raw-loader`, relative to `frontend/tips/`. Line numbers referenced in the
  walkthrough prose must stay in sync with the code file.
- Target languages for Selenium: Python, Java, C#, JavaScript, Ruby. Serenity/JS examples exist for some tips and
  are kept. Selenide (Java) examples exist for some tips and show as their own tool.
- Other tools: Playwright (TypeScript, Python, C# and Java), WebdriverIO (TypeScript) and Vibium (JavaScript, Python
  and Java). They use Chrome. Mobile tips (Appium, Espresso, XCUITest, ...) are planned and will run on Sauce Labs.
- Per-language conventions in `code/`:
  - Python: `requirements.txt` + pytest test file (`pytest <file>.py`)
  - Java: Maven `pom.xml`, JUnit 5, `src/test/java/com/elemental/selenium/*Test.java` (`mvn test`)
  - C#: `csharp.csproj` + MSTest (`dotnet test`)
  - JavaScript: `package.json` + Mocha tests in `test/` (`npm test`)
  - Ruby: `Gemfile` + RSpec (`bundle exec rspec ...`)
  - Selenide: Maven project, like Java
  - Playwright: `package.json` with `@playwright/test`, tests in `tests/*.spec.ts`
    (`npx playwright install chromium`, then `npm test`)
  - Playwright Python (`code/playwright-python`): `requirements.txt` with `playwright`, `pytest-playwright` and
    pytest, tests use the plugin's `page` fixture (`playwright install chromium`, then `pytest <file>.py`)
  - Playwright C# (`code/playwright-csharp`): `playwright-csharp.csproj` with `Microsoft.Playwright.MSTest.v4` and
    MSTest, test classes extend `PageTest` (`dotnet build`, `pwsh bin/Debug/net10.0/playwright.ps1 install chromium`,
    then `dotnet test`)
  - Playwright Java (`code/playwright-java`): Maven `pom.xml` with `com.microsoft.playwright:playwright`, JUnit 5,
    `src/test/java/com/elemental/playwright/*Test.java`, test classes use `@UsePlaywright` to get a `Page` (`mvn test`,
    which downloads the browsers the first time)
  - WebdriverIO: `package.json` with the `@wdio/*` packages, `wdio.conf.ts`, `tsconfig.json`, tests in
    `test/*.e2e.ts` (`npm test`)
  - Vibium: `package.json` with `vibium` and Mocha, tests in `test/*.spec.js` (`npm test`, which runs
    `vibium install` first to download Chrome for Testing)
  - Vibium Python (`code/vibium-python`): `requirements.txt` with `vibium` and pytest, like Python (`pytest <file>.py`,
    which downloads Chrome for Testing the first time)
  - Vibium Java (`code/vibium-java`): Maven `pom.xml` with `com.vibium:vibium`, JUnit 5,
    `src/test/java/com/elemental/vibium/*Test.java` (`mvn test`, which downloads Chrome for Testing the first time)
- Most examples hit https://the-internet.herokuapp.com and rely on Selenium Manager for browser drivers.

### How the site is put together

- `main.mdx` is the only file Docusaurus turns into a page. In `docusaurus.config.js`, the docs plugin uses
  `include: ['**/*.mdx']` and `exclude: ['**/_*.mdx', 'cards/**/*']`, which is what keeps the `_<lang>.mdx` partials
  from becoming pages of their own.
- `sidebarItemsGenerator` is overridden to produce a single "More Tips" category with the tips in reverse order.
- A local `metadata` plugin (also in `docusaurus.config.js`) collects the frontmatter of every tip and exposes it as
  global data (`aggregateFrontMatter`). The `/tips` page (`src/pages/tips.js`) reads it to list, filter, and sort the
  tips, so the frontmatter fields (`number`, `level`, `category`, `tags`, `publish_date`) matter.
- The plugin also adds the date of the last update (`lastUpdatedAt`) and the entries of the `<DisplayTips>` block
  (`languages`, as `{tool, label}`) of each tip. The home page (`src/pages/index.js`) uses them to count the tips of
  each tool and to list the recently updated tips. It reads the entries with a regular expression, so keep them in
  the `{label: '...', value: '...', tool: '...'}` order.

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
- `accessibility.yml`: on PRs, builds and serves the site and runs `npm run test:a11y`
  (`frontend/scripts/accessibility.mjs`). It checks every page in the sitemap (one tag page only) with axe, WCAG 2.2
  A and AA rules, in light and dark mode (in parallel), using Selenium and Firefox. It checks every tool and language
  tab of a tip, and fails on any violation or on a page that crashes ("This page crashed"). On a PR that only changes
  files inside tip folders, it checks only those tip pages (`CHANGED_FILES`); any other change, the nightly run and
  manual runs check every page.
- `deploy-on-push-to-main.yml`: builds and deploys to GitHub Pages (`gh-pages` branch) on push to main.
- `<lang>-tips.yml` (`dotnet`, `java`, `javascript`, `python`, `ruby`, `selenide`, `serenity-js`, `playwright`,
  `playwright-python`, `playwright-csharp`, `playwright-java`, `webdriverio`, `vibium`, `vibium-python`, `vibium-java`):
  thin callers of the reusable `run-tips.yml`, which runs the examples on Ubuntu, Windows and macOS.
  - `.github/scripts/select-tip-dirs.sh` picks the directories: on PRs and pushes only the changed
    `tips/*/code/<lang>` directories; everything on the nightly schedule, manual runs, Renovate branches, and when
    the CI itself changes.
  - `.github/scripts/run-tips.sh` holds the per-language test command, retries each directory up to 3 times, and
    fails if any directory fails.
  - A new `code/<lang>` directory is picked up automatically, as long as it follows the conventions above.
  - A directory with an `expect-files` file passes only when its tests pass and the files listed in it exist (e.g.,
    the JUnit XML report of tip 57).
  - Tests that fail on purpose (e.g., tip 16, screenshot on failure) go in a directory with an `expect-failure`
    file listing the files the failure must create (e.g., `failshot_*.png`). The directory passes only when the
    tests fail and those files exist.
  - Tips that need a Selenium Grid (e.g., tip 52) have a `needs-grid` file. The run script downloads the Selenium
    Server jar (`GRID_VERSION` in `run-tips.sh`) and starts it in standalone mode on `http://localhost:4444` while
    their tests run.
  - Tips that run on Sauce Labs (e.g., tip 26) read `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` (repository secrets in
    CI) and skip themselves when they are not set.
- Renovate (`renovate.json`) keeps dependencies updated.

## Common commands

```bash
cd frontend
npm install
npm run start   # dev server at http://localhost:3000
npm run build   # production build into frontend/build (fails on broken links/MDX errors)
npm run serve   # serve the production build
npm run test:a11y  # accessibility check with axe (needs `npm run serve` running; BASE_URL to change the site)
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

## Gotchas

- `TipCode` uses `require(`!!raw-loader!@site/tips/${codePath}`)`, so webpack bundles every file under
  `frontend/tips/`. Local build output inside a tip (`node_modules`, `target`, `bin`, `obj`, ...) makes
  `npm run build` fail with `RangeError: Invalid string length`. Clean it with `git clean -fdX frontend/tips`.
- `TipCode` can't embed dotfiles (e.g., `.rspec`): webpack leaves them out of the bundle, and the page crashes at
  runtime with "Cannot find module" (the build still passes). Show their content in a fenced code block instead.
- The examples use Firefox. Locally, a new Firefox may fail to start ("Failed to read marionette port") while
  another Firefox is open; CI is the source of truth.
