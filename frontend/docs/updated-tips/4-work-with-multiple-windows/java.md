---
title: 'Java'
id: '4-work-with-multiple-windows-java'
slug: java/
number: 4
publish_date: 2015-08-21
last_update:
  date: 2023-04-03
tags:
  - 'windows'
  - 'multiple windows'
  - 'new window'
level: 2
category:
  - fundamentals
language: java
---

# How to Work with Multiple Windows

## Intro

This tip will explain how to work with multiple windows in Selenium and switch between them.

Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them.

On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for that you may find in some browsers and not others.

Let's step through a couple of examples to demonstrate.


## Example 1

First let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: MultipleWindows.java

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.Set;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.*;

public class MultipleWindows {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }
// ...
```

Now let's write a test that exercises new window functionality from an application. In this case, we'll be using [the new window example](http://the-internet.herokuapp.com/windows) from [the-internet](https://github.com/tourdedave/the-internet).

```java
// filename: MultipleWindows.java
// ...
    @Test
    public void multipleWindows() {
        driver.get("http://the-internet.herokuapp.com/windows");
        driver.findElement(By.cssSelector(".example a")).click();
        Object[] allWindows = driver.getWindowHandles().toArray();
        driver.switchTo().window(allWindows[0].toString());
        assertThat(driver.getTitle(), is(not("New Window")));
        driver.switchTo().window(allWindows[1].toString());

        Thread.sleep(2000);
        assertThat(driver.getTitle(), is("New Window"));
        Thread.sleep(2000);
    }
// ...
```

After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the second one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window.

While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return it in the order opened, others _alphabetically_.

Here's a more resilient approach. One that will work across all browsers.

## Example 2

```java
// filename: MultipleWindows.java
// ...
    @Test
    public void multipleWindowsRedux() {
        driver.get("http://the-internet.herokuapp.com/windows");
        String firstWindow = driver.getWindowHandle();
        String newWindow = "";
        driver.findElement(By.cssSelector(".example a")).click();
        Set<String> allWindows = driver.getWindowHandles();

        for (String window : allWindows) {
            if (!window.equals(firstWindow)) {
                newWindow = window;
            }
        }

        driver.switchTo().window(firstWindow);
        assertThat(driver.getTitle(), is(not(equalTo("New Window"))));

        driver.switchTo().window(newWindow);
        
        Thread.sleep(2000);
        assertThat(driver.getTitle(), is(equalTo("New Window")));
        Thread.sleep(2000);
    }

}
```

After loading the page we store the window handle in a variable (e.g., `firstWindow`) and then proceed with clicking the new window link.

Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the one we've already stored). We store the new window result in another variable (e.g., `newWindow`) and then switch between the windows, checking page title each time to make sure the correct window is in focus.


## Expected Behavior

If you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen for either example:

+ Open the browser
+ Visit the page
+ Click to open a new window
+ Switch between the windows
+ Check the page title to make sure the correct window is in focus
+ Close the browser

## Summary

I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium.

Thanks to [Jim Evans](https://twitter.com/jimevansmusic) for providing the info for this tip, and [Roman Isko](https://github.com/RomanIsko) for the initial code contribution.

For more information about switching windows (and tabs) visit the official Selenium HQ [documentation page](https://www.selenium.dev/documentation/webdriver/interactions/windows/).

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.