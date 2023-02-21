---
title: "How To Upload a File"
slug: "1-upload-a-file"
number: 1
publish_date: 2019-08-09
tags:
  - "file"
  - "upload"
  - "file upload"
level: 1
category: "testing"
---

## The Problem

Uploading a file is a common piece of functionality found on the web. But when trying to automate it you get prompted with a with a dialog box that is just out of reach for Selenium.

In these cases people often look to a third-party tool to manipulate this window (e.g., [AutoIt](http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/)). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations.

## A Solution

A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) _into_ the form and then submit the form.

Let's step through an example.

## An Example

__NOTE: We are using [a file upload example](http://the-internet.herokuapp.com/upload) found on [the-internet](https://github.com/tourdedave/the-internet).__

First let's pull in our requisite libraries for asertions, constructing a path to a file, and driving the browser with Selenium.

```javascript
// filename: test/upload.spec.js
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");
const path = require("path");
// ...
```

Now to create a new test class and add in test setup and teardown for it.

```javascript
// filename: test/upload.spec.js
describe("Upload Test", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

After declaring the class we create two methods. The first method, `beforeEach`, will execute before each test in this class. In it we are launching a new instance of Firefox with Selenium and storing it in a class variable that we'll use throughout this class. After our test executes the second method, `afterEach`, will execute. This calls `driver.quit()` which ends the session by closing the browser instance and the destroying the Selenium object in-memory.

Now to wire up our test.

```javascript
// filename: test/upload.spec.js
// ...
  it("upload a file", async function() {
    let filename = "some-file.txt";
    let filePath = path.join(process.cwd(), filename);

    await driver.get("http://the-internet.herokuapp.com/upload");
    await driver.findElement(By.id("file-upload")).sendKeys(filePath);
    await driver.findElement(By.id("file-submit")).click();

    let text = await driver.findElement(By.id("uploaded-files")).getText();
    assert.equal(text, filename);
  });
});
```

After declaring the test method (e.g., `it("upload a file", async function() {`) we specify the name of file we'd like to upload. It's a text file called `some-file.txt` in the current working directory. We determine the path to this file and store it in a variable called `filePath`.

Next we visit the page with the upload form, input the string value of `filePath`, and click the submit button on the form. After the file is uploaded to the page it will display the filename it just processed. We use this text on the page to perform our assertion (making sure the uploaded file is what we expect).

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) this is what will happen:

+ Open the browser
+ Visit the upload form page
+ Inject the file path into the form and submit it
+ Page displays the uploaded filename
+ Grab the text from the page and assert it's what we expect
+ Close the browser

## Outro

This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at [`file_detector`](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/remote/index_exports_FileDetector.html).

Happy Testing!
