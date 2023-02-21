---
title: "How To Right-click"
slug: "63-right-click"
number: 63
publish_date: 2019-08-09
tags:
  - "right-click"
  - "right click"
  - "context menu"
  - "action builder"
  - "context click"
level: 2
category: "testing"
---

## The Problem

Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?

## A Solution

By leveraging Selenium's [Actions](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html) we can issue a right-click command (a.k.a. a [`contextClick`](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html#contextClick)).

You could then select an option from the menu by traversing it with keyboard keys (if a system dialog) or through `findElement` (if a rendered element). It depends on how the application under test has implemented it.

Let's dig in with an example.

## An Example

Let's start by pulling in our requisite libraries, declare the test class, and wire up some simple setup and teardown methods.

```javascript
// filename: test/right-click.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Right click", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now we're ready to write our test.

We'll use an example from [the-internet](https://github.com/tourdedave/the-internet) that will trigger a JavaScript alert when when we right-click on a specific area of the page ([link](http://the-internet.herokuapp.com/context_menu)). It will say `You selected a context menu`. We'll grab this text and use it to assert that the menu was actually triggered.

```javascript
// filename: test/right-click.spec.js
// ...
  it("displays browser context menu", async function() {
    await driver.get("http://the-internet.herokuapp.com/context_menu");
    const menuArea = await driver.findElement(By.id("hot-spot"));
    await driver
      .actions({ bridge: true })
      .contextClick(menuArea)
      .perform();
    const alertText = await driver
      .switchTo()
      .alert()
      .getText();
    assert(alertText === "You selected a context menu");
  });
});
```

## Expected Behavior

When we save this file and run it (e.g., `mocha`) from the command-line) here is what will happen:

+ Open the browser and visit the page
+ Find and right-click the area which will render a custom context menu
+ JavaScript alert appears
+ Grab the text of the JavaScript alert
+ Assert that the text from the alert is what we expect
+ Close the browser

## Outro

Happy Testing!
