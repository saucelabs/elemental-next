---
title: "How To Work With Hovers"
slug: "50-hovers"
number: 50
publish_date: 2019-08-09
tags:
  - "hover"
  - "hovers"
  - "action builder"
level: 1
category: "testing"
---

## The Problem

If you need to work with mouse hovers in your tests it may not be obvious how to do this with Selenium. And a quick search through the documentation can easily leave you befuddled forcing you to go spelunking through StackOverflow for the solution.

## A Solution

By leveraging Selenium's [Actions](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html) we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after.

Let's dig in with an example.

## An Example

Our example application is available [here](http://the-internet.herokuapp.com/hovers) on [the-internet](http://github.com/tourdedave/the-internet). It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile.

Let's write a test that will hover over the first avatar and make sure that this additional information appears.

First we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods.

```javascript
// filename: test/hovers.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Hovers", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's write our test.

```javascript
// filename: test/hovers.spec.js
// ...
  it("displays caption on hover", async function() {
    await driver.get("http://the-internet.herokuapp.com/hovers");
    const avatar = await driver.findElement(By.css(".figure"));
    await driver
      .actions({ bridge: true })
      .move({ origin: avatar })
      .perform();
    const caption = await driver.findElement(By.css(".figcaption"));
    assert(caption.isDisplayed());
  });
});
```

After loading the page we find the first avatar and store it in a variable (`avatar`). We then use the `.move` function and feed it the avatar variable (which triggers the hover).

We then check to see if the additional user information is displayed with `.isDisplayed` in our assertion.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Hover over the first avatar
+ Assert that the caption appeared on the page
+ Close the browser

## Outro

Happy Testing!

