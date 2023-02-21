---
title: "How To Test Checkboxes"
slug: "45-checkboxes"
number: 45
publish_date: 2019-08-09
tags:
  - "checkboxes"
  - "attribute"
  - "selected"
level: 1
category: "testing"
---

## The Problem

Checkboxes are an often used element in web applications. But how do you work with them in your Selenium tests? Intuitively you may reach for a method that has the word 'checked' in it -- like `.checked` or `.is_checked`. But this doesn't exist in Selenium. So how do you do it?

## A Solution

There are two ways to approach this -- by seeing if an element has a `checked` attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been _selected_.

Let's step through each approach to see their pros and cons.

## An Example

For reference, here is the markup from [the page we will be testing against](http://the-internet.herokuapp.com/checkboxes) (an example from [the-internet](https://github.com/tourdedave/the-internet)).

```html
<form>
  <input type="checkbox"> unchecked<br>
  <input type="checkbox" checked=""> checked
</form>
```

Let's kick things off by requiring our dependent libraries, declare our test class, and wire up some test setup and teardown methods.

```javascript
// filename: test/checkboxes.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");

describe("Checkboxes", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Before we dig into writing a test to verify the state of the page, let's walk through both checkbox approaches to see what Selenium gives us.

To do that we'll want to grab all of the checkboxes on the page and iterate through them. Once using an attribute lookup and again asking if the element is selected. For each we'll output the return values we get from Selenium.

```javascript
// filename: test/checkboxes.spec.js
// ...
  it("should list values for different approaches", async function() {
    await driver.get("http://the-internet.herokuapp.com/checkboxes");
    const checkboxes = await driver.findElements(
      By.css('input[type="checkbox"]')
    );

    console.log("With .getAttribute('checked')");
    for (let checkbox in checkboxes)
      console.log(await checkboxes[checkbox].getAttribute("checked"));

    console.log("\nWith .is_selected");
    for (let checkbox in checkboxes)
      console.log(await checkboxes[checkbox].isSelected());
  });
});
// ...
```

When we save our file and run it (e.g., `mocha` from the command-line), here is the output we'll see.

```sh
With .attribute('checked')
null
true

With .is_selected
false
true
```

With the attribute lookup, depending on the state of the checkbox, we receive either a `null` or a `true` boolean value. Whereas with `.isSelected` we get a boolean value either way.

Let's see what these approaches look like when put to use in our test.

```javascript
// filename: test/checkboxes.spec.js
// ...
  it("should list values for different approaches", async function() {
    // ...
    assert(checkboxes[checkboxes.length - 1].getAttribute("checked"));
    assert(checkboxes[checkboxes.length - 1].isSelected());
    assert(checkboxes[0].getAttribute("checked"));
    assert(checkboxes[0].isSelected());
  });
});
// ...
```

With either approach we can simply assert on the return value (even if it's a value of `null` -- since in JavaScript `null` evaluates to `false`) and have things work as expected.

## Expected Behavior

When we save and run the file (e.g., `mocha` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find all of the checkboxes on the page
+ Assert that the last checkbox (the one that is supposed to be checked on initial page load) is checked
+ Close the browser

## Outro

Attribute lookups are generally meant for pulling information out of the page for review. However in this case they lend themselves to seeing if a checkbox is checked. But there is a method which was built for this use case that is more readable and has a predictable set of return values. So `isSelected` should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it.

Happy Testing!
