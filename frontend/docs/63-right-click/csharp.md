---
title: "63: Right Click"
id: "63-right-click-csharp"
contentUrl: "docs/right-click/63-right-click-csharp"
sidebar_label: Csharp
text: "Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?"
number: 63
publish_date: 2015-10-13
last_update:
  date: 2023-03-30
tags:
  - "right-click"
  - "right click"
  - "context menu"
  - "action builder"
  - "context click"
level: 2
category:
  - "fundamentals"
language: csharp
---

# How to Right-click

## Intro

Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?

## A Solution

By leveraging [Selenium's Action Builder](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm) we can issue a right-click command (a.k.a. a [`ContextClick`](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_Interactions_Actions_ContextClick.htm)).

We can then select an option from the menu by traversing it with keyboard arrow keys (which we can issue with the Action Builder's [`SendKeys`](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_Interactions_Actions_SendKeys_1.htm) command).

Let's continue with an example.

## Example

Let's start by importing our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), and start our class off with some setup and teardown methods.

```csharp
// filename: RightClick.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;

public class RightClick
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

Now we're ready to write our test.

Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that will render a custom context menu when we right-click on a specific area of the page ([link](http://the-internet.herokuapp.com/context_menu)).

Clicking the context menu item will trigger a JavaScript alert which will say `You selected a context menu`. We'll grab this text and use it to assert that the menu was actually triggered.

```csharp
// filename: RightClick.cs
// ...
    [Test]
    public void RightClickExample()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/context_menu");
        IWebElement MenuArea = Driver.FindElement(By.Id("hot-spot"));
        Actions Builder = new Actions(Driver);
        Builder.ContextClick(MenuArea)
            .SendKeys(Keys.ArrowDown)
            .SendKeys(Keys.ArrowDown)
            .SendKeys(Keys.ArrowDown)
            .SendKeys(Keys.ArrowDown)
            .SendKeys(Keys.ArrowDown)
            .SendKeys(Keys.Enter)
            .Perform();
        IAlert Alert = Driver.SwitchTo().Alert();
        Assert.That(Alert.Text.Equals("You selected a context menu"));
    }
}
```

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\RightClick.sln` from the command-line) here is what will happen.

- Open the browser
- Visit the page
- Find and right-click the area of the page that renders a custom context menu
- Navigate to the context menu option with keyboard keys and select it
- JavaScript alert appears
- Grab the text of the JavaScript alert
- Assert that the text from the alert is what we expect
- Close the browser

## Summary

To learn more about context menus, you can read [this write-up from the Tree House blog](http://blog.teamtreehouse.com/building-html5-context-menus).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
