---
title: '45: How To Test Checkboxes'
id: '45-checkboxes-csharp'
contentUrl: "docs/updated-tips/how-to-test-checkboxes/45-checkboxes-csharp"
sidebar_label: Csharp 
text: "Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests."
number: 45
publish_date: 2015-10-13
last_update:
  date: 2023-03-30
tags:
  - 'checkboxes'
  - 'attribute'
  - 'selected'
level: 1
category:
  - fundamentals
language: csharp
---

# How to Test Checkboxes

## Intro

Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests.

Intuitively you may reach for a method that has the word 'checked' in it -- like `.checked` or `.is_checked` but this doesn't exist in Selenium.

## A Solution

There are two ways to approach this issue -- by seeing if an element has a `checked` attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been _selected_.

We're going to go through each of these approaches to see their pros and cons.

## Example

For reference, here is the markup from [the page we'll be testing against](http://the-internet.herokuapp.com/checkboxes) (from [the-internet](https://github.com/tourdedave/the-internet)).

```html
<form>
  <input type="checkbox"> unchecked<br>
  <input type="checkbox" checked=""> checked
</form>
```

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), access to common C# functions (e.g., `System`, etc.) and start our class off with some setup and teardown methods.

```csharp
// filename: Checkboxes.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System;
using System.Collections.Generic;

public class Checkboxes
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

Before we write any tests let's walk through both checkbox approaches to see what Selenium gives us.

To do that we'll want to grab all of the checkboxes on the page and iterate through them. Once using an attribute lookup, and again asking if the element is selected. Each time outputting the return value we get from Selenium.

```csharp
// filename: Checkboxes.cs
// ...
[Test]
    public void CheckboxDiscovery()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");
        IReadOnlyCollection<IWebElement> Checkboxes = Driver.FindElements(By.CssSelector("input[type=\"checkbox\"]"));

        Console.Write("With .attribute('checked')");
        foreach(IWebElement Checkbox in Checkboxes)
        {
            Console.WriteLine(Checkbox.GetAttribute("checked"));
        }

        Console.WriteLine("With .selected?");
        foreach(IWebElement Checkbox in Checkboxes)
        {
            Console.WriteLine(Checkbox.Selected);
        }
    }
// ...
```

When we save our file and run it (e.g., `nunit3-console.exe .\Checkboxes.sln` from the command-line), here is the output we'll see:

```sh
With .attribute('checked')
true
With .selected?
False
True
```

With the attribute lookup, depending on the state of the checkbox, we receive either a nothing or a string with the value `"true"`. Whereas with `.selected?` we get a boolean (`true` or `false`) response.

Let's see what these approaches look like when put to use in a test.

```csharp
// filename: Checkboxes.cs
// ...
    [Test]
    public void GetCheckBoxStatusByAttribute()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");
        IWebElement Checkbox = Driver.FindElement(By.CssSelector("form input:nth-of-type(2)"));
        Assert.That(Checkbox.GetAttribute("checked").Equals("true"));
    }
// ...
```

With an attribute lookup we check against the return value (which is a string). In this case we're seeing if the return value is `"true"`. Let's see what the other approach looks like.

```csharp
// filename: Checkboxes.cs
// ...
    [Test]
    public void GetCheckBoxesStatusByQuery()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");
        IWebElement Checkbox = Driver.FindElement(By.CssSelector("form input:nth-of-type(2)"));
        Assert.That(Checkbox.Selected);
    }
}
```

In this case, when referencing the return value it's a simple matter of checking against a boolean value.

## Expected Behavior

When you save and run the test file (e.g., `nunit3-console.exe .\Checkboxes.sln` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find all of the checkboxes on the page
+ Assert that the second checkbox (the one that is supposed to be checked on initial page load) is checked
+ Close the browser

## Summary

Attribute lookups are meant for pulling information out of the page for review. While they work in this circumstance you're better off using a selected lookup. But the approach you choose will depend on how the checkboxes you're testing are constructed.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

