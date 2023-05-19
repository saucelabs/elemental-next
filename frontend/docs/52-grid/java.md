---
title: '52: How To Use Selenium Grid'
id: '52-how-to-use-selenium-grid-java'
contentUrl: "docs/grid/52-how-to-use-selenium-grid-java"
sidebar_label: Java
text: 'With Selenium Grid you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with.'
number: 52
hide_table_of_contents: true
publish_date: 2015-08-25
last_update:
  date: 2023-02-22
tags:
  - 'grid'
  - 'selenium grid'
  - 'cross browser'
level: 2
category:
  - 'tools'
language: java
---

# How to Use Selenium Grid

## Intro

If you're looking to run your tests on different browser and operating system combinations but you're unable to justify using 
a third-party solution like [Sauce Labs](https://saucelabs.com/) or [BrowserStack](http://www.browserstack.com/) then what 
do you do?

## A Solution

With [Selenium Grid](https://www.selenium.dev/documentation/grid/) you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with.

>A brief primer of Selenium Grid
>
>Selenium Grid is part of [the Selenium project](https://www.selenium.dev/). It lets you distribute test execution across several machines. You can connect to it with a remote WebDriver by specifying the browser, browser version, and operating system you want. You specify these values through Selenium `Capabilities`.
>
>There are two main elements to Selenium Grid -- a Hub, and Nodes. First you need to stand up a Hub. Then you can connect (or "register") Nodes to that Hub. 
>Nodes are where your tests will run, and the Hub is responsible for making sure your tests end up on the right one (e.g., the machine with the operating 
>system and browser you specified in your test).

Let's continue with an example.

## Example

### Part 1: Grid Setup

Selenium Grid comes built into the Selenium Standalone Server. So to get started we'll need to download the latest version of it from the Selenium 
[releases](https://github.com/SeleniumHQ/selenium/releases).

Then we need to start the Hub.

```sh
> java -jar selenium-server-<version>.jar hub 
...
16:49:29.816 INFO [Hub.execute] - Started Selenium Hub
...
```

After that we can register Nodes to it.

```sh
> java -jar selenium-server-<version>.jar node --hub http://localhost:4444
...
16:51:47.726 INFO [NodeServer.execute] - Started Selenium Node
...
```

__NOTE: This example only demonstrates a single node on the same machine as the hub. To span nodes across multiple machines you will need to place the standalone server on each machine and launch it with the same registration command (replacing `http://localhost` with the location of your hub, and specifying additional parameters as needed).__

Now that the grid is running we can view the available browsers by visiting our Grid's console at `http://localhost:4444/grid/console`.

![Grid Console](./../images/grid-console.png)

To refine the list of available browsers, we can specify an additional `--driver-implementation` parameter when registering the Node. 
For instance, if we wanted to only offer Safari on a node, we could specify it with `--driver-implementation safari`, which would look 
like this:

```sh
java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari
```

We could also repeat this parameter again if we wanted to explicitly specify more than one browser.

```sh
java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari --driver-implementation chrome
```

There are numerous parameters that we can use at run time. You can see a full list at the 
[Selenium Grid documentation](https://www.selenium.dev/documentation/grid/configuration/cli_options/).

### Part 2: Test Setup

Now let's wire up a simple test to use our new Grid.

```java
// filename: Grid.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class Grid {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        FirefoxOptions capabilities = new FirefoxOptions();
        String url = "http://localhost:4444";
        driver = new RemoteWebDriver(new URL(url), capabilities);
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }

    @Test
    public void gridTest() {
        driver.get("http://the-internet.herokuapp.com/");
        assertThat(driver.getTitle(), is(equalTo("The Internet")));
    }

}
```

Notice in this configuration we're using a remote WebDriver in Selenium (e.g., `new RemoteWebDriver()`) to connect to the Grid. 
And we are telling the Grid which browser we want to use with the browser options (e.g., `new FirefoxOptions();`).

You can see a full list of the available browser options at the [Selenium documentation](https://www.selenium.dev/documentation/webdriver/browsers/).

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Connect to the Grid Hub
+ Hub determines which Node has the necessary browser/platform combination
+ Hub connects the test to the Node
+ Browser opens on the Node
+ Test runs
+ Browser closes on the Node

## Summary

If you're looking to set up Selenium Grid to work with Internet Explorer or Chrome, be sure to read up on how to set them up since there is 
additional configuration required for each. And if you run into issues, be sure to check out the browser driver documentation for the 
browser you're working with:

+ [ChromeDriver](https://chromedriver.chromium.org/)
+ [FirefoxDriver](https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html)
+ [SafariDriver](https://developer.apple.com/documentation/webkit/about_webdriver_for_safari)

Also, it's worth noting that while Selenium Grid is a great option for scaling your test infrastructure, it by itself will NOT give you 
parallelization. That is to say, it can handle as many connections as you throw at it (within reason), but you will still need to find a 
way to execute your tests in parallel.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of 
testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, 
Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around 
the world about automated acceptance testing.
