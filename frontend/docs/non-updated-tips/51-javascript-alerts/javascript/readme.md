---
title: "How To Work With JavaScript Alerts"
slug: "51-javascript-alerts"
number: 51
publish_date: 2019-08-09
tags:
  - "javascript"
  - "javascript alerts"
  - "javascript popups"
  - "javascript dialogs"
level: 1
category: "testing"
---

## The Problem

If your application triggers any JavaScript pop-ups (a.k.a. alerts, dialogs, etc.) then you need to know how to handle them in your Selenium tests.

## A Solution

Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.

Let's dig in with an example.

## An Example

Our example application is available [here](http://the-internet.herokuapp.com/javascript_alerts) on [the-internet](http://github.com/tourdedave/the-internet). It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click `Ok` or `Cancel`).

First, we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods.

```javascript
// filename: test/js-alerts.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("JS Alerts", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's write our test.

```javascript
// filename: test/js-alerts.spec.js
// ...
  it("general use", async function() {
    await driver.get("http://the-internet.herokuapp.com/javascript_alerts");
    await driver.findElement(By.css("ul > li:nth-child(2) > button")).click();
    const popup = await driver.switchTo().alert();
    popup.accept();
    const result = await driver.findElement(By.id("result")).getText();
    assert(result == "You clicked: Ok");
  });
});
```

A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we need a mildly clever locator which targets the second item in the unordered list.

After we click the button to trigger the JavaScript Alert we use Selenium's `switchTo().alert()` to focus on the JavaScript pop-up and use `.accept()` to click `Ok` (if we wanted to click `Cancel` we would have used `.dismiss()`).

After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words `You clicked: Ok` are displayed on the page.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen:

+ Open the browser
+ Load the page
+ Click the second button on the page
+ JavaScript Confirmation Alert appears
+ Accept the JavaScript Confirmation Alert
+ Assert that the result on the page is what we expect
+ Close the browser

## Outro

Happy Testing!
