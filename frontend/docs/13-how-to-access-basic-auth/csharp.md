---
language: csharp
level: 1
hide_sidebar: true
publish_date: 2016-06-12
last_update:
  date: 2023-03-29
---

## A Solution

By specifying the username and password _in the URL_ when visiting a page with Selenium, we can a side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages.

## Example 1

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

## Example 2

Alternatively we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth.

Here's what that script would look like.

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

**NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).**

## Expected Behavior

When you save the first example and run it here is what will happen:

- Open the browser
- Visit the page using Basic Auth
- Get the page text
- Assert that the text is what we expect
- Close the browser

And when you save the second example and run it here is what will happen:

- Open the browser
- Visit the page using Basic Auth in the setup
- Navigate to the Basic Auth page (without providing credentials)
- Get the page text
- Assert that the text is what we expect
- Close the browser

## Summary

Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
