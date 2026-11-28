## How to run this project

You need a Mac with Xcode and [saucectl](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl).

### Set your Sauce Labs credentials

Set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

### Build the tests

```bash
xcodebuild CODE_SIGNING_ALLOWED=NO build-for-testing -project Keyboard.xcodeproj -scheme Keyboard \
  -sdk iphoneos -derivedDataPath build
```

### Run tests

`saucectl run`

It reads `.sauce/config.yml`, uploads Sauce Labs' demo app and the tests, and runs them on a Sauce Labs real device.
