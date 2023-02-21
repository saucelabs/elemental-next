---
title: "How To Work with Multiple Windows"
slug: "4-work-with-multiple-windows"
number: 4
publish_date: 2019-08-09
tags:
  - "windows"
  - "multiple windows"
  - "new window"
level: 2
category: "testing"
---

## The Problem

Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them.

On the face of it, this is a pretty straightforward concept. But lurking within it is a small gotcha to watch out for that will bite you in some browsers and not others.

Let's step through a couple of examples to demonstrate.

## An Example

First we'll need to pull in our requisite libraries, declare our test class, and wire up some test setup and teardown methods.

```javascript
// filename: test/multiple-windows.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Multiple Windows", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's write a test that exercises new window functionality from an application. In this case, we'll be using [the new window example](http://the-internet.herokuapp.com/windows) found on [the-internet](https://github.com/tourdedave/the-internet).

```javascript
// filename: test/multiple-windows.spec.js
// ...
  it("non-deterministic switching", async function() {
    await driver.get("http://the-internet.herokuapp.com/windows");
    await driver.findElement(By.css(".example a")).click();
    const windowHandles = await driver.getAllWindowHandles();
    await driver.switchTo().window(windowHandles[0]);
    assert((await driver.getTitle()) !== "New Window");
    await driver.switchTo().window(windowHandles[windowHandles.length - 1]);
    assert((await driver.getTitle()) === "New Window");
  });
// ...
```

After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the last one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window.

While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return in the order opened, others _alphabetically_.

Here's a more resilient approach. One that will work across all browsers.

## A Better Example

```javascript
// filename: test/multiple-windows.spec.js
// ...
  it("browser agnostic switching", async function() {
    await driver.get("http://the-internet.herokuapp.com/windows");
    const windowHandlesBefore = await driver.getAllWindowHandles();
    await driver.findElement(By.css(".example a")).click();
    const windowHandlesAfter = await driver.getAllWindowHandles();
    const newWindow = windowHandlesAfter.find(
      handle => !windowHandlesBefore.includes(handle)
    );
    await driver.switchTo().window(windowHandlesBefore[0]);
    assert((await driver.getTitle()) !== "New Window");
    await driver.switchTo().window(newWindow);
    assert((await driver.getTitle()) === "New Window");
  });
});
```

After loading the page we store the window handles in a variable (e.g., `windowHandlesBefore`) and then proceed with clicking the new window link.

Now that we have two windows open we grab all of the window handles again (e.g., `windowHandlesAfter`) and search through them to find the new window handle (e.g., the handle that's in the new window handle collection but not the initial one). We store the result in another variable (e.g., `newWindow`) and then switch between the windows. Each time checking the page title to make sure the correct window is in focus.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find the window handle for the current window
+ Click a link that opens a new window
+ Find the window handle out of all available window handles
+ Switch between the windows
+ Assert that the correct window is in focus
+ Close the browser

## Outro

Hat tip to [Jim Evans](https://twitter.com/jimevansmusic) for providing the info for this tip.

Happy Testing!
