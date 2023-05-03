---
title: '61: How To Press Keyboard Keys'
id: '61-keyboard-keys-csharp'
contentUrl: "docs/updated-tips/how-to-press-keyboard-keys/61-keyboard-keys-csharp"
sidebar_label: Csharp 
text: "On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?"
number: 61
publish_date: 2015-10-12
last_update:
  date: 2023-03-30
tags:
  - 'keyboard'
  - 'keys'
  - 'key presses'
  - 'tab'
  - 'enter'
level: 1
category:
  - fundamentals
language: csharp
---

# How to Press Keyboard Keys

## Intro

On occasion you'll come across functionality that requires the use of keyboard key presses in your tests.

Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter.

But how do you do it and where do you start?

## A Solution

You can easily issue a key press by using the `SendKeys` command. This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on [the Selenium Actions page for Building Advanced User Interactions](https://www.selenium.dev/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm)).

Either approach will send a key press. The latter approach will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found.

You can see a full list of Selenium's available keyboard keys [here](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Keys.htm).

Let's try out a couple of examples.

## Example

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), and start our class off with some setup and teardown methods.

```csharp
// filename: KeyboardKeys.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;

public class KeyboardKeys
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

Now we can wire up our test.

Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that will display what key has been pressed ([link](http://the-internet.herokuapp.com/key_presses)). We'll use the result text that gets displayed on the page to perform our assertion.

```csharp
// filename: KeyboardKeys.cs
// ...
    [Test]
    public void KeyboardKeysExample()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/key_presses");

        Driver.FindElement(By.Id("target")).SendKeys(Keys.Space);
        Assert.That(Driver.FindElement(By.Id("result")).Text.Equals("You entered: SPACE"));
// ...
```

After visiting the page we find a visible element (e.g., the primary content of the page) and send the space key to it (e.g., `.SendKeys(Keys.SPACE)`). Then we grab the resulting text (e.g., `Driver.FindElement(By.Id("result")).Text`) and assert that it says what we expect (e.g., `.Equals("You entered: SPACE"`).

Alternatively, we can issue a key press without finding the element by using the Selenium Action Builder.

```csharp
// filename: KeyboardKeys.cs
// ...
        Actions Builder = new Actions(Driver);
        Builder.SendKeys(Keys.Left).Build().Perform();
        Assert.That(Driver.FindElement(By.Id("result")).Text.Equals("You entered: LEFT"));
    }
}
```

## Expected Behavior

When you save this file and run it (e.g. `nunit3-console.exe .\KeyboardKeys.sln` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find the element and send the space key to it
+ Find the result text on the page and asset it's what we expect
+ Send the left arrow key to the element that's currently in focus
+ Find the result text on the page and assert it's what we expect
+ Close the browser

## Summary

If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use.

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.