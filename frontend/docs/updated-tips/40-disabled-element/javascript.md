---
title: "40: Disabled Element"
id: "40-disabled-element-javascript"
contentUrl: "docs/disabled-element/40-disabled-element-javascript"
sidebar_label: Javascript
text: "On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain."
number: 40
publish_date: 2019-08-09
last_update:
  date: 2023-03-27
tags:
  - dropdown list
  - dropdown lists
  - disabled element
level: 2
category:
  - remote
  - troubleshooting
language: javascript
---

# How to Test For Disabled Elements

## Intro

On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.

## A Solution

If we look at [the API documentation for Selenium's Element class](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#isEnabled) we can see there is an available method called `isEnabled` that can help us accomplish what we want.

Let's take a look at how to use it.

## Example

For this example we will use [a dropdown list](http://the-internet.herokuapp.com/dropdown) from [the-internet](http://github.com/tourdedave/the-internet). In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled.

First we'll require our dependent libraries, declare our test class, and wire up some setup and teardown methods for our test.

```javascript
// filename: test/disabledElement.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");

describe("Disabled Element", function() {
  let driver;

  beforeEach(async function() {
    this.timeout(60000);
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's wire up our test.

```javascript
// filename: test/disabledElement.spec.js
// ...
  it("dropdown list should contain disabled and enabled elements", async function() {
    driver.get("http://the-internet.herokuapp.com/dropdown");
    const dropdownList = await driver.findElements(By.css("option"));
    assert((await dropdownList[0].isEnabled()) === false);
  });
});
```

After loading the page, we find all of the elements that have an option tag (which are all of the items in the dropdown list). This returns a list of elements, so we use the first one (which is the one with the text of `'Please select an option'`).

Once we have the element we want we see if it's enabled (with `.isEnabled`) and assert based on the response.

Also, since we grabbed all of the dropdown list options, we can easily test the opposite case by checking the second or third option in the list.

```javascript
// filename: test/disabledElement.spec.js
// ...
  it("dropdown list should contain disabled and enabled elements", async function() {
		// ...
    assert(await dropdownList[1].isEnabled());
  });
});
```

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen:

- Open a browser
- Visit the page
- Grab all dropdown list elements
- Assert that the first element in the list is not enabled
- Assert that the second element in the list is enabled
- Close the browser

## Summary

Hopefully this tip has helped make the task of seeing whether or not an element is enabled or disabled more approachable.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
