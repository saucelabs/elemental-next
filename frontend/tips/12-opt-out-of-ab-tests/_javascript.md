## Example

Our example page is from [the-internet](http://github.com/tourdedave/the-internet) and can be seen [here](http://the-internet.herokuapp.com/abtest). There are three different versions of the page that are available. On each page the heading text will vary:

+ Control: `A/B Test Control`
+ Variation 1: `A/B Test Variation 1`
+ Opt-out: `No A/B Test`

Let's start by loading our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests.

```javascript
// filename: test/abOptOut.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");

describe("A/B opt-out", function() {
  let driver;

  beforeEach(async function() { this.timeout(60000) driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's wire up our first test to step through loading the split testing page and verifying that the text changes after we forge an opt-out cookie.

```javascript
// filename: test/abOptOut.spec.js
// ...
  it("with cookie after visiting page", async function() {
    await driver.get("http://the-internet.herokuapp.com/abtest");
    let headingText = await driver.findElement(By.css("h3")).getText();
    if (headingText.startsWith("A/B Test")) {
      await driver
        .manage()
        .addCookie({ name: "optimizelyOptOut", value: "true" });
      await driver.navigate().refresh();
      headingText = await driver.findElement(By.css("h3")).getText();
    }
    assert.equal(headingText, "No A/B Test");
  });
// ...
```

After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again.

We could also load the opt-out cookie before navigating to this page.

```javascript
// filename: test/abOptOut.spec.js
  it("with cookie before visiting page", async function() {
    await driver.get("http://the-internet.herokuapp.com");
    await driver
      .manage()
      .addCookie({ name: "optimizelyOptOut", value: "true" });
    await driver.get("http://the-internet.herokuapp.com/abtest");
    assert.equal(
      await driver.findElement(By.css("h3")).getText(),
      "No A/B Test"
    );
  });
// ...
```

Here we are navigating to the main page of the site first and then adding the opt-out cookie. After that we navigate to the split test page and then perform our check. Alternatively, we could opt out without forging a cookie. Instead we just need to append an opt out parameter to the URL.

```javascript
// filename: test/abOptOut.spec.js
// ...
  it("with opt out URL", async function() {
    await driver.get(
      "http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true"
    );
    await driver
      .switchTo()
      .alert()
      .dismiss();
    assert.equal(
      await driver.findElement(By.css("h3")).getText(),
      "No A/B Test"
    );
  });
});
```

By appending `?optimizely_opt_out=true` we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., `driver.switchTo().alert().dismiss()`) before performing our check.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen with either of the tests:

+ Open the browser
+ Opt-out of the split tests (either by cookie or appended URL)
+ Visit the split testing page
+ Grab the header text
+ Confirm that the session is opted out of the split test
+ Close the browser

## Summary

In this tip, we learned about split testing and learned about some standard opt-out mechanisms built into A/B testing platforms.

Happy Testing!