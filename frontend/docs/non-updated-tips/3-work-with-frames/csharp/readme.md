---
title: "How To Work with Frames"
slug: "3-work-with-frames"
number: 3
publish_date: 2016-06-12
tags:
  - "frames"
level: 1
category: "testing"
---

## The Problem

On occasion you'll run into a relic of the front-end world -- frames. And when writing a test against them, you can easily get tripped if you're not paying attention.

## A Solution

Rather than gnash your teeth when authoring your tests, you can easily work with the elements in a frame by telling Selenium to _switch_ to that frame first. Then the rest of your test should be business as usual.

Let's dig in with some examples.

## An Example

First we'll need to include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), and start our class off with some setup and teardown methods.

```csharp
// filename: Frames.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

public class Frames
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

Now onto our test. In it we'll step through [an example of nested frames](http://the-internet.herokuapp.com/nested_frames) from [the-internet](https://github.com/tourdedave/the-internet).

```csharp
// filename: Frames.cs
// ...
    [Test]
    public void NestedFrames()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/nested_frames");
        Driver.SwitchTo().Frame("frame-top");
        Driver.SwitchTo().Frame("frame-middle");
        Assert.That(Driver.FindElement(By.Id("content")).Text.Equals("MIDDLE"));
    }
// ...
```

With Selenium's [`.SwitchTo()`](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_IWebDriver_SwitchTo.htm) method we can easily switch to the frame we want. When using it for frames (e.g., `Driver.SwitchTo().Frame();`) it accepts either an ID or name attribute. But in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) first _and then_ switch to the child frame (e.g., the middle frame).

Once we've done that we're able to find the element we need, grab its text, and assert that it's what we expect.

While this example helps illustrate the point of frame switching, it's not very practical.

## A More Practical Example

Here is a more likely example you'll run into -- working with a WYSIWYG Editor like [TinyMCE](http://www.tinymce.com/). You can see the page we're testing [here](http://the-internet.herokuapp.com/tinymce).

```csharp
// filename: Frames.cs
// ...
    [Test]
    public void Iframes()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/tinymce");
        Driver.SwitchTo().Frame("mce_0_ifr");
        IWebElement Editor = Driver.FindElement(By.Id("tinymce"));
        string StartText = Editor.Text;
        Editor.Clear();
        Editor.SendKeys("Hello World!");
        string EndText = Editor.Text;
        Assert.AreNotEqual(EndText, StartText);
// ...
```

Once the page loads we switch into the frame that contains TinyMCE and...

+ grab the original text and store it
+ clear and input new text
+ grab the new text value
+ assert that the original and new texts are not the same

Keep in mind that if we need to access a part of the page outside of the frame we're currently in we'll need to switch to it. Thankfully Selenium has a method that enables us to quickly jump back to the top level of the page -- [`.DefaultContent();`](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_ITargetLocator_DefaultContent.htm).

Here is what that looks like in practice.

```csharp
// filename: Frames.cs
// ...
        Driver.SwitchTo().DefaultContent();
        string HeaderText = Driver.FindElement(By.CssSelector("h3")).Text;
        Assert.That(HeaderText.Equals("An iFrame containing the TinyMCE WYSIWYG Editor"));
    }
}
```

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\Frames.sln` from the command-line) here is what will happen:

<u>Example 1</u>

+ Open the browser
+ Visit the page
+ Switch to the nested frame
+ Grab the text from the frame and assert that Selenium is in the correct place
+ Close the browser

<u>Example 2</u>

+ Open the browser
+ Visit the page
+ Switch to the frame that contains the TinyMCE editor
+ Find and store the text in the editor
+ Clear the text in the editor
+ Input new text in the editor
+ Find and store the new text in the editor
+ Assert that the original and new text entries don't match
+ Switch to the top level of the page
+ Grab the text from the top of the page and assert it's what we expect
+ Close the browser

## Outro

Now you're ready to handily defeat frames when they cross your path.

Thanks to Jonathan Taylor for contributing the initial C# code for this tip!

Happy Testing!
