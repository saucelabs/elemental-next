---
title: "How To Visually Verify Your Locators"
slug: "65-highlight-elements"
number: 65
publish_date: 2016-06-13
tags:
  - "guest post"
  - "highlight"
  - "javascript"
  - "locators"
level: 2
category: "testing"
---

This is a pseudo guest post from Brian Goad. I've adapted a blog post of his with permission. You can see the original [here](http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/). Brian is a Test Engineer at [Digitalsmiths](http://www.digitalsmiths.com/). You can follow him on Twitter at [@bbbco](https://twitter.com/bbbco) and check out his testing blog [here](http://swdandruby.wordpress.com/).

## The Problem

It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?

## A Solution

By leveraging some simple JavaScript and CSS styling you can highlight a targeted element on the page so you can visually inspect it to make sure it's the one you want.

Let's take a look at an example.

## An Example

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), access to C# collections (e.g., `System.Collections.Generic`), and start our class off with some setup and teardown methods.

```csharp
// filename: HighlightElements.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.Threading;

public class HighlightElements
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

Now let's create a `HighlightElement` helper method that will accept a Selenium WebDriver `IWebElement` and a time to wait (e.g., `Duration`) as parameters.

By setting a duration we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a sensible default (e.g., 3 seconds).

```csharp
// filename: HighlightElements.cs
// ...
    private void HighlightElement(IWebElement Element, int Duration = 3)
    {
        string OriginalStyle = Element.GetAttribute("style");

        JSDriver.ExecuteScript("arguments[0].setAttribute(arguments[1], arguments[2])",
                               Element,
                               "style",
                               "border: 2px solid red; border-style: dashed;");

        Thread.Sleep(Duration * 1000);
        JSDriver.ExecuteScript("arguments[0].setAttribute(arguments[1], arguments[2])",
                               Element,
                               "style",
                               OriginalStyle);
    }
// ...
```

There are three things going on here.

+ We store the style of the element so we can revert it back when we're done
+ We change the style of the element so it visually stands out (e.g., a red dashed border)
+ We revert the style of the element back after 3 seconds (or longer if specified)

We're accomplishing the style change through JavaScript's `setAttribute` function. And we're executing it with Selenium's `ExecuteScript` command.

Now to use this in our test is a simple matter to finding an element and passing it to `HighlightElement`.

```csharp
// filename: HighlightElements.cs
// ...
    [Test]
    public void HighlightElementExample()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/large");
        IWebElement TargetElement = Driver.FindElement(By.Id("sibling-2.3"));
        HighlightElement(TargetElement);
    }

}
```

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\HighlightElements.sln` from the command-line) here is what will happen.

+ Open the browser
+ Load the page
+ Find the element to highlight
+ Change the styling of the element so it has a red dashed-line border
+ Wait 3 seconds
+ Revert the styling of the element back (removing the red border)
+ Close the browser

## Outro

This approach can be handy when trying to debug your test. Alternatively, you could verify your locators in-browser with a plugin like FireFinder, or through the JavaScript console. You can read more about how to do that in [tip 35](/tips/verifying-locators).

Happy Testing!
