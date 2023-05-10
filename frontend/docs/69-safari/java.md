---
title: "69: Safari"
id: "69-safari-java"
contentUrl: "docs/safari/69-safari-java"
sidebar_label: Java
text: "Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension."
number: 69
hide_table_of_contents: true
publish_date: 2015-08-25
last_update:
  date: 2023-04-03
tags:
  - "safari"
  - "drivers"
  - "safaridriver"
  - "different browsers"
level: 1
category:
  - tools
language: java
---

# Safari Browser

## Intro

Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension.


## A Solution

Running your Selenium tests on a different browser tends to require additional setup, and [SafariDriver](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver) is no exception.

The following example will go through how to do it and make sure it's working.

## Example

Run the following command on the terminal:

`$  /usr/bin/safaridriver --enable`

After that, make sure it's enabled. To do that:

1. open `Safari`
2. go to `Develop`
3. click on `Allow Remote Automations`

Let's wire up a simple test so we can see that everything works as expected.

## Expected Behavior

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

When we run the test, we should see a successful communication between Selenium and Safari.

## Summary

Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing.

And if you're running Safari on a remote node (or set of nodes), you'll need to install and enable the SafariDriver browser extension on each of them.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial code for this tip.

Happy Testing!


## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.