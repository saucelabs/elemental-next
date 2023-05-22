![build workflow](https://github.com/saucelabs/elemental-next/actions/workflows/test-build.yml/badge.svg)
![cypress workflow](https://github.com/saucelabs/elemental-next/actions/workflows/cypress-tests.yml/badge.svg)

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
- [Node.js](https://nodejs.org/en/download/) `version >= 16` or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed 📈

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

  This command builds the site and serves it on your machine's host (http://localhost:3000).

## Deploying the Website 🚀

- Deploy the website:

  ```bash
  npm run deploy -outDir
  ```

🚨 **We are currently deploying this website to GitHub Pages.** 🚨

The <code>docusaurus deploy</code> command helps us deploy our site from the source branch to the deployment branch <code>gh-pages</code> in one command: clone, build, and commit.

The <code>-outDir</code> flag ships only the <code>frontend</code> content folder to the <code>gh-pages</code>.

# Testing 🧪

Testing is an essential part of ensuring the quality and reliability of Elemental Selenium, and is very important to us. We've got a great lineup of testing tools that make the testing process achievable. Check them out!


```
elemental-next
└── tests
    ├── cypress-tests
    ├── deque-tests
    └── selenium-tests
```


- **Cypress**: We use Cypress for end-to-end (E2E) testing, which allows us to simulate real user interactions and verify the functionality of the application. You can find the E2E testing files in the `tests/cypress-tests` folder.

- **Deque Axe**: To ensure our application is accessible to all users, we rely on Deque Axe for accessibility testing. Deque Axe helps us identify accessibility issues and ensures compliance with accessibility standards. The accessibility testing files are located in the `tests/deque-tests` folder.

- **Selenium WebDriver**: For automated testing of web applications, we utilize Selenium WebDriver. It provides a framework for interacting with web elements and performing automated tests. The Selenium testing files can be found in the `tests/selenium-tests` folder.
