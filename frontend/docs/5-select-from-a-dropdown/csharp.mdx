---
title: "5: Select From A Dropdown"
id: "5-select-from-a-dropdown-csharp"
contentUrl: "docs/select-from-a-dropdown/5-select-from-a-dropdown-csharp"
sidebar_label: Csharp
text: "Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might seem straightforward just grab the list by its element and select an item within it, based on the text you want there's a bit more skill to it."
number: 5
hide_table_of_contents: true
publish_date: 2016-06-13
last_update:
  date: 2023-03-29
tags:
  - "dropdown"
  - "forms"
level: 1
category:
  - fundamentals
language: csharp
---

# How to Select from a Dropdown List

## Intro

Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might _seem_ straightforward -- just grab the list by its element and select an item within it, based on the text you want -- there's a bit more skill to it.

Let's take a look at a couple of different approaches.

## Example 1

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), access to C# collections (e.g., `System.Collections.Generic`), and start our class off with some setup and teardown methods.

```csharp
// filename: Dropdown.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;
using System.Collections.Generic;

public class Dropdown
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

Now let's wire up our test.

```csharp
// filename: Dropdown.cs
// ...
    [Test]
    public void SelectFromDropdownTheHardWay()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/dropdown");
        IWebElement Dropdown = Driver.FindElement(By.Id("dropdown"));
        IReadOnlyCollection<IWebElement> DropdownOptions = Dropdown.FindElements(By.TagName("option"));
        foreach(IWebElement Option in DropdownOptions)
        {
            if(Option.Text.Equals("Option 1"))
                Option.Click();
        }
        string SelectedOption = "";
        foreach (IWebElement Option in DropdownOptions)
        {
            if (Option.Selected)
                SelectedOption = Option.Text;
        }
        Assert.That(SelectedOption.Equals("Option 1"));
    }
// ...
```

After visiting [the example application](http://the-internet.herokuapp.com/dropdown) we find the dropdown list by its ID and store it in a variable. We then find each element in the dropdown list (e.g., each element with an `option` tag) with `FindElements` (note the plural).

Grabbing all of the options with `FindElements` returns a collection that we iterate over. When the text matches what we want (e.g., `"Option 1"`) we click on it.

We finish the test by performing a check to see that our selection was made correctly. This is done by iterating over the dropdown options collection once more. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it.

While this works, there is a simpler, built-in way to do this with Selenium. Let's give that a go.

## Example 2

```csharp
// filename: Dropdown.cs
// ...
    [Test]
    public void SelectFromDropdownTheEasyWay()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/dropdown");
        SelectElement Dropdown = new SelectElement(Driver.FindElement(By.Id("dropdown")));
        Dropdown.SelectByText("Option 1");
        Assert.That(Dropdown.SelectedOption.Text.Equals("Option 1"));
    }

}
```

Similar to the first example, we are finding the dropdown list by its ID. But instead of iterating over its option elements and clicking based on a conditional we are leveraging a built-in helper function of Selenium. With [`SelectElement`](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Support_UI_SelectElement.htm) and its `SelectBy` methods (e.g., [`SelectByText`](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_Support_UI_SelectElement_SelectByText.htm)) we're able to easily choose the item we want.

We then perform our assertion against the text of the currently selected option (e.g., `Dropdown.SelectedOption.Text.Equals("Option 1")`).

As an aside, in addition to selecting by text you can also select by value.

```csharp
        Dropdown.SelectByValue("1");
```

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\Dropdown.sln` from the command-line) here is what will happen for either example:

- Open the browser
- Visit the example application
- Find the dropdown list
- Select the specified item from the dropdown list
- Assert that the selected option is what you expect
- Close the browser

## Summary

Hopefully this tip will help you breeze through selecting items from a dropdown list.

Thanks to Jonathan Taylor for contributing the initial C# code for this tip!

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
