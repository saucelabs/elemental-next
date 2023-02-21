---
title: "How To Test For Disabled Elements"
slug: "40-disabled-element"
number: 40
publish_date: 2016-06-13
tags:
  - "dropdown list"
  - "dropdown lists"
  - "disabled element"
level: 2
category: "testing"
---

## The Problem

On occasion you may have the need to check if an element on a page is disabled or enabled. Sounds simple enough, but how do you do it? It's not a well documented function of Selenium. So doing a trivial action like this can quickly become a pain.

## A Solution

If we look at [the API documentation for Selenium's IWebElement Interface](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_IWebElement.htm) we can see there is an available method called `Enabled` that can help us accomplish what we want.

Let's take a look at how to use it.

## An Example

For this example we will use [the dropdown list](http://github.com/tourdedave/the-internet) from [the-internet](http://the-internet.herokuapp.com/dropdown). In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is in fact disabled.

Let's start by including our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), and start our class off with some setup and teardown methods.

```csharp
// filename: DisabledElements.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

public class DisabledElements
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

Now to wire up our test.

```csharp
// filename: DisabledElements.cs
// ...
    [Test]
    public void ElementDisabled()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/dropdown");
        var Dropdown = new SelectElement(Driver.FindElement(By.Id("dropdown")));
        // The SelectedOption we want is selected by default on page load
        Assert.False(Dropdown.SelectedOption.Enabled);
    }
}
```

After visiting the page we find the dropdown list with the `SelectElement` function and store it in a variable. We then use in our assertion, focusing on the currently selected option which is the first one by default on page load (e.g., `Dropdown.SelectedOption`) and check that it is enabled (e.g., `.Enabled`). This will return a boolean result. If the element is disabled (e.g., not selectable) then Selenium will return `false`. So that's what we use in our assertion (e.g., `Assert.False`).

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\DisabledElements.sln` from the command-line) here is what will happen:

+ Open a browser
+ Visit the page
+ Grab the dropdown list
+ Assert that the target element is not enabled
+ Close the browser

## Outro

Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable.

Happy Testing!
