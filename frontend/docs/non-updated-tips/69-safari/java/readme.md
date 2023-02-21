---
title: "How To Use Safari"
slug: "69-safari"
number: 69
publish_date: 2015-11-11
tags:
  - "safari"
  - "drivers"
  - "safaridriver"
  - "different browsers"
level: 1
category: "setup"
---

## The Problem

Running your Selenium tests on a different browser tends to require additional setup, and [SafariDriver](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver) is no exception.

## A Solution

Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension.

Let's step through how to do it and make sure it's working.

## An Example

The prebuilt SafariDriver extension can be downloaded from [here](http://selenium-release.storage.googleapis.com/index.html?path=2.48/) (the link is listed in [the __Getting Started__ section of the SafariDriver Selenium Wiki](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver#getting-started)). Download it, double-click it, and click `Trust` when prompted.

After that, make sure it's enabled. To do that:

1. open `Safari`
2. go to `Preferences`
3. click on the `Extensions` tab
4. Make sure `Enable WebDriver` is checked
5. Close `Safari`

<img src='/img/safari-extension.png'/>

Let's wire up a simple test so we can see that everything works as expected.

```java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.safari.SafariDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class Safari {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        driver = new SafariDriver();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }

    @Test
    public void dropdownTest() {
        driver.get("http://the-internet.herokuapp.com/");
        String title = driver.getTitle();
        assertThat(title, is(equalTo("The Internet")));
    }

}
```

When we run the test, we should see a successful communication between Selenium and Safari, which would look like this:

<img src='/img/safari-success.png'/>

## Expected Behavior

When you save the file and run it (e.g., `mvn clean test` from the command-line), here is what will happen:

+ Safari opens
+ The home page of [the-internet](http://github.com/tourdedave/the-internet) loads
+ The title of the page is checked to make sure it's what we expect
+ Safari closes

## Outro

Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing.

And if you're running Safari on a remote node (or set of nodes) then you'll need to install and enable the SafariDriver browser extension on _each_ of them (unless you're using a third-party service like [Sauce Labs[(http://saucelabs.com/) in which case you don't need to do any of this since they take care of that for you).

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
