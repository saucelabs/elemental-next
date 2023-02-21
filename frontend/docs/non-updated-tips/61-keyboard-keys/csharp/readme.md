---
title: "How To Press Keyboard Keys"
slug: "61-keyboard-keys"
number: 61
publish_date: 2016-06-13
tags:
  - "keyboard"
  - "keys"
  - "key presses"
  - "tab"
  - "enter"
level: 1
category: "testing"
---

## The Problem

On occasion you'll come across functionality that requires the use of keyboard key presses in your tests.

Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter.

But how do you do it with Selenium and where do you start?

## A Solution

You can easily issue a key press by using the `SendKeys` command. This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on [the Selenium project's Wiki page for Advanced User Interactions](https://github.com/SeleniumHQ/selenium/wiki/Advanced-User-Interactions)).

Either approach will send a key press. The latter approach will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found.

You can see a full list of Selenium's available keyboard keys [here](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Keys.htm).

Let's step through a couple of examples.

## An Example

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

        Driver.FindElement(By.Id("content")).SendKeys(Keys.Space);
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

## Outro

If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. But if you don't have a receiving element, or you need to string together multiple key presses, then the action builder is what you should reach for.

Happy Testing!
