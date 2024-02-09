## Example 1

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), access to C# collections (e.g., `System.Collections.Generic`), and start our class off with some setup and teardown methods.

```csharp
// filename: MultipleWindows.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.Collections.Generic;

public class MultipleWindows
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

Now let's write a test that exercises new window functionality from an application. In this case, we'll be using [the new window example](http://the-internet.herokuapp.com/windows) from [the-internet](https://github.com/tourdedave/the-internet).

```csharp
// filename: MultipleWindows.cs
// ...
    [Test]
    public void MultipleWindowsExample1()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/windows");
        Driver.FindElement(By.CssSelector(".example a")).Click();
        var Windows = Driver.WindowHandles;

        Driver.SwitchTo().Window(Windows[0]);
        Assert.That(Driver.Title != "New Window");

        Driver.SwitchTo().Window(Windows[1]);
        Assert.That(Driver.Title.Equals("New Window"));
    }
// ...
```

After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the second one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window.

While this may seem like a good approach it can present problems later because the order of the window handles is not consistent across all browsers. Some return it in the order opened, others _alphabetically_.

Here's a more resilient approach. One that will work across all browsers.

## Example 2

```csharp
// filename: MultipleWindows.cs
// ...
    [Test]
    public void MultipleWindowsExample2()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/windows");
        string FirstWindow = Driver.CurrentWindowHandle;
        string SecondWindow = "";

        Driver.FindElement(By.CssSelector(".example a")).Click();

        var Windows = Driver.WindowHandles;
        foreach(var Window in Windows)
        {
            if (Window != FirstWindow)
                SecondWindow = Window;
        }

        Driver.SwitchTo().Window(FirstWindow);
        Assert.That(Driver.Title != "New Window");

        Driver.SwitchTo().Window(SecondWindow);
        Assert.That(Driver.Title.Equals("New Window"));
    }
}
```

After loading the page we store the window handle in a variable (e.g., `FirstWindow`) and then proceed with clicking the new window link.

Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the one we've already stored). We store the new window result in another variable (e.g., `SecondWindow`) and then switch between the windows, checking the page title each time to make sure the correct window is in focus.

## Expected Behavior

If you save this file and run it (e.g., `nunit3-console.exe .\MultipleWindows.sln` from the command-line) here is what will happen for either example.

- Open the browser
- Visit the page
- Click to open a new window
- Switch between the windows
- Check the page title to make sure the correct window is in focus
- Close the browser

## Summary

I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium.

Thanks to [Jim Evans](https://twitter.com/jimevansmusic) for providing the info for this tip.

For more information about switching windows (and tabs) visit the official Selenium HQ [documentation page] (https://www.selenium.dev/documentation/webdriver/interactions/windows/).
