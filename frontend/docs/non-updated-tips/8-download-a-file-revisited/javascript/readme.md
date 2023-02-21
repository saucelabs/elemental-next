---
title: "How To Download a File Without a Browser"
slug: "8-download-a-file-revisited"
number: 8
publish_date: 2019-08-09
tags:
  - "files"
  - "downloading"
level: 2
category: "testing"
---

## The Problem

In a [previous chapter](#chapter2) we stepped through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done.

While this works it requires a custom configuration that is inconsistent from browser to browser.

## A Solution

Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file _can_ be downloaded. And we can do that by using an HTTP client alongside Selenium in our test.

With an HTTP library we can perform a header (or `HEAD`) request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size).

Let's dig with an example.

## An Example

To start things off let's pull in our requisite libraries and wire up some test setup and teardown methods.

```javascript
// filename: test/download-v2.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");
const http = require("http");
const url = require("url");

describe("File download v2", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Next we'll want to write a helper function to create the options we'll use to perform the HTTP request.

```javascript
// filename: test/download-v2.spec.js
  function getHttpOptions(target) {
    const _url = url.parse(target);
    return {
      method: "HEAD",
      protocol: _url.protocol,
      hostname: _url.hostname,
      path: _url.path
    };
  }
// ...
```

The helper function (e.g., `getHttpOptions`) receives a URL, parses it, and use it to create and return an object with the necessary values.

Now we're ready to wire up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```javascript
// filename: test/download-v2.spec.js
// ...
  it("verify a file download by inspecting its head request", async function() {
    await driver.get("http://the-internet.herokuapp.com/download");
    const download_url = await driver
      .findElement(By.css(".example a"))
      .getAttribute("href");
    const request = http.request(getHttpOptions(download_url), response => {
      assert(response.headers["content-type"] === "application/octet-stream");
      assert(Number(response.headers["content-length"]) > 0);
    });
    request.end();
  });
});
```

Once we receive the response we check its header for the `content-type` and `content-length` to make sure the file is the correct type and not empty.

## Expected Behavior

When you save this and run it (e.g., `mocha` from the command-line) here is what will will happen:

+ Open the browser
+ Load the page
+ Grab the URL of the first download link
+ Perform a `HEAD` request against it with an HTTP library
+ Store the response
+ Check the response headers to see that the file type is correct
+ Check the response headers to see that the file is not empty

## Outro

Compared to the browser specific configuration with Selenium this is hands down a leaner, faster, and more maintainable approach. But unfortunately it only works with files served up from a dedicated URL. So if you're trying to test file downloads that are generated in-memory as part of the browser session (a.k.a. not accessible from a URL) then you'll need to reach for the browser specific Selenium configuration.

Happy Testing!
