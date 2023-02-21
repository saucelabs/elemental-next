---
title: "How To Work With Hovers"
slug: "50-hovers"
number: 50
publish_date: 2016-06-13
tags:
  - "hover"
  - "hovers"
  - "action builder"
level: 1
category: "testing"
---

## The Problem

If you need to work with mouse hovers in your tests it may not be obvious how to do this with Selenium. And a quick search through the documentation will likely leave you befuddled forcing you to go spelunking through StackOverflow for the solution.

## A Solution

By leveraging Selenium's [Action Builder](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm) we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after.

Let's dig in with an example.

## An Example

Our example application is available [here](http://the-internet.herokuapp.com/hovers) on [the-internet](http://github.com/tourdedave/the-internet). It has a few avatars displayed in a grid layout. When you hover over each of them they display additional user information and a link to view a full profile.

Let's write a test that will hover over the first avatar and make sure that its additional information appears.

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), and start our class off with some setup and teardown methods.

```csharp
// filename: Hovers.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;

public class Hovers
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
// filename: Hovers.cs
    [Test]
    public void MouseHoverDisplays()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/hovers");

        IWebElement Avatar = Driver.FindElement(By.ClassName("figure"));
        Actions Builder = new Actions(Driver);
        Builder.MoveToElement(Avatar).Build().Perform();

        By Hover = By.ClassName("figcaption");
        Assert.That(Driver.FindElement(Hover).Displayed);
    }
}
```

After visiting the page we find the first avatar and store it in a variable (`Avatar`). We then use Selenium's `MoveToElement` method and pass the avatar variable to it (which triggers the hover) and check to see if the additional user information displayed.

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\Hovers.sln` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Hover over the first avatar
+ Assert that the caption displayed for that avatar
+ Close the browser

## Outro

Happy Testing!
