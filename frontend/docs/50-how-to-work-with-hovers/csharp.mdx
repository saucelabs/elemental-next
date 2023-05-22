---
title: "50: How To Work With Hovers"
id: "50-hovers-csharp"
contentUrl: "docs/how-to-work-with-hovers/50-hovers-csharp"
sidebar_label: Csharp
text: "If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."
number: 50
hide_table_of_contents: true
publish_date: 2016-06-13
last_update:
  date: 2023-03-30
tags:
  - "hover"
  - "hovers"
  - "action builder"
level: 1
category:
  - "fundamentals"
language: csharp
---

# How to Work with Hovers

## Intro

If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.

## A Solution

The most popular use case for a hover action is to display additional menu options(submenu.)

By leveraging Selenium's [Action Builder](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm) we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after.

## Example

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

- Open the browser
- Visit the page
- Hover over the first avatar
- Assert that the caption displayed for that avatar
- Close the browser

## Summary

Hopefully this will help you handle more complex user interactions like hovers.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
