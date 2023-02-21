---
title: "How To Work with Frames"
slug: "3-work-with-frames"
number: 3
publish_date: 2015-08-25
tags:
  - "frames"
level: 1
category: "testing"
---

## The Problem

On occasion you'll run into a relic of the front-end world -- frames. And when writing a test against them, you can easily get tripped up if you're not paying attention.

## A Solution

Rather than gnash your teeth when authoring your tests, you can easily work with the elements in a frame by telling Selenium to _switch_ to that frame first. Then the rest of your test should be business as usual.

Let's dig in with some examples.

## An Example

We'll first need to pull in our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests.

```javascript
// filename: test/frames.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");

describe("Frame Test", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now onto our test. In it we'll step through [an example of nested frames](http://the-internet.herokuapp.com/nested_frames) which can be found on [the-internet](https://github.com/tourdedave/the-internet).

```javascript
// filename: test/frames.spec.js
  it("nested_frames", async function() {
    await driver.get("http://the-internet.herokuapp.com/nested_frames");
    await driver
      .switchTo()
      .frame(await driver.findElement(By.name("frame-top")));
    await driver
      .switchTo()
      .frame(await driver.findElement(By.name("frame-middle")));
    let content = await driver.findElement(By.id("content")).getText();
    assert.equal(content, "MIDDLE");
  });
// ...
```

With Selenium's `.switchTo().frame` method we can easily switch to the frame we want. It accepts either a numbered index or WebElement (e.g., the result of a `findElement`).

In order to get the text of the middle frame (e.g., a frame nested within another frame), we first need to switch to the parent frame (e.g., the top frame) _and then_ switch to the child frame (e.g., the middle frame). Once we've done that we're able to find the element we need, grab its text, and assert that it's what we expect.

While this example helps illustrate the point of frame switching, it's not very practical.

## A More Practical Example

Here is a more likely example you'll run into -- working with a WYSIWYG (What You See Is What You Get) Editor like [TinyMCE](http://www.tinymce.com/). You can see the page we're testing [here](http://the-internet.herokuapp.com/tinymce).

```javascript
// filename: test/frames.spec.js
// ...
  it("iframes", async function() {
    await driver.get("http://the-internet.herokuapp.com/tinymce");
    await driver.switchTo().frame(await driver.findElement(By.id("mce_0_ifr")));
    const editor = await driver.findElement(By.id("tinymce"));
    let beforeText = await editor.getText();
    await editor.clear();
    await editor.sendKeys("Hello World!");
    let afterText = await editor.getText();
    assert.notEqual(afterText, beforeText);
  });
});
```

Once the page loads we switch into the frame that contains TinyMCE and...

+ grab the original text and store it
+ clear and input new text
+ grab the new text value
+ assert that the original and new texts are not the same

Keep in mind that if we need to access a part of the page outside of the frame we are currently in we'll need to switch to it. Thankfully Selenium has method that enables us to quickly jump back to the top level of the page -- `switchTo.defaultContent()`.

Here is what that looks like in practice.

```javascript
// filename: test/frames.spec.js
  it("iframes", async function() {
    // ...
    await driver.switchTo().defaultContent();
    let txt = await driver.findElement(By.css("h3")).getText();
    assert.equal(txt, "An iFrame containing the TinyMCE WYSIWYG Editor");
  });
});
```

## Expected Behavior

If we save the file and run it (e.g., `mocha` from the command-line) here is what will happen:

<u>Example 1</u>

+ Open the browser
+ Visit the page
+ Switch to the nested frame
+ Grab the text from the frame and assert that Selenium is in the correct place
+ Close the browser

<u>Example 2</u>

+ Open the browser
+ Visit the page
+ Switch to the frame that contains the TinyMCE editor
+ Grab and clear the text in the editor
+ Input and grab new text in the edtitor
+ Assert that the original and new text entries don't match
+ Switch to the top level of the page
+ Grab the text from the top of the page and assert that it's not empty
+ Close the browser

## Outro

Now you're ready to handily defeat frames when they cross your path.

Happy Testing!
