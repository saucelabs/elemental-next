---
title: "How To Test For Disabled Elements"
slug: "40-disabled-element"
number: 40
publish_date: 2019-08-09
tags:
  - "dropdown list"
  - "dropdown lists"
  - "disabled element"
level: 2
category: "testing"
---

## The Problem

On occasion you may have the need to check if an element on a page is disabled or enabled. Sounds simple enough, but how do you do it? It's not a well known function of Selenium. So doing a trivial action like this can quickly become a pain.

## A Solution

If we look at [the API documentation for Selenium's Element class](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#isEnabled) we can see there is an available method called `isEnabled` that can help us accomplish what we want.

Let's take a look at how to use it.

## An Example

For this example we will use [a dropdown list](http://the-internet.herokuapp.com/dropdown) from [the-internet](http://github.com/tourdedave/the-internet). In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled.

First we'll require our dependent libraries, declare our test class, and wire up some setup and teardown methods for our test.

```javascript
// filename: test/disabledElement.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");

describe("Disabled Element", function() {
  let driver;

  beforeEach(async function() {
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

+ Open a browser
+ Visit the page
+ Grab all dropdown list elements
+ Assert that the first element in the list is not enabled
+ Assert that the second element in the list is enabled
+ Close the browser

## Outro

Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable.

Happy Testing!
