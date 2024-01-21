## Example

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), access to C#'s Thread.Sleep function (e.g., `System.Threading`), and start our class off with some setup and teardown methods.

```csharp
// filename: Growl.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.Threading;

public class Growl
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

Next we'll need to visit the page we want to display notifications on and do some work with JavaScript to load [jQuery](http://jquery.com/), jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page.

```csharp
// filename: Growl.cs
// ...
    [Test]
    public void GrowlNotificationExample()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");

        // check for jQuery, add it if it's not on the page
        JSDriver.ExecuteScript("if (!window.jQuery) {" +
                               "var jquery = document.createElement('script'); jquery.type = 'text/javascript';" +
                               "jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';" +
                               "document.getElementsByTagName('head')[0].appendChild(jquery);" +
                               "}");

        // add jQuery Growl to the page
        JSDriver.ExecuteScript("$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

        // add jQuery Growl Styles to the page
        JSDriver.ExecuteScript("$('head').append(\"<link rel='stylesheet' " +
                               "href='http://the-internet.herokuapp.com/css/jquery.growl.css' " +
                               "type='text/css' />\");");

        // Adding 5 seconds of extra time
        Thread.Sleep(5000);

        // trigger a plain jQuery Growl notification to display on the page
        JSDriver.ExecuteScript("$.growl({ title: 'GET', message: '/' });");

        // Adding 5 seconds of extra time to see 'GET' message
        Thread.Sleep(5000);
// ...
```

If we wanted to see color-coded notifications we would use one of the following.

```csharp
// filename: Growl.cs
// ...
        JSDriver.ExecuteScript("$.growl.error({ title: 'ERROR', message: 'your message goes here' });");
        JSDriver.ExecuteScript("$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });");
        JSDriver.ExecuteScript("$.growl.notice({ title: 'Warning!', message: 'your warning message goes here' });");
        Thread.Sleep(5000);
    }
}
```

The `Thread.Sleep(5000);` is there for demonstration purposes. It will keep the Growl notifications on the page for 5 seconds so they're easier to see. However, if your test fails due to `growl`, you can also use `Thread.Sleep(5000);` to add some more time to your test.

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\Growl.sln` from the command-line) this is what will happen:

- Browser opens
- Visit the page
- Make sure jQuery is on the page, add it if it's not
- Add jQuery Growl and its styles to the page
- Display a set of notification messages in the top-right corner of the page with jQuery Growl
- Notification messages disappear after 5 seconds
- Browser closes

## Summary

In order to use this approach you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this, then that's the price you have to pay (unless you can get your team to add it to the application under test).

I'd like to give a big thanks to Jon Austen ([Twitter](https://twitter.com/austenjt), [GitHub](https://github.com/djangofan), [Blog](http://jonausten.info/)) for giving me the idea to use jQuery Growl with Selenium.

Happy Testing!

