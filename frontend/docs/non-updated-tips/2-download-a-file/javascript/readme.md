---
title: "How To Download a File"
slug: "2-download-a-file"
number: 2
publish_date: 2019-08-09
tags:
  - "files"
  - "downloading"
  - "file download"
level: 2
category: "testing"
---

## The Problem

Just like with uploading files we hit the same issue with downloading them. A dialog box just out of Selenium's reach.

## A Solution

With some additional configuration when setting up Selenium we can easily side-step the dialog box. This is done by instructing the browser to download files to a specific location without triggering the dialog box.

After the file is downloaded we can perform some simple checks to make sure the file is what we expect.

Let's dig in with an example.

## An Example

Let's start by pulling in our requisite libraries.

```javascript
// filename: test/download.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const fs = require("fs");
const path = require("path");
// ...
```

Now to create a setup method for our test.

```javascript
// filename: test/download.spec.js
// ...
describe("File download", function() {
  let driver;
  const tmpDir = path.join(__dirname, "tmp");

  beforeEach(async function() {
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
    let options = new firefox.Options()
      .setPreference("browser.download.dir", tmpDir)
      .setPreference("browser.download.folderList", 2)
      .setPreference(
        "browser.helperApps.neverAsk.saveToDisk",
        "images/jpeg, application/pdf, application/octet-stream"
      )
      .setPreference("pdfjs.disabled", true);

    driver = await new Builder()
      .forBrowser("firefox")
      .setFirefoxOptions(options)
      .build();
  });
// ...
```

After declaring our test suite, we declare two variables. One for the Selenium instance (e.g., `driver`) and the other for the temporary directory where we'll want to automatically download files to (e.g., `tmpDir`). In it we're storing the absolute path to the current working directory, plus the name `tmp`.

In the setup method (e.g., `beforeEach`) we create this directory if it's not already there, and then create a new browser options object (for Firefox in this case), specifying the necessary configuration parameters to make it automatically download the file where we want (e.g., in the newly created temp directory).

Here's a breakdown of each of the browser preferences being set:

+ `browser.download.dir` accepts a string. This is how we set the custom download path. It needs to be an absolute path.
+ `browser.download.folderList` takes a number. It tells Firefox which download directory to use. `2` tells it to use a custom download path, wheras `1` would use the browser's default path, and `0` would place them on the Desktop.
+ `browser.helperApps.neverAsk.saveToDisk` tells Firefox when not to prompt for a file download. It accepts a string of [the file's MIME type](http://en.wikipedia.org/wiki/Internet_media_type). If you want to specify more than one, you do it with a comma-separated string (which we've done).
+ `pdfjs.disabled` is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.

We then hand the options object on to Selenium as part of the incantation to create a new browser instance.

Now let's take care of our test's teardown.

```javascript
// filename: test/download.spec.js
// ...
  function cleanupTmpDir() {
    if (fs.existsSync(tmpDir)) {
      const files = fs.readdirSync(tmpDir).map(file => path.join(tmpDir, file));
      files.forEach(file => fs.unlinkSync(file));
      fs.rmdirSync(tmpDir);
    }
  }

  afterEach(async function() {
    await driver.quit();
    cleanupTmpDir();
  });
// ...
```

In the teardown (e.g., `beforeEach`) we close the browser instance and then clean up the temp directory by deleting its contents, and then the directory itself.

Now to wire up our test.

```javascript
// filename: test/download.spec.js
// ...
  it("should automatically download to local disk", async function() {
    await driver.get("http://the-internet.herokuapp.com/download");
    await driver.findElement(By.css(".example a")).click();
    const files = fs.readdirSync(tmpDir).map(file => path.join(tmpDir, file));
    assert(files.length);
    assert(fs.statSync(files[0]).size);
  });
});
```

After visiting the page we find the first download link and click it. The click triggers an automatic download to the temp directory. After the file downloads, we perform some rudimentary checks to make sure the temp directory contains files and the first file in the directory is not empty.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) this is what will happen:

+ Create a uniquely named temp directory in the present working directory
+ Open the browser
+ Visit the page
+ Find and click the first download link on the page
+ Automatically download the file to the temp directory without prompting
+ Check that the temp directory is not empty
+ Check that the downloaded file is not empty
+ Close the browser
+ Delete the temp directory

## Outro

A similar approach can be applied to some other browsers with varying configurations.

Happy Testing!
