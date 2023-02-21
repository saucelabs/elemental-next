---
title: "How To Upload a File"
slug: "1-upload-a-file"
number: 1
publish_date: 2015-11-07
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

First let's import our requisite classes for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), matchers for assertions (e.g., `org.hamcrest.CoreMatchers`, etc. ), and something to handle local files (e.g., `java.io.File`).

```java
// filename: Upload.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;
import java.io.File;
```

Now to create a class and take care of the test's setup and teardown.

```java
// filename: Upload.java
// ...
public class Upload {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }
```

After specifying the class (e.g., `public class Upload {`) we create a field variable (e.g., `WebDriver driver;`) to store our Selenium instance for reuse throughout the class. We then create a `setUp()` method with a `@Before` annotation so it runs before our test. In this method we are creating an instance of Selenium with Firefox (e.g., `driver = new FirefoxDriver();`).

After our test executes, the `tearDown()` method will run thanks to the `@After` annotation. This calls `driver.quit();` which will close the browser instance.

Now to wire up our test.

```java
    @Test
    public void uploadFile() throws Exception {
        String filename = "some-file.txt";
        File file = new File(filename);
        String path = file.getAbsolutePath();
        driver.get("http://the-internet.herokuapp.com/upload");
        driver.findElement(By.id("file-upload")).sendKeys(path);
        driver.findElement(By.id("file-submit")).click();
        String text = driver.findElement(By.id("uploaded-files")).getText();
        assertThat(text, is(equalTo(filename)));
    }

}
```

We create an `uploadFile()` method and annotate it with `@Test` so it is run as a test. In it we create a new file called `some-file.txt` in the present working directory and get it's absolute path.

Next we visit the page with the upload form, input the string value of `path` (e.g., the full path to the file plus the filename with it's extension), and submit the form. After the file is uploaded to the page it will display the filename it just processed. We use this text to perform our assertion (making sure the uploaded file is what we expect).


## Expected Behavior

When we save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Visit the upload form page
+ Inject the file path into the form and submit it
+ Page displays the uploaded filename
+ Grab the text from the page and assert it's what we expect
+ Close the browser

## Outro

This approach will work across all browsers. But if you want to use it with a remote instance (e.g., a Selenium Grid or Sauce Labs), then you'll want to have a look at [`FileDetector`](https://github.com/SeleniumHQ/selenium/blob/ab1e647d0fc8fc39e6b00ae94321ab228b6728f2/java/client/src/org/openqa/selenium/remote/FileDetector.java). You can see a write-up on it from Sauce Labs [here](https://saucelabs.com/resources/articles/selenium-file-upload).

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
