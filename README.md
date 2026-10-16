![build workflow](https://github.com/saucelabs/elemental-next/actions/workflows/test-build.yml/badge.svg)

# 🎉 Welcome to Elemental Selenium! 🚀

In 2023, Team Elemental took Elemental Selenium, which had been untouched for many years, and open sourced the project to enable Selenium users and enthusiasts to contribute directly in opinionated, hands-on ways.

🔥 **Elemental Selenium** 🔥 is now open sourced, renewed, and ready for community contributions!


## Table of Contents 📑

- [How To Contribute 🤝](#how-to-contribute-)
- [Running locally 🏃🏾‍♀️](#running-locally-)
  * [Prerequisites 🔍](#prerequisites-)
  * [Installation 💻](#installation-)
- [Local Development 🛠️](#local-development-)
  * [Building the Website 🏗️](#building-the-website-)
  * [Deploying the Website 🚀](#deploying-the-website-)
- [Testing 🧪](#testing)

# How to Contribute 🙌

There are many ways to contribute to the project -- from adding new tips tutorials, to helping with frontend or backend, or engaging with the community.

For full details on how to contribute, see [CONTRIBUTING.MD](https://github.com/saucelabs/elemental-next/blob/main/CONTRIBUTING.md). 👀

# Running Locally 🏃🏾‍♀️

## Prerequisites

- [`git`](https://git-scm.com/downloads) 📥
- [Node.js](https://nodejs.org/en/download/) `version >= 20` (24 LTS recommended) (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed 📈

## Installation 💻

- Clone this repo:

  ```bash
  git clone https://github.com/saucelabs/elemental-next
  ```

- Change directory to `frontend`:

  ```bash
  cd frontend
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

# Local Development 🛠️

- Start the website locally:

  ```bash
  npm run start
  ```

  This command starts a local development server and opens a browser window or tab (http://localhost:3000). Most changes perform live updates to your server without having to refresh your browser.

## Building the Website 🏗️

- Build the website:

  ```bash
  npm run build
  ```

  This command gathers the static content and places them in a `build` directory; which is compatible with most static content hosting services.

- Serve the website:

  ```bash
  npm run serve
  ```

  This command serves the site built by `npm run build` on your machine (http://localhost:3000).

## Deploying the Website 🚀

There's nothing to run by hand:

- Every push to `main` that changes the site builds it and deploys it to GitHub Pages (the `gh-pages` branch), which
  serves [elementalselenium.com](https://elementalselenium.com). See `.github/workflows/deploy-on-push-to-main.yml`.
- Every pull request gets a deploy preview on Netlify (see `netlify.toml`), linked from the pull request.

# Testing 🧪

Every tip shows code that actually runs. The code of each tip lives next to it, in `frontend/tips/<tip>/code/<language>/`
(e.g., `frontend/tips/1-upload-a-file/code/python`), and each of those directories is a small project with a
`README.md` that explains how to run it (e.g., `pytest upload.py` or `mvn test`).

CI runs these examples on Ubuntu, Windows, and macOS, with one workflow per language in `.github/workflows`:

- On pull requests and pushes, only the examples that changed run.
- Every example runs nightly, on manual runs, and when the CI itself or the dependencies change.

The site build is checked on every pull request (`test-build.yml`), and it fails on broken links or MDX errors.

For accessibility checks of the site itself, see the [Deque Axe guide](frontend/tests/deque/README.md).
