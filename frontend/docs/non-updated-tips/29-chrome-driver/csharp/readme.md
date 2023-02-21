---
title: "How To Run Your Tests Locally Against Chrome"
slug: "29-chrome-driver"
number: 29
publish_date: 2016-06-13
tags:
  - "drivers"
  - "chromedriver"
  - "chrome"
  - "different browsers"
level: 2
category: "setup"
---

## The Problem

It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.

## A Solution

With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers.

WebDriver works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser.

Let's step through an example using [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/).

## An Example

Before starting, we'll need to download the latest ChromeDriver binary executable from [here](http://chromedriver.storage.googleapis.com/index.html). Once we have it we'll need to tell Selenium where it is. And there are three ways to do this:

+ Add it to your System PATH
+ Specify it your test setup
+ Launch ChromeDriver and connect to it via Selenium Remote

Let's step through the latter two options.


Let's start by including our requisite classes for our test framework (e.g., `using NUnit.Framework`), driving the browser with Selenium (e.g., `using OpenQA.Selenium`, etc.), accessing C# methods to work with the local file system (e.g., `using System.IO`), and start our class with some setup and teardown methods.

```csharp
// filename: Chrome.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.IO;

public class Chrome
{
    IWebDriver Driver;
    string VendorDirectory = Directory.GetParent(
        Path.GetDirectoryName(typeof(Chrome).Assembly.Location)).
            Parent.FullName + @"\Vendor";

    [SetUp]
    public void SetUp()
    {
        Driver = new ChromeDriver(VendorDirectory);
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }
// ...
```

Notice the field variable declaration for `VendorDirectory`. With it we are effectively grabbing the full path of the project directory and appending the `Vendor` directory to it. This is then put to use when creating an instance of Chrome (e.g., `Driver = new ChromeDriver(VendorDirectory);`).

Now we're ready to add a test.

```csharp
// filename: Chrome.cs
// ...
    [Test]
    public void PageLoads()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");
        Assert.That(Driver.Title.Equals("The Internet"));
    }
}
```

If we save this file and run the project (e.g., `nunit3-console.exe .\Chrome.sln`) it will launch an instance of Chrome, visit the homepage of [the-internet](http://the-internet.herokuapp.com/), and assert that the page title loaded.

## Another Example

Alternatively, we can launch ChromeDriver from the command-line.

```sh
> ./chromedriver.exe
Starting ChromeDriver 2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4) on port 9515
Only local connections are allowed.
```

We can then connect to it with Selenium Remote.

```csharp
// filename: Chrome.cs
// ...
    [SetUp]
    public void SetUp()
    {
        //Driver = new ChromeDriver(VendorDirectory);
        DesiredCapabilities Capabilities = new DesiredCapabilities();
        DesiredCapabilities.Chrome();
        Driver = new RemoteWebDriver(new Uri("http://localhost:9515"), Capabilities);
    }

// ...
```

__NOTE: This approach will perform faster since ChromeDriver is already running and your test just needs to connect to it. Whereas the prior approach needs to start and stop ChromeDriver for _each_ test. The trade-off here is that ChromeDriver will keep running after your tests complete. So you'll either need to ensure it's always up, and/or come up with a way to shut it down after your tests finish.__

## Expected Behavior

When you save this file and run the project (e.g., `nunit3-console.exe .\Chrome.sln` from the command-line) here is what will happen.

### Example 1

+ ChromeDriver starts
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver stops

### Example 2

+ ChromeDriver starts (via command-line execution)
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver continues to run until stopped

## Outro

Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements:

+ [ChromeDriver](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver)
+ [FirefoxDriver](https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver)
+ [InternetExplorerDriver](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
+ [EdgeDriver](https://blogs.windows.com/msedgedev/2015/07/23/bringing-automated-testing-to-microsoft-edge-through-webdriver/)
+ [SafariDriver](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver)

Happy Testing!
