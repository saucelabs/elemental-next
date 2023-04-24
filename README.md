# Welcome to Elemental Next!

In 2023, Team Elemental took Elemental Selenium, which had been untouched for many years, and open sourced the project to enable Selenium users and enthusiasts to contribute directly in opinionated, hands-on ways.

**Elemental Next** is what we are calling the Elemental Selenium revamp -- open sourced, renewed, and ready for community contributions!


## Table of Contents

- [How To Contribute](#how-to-contribute)
- [Running locally](#running-locally)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Local Development](#local-development)
  - [Building the Website](#building-the-website)
  - [Deploying the Website](#deploying-the-website)

# How to Contribute

There are many ways to contribute to the project -- from adding new tips tutorials, to helping with frontend or backend, or engaging with the community.

For full details on how to contribute, see [CONTRIBUTING.MD](https://github.com/saucelabs/elemental-next/blob/main/CONTRIBUTING.md).

# Running Locally

## Prerequisites

- [`git`](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) `version >= 16` or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed

## Installation

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

# Local Development

- Start the website locally:

  ```bash
  npm run start
  ```

  This command starts a local development server and opens a browser window or tab (http://localhost:3000). Most changes perform live updates to your server without having to refresh your browser.

## Building the Website

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

## Deploying the Website

- Deploy the website:

  ```bash
  npm run deploy -outDir
  ```

**We are currently deploying this website to GitHub Pages.**

The <code>docusaurus deploy</code> command helps us deploy our site from the source branch to the deployment branch <code>gh-pages</code> in one command: clone, build, and commit.

The <code>-outDir</code> flag ships only the <code>frontend</code> content folder to the <code>gh-pages</code>.
