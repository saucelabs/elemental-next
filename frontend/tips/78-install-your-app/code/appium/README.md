## How to run this project

### Install dependencies

`npm install`

### Set your Sauce Labs credentials

Set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables. Without them, the tests are skipped.

### Run tests

`npm test`

It uploads the demo apps to Sauce Labs storage (`upload-apps.js`), then runs the tests.
