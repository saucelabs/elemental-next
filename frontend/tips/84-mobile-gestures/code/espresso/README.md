## How to run this project

You need the Android SDK (set `ANDROID_HOME`) and [saucectl](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl).

### Set your Sauce Labs credentials

Set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

### Build the tests and the app under test

`./gradlew appUnderTest`

It builds the tests, downloads Sauce Labs' demo app, and signs it with the same key as the tests.

### Run tests

`saucectl run`

It reads `.sauce/config.yml`, uploads the app and the tests, and runs them on a Sauce Labs real device.
