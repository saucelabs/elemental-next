---
title: 'Java'
id: '2-download-a-file-java'
slug: java/
number: 2
publish_date: 2015-07-27
last_update:
  date: 2023-04-03
tags:
  - 'files'
  - 'downloading'
  - 'file download'
level: 2
category: 
  - remote
  - fundamentals
language: java
---

# Page Title

# How To Download a File

## Intro

Just like with [uploading files](/docs/updated-tips/how-to-upload-a-file/) we hit the same issue with downloading them -- a dialog box 
just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.


## A Solution

In order to avoid the dialog box, we will be instructing the browser to download files to a specific location without being prompted.

After the file is downloaded we can then perform some simple checks to make sure the file is what we expect.

Let's continue with an example.

## Example

Let's start off by importing our requisite classes for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), matchers for assertions (e.g., `org.hamcrest.CoreMatchers`, etc. ), handling local files (e.g., `java.io.File`), and a means to create a uniquely named folder to place downloaded files in (e.g., `java.util.UUID`).

```java
// filename: Download.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import java.nio.file.Files;
import java.util.Objects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
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
        FirefoxOptions options = new FirefoxOptions();
        FirefoxProfile profile = new FirefoxProfile();
        profile.setPreference("browser.download.dir", folder.getAbsolutePath());
        profile.setPreference("browser.download.folderList", 2);
        profile.setPreference("browser.helperApps.neverAsk.saveToDisk",
                "image/jpeg, application/pdf, application/octet-stream");
        profile.setPreference("pdfjs.disabled", true);
        options.setProfile(profile);
        driver = new FirefoxDriver(options);
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
        for (File file: Objects.requireNonNull(folder.listFiles())) {
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

## Summary

A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is not sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it [here](http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/).

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.