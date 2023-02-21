---
title: "How To Download a File"
slug: "2-download-a-file"
number: 2
publish_date: 2015-11-15
tags:
  - "files"
  - "downloading"
  - "file download"
level: 2
category: "testing"
---

## The Problem

Just like with [uploading files](/tips/1-upload-a-file) we hit the same issue with downloading them. A dialog box just out of Selenium's reach.

## A Solution

With some additional configuration when setting up Selenium we can easily side-step the dialog box. This is done by instructing the browser to download files to a specific location without being prompted.

After the file is downloaded we can then perform some simple checks to make sure the file is what we expect.

Let's dig in with an example.

## An Example

Let's start off by importing our requisite classes for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), matchers for assertions (e.g., `org.hamcrest.CoreMatchers`, etc. ), handling local files (e.g., `java.io.File`), and a means to create a uniquely named folder to place downloaded files in (e.g., `java.util.UUID`).

```java
// filename: Download.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;
import java.io.File;
import java.util.UUID;
```

Now to create a class and add our test's setup.

```java
// filename: Download.java
//...
public class Download {
    WebDriver driver;
    File folder;

    @Before
    public void setUp() throws Exception {
        folder = new File(UUID.randomUUID().toString());
        folder.mkdir();

        FirefoxProfile profile = new FirefoxProfile();
        profile.setPreference("browser.download.dir", folder.getAbsolutePath());
        profile.setPreference("browser.download.folderList", 2);
        profile.setPreference("browser.helperApps.neverAsk.saveToDisk",
                "image/jpeg, application/pdf, application/octet-stream");
        profile.setPreference("pdfjs.disabled", true);
        driver = new FirefoxDriver(profile);
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
        for (File file: folder.listFiles()) {
            file.delete();
        }
        folder.delete();
    }
```

Our `setUp()` method is where the magic is happening in this example. In it we're creating a uniquely named temp directory, configuring a browser profile object (for Firefox in this case), and plying it with the necessary configuration parameters to make it automatically download the file where we want (e.g., the newly created temp directory).

Here's a breakdown of each of the browser preferences being set:

+ `browser.download.dir` accepts a string. This is how we set the custom download path. It needs to be an absolute path.
+ `browser.download.folderList` takes a number. It tells Firefox which download directory to use. `2` tells it to use a custom download path, wheras `1` would use the browser's default path, and `0` would place them on the Desktop.
+ `browser.helperApps.neverAsk.saveToDisk` tells Firefox when not to prompt for a file download. It accepts a string of [the file's MIME type](http://en.wikipedia.org/wiki/Internet_media_type). If you want to specify more than one, you do it with a comma-separated string.
+ `pdfjs.disabled` is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.

This profile object is then passed into our instance of Selenium (e.g., `driver = new FirefoxDriver(profile);`).

Now let's take care of our test's `teardown`.

```java
// filename: Download.java
// ...
    @After
    public void tearDown() throws Exception {
        driver.quit();
        for (File file: folder.listFiles()) {
            file.delete();
        }
        folder.delete();
    }
```

In `tearDown()` we close the browser instance and then clean up the temp directory by deleting the files in the temp folder and then the temp folder.

Now to wire up our test.

```java
// filename: Download.java
// ...
    @Test
    public void download() throws Exception {
        driver.get("http://the-internet.herokuapp.com/download");
        driver.findElement(By.cssSelector(".example a")).click();
        // Wait 2 seconds to download file
        Thread.sleep(2000);
        File[] listOfFiles = folder.listFiles();
        // Make sure the directory is not empty
        assertThat(listOfFiles.length, is(not(0)));
        for (File file : listOfFiles) {
            // Make sure the downloaded file(s) is(are) not empty
            assertThat(file.length(), is(not((long) 0)));
        }
    }

}
```

After visiting the page we find the first download link and click it. The click triggers an automatic download to the temp directory created in `setUp()`. We need to wait for the download to finish, so we add a brief sleep (e.g., `Thread.sleep(2000);`). After the file downloads, we perform some rudimentary checks to make sure the temp directory isn't empty and then check the file (or files) that they aren't empty either.

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is will happen:

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

A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is not sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it [here](http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/). In a future tip I'll cover a more reliable, faster, and scalable browser agnostic approach to downloading files. Stay tuned.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
