---
title: "How To Access Basic Auth"
slug: "13-work-with-basic-auth"
number: 13
publish_date: 2019-08-09
tags:
  - "authentication"
level: 1
category: "testing"
---

## The Problem

Sometimes you'll work with applications that are secured behind [Basic HTTP Authentication](http://en.wikipedia.org/wiki/Basic_access_authentication) (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page. Otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless.

Before Selenium 2 we were able to accomplish this by injecting credentials into a custom header, but now the cool kid way to do it it was something like [BrowserMob Proxy](http://bmp.lightbody.net/). And some people are solving this with browser specific configurations too.

But all of this feels heavy. Instead, let's look at a simple approach that is browser agnostic and quick to setup.

## A Solution

By specifying the username and password _in the URL_ when visiting a page with Selenium, we can side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages.

Let's take a look at an example.

## An Example

Let's start by requiring our requisite libraries, declare our test class, and wire up some test setup and teardown methods.

```javascript
// filename: test/basic-auth.spec.js
// ...
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Basic Auth", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Now to add our test.

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

Alternatively, we could have accessed this page before the test (e.g., as part of the test setup). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth.

```javascript
// filename: test/basic-auth.spec-2.js
// ...
  beforeEach(async function() {
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

<u>basic-auth-2.spec.js</u>

+ Open the browser
+ Visit the page using Basic Auth as part of the test setup
+ Visit the page without the Basic Auth credentials (successfully)
+ Get the page text
+ Assert that the text is what we expect
+ Close the browser

## Outro

Hopefully this tip will help save you from getting tripped by Basic Auth when you come across it.

Happy Testing!
