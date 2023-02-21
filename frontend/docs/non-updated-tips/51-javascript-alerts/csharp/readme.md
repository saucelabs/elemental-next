---
title: "How To Work With JavaScript Alerts"
slug: "51-javascript-alerts"
number: 51
publish_date: 2016-06-13
tags:
  - "javascript"
  - "javascript alerts"
  - "javascript popups"
  - "javascript dialogs"
level: 1
category: "testing"
---

## The Problem

If your application triggers any JavaScript pop-ups (a.k.a. alerts, dialogs, etc.) then you need to know how to handle them in your Selenium tests.

## A Solution

Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.

Let's dig in with an example.

## An Example

Our example application is available [here](http://the-internet.herokuapp.com/javascript_alerts) on [the-internet](http://github.com/tourdedave/the-internet). It has various JavaScript alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click `Ok` or `Cancel`).

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), and start our class off with some setup and teardown methods.

```csharp
// filename: JavaScriptAlerts.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

public class JavaScriptAlerts
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

Now let's write our test.

```csharp
// filename: JavaScriptAlerts.cs
// ...
    [Test]
    public void JavaScriptAlertAppearsAndAccepted()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/javascript_alerts");
        Driver.FindElement(By.CssSelector(".example li:nth-child(2) button")).Click();
        IAlert Popup = Driver.SwitchTo().Alert();
        Popup.Accept();
        string Result = Driver.FindElement(By.Id("result")).Text;
        Assert.That(Result.Equals("You clicked: Ok"));
    }

}
```

A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find it with a child CSS Pseudo-class (`nth-child(2)`).

After click the button to trigger the JavaScript alert we use Selenium's `SwitchTo().Alert();` method to focus on the JavaScript pop-up and use `.Accept();` to click `Ok`. If we wanted to click `Cancel` we would have used `.Dismiss();`.

After accepting the alert our browser window will automatically regain focus and the page will display the result that we chose. We use this text for our assertion, making sure that the words `You clicked: Ok` are displayed.

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\JavaScriptAlerts.sln` from the command-line) here is what will happen:

+ Open the browser
+ Load the page
+ Click the second button on the page
+ JavaScript confirmation alert appears
+ JavaScript confirmation alert is accepted and goes away
+ Browser window is returned to focus
+ Assert that the result on the page is what we expect
+ Close the browser

## Outro

Happy Testing!
