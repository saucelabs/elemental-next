## Example

First we'll need to pull in our requisite libraries, declare our test suite, and wire up some setup and teardown methods.

```javascript
// filename: test/growl.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Growl", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load [jQuery](http://jquery.com/), jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page.

```javascript
// filename: test/growl.spec.js
// ...
  it("runs and shows growl debugging output", async function() {
    await driver.get("http://the-internet.herokuapp.com");

    // check for jQuery on the page, add it if needed
    await driver.executeScript(
      `if (!window.jQuery) { var jquery = document.createElement('script'); jquery.type = 'text/javascript'; jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'; document.getElementsByTagName('head')[0].appendChild(jquery);}`
    );

    // use jQuery to add jquery-growl to the page
    await driver.executeScript(
      "$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js');"
    );

    // use jQuery to add jquery-growl styles to the page
    await driver.executeScript(
      `$('head').append("<link rel=stylesheet href=http://the-internet.herokuapp.com/css/jquery.growl.css type=text/css />");`
    );

    await driver.sleep(1000);

    await driver.executeScript("$.growl({ title: 'GET', message: '/' });");

    await driver.sleep(3000);
  });
});
```

In addition to loading the scripts and styles, we also need to have Selenium work at the right pace for our needs. So we add a slight delay (e.g., 1 second) before the call to jquery-growl to make sure it will be available. After that, we add a slightly longer delay (e.g., 3 seconds) so the rendered growl notification stays on the page long enough for viewing.

If we wanted to see color-coded notifications, then we could use one of the following:

```javascript
// filename: test/growl.spec.js
// ...
  it("runs and shows growl debugging output", async function() {
    // ...
    await driver.executeScript(
      "$.growl.error({ title: 'ERROR', message: 'your error message goes here' });"
    );
    await driver.executeScript(
      "$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });"
    );
    await driver.executeScript(
      "$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });"
    );

    await driver.sleep(3000);
  });
});
```

## Expected Behavior

When we save this file and run it (e.g., `mocha`) here is what will happen:

+ Browser opens
+ Load the page
+ Add jQuery, jQuery Growl, and jQuery Growl notifications to the page
+ Display a set of notification messages in the top-right corner of the page
+ Notification messages disappear
+ Browser closes

## Summary

In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test).

I'd like to give a big thanks to Jon Austen ([GitHub](https://github.com/djangofan)) for giving me the idea to use jQuery Growl with Selenium.

Happy Testing!
