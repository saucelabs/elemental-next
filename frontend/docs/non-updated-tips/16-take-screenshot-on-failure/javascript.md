---
title: "How To Take A Screenshot on Failure"
id: '16-take-screenshot-on-failure'
slug: "javascript/"
number: 16
publish_date: 2015-07-08
last_update: 
  date: 2023-03-09
tags:
  - "reporting"
  - "screenshot"
level: 2
category: "reporting"
language: javascript
---

# How To Take A Screenshot on Failure

## Intro

When your tests fail, which happens often, how do you capture the failure?

## Use Case

With browser tests it can often be challenging to track down the issue that caused a failure. By itself a failure message along with a stack trace is hardly enough to go on especially when you run the test again and it passes.

## A Solution

A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. Thankfully, it's a quick and easy thing to add to your tests.

Let's try an example.

## An Example

Let's start by importing our requisite libraries and wire up some setup and teardown methods.

```javascript
// filename: test/screenshot.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");
const path = require("path");

describe("Screenshot", function() {
  let driver;

  beforeEach(async function() { this.timeout(60000) driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    if (this.currentTest.state !== "passed") {
      const testName = this.currentTest.fullTitle().replace(/\s/g, "-");
      const fileName = path.join(__dirname, `screenshot_${testName}.jpg`);
      fs.writeFileSync(fileName, await driver.takeScreenshot(), "base64");
    }
    await driver.quit();
  });
// ...
```

In `afterEach` we check to see if the test was unsuccessful (e.g., `this.currenTest.state !== "passed"`). If not, then the test has either failed or errored and we capture a screenshot through the help of Selenium's `.takeScreenshot()` function. To save it to disk, we use `fs` and its `writeFileSync` function. It takes the full path to save to, the payload (e.g., the screenshot), and the encoding (which for the image is `"base64"`).

To make the filename unique we use the test name after cleaning it up (by replacing spaces with `-`). When this command executes it will save an image file (e.g., `screenshot_Screenshot-on-failure.jpg`) to the local system in the current working directory.

Now to wire up a test which will fail.

```javascript
// filename: test/screenshot.spec.js
// ...
  it("on failure", async function() {
    await driver.get("http://the-internet.herokuapp.com");
    assert(true === false);
  });
});
```

## Expected Behavior

When we save this file and run it (`mocha` from the command-line) here is what will happen:

+ Open the browser
+ Load the homepage of [the-internet](http://github.com/tourdedave/the-internet)
+ Fail on the assertion
+ Capture a screenshot in the current working directory
+ Close the browser

## Outro

In this tip, we have learned that you can capture the moment of testing failure with a screenshot and this is something that can be added to your tests.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
