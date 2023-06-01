---
language: javascript
level: 1
hide_sidebar: true
publish_date: 2019-08-09
last_update:
  date: 2023-02-22
---

## A Solution

Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.

## Example

Our example application is available [here](http://the-internet.herokuapp.com/javascript_alerts) on [the-internet](http://github.com/tourdedave/the-internet). It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click `Ok` or `Cancel`).

First, we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods.

```javascript
// filename: test/js-alerts.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("JS Alerts", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's write our test.

```javascript
// filename: test/js-alerts.spec.js
// ...
  it("general use", async function() {
    await driver.get("http://the-internet.herokuapp.com/javascript_alerts");
    await driver.findElement(By.css("ul > li:nth-child(2) > button")).click();
    const popup = await driver.switchTo().alert();
    popup.accept();
    const result = await driver.findElement(By.id("result")).getText();
    assert(result == "You clicked: Ok");
  });
});
```

A quick glance at the page's markup shows that there are no unique IDs on the buttons. In order to click on the second button (to trigger the JavaScript confirmation dialog) we need a locator which targets the second item in the unordered list.

After we click the button to trigger the JavaScript Alert we use Selenium's `switchTo().alert()` to focus on the JavaScript pop-up and use `.accept()` to click `Ok` (if we wanted to click `Cancel` we would have used `.dismiss()`).

After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words `You clicked: Ok` are displayed on the page.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen:

+ Open the browser
+ Load the page
+ Click the second button on the page
+ JavaScript Confirmation Alert appears
+ Accept the JavaScript Confirmation Alert
+ Assert that the result on the page is what we expect
+ Close the browser

## Summary

We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's `switchTo().alert()`. After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
