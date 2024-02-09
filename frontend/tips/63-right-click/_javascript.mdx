## Example

Let's start by pulling in our requisite libraries, declare the test class, and wire up some simple setup and teardown methods.

```javascript
// filename: test/right-click.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Right click", function() {
  let driver;

  beforeEach(async function() {
  this.timeout(60000)
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now we're ready to write our test.

We'll use an example from [the-internet](https://github.com/tourdedave/the-internet) that will trigger a JavaScript alert when when we right-click on a specific area of the page ([link](http://the-internet.herokuapp.com/context_menu)). It will say `You selected a context menu`. We'll grab this text and use it to assert that the menu was actually triggered.

```javascript
// filename: test/right-click.spec.js
// ...
  it("displays browser context menu", async function() {
    await driver.get("http://the-internet.herokuapp.com/context_menu");
    const menuArea = await driver.findElement(By.id("hot-spot"));
    await driver
      .actions({ bridge: true })
      .contextClick(menuArea)
      .perform();
    const alertText = await driver
      .switchTo()
      .alert()
      .getText();
    assert(alertText === "You selected a context menu");
  });
});
```

## Expected Behavior

When we save this file and run it (e.g., `mocha`) from the command-line) here is what will happen:

+ Open the browser and visit the page
+ Find and right-click the area which will render a custom context menu
+ JavaScript alert appears
+ Grab the text of the JavaScript alert
+ Assert that the text from the alert is what we expect
+ Close the browser

## Summary

To learn more about context menus, you can read [this write-up from the Tree House blog](http://blog.teamtreehouse.com/building-html5-context-menus).

Happy Testing!
