---
title: "How To Download a File Without a Browser"
slug: "8-download-a-file-revisited"
number: 8
publish_date: 2016-06-12
tags:
  - "files"
  - "downloading"
level: 2
category: "testing"
---

## The Problem

In a previous tip we stepped through how to download files with Selenium by configuring the browser to download them locally and performing some checks on them.

While this works it requires a specific configuration that is not available in all browsers and is inconsistent between the browsers that do have it.

## A Solution

Ultimately we shouldn't care if a file was downloaded or not. Instead we should care that a file _can_ be downloaded. And we can do that by using an HTTP request alongside Selenium.

With an HTTP library we can perform a header (`HEAD`) request for the file. Instead of downloading the file we'll receive the header information for the file which contains things like the content type and its length. With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times.

Let's dig with an example.

## An Example

To start things off let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), an HTTP library to handle our HEAD request (e.g., `System.Net`), and start our class with some setup and teardown methods.

```csharp
// filename: FileDownloadRevisited.cs 
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.Net;

public class FileDownloadRevisited
{

    IWebDriver Driver;

    [SetUp]
    public void SetUp()
    {
        Driver = new FirefoxDriver();
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }
// ...
```

Now we're ready to wire up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```csharp
// filename: FileDownloadRevisited.cs
// ...
    [Test]
    public void CheckFileDownloadWithoutBrowser()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/download");
        string FileURL = Driver.FindElement(By.CssSelector(".example a")).GetAttribute("href");
        var Request = (HttpWebRequest)WebRequest.Create(FileURL);
        Request.Method = "HEAD";
        WebResponse Response = Request.GetResponse();
        Assert.That(Response.ContentType.Equals("application/octet-stream"));
        Assert.Greater(Response.ContentLength, 0);
    }
}
```

Once we receive the response we check its header for the content type (e.g., `Assert.That(Response.ContentType.Equals("application/octet-stream"));`) and content length (e.g., `Assert.Greater(Response.ContentLength, 0);`) to make sure the file is the correct type and not empty.

## Expected Behavior

When you save this and run it (e.g., `nunit3-console.exe .\FileDownloadRevisited.sln` from the command-line) here is what will will happen:

+ Open the browser
+ Load the page
+ Grab the URL of the first download link
+ Perform a `HEAD` request against it with an HTTP library
+ Store the response headers
+ Check the response headers to see that the file type is correct
+ Check the response headers to see that the file is not empty
+ Close the browser

## Outro

Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach. But if you are dealing with file downloads that are getting rendered in-memory within the browser (rather than being served by a flat URL) then the browser specific configuration is the better approach.

Happy Testing!
