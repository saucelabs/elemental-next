# 🚀 Cypress Test Suite

Welcome to the 🔍 test suite for the Elemental Next project, using the 🌲 Cypress testing framework! Our mission is to make sure that all of the key features of the project are working like a charm. 💪

## 📜 Prerequisites

Before you can run these tests, you'll need to have [Node.js](https://nodejs.org/en/) installed on your machine. If you're not sure if you have it, don't worry! 🤔 Just follow the instructions on the Node.js website to download and install it.

## 🚀 Getting Started

To get started, clone this repository to your local machine:

```
git clone https://github.com/saucelabs/elemental-next
```

Once you've cloned the repository, navigate to the Tests folder and install the dependencies:

```
cd cypress
npm install
```

## 🏃🏽‍♀️ Running the Tests

To run the test suite, open the Cypress Test Runner:

```
npx cypress open
```

This will launch the Test Runner, where you can select which tests to run. To run all of the tests, click the "Run all specs" button. To run a specific test file, click on that file in the Test Runner window.

## 📄 Test File Structure

Each test file should be stored in the `cypress/e2e` directory. The name of the file should note what the test is for and end with a `.cy.js` extension. For example, `brokenlinks-landing.cy.js` will test for broken links on the landing page, and `signup.cy.js` will test that the signup feature works correctly.

```
.
├── Elemental Next
└── Tests/
    └── cypress-tests/
        └── cypress/
            └── e2e/
                ├── brokenlinks-landing.cy.js
                └── signup.cy.js

```

## 🎉 Test Results

Cypress will generate a report for each test run that includes information about the tests that passed and failed. You can also generate screenshots and videos of each test run if you have those features enabled in your configuration.

## 🤝 Contributing

If you notice any issues with the tests or have ideas for how to improve them, we'd love to hear from you! 🙌 Feel free to open a pull request or submit an issue. Before submitting a contribution, make sure to read our [CONTRIBUTING](https://github.com/saucelabs/elemental-next/blob/main/CONTRIBUTING.md) guidelines.

## 📜 License

This project is licensed under the [MIT license](https://github.com/saucelabs/elemental-next/blob/main/LICENSE).