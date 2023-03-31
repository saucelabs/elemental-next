---
title: Javascript
id: 53-growl-javascript
slug: javascript/
number: 53
publish_date: 2019-08-09
last_update:
  date: 2023-03-28
tags:
  - jquery
  - growl
  - growl notifications
  - jquery-growl
level: 2
category: 
  - troubleshooting
language: javascript
---

# How to Add Growl Notifications to Your Tests

## Intro

Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece -- all for the sake of trying to track down a transient issue.

## A Solution

By leveraging something like [jQuery Growl](http://ksylvest.github.io/jquery-growl/) you can output non-interactive debugging statements directly to the page you're testing.

With Growl way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs

Let's step through an example of how to set this up.

## Example

First we'll need to pull in our requisite libraries, declare our test suite, and wire up some setup and teardown methods.

```javascript
// filename: test/growl.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Growl", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load [jQuery](http://jquery.com/), jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page.

```javascript
// filename: test/growl.spec.js
// ...
  it("runs and shows growl debugging output", async function() {
    await driver.get("http://the-internet.herokuapp.com");

    // check for jQuery on the page, add it if needed
    await driver.executeScript(
      `if (!window.jQuery) { var jquery = document.createElement('script'); jquery.type = 'text/javascript'; jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'; document.getElementsByTagName('head')[0].appendChild(jquery);}`
    );

    // use jQuery to add jquery-growl to the page
    await driver.executeScript(
      "$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js');"
    );

    // use jQuery to add jquery-growl styles to the page
    await driver.executeScript(
      `$('head').append("<link rel=stylesheet href=http://the-internet.herokuapp.com/css/jquery.growl.css type=text/css />");`
    );

    await driver.sleep(1000);

    await driver.executeScript("$.growl({ title: 'GET', message: '/' });");

    await driver.sleep(3000);
  });
});
```

In addition to loading the scripts and styles, we also need to have Selenium work at the right pace for our needs. So we add a slight delay (e.g., 1 second) before the call to jquery-growl to make sure it will be available. After that, we add a slightly longer delay (e.g., 3 seconds) so the rendered growl notification stays on the page long enough for viewing.

If we wanted to see color-coded notifications, then we could use one of the following:

```javascript
// filename: test/growl.spec.js
// ...
  it("runs and shows growl debugging output", async function() {
    // ...
    await driver.executeScript(
      "$.growl.error({ title: 'ERROR', message: 'your error message goes here' });"
    );
    await driver.executeScript(
      "$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });"
    );
    await driver.executeScript(
      "$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });"
    );

    await driver.sleep(3000);
  });
});
```

## Expected Behavior

When we save this file and run it (e.g., `mocha`) here is what will happen:

+ Browser opens
+ Load the page
+ Add jQuery, jQuery Growl, and jQuery Growl notifications to the page
+ Display a set of notification messages in the top-right corner of the page
+ Notification messages disappear
+ Browser closes

## Summary

In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test).

I'd like to give a big thanks to Jon Austen ([GitHub](https://github.com/djangofan)) for giving me the idea to use jQuery Growl with Selenium.

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
