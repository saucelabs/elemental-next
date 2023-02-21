---
title: "How To Visually Verify Your Locators"
slug: "65-highlight-elements"
number: 65
publish_date: 2019-08-09
tags:
  - "guest post"
  - "highlight"
  - "javascript"
  - "locators"
level: 2
category: "testing"
---

This is a pseudo guest post from Brian Goad. I've adapted a blog post of his with permission. You can see the original [here](http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/). Brian is a Test Engineer at [Digitalsmiths](http://www.digitalsmiths.com/). You can follow him on Twitter at [@bbbco](https://twitter.com/bbbco) and check out his testing blog [here](http://swdandruby.wordpress.com/).

## The Problem

It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?

## A Solution

By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want.

Let's take a look at an example.

## An Example

For our initial setup let's pull in our requisite libraries, declare our test class, and wire up some setup and teardown methods.

```javascript
// filename: test/highlight-elements.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Highlight elements", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's create a `highlight` helper function that will accept a found `element` from Selenium and a time to wait (e.g., `duration`) as arguments.

By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. We can also make this an optional argument by setting a default value for it (e.g., 3 seconds).

```javascript
// filename: test/highlight-elements.spec.js
// ...
  async function highlight(element, duration = 2000) {
    // store original style so it can be reset later
    const originalStyle = await element.getAttribute("style");

    // style element with callout (e.g., dashed red border)
    await driver.executeScript(
      "arguments[0].setAttribute(arguments[1], arguments[2])",
      element,
      "style",
      "border: 2px solid red; border-style: dashed;"
    );

    // keep element highlighted for the duration and then revert
    await driver.sleep(duration);
    await driver.executeScript(
      "arguments[0].setAttribute(arguments[1], arguments[2])",
      element,
      "style",
      originalStyle
    );
  }
// ...
```

There are three things going on here.

1. We store the style of the element so we can revert it back when we're done
2. We change the style of the element so it visually stands out (e.g., a red dashed border)
3. We revert the style of the element back after 3 seconds

We're accomplishing the style change through JavaScript's `setAttribute` function. And we're executing it with Selenium's `executeScript` command.

Now to use this in our test is simple, we just prepend a `findElement` command with a call to the `highlight` method.

```javascript
// filename: test/highlight-elements.spec.js
// ...
  it("highlights target element", async function() {
    await driver.get("http://the-internet.herokuapp.com/large");
    await highlight(await driver.findElement(By.id("sibling-2.3")));
  });
});
```

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen.

- Browser opens
- Load the page
- Find the element
- Change the styling of the element so it has a red dashed-line border
- Wait 3 seconds
- Revert the styling to remove the border
- Browser closes

## Outro

Alternatively, you could use the developer tools and inspect the locators in a test one at a time for debugging. This approach is more helpful if you want to have some kind of real time review of what's happening as your tests run.

Happy Testing!
