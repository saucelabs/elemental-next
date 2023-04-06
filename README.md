# elemental-next

Elemental Next is Elemental Selenium open sourced and renewed.
In 2023 Team Elemental open sourced the project to enable you and the whole community of Selenium enthusiasts to contribute in an opinionated way.

## Running locally

**Table of Contents**

- [elemental-next](#elemental-next)
  - [Running locally](#running-locally)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
    - [Building the Website](#building-the-website)
    - [Deploying the Website](#deploying-the-website)

## Prerequisites

- [`git`](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) `version >= 16` or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed

## Installation

- Clone this repo:

  ```bash
  git clone https://github.com/saucelabs/sauce-docs.git
  ```

- Change directory to `frontend`:

  ```bash
  cd frontend
  ```

- Install the dependencies:

  ```
  npm install
  ```

## Local Development

- Start the website locally

  ```
  npm run start
  ```

  This command starts a local development server and open up a browser window (http://localhost:3000). Most changes perform live updates to your server without having to restart.

### Building the Website

- Build the website:

  ```
  npm run build
  ```

  This command gathers the static content and places them in a `build` directory; which is compatible with most static content hosting services.

- Serve the website:

  ```
  npm run serve
  ```

  This command builds the site and serves it on your machine's host (http://localhost:3000).

### Deploying the Website

- Deploy the website:

  ```
  npm run deploy -outDir
  ```

  We are cutenly deploying this websited to GitHub Pages. <code>docusaurus deploy</code> command that helps us deploy our site from the source branch to the deployment branch <code>gh-pages</code> in one command: clone, build, and commit.
  <code>-outDir</code> flag ships only the <code>frontend</code> content folder to the <code>gh-pages</code>.
