---
title: "How To Use Safari"
slug: "69-safari"
number: 69
publish_date: 2016-06-13
tags:
  - "safari"
  - "drivers"
  - "safaridriver"
  - "different browsers"
level: 1
category: "setup"
---

## The Problem

Running your Selenium tests on a different browser tends to require additional setup, and [SafariDriver](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver) on OSX is no exception.

## A Solution

Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension.

Let's step through how to do it and make sure it's working.

## An Example

The prebuilt SafariDriver extension can be downloaded from [here](http://selenium-release.storage.googleapis.com/2.48/SafariDriver.safariextz). Download it, double-click it, and click `Trust` when prompted.

After that, make sure it's enabled. To do that:

1. open `Safari`
2. go to `Preferences`
3. click on the `Extensions` tab
4. Make sure `Enable WebDriver` is checked
5. Close `Safari`

<img src='/img/safari-extension.png'/>

Let's wire up a simple test so we can see that everything works as expected.

```csharp
// filename: Safari.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Safari;

public class Safari
{
    IWebDriver Driver;

    [SetUp]
    public void SetUp()
    {
        Driver = new SafariDriver();
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }

    [Test]
    public void SimpleTest()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");
        Assert.That(Driver.Title.Equals("The Internet"));
    }
}
```

When we run the test, we should see a successful communication between Selenium and Safari, which would look like this:

<img src='/img/safari-success.png'/>

## Expected Behavior

When you save the file and run it (e.g., `nunit3-console.exe .\Safari.sln` from the command-line), here is what will happen.

+ Safari opens
+ The home page of [the-internet](http://github.com/tourdedave/the-internet) loads
+ The title of the page is checked to make sure it's what we expect
+ Safari closes

## Outro

Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to manually switch to Safari in order to see what the test is doing.

And if you're running Safari on a remote node (or set of nodes) then you'll need to install and enable the SafariDriver browser extension on _each_ of them (unless you're using a third-party service like [Sauce Labs](http://saucelabs.com/) in which case you don't need to do any of this since they take care of that for you).

Happy Testing!
