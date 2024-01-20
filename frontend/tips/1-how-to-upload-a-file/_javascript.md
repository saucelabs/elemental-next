## Example

__NOTE: We are using [a file upload example](http://the-internet.herokuapp.com/upload) found on [the-internet](https://github.com/tourdedave/the-internet).__

First let's pull in our requisite libraries for assertions, constructing a path to a file, and driving the browser with Selenium.

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
      this.timeout(60000)
      try{
        driver = await new Builder().forBrowser("firefox").build();
      } catch (ex) {
        console.log(ex.stack)
      }
    });

    afterEach(async function() {
      this.timeout(60000)
      await driver.quit();
    });
// ...
```

After declaring the class we create two methods. The first method, `beforeEach`, will execute before each test in this class. In it we are launching a new instance of Firefox with Selenium and storing it in a class variable that we'll use throughout this class. After our test executes the second method, `afterEach`, will execute. This calls `driver.quit()` which ends the session by closing the browser instance and then destroying the Selenium object in-memory.

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

## Summary

This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at [`file_detector`](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/remote/index_exports_FileDetector.html).

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
