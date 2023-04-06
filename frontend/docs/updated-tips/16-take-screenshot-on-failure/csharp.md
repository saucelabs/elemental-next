---
title: 'CSharp'
id: '16-take-screenshot-on-failure-csharp'
slug: csharp/
number: 16
publish_date: 2015-07-08
last_update:
  date: 2023-03-30
tags:
  - 'reporting'
  - 'screenshot'
level: 2
category:
  - troubleshooting
language: csharp
---

# How to Take A Screenshot on Failure

## Intro

With browser tests it can often be challenging to track down the issue that caused a failure.

By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future.

## A Solution

A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. This is something that is fairly quick to add to your tests, and allows you to review these error messages.

Here is an example.

## Example

Let's start by including our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), accessing C#'s image functionality (e.g., `System.Drawing.Imaging`), and start our class off with some setup and teardown methods.

```csharp
// filename: Screenshot.cs
using NUnit.Framework;
using NUnit.Framework.Interfaces;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.Drawing.Imaging;

public class Screenshot
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
        if (TestContext.CurrentContext.Result.Outcome.Status.Equals(TestStatus.Failed))
            TakeScreenshot();

        Driver.Quit();
    }
// ...
```

Notice in the teardown we have a conditional statement before we call `Driver.Quit();`. It's checking to see if the test failed, if it has then it will take a screenshot. Right now the method we're referencing isn't declared. Let's add it now.

```csharp
// filename: Screenshot.cs
// ...
    private void TakeScreenshot()
    {
        string SaveLocation = @"C:\Temp\" +
                               "failshot_" +
                               TestContext.CurrentContext.Test.FullName +
                               ".png";
        ITakesScreenshot ScreenshotDriver = (ITakesScreenshot) Driver;
        ScreenshotDriver.GetScreenshot().SaveAsFile(SaveLocation, ScreenshotImageFormat.Png);
    }
// ...
```

There are numerous ways to make the filename unique for the screenshot (e.g., unique ID, timestamp, etc.). The simplest way to get started is with the full test name (e.g., test class name and test method name), which we've done. We also specified the save location on disk using a string literal (e.g., `@"C:\Temp"`), feel free to change it to suit your needs.

The rest is a simple matter of casting the `Driver` as an `ITakeScreenshot` object and calling `GetScreenshot().SaveAsFile` (specifying the save location and image format -- which is PNG in this case).

Now let's wire up our test with a forced failure.

```csharp
// filename: Screenshot.cs
// ...
    [Test]
    public void ScreenShotOnFailure()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");
        Assert.That(false.Equals(true));
    }
}
```

## Expected Behavior

When you save this file and run it (`nunit3-console.exe .\Screenshot.sln` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Test Fails
+ Selenium Captures a screenshot in `C:\Temp` with the name `failshot_Screenshot.ScreenShotOnFailure.png`
+ Close the browser

## Summary

Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
