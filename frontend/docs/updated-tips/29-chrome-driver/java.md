---
title: 'Java'
id: '29-chrome-driver-java'
slug: java/
number: 29
publish_date: 2016-11-26
last_update:
  date: 2023-04-03
tags:
  - 'drivers'
  - 'chromedriver'
  - 'chrome'
  - 'different browsers'
level: 2
category:
  - fundamentals
  - remote
language: java
---

# How to Run Your Tests Locally Against Chrome

## Intro

It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started. 

With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers.

## A Solution

[WebDriver](https://www.selenium.dev/documentation/webdriver/) works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser. 

[ChromeDriver](https://chromedriver.chromium.org/downloads) is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally.

Let's step through an example using ChromeDriver ([download here](https://chromedriver.chromium.org/downloads)).

## Example

Before starting, we'll need to download the latest ChromeDriver binary executable from [here](http://chromedriver.storage.googleapis.com/index.html). Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:

+ Add it to the System PATH
+ Specify it in the Selenium setup

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
        System.setProperty("web-driver.chrome.driver",
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

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen.

+ ChromeDriver starts
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver stops

## Summary

Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official [Selenium Quick Reference page for Installing Browser Drivers](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.