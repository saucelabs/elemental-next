---
language: javascript
level: 2
hide_sidebar: true
publish_date: 2019-08-09
last_update:
  date: 2023-03-28
---

## A Solution

By leveraging Selenium's [Actions](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html) we can issue a right-click command (a.k.a. a [`contextClick`](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html#contextClick)).

You could then select an option from the menu by traversing it with keyboard keys (if a system dialog) or through `findElement` (if a rendered element). It depends on how the application under test has implemented it.

Let's try an example.

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

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
