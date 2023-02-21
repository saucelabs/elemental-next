---
title: "How To Select From a Dropdown List"
slug: "5-select-from-a-dropdown"
number: 5
publish_date: 2019-08-09
tags:
  - "dropdown"
  - "forms"
level: 1
category: "testing"
---

## The Problem

Selecting from a dropdown list *seems* like one of those simple things. Just grab the list by it's element and select an item within it based on the text you want.

While it sounds pretty straightforward, there is a bit more finesse to it.

Let's take a look at a couple of different approaches.

## An Example

First let's pull in our requisite libraries, declare the test class, and wire up some simple setup and teardown methods.

```javascript
// filename: spec/dropdown.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");

describe("Dropdown", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now lets' wire up our test.

```javascript
// filename: spec/dropdown.spec.js
// ...
  it("select the hard way", async function() {
    await driver.get("http://the-internet.herokuapp.com/dropdown");
    const options = await driver.findElements(By.css("#dropdown option"));
    let selection;
    for (const option in options) {
      if ((await options[option].getText()) === "Option 1") {
        await options[option].click();
        break;
      }
    }
    for (const option in options) {
      if (await options[option].isSelected()) {
        selection = await options[option].getText();
        break;
      }
    }
    assert(selection === "Option 1");
  });
// ...
```

After visiting [the example application](http://the-internet.herokuapp.com/dropdown) we find the dropdown list by its ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each `option`) with `findElements`.

Grabbing all of the options returns a collection that we iterate over and when the text matches what we want it will click on it.

We finish the test by performing a check to see that our selection was made correctly. This is done by looping over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and then making an assertion against it.

While this works, there is a simpler way to do this.

## Another Example

```javascript
// filename: spec/dropdown.spec.js
// ...
  it("select the simpler way", async function() {
    await driver.get("http://localhost:9292/dropdown");
    await driver
      .findElement(
        By.xpath("//*[@id='dropdown']/option[contains(text(),'Option 1')]")
      )
      .click();
    const selection = await driver
      .findElement(By.css('#dropdown option[selected="selected"]'))
      .getText();
    assert(selection === "Option 1");
  });
});
```

Similar to the first example, we are selecting a dropdown list option by its text. But instead of first finding the dropdown list, we instead employ a more robust locator (e.g., XPath) to find an element within the dropdown list that contains our target text -- and click it.

We then determine what has been selected in the dropdown list by using one more powerful locator (e.g., a CSS selector). This time, looking to see which option has the `selected` attribute, and grabbing its text. We use this found text to assert that the correct item was chosen.

## Expected Behavior

If you save this file with either of these examples and run it (e.g., `mocha` from the command-line) here is what will happen:

+ Open the browser
+ Visit the example application
+ Find the dropdown list
+ Select the requested item from the dropdown list
+ Assert that the selected option is the one you expect
+ Close the browser

## Outro

Hopefully this tip will help you breeze through selecting items from a dropdown list.

Happy Testing!
