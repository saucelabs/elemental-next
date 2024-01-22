## Example

First we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods.

```javascript
// filename: test/keyboard-keys.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Keyboard Keys", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now we can write up our test.

Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that will display what key has been pressed ([link](http://the-internet.herokuapp.com/key_presses)). We'll use the result text that gets displayed to perform our assertion.

```javascript
// filename: test/keyboard-keys.spec.js
  it("send keys", async function() {
    await driver.get("http://the-internet.herokuapp.com/key_presses");
    await driver.findElement(By.id("target")).sendKeys(Key.SPACE);
    assert(
      (await driver.findElement(By.id("result")).getText()) ===
        "You entered: SPACE"
    );
  });
});
```

After visiting the page we find an element that's both visible and interactable with the keyboard (e.g., the input element on the page) and send the space key to it (e.g., `.sendKeys(Key.SPACE`). Then we grab the resulting text (e.g., `driver.findElement(By.id('result')).getText()`) and assert that it says what we expect (e.g., `'You entered: SPACE'`).

Alternatively, we can issue a key press without finding the element first by using the Action Builder.

```javascript
// filename: test/keyboard-keys.spec.js
// ...
  it("send keys", async function() {
		await driver.get("http://the-internet.herokuapp.com/key_presses");
    await driver
      .actions({ bridge: true })
      .sendKeys(Key.TAB)
      .perform();
    assert(
      (await driver.findElement(By.id("result")).getText()) ==
        "You entered: TAB"
    );
  });
});
```

__NOTE: In order for this approach to work in browsers other than Firefox, we need to specify `{bridge: true}` when calling `driver.actions` (e.g., `driver.actions({ bridge: true })`). You can see [the documentation](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html) for further details.__

## Expected Behavior

When we save this file and run it (e.g. `mocha` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find the element and send the space key to it
+ Find the result text on the page and check that it's what we expect
+ Send the tab key to the element that's currently in focus
+ Find the result text on the page and check that it's what we expect
+ Close the browser

## Summary

If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use.

Happy Testing!
