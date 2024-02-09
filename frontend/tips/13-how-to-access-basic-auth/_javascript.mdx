## Example 1

Let's start by requiring our requisite libraries, declare our test class, and wire up some test setup and teardown methods.

```javascript
// filename: test/basic-auth.spec.js
// ...
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Basic Auth", function() {
  let driver;

  beforeEach(async function() {
    this.timeout(60000);
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now let's add our test code to the script.

```javascript
// filename: test/basic-auth-1.spec.js
// ...
  it("should visit basic auth secured page directly", async function() {
    await driver.get(
      "http://admin:admin@the-internet.herokuapp.com/basic_auth"
    );
    const page_message = await driver
      .findElement(By.css(".example p"))
      .getText();
    assert(
      page_message === "Congratulations! You must have the proper credentials."
    );
  });
});
```

In the test we're loading the page by passing in the username and password in the front of the URL (e.g., `http://admin:admin@`). Once it loads we grab text from the page to make sure we ended up in the right place.

## Example 2

Alternatively, we could have accessed this page before the test (e.g., as part of the test setup). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth.

Here's what that script would look like.

```javascript
// filename: test/basic-auth.spec-2.js
// ...
  beforeEach(async function() {
    this.timeout(60000);
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(
      "http://admin:admin@the-internet.herokuapp.com/basic_auth"
    );
  });

  // ...

  it("should visit basic auth without credentials after visiting page with them", async function() {
    await driver.get("http://the-internet.herokuapp.com/basic_auth");
    const page_message = await driver
      .findElement(By.css(".example p"))
      .getText();
    assert(
      page_message === "Congratulations! You must have the proper credentials."
    );
  });
});
```

__NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of *each* type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).__

## Expected Behavior

When you save these files and run them (e.g., `mocha`), here is what will happen:

<u>basic-auth-1.spec.js</u>

+ Open the browser
+ Visit the page using Basic Auth
+ Get the page text
+ Assert that the text is what we expect
+ Close the browser

And when you save the second example and run it (e.g., `basic-auth-2.spec.js`), here is what will happen:

+ Open the browser
+ Visit the page using Basic Auth as part of the test setup
+ Visit the page without the Basic Auth credentials (successfully)
+ Get the page text
+ Assert that the text is what we expect
+ Close the browser

## Summary

Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it.

Happy Testing!