---
title: 'Javascript'
id: '4-work-with-multiple-windows-javascript'
slug: javascript/
number: 4
publish_date: 2019-08-09
last_update: 
  date: 2023-02-22
tags:
  - 'windows'
  - 'multiple windows'
  - 'new window'
level: 2
category: 
  - remote
language: javascript
---

# Work With Multiple Windows

## Intro

This tip will explain how to work with multiple windows in Selenium and switch between them. 

Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them.

On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for that you may find in some browsers and not others.

Let's step through a couple of examples to demonstrate.

## Example 1

First we'll need to pull in our requisite libraries, declare our test class, and wire up some test setup and teardown methods.

```javascript
// filename: test/multiple-windows.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Multiple Windows", function() {
  let driver;

  beforeEach(async function() {
    this.timeout(60000)
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

While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return in the order opened, others alphabetically.

Here's a more resilient approach that will work across all browsers.

## Example 2

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

Now that we have two windows open we grab all of the window handles again (e.g., `windowHandlesAfter`) and search through them to find the new window handle (e.g., the handle that's in the new window handle collection but not the initial one). We store the result in another variable (e.g., `newWindow`) and then switch between the windows each time checking the page title to make sure the correct window is in focus.

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

## Summary

I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium. 

For more information about switching windows (and tabs) visit the official Selenium HQ [documentation page] (https://www.selenium.dev/documentation/webdriver/interactions/windows/). 

Happy Testing! 

## About The Author

Thanks to [Jim Evans](https://twitter.com/jimevansmusic) for providing the info for this tip.
