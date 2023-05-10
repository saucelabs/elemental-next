---
title: '5: Select From A Dropdown'
id: '5-select-from-a-dropdown-javascript'
contentUrl: "docs/select-from-a-dropdown/5-select-from-a-dropdown-javascript"
sidebar_label: Javascript
text: "Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might seem straightforward just grab the list by its element and select an item within it, based on the text you want there's a bit more skill to it."
number: 5
hide_table_of_contents: true
publish_date: 2019-08-09
last_update:
  date: 2023-02-22
tags:
  - 'dropdown'
  - 'forms'
level: 1
category:
  - fundamentals
language: javascript
---

# How to Select from a Dropdown List

## Intro

Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might *seem* straightforward -- just grab the list by its element and select an item within it, based on the text you want -- there's a bit more skill to it.

Let's take a look at a couple of different approaches.

## Example 1

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

While this works, there is a more accessible way to do this.

## Example 2

```javascript
// filename: spec/dropdown.spec.js
// ...
  it("select the simpler way", async function() {
    await driver.get("http://the-internet.herokuapp.com/dropdown");
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

Similar to the first example, we are selecting a dropdown list option by its text. Instead of first finding the dropdown list, we will employ a more robust locator (e.g., XPath) to find an element within the dropdown list that contains our target text -- and click it.

We then determine what has been selected in the dropdown list by using one more powerful locator (e.g., a CSS selector). This time, looking to see which option has the `selected` attribute, and grabbing its text. We use this found text to assert that the correct item was chosen.

## Expected Behavior

If you save this file with either of these examples and run it (e.g., `mocha` from the command-line) here is what will happen:

+ Open the browser
+ Visit the example application
+ Find the dropdown list
+ Select the requested item from the dropdown list
+ Assert that the selected option is the one you expect
+ Close the browser

## Summary

In this tip, we've gone over using Selenium to select from a drop down using the drop down list, or XPath to find an element within the dropdown list.

Hopefully this will help you when selecting items from a dropdown list.

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
