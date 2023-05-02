---
title: "8: Download A File Revisited"
id: "8-download-a-file-revisited-csharp"
contentUrl: "docs/download-a-file-revisited/8-download-a-file-revisited-csharp"
sidebar_label: Csharp
text: "In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."
number: 8
publish_date: 2015-08-20
last_update:
  date: 2023-03-29
tags:
  - "files"
  - "downloading"
level: 2
category:
  - remote
language: csharp
---

# How to Download a File Without a Browser

## Intro

In a [previous tip](/tips/2-download-a-file) we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done.

While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.

Ultimately, we shouldn't care if a file was downloaded or not. Instead, we should care that a file _can_ be downloaded, which we can do by using an HTTP client alongside Selenium in our test.

## A Solution

Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file _can_ be downloaded. And we can do that by using an HTTP client alongside Selenium in our test.

With an HTTP library we can perform a header (or `HEAD`) request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size).

Let's continue with an example.

## Example

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

- Open the browser
- Load the page
- Grab the URL of the first download link
- Perform a `HEAD` request against it with an HTTP library
- Store the response headers
- Check the response headers to see that the file type is correct
- Check the response headers to see that the file is not empty
- Close the browser

## Summary

Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
