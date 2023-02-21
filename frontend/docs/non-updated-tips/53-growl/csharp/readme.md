---
title: "How To Add Growl Notifications To Your Tests"
slug: "53-growl"
number: 53
publish_date: 2016-06-13
tags:
  - "jquery"
  - "growl"
  - "growl notifications"
  - "jquery-growl"
level: 2
category: "reporting"
---

## The Problem

Good test reports are a fundamental component of successful test automation. But running down a test failure by looking at a test report can be a real pain sometimes.

Leaving you with no choice but to roll up your sleeves and get your hands dirty with debugging, stepping through things piece by piece. All for the sake of trying to track down a transient issue.

## A Solution

By leveraging something like [jQuery Growl](http://ksylvest.github.io/jquery-growl/) you can output non-interactive debugging statements directly to the page you're testing. This way you can see helpful information and more-likely correlate it to the test actions that are being taken.

This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs 

Let's step through an example of how to set this up.

## An Example

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), access to C#'s Thread.Sleep function (e.g., `System.Threading`), and start our class off with some setup and teardown methods.

```csharp
// filename: Growl.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.Threading;

public class Growl
{
    IWebDriver Driver;
    IJavaScriptExecutor JSDriver;

    [SetUp]
    public void SetUp()
    {
        Driver = new FirefoxDriver();
        JSDriver = (IJavaScriptExecutor) Driver;
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }
// ...
```

Next we'll need to visit the page we want to display notifications on and do some work with JavaScript to load [jQuery](http://jquery.com/), jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page.

```csharp
// filename: Growl.cs
// ...
    [Test]
    public void GrowlNotificationExample()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");

        // check for jQuery, add it if it's not on the page
        JSDriver.ExecuteScript("if (!window.jQuery) {" +
                               "var jquery = document.createElement('script'); jquery.type = 'text/javascript';" +
                               "jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';" +
                               "document.getElementsByTagName('head')[0].appendChild(jquery);" +
                               "}");

        // add jQuery Growl to the page
        JSDriver.ExecuteScript("$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

        // add jQuery Growl Styles to the page
        JSDriver.ExecuteScript("$('head').append(\"<link rel='stylesheet' " +
                               "href='http://the-internet.herokuapp.com/css/jquery.growl.css' " +
                               "type='text/css' />\");");

        // trigger a plain jQuery Growl notification to display on the page
        JSDriver.ExecuteScript("$.growl({ title: 'GET', message: '/' });");
// ...
```

If we wanted to see color-coded notifications we would use one of the following.

```csharp
// filename: Growl.cs
// ...
        JSDriver.ExecuteScript("$.growl.error({ title: 'ERROR', message: 'your message goes here' });");
        JSDriver.ExecuteScript("$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });");
        JSDriver.ExecuteScript("$.growl.notice({ title: 'Warning!', message: 'your warning message goes here' });");
        Thread.Sleep(5000);
    }
}
```

The `Thread.Sleep(5000);` is there for demonstration purposes. It will keep the Growl notifications on the page for 5 seconds so they're easier to see.

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\Growl.sln` from the command-line) this is what will happen:

+ Browser opens
+ Visit the page
+ Make sure jQuery is on the page, add it if it's not
+ Add jQuery Growl and its styles to the page
+ Display a set of notification messages in the top-right corner of the page with jQuery Growl
+ Notification messages disappear after 5 seconds
+ Browser closes

## Outro

In order to use this approach you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this, then that's the price you have to pay (unless you can get your team to add it to the application under test).

I'd like to give a big thanks to Jon Austen ([Twitter](https://twitter.com/austenjt), [GitHub](https://github.com/djangofan), [Blog](http://jonausten.info/)) for giving me the idea to use jQuery Growl with Selenium.

Happy Testing!
