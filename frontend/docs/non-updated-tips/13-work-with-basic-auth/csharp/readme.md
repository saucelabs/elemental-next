---
title: "How To Access Basic Auth"
slug: "13-work-with-basic-auth"
number: 13
publish_date: 2016-06-12
tags:
  - "authentication"
level: 1
category: "testing"
---

## The Problem

Sometimes you'll work with applications that are secured behind [Basic HTTP Authentication](http://en.wikipedia.org/wiki/Basic_access_authentication) (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page. Otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless.

Before Selenium 2 we were able to accomplish this by injecting credentials into a custom header. But now the cool kid way to do it it was something like [BrowserMob Proxy](http://bmp.lightbody.net/). Some people are solving this with browser specific configurations too.

But all of this feels heavy. Instead, let's look at a simple approach that is browser agnostic and quick to setup.

## A Solution

By specifying the username and password _in the URL_ when visiting a page with Selenium we can side-step the system level dialog box from Basic Auth and avoid the need to set up a proxy server. This approach will work for both HTTP and HTTPS pages.

Let's take a look at an example.

## An Example

First we'll include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), and start our class off with some setup and teardown methods.

```csharp
// filename: BasicAuth1.cs 
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

public class BasicAuth1
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

Now to add our test.

```csharp
// filename: BasicAuth1.cs
    [Test]
    public void ConnectToBasicAuthByURL()
    {
        Driver.Navigate().GoToUrl("http://admin:admin@the-internet.herokuapp.com/basic_auth");
        string PageMessage = Driver.FindElement(By.CssSelector("p")).Text;
        Assert.That(PageMessage.Contains("Congratulations!"));
    }
}
// ...
```

In the test we're loading the page by passing in the username and password in the front of the URL (e.g., `http://admin:admin@`). Once it loads we grab text from the page to make sure we ended up in the right place.

Alternatively we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth.

Here's what that would look like.

```csharp
// filename: BasicAuth2.cs 
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

class BasicAuth2
{
    IWebDriver Driver;

    [SetUp]
    public void SetUp()
    {
        Driver = new FirefoxDriver();
        Driver.Navigate().GoToUrl("http://admin:admin@the-internet.herokuapp.com/basic_auth");
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }

    [Test]
    public void AccessBasicAuthPageAfterAuthentication()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/basic_auth");
        string PageMessage = Driver.FindElement(By.CssSelector("p")).Text;
        Assert.That(PageMessage.Contains("Congratulations!"));
    }

}
```

__NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).__

## Expected Behavior

When you save the first example and run it here is what will happen:

+ Open the browser
+ Visit the page using Basic Auth
+ Get the page text
+ Assert that the text is what we expect
+ Close the browser

And when you save the second example and run it here is what will happen:

+ Open the browser
+ Visit the page using Basic Auth in the setup
+ Navigate to the Basic Auth page (without providing credentials)
+ Get the page text
+ Assert that the text is what we expect
+ Close the browser

## Outro

Hopefully this tip will help save you from getting tripped by Basic Auth when you come across it.
Happy Testing!
