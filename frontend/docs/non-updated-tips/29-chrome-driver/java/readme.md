---
title: "How To Run Your Tests Locally Against Chrome"
slug: "29-chrome-driver"
number: 29
publish_date: 2015-11-11
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

We'll start by importing our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: ChromeDriverExample.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;

public class ChromeDriverExample {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        System.setProperty("webdriver.chrome.driver",
                System.getProperty("user.dir") + "/../../vendor/chrome-driver-2.15/chromedriver_mac32");
        driver = new ChromeDriver();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }
// ...
```

Notice that in `setUp` we are telling Selenium where the ChromeDriver exectuable is with `setProperty("webdriver.chrome.driver"` before creating an instance of the browser. And by using `System.getProperty("user.dir")` we are able to reference the ChromeDriver binary within our project.

Now we're ready to add a test.

```java
// filename: ChromeDriverExample.java
// ...
    @Test
    public void chromeDriverTest() {
        driver.get("http://the-internet.herokuapp.com/");
        assertThat(driver.getTitle(), is(equalTo("The Internet")));
    }

}
```

If we save this file and run it (e.g., `mvn clean test`) it will launch an instance of Chrome, visit the homepage of [the-internet](http://the-internet.herokuapp.com/), and assert that the page title loaded.

## Another Example

Alternatively, we can launch ChromeDriver from the command-line...

```sh
> ./chromedriver
Starting ChromeDriver 2.18.343837 (52eb4041461e46a6b73308ebb19e85787ced4281) on port 9515
Only local connections are allowed.
```

...and connect to it with Selenium Remote.

```java
// filename: ChromeDriverExample.java
// ...
    @Before
    public void setUp() throws Exception {
        driver = new RemoteWebDriver(new URL("http://localhost:9515"), DesiredCapabilities.chrome());
    }
// ...
```

__NOTE: This approach will perform faster since ChromeDriver is already running and your test just needs to connect to it. Whereas the prior approach needs to start and stop ChromeDriver for _each_ test. The trade-off here is that ChromeDriver will keep running after your tests complete. So you'll either need to ensure it's always up, and/or come up with a way to shut it down after your tests finish.__

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen.

<u>Example 1</u>

+ ChromeDriver starts
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver stops

<u>Example 2</u>

+ ChromeDriver starts (via command-line execution)
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver continues to run until stopped

## Outro

Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements:

+ [ChromeDriver](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver)
+ [FirefoxDriver](https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver)
+ [InternetExplorer Driver](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
+ [SafariDriver](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver)

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
