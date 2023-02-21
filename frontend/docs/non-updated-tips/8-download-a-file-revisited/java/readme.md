---
title: "How To Download a File Without a Browser"
slug: "8-download-a-file-revisited"
number: 8
publish_date: 2015-11-10
tags:
  - "files"
  - "downloading"
level: 2
category: "testing"
---
## The Problem

In a [previous tip](/tips/2-download-a-file) we stepped through how to download files with Selenium by configuring the browser to download them locally and performing some checks.

While this works it requires a custom configuration that is not available in all browsers, and is inconsistent between the browsers that have it.

## A Solution

Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file _can_ be downloaded. And we can do that by using an HTTP request alongside Selenium.

With an HTTP library we can perform a header (`HEAD`) request for the file. Instead of downloading the file we'll receive the header information for the file which contains things like the content type and length. With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times.

Let's dig with an example.

## An Example

To start things off let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.), and an HTTP library to handle our HEAD request (e.g., `org.apache.http.HttpResponse`, etc.) and start our class with some setup and teardown methods.

```java
// filename: DownloadFileRevisited.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpHead;
import org.apache.http.impl.client.HttpClientBuilder;

public class DownloadFileRevisited {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }
// ...
```

Now we're ready to wire up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```java
// filename: DownloadFileRevisited.java
// ...
    @Test
    public void downloadFileRevisitedTest() throws Exception {
        driver.get("http://the-internet.herokuapp.com/download");
        String link = driver.findElement(By.cssSelector(".example a:nth-of-type(1)")).getAttribute("href");

        HttpClient httpClient = HttpClientBuilder.create().build();
        HttpHead request = new HttpHead(link);
        HttpResponse response = httpClient.execute(request);
        String contentType = response.getFirstHeader("Content-Type").getValue();
        int contentLength = Integer.parseInt(response.getFirstHeader("Content-Length").getValue());

        assertThat(contentType, is("application/octet-stream"));
        assertThat(contentLength, is(not(0)));
    }

}
```

Once we receive the response we check it's header for the content type (e.g., `response.getFirstHeader("Content-Type")`) and content length (e.g., `response.getFirstHeader("Content-Length")`) to make sure the file is the correct type and not empty.

## Expected Behavior

When you save this and run it (e.g., `mvn clean install` from the command-line) here is what will will happen:

+ Open the browser
+ Load the page
+ Grab the URL of the first download link
+ Perform a `HEAD` request against it with an HTTP library
+ Store the response headers
+ Check the response headers to see that the file type is correct
+ Check the response headers to see that the file is not empty
+ Close the browser

## Outro

Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
