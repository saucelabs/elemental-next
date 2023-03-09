---
title: "How To Opt-out of A/B Tests"
id: '12-opt-out-of-ab-tests-javascript'
slug: "javascript/"
number: 12
publish_date: 2019-08-09
last_update:
  date: 2023-03-09
tags:
  - "ab tests"
  - "optimizely"
  - "opt-out"
level: 2
category: "testing"
language: javascript
---

## Intro

Occasionally when running tests you may see unexpected behavior due to [A/B testing (a.k.a. split testing)](http://en.wikipedia.org/wiki/A/B_testing) of the application you're working with.

In order to keep your tests running without issue we need a clean way to opt-out of these split tests.

## Use Case

Split testing is a straightforward way to experiment with an application's features to see which changes lead to higher user engagement.

A simple example would be testing variations of an e-mail landing page to see if more people sign up. In such a split test there would be the control (how the application looks and behaves now) and variants (e.g., 2 or 3 changes that could include changing text or images on the page, element positioning, color of the submit button, etc).

Once the variants are configured, they are put into rotation, and the experiment starts. During this experiment each user will see a different version of the feature and their engagement with it will be tracked. Split tests live for the length of the experiment or until a winner is found (e.g., tracking indicates that a variant converted higher than the control). If no winner is found, new variants may be created and another experiment tried. If a winner is found, then the winning variant becomes the new control and the feature gets updated accordingly.

## A Solution

Thankfully there are some standard opt-out mechanisms built into A/B testing platforms. They tend to come in the form of an appended URL or forging a cookie. Let's dig in with an example of each approach with a popular A/B testing platform, [Optimizely](https://www.optimizely.com/).

## An Example

Our example page is from [the-internet](http://github.com/tourdedave/the-internet) and can be seen [here](http://the-internet.herokuapp.com/abtest). There are three different versions of the page that are available. On each page the heading text will vary:

+ Control: `A/B Test Control`
+ Variation 1: `A/B Test Variation 1`
+ Opt-out: `No A/B Test`

Let's start by loading our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests.
==**`!! Deprecated code needs replacing !!`**==

```javascript
// filename: test/abOptOut.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");

describe("A/B opt-out", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's wire up our first test to step through loading the split testing page and verifying that the text changes after we forge an opt-out cookie.
==**`!! Deprecated code needs replacing !!`**==

```javascript
// filename: test/abOptOut.spec.js
// ...
  it("with cookie after visiting page", async function() {
    await driver.get("http://the-internet.herokuapp.com/abtest");
    let headingText = await driver.findElement(By.css("h3")).getText();
    if (headingText.startsWith("A/B Test")) {
      await driver
        .manage()
        .addCookie({ name: "optimizelyOptOut", value: "true" });
      await driver.navigate().refresh();
      headingText = await driver.findElement(By.css("h3")).getText();
    }
    assert.equal(headingText, "No A/B Test");
  });
// ...
```

After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again.

We could also load the opt-out cookie before navigating to this page.
==**`!! Deprecated code needs replacing !!`**==

```javascript
// filename: test/abOptOut.spec.js
  it("with cookie before visiting page", async function() {
    await driver.get("http://the-internet.herokuapp.com");
    await driver
      .manage()
      .addCookie({ name: "optimizelyOptOut", value: "true" });
    await driver.get("http://the-internet.herokuapp.com/abtest");
    assert.equal(
      await driver.findElement(By.css("h3")).getText(),
      "No A/B Test"
    );
  });
// ...
```

Here we are navigating to the main page of the site first and then adding the opt-out cookie. After that we navigate to the split test page and then perform our check. Alternatively, we could opt out without forging a cookie. Instead we just need to append an opt out parameter to the URL.

```javascript
// filename: test/abOptOut.spec.js
// ...
  it("with opt out URL", async function() {
    await driver.get(
      "http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true"
    );
    await driver
      .switchTo()
      .alert()
      .dismiss();
    assert.equal(
      await driver.findElement(By.css("h3")).getText(),
      "No A/B Test"
    );
  });
});
```
  
By appending `?optimizely_opt_out=true` we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., `driver.switchTo().alert().dismiss()`) before performing our check.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen with either of the tests:

+ Open the browser
+ Opt-out of the split tests (either by cookie or appended URL)
+ Visit the split testing page
+ Grab the header text
+ Confirm that the session is opted out of the split test
+ Close the browser

## Summary

In this tip, we learned about split testing and learned about some standard opt-out mechanisms built into A/B testing platforms.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
