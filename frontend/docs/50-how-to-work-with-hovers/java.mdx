---
title: "50: How To Work With Hovers"
id: "50-hovers-java"
contentUrl: "docs/how-to-work-with-hovers/50-hovers-java"
sidebar_label: Java
text: "If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."
number: 50
hide_table_of_contents: true
publish_date: 2015-07-01
last_update:
  date: 2023-04-03
tags:
  - 'hover'
  - 'hovers'
  - 'action builder'
level: 1
category:
  - 'fundamentals'
language: java
---

# How to Work with Hovers

## Intro

If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.

## A Solution

The most popular use case for a hover action is to display additional menu options(submenu.)

By leveraging Selenium's [Action Builder](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html) we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after.

## Example

Our example application is available [here](http://the-internet.herokuapp.com/hovers) on [the-internet](http://github.com/tourdedave/the-internet). It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile.

Let's write a test that will hover over the first avatar and make sure that this additional information appears.

First we'll import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: Hovers.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class Hovers {
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

Now let's write our test.

```java
// ...
    @Test
    public void hoversTest() {
        driver.get("http://the-internet.herokuapp.com/hovers");

        WebElement avatar = driver.findElement(By.className("figure"));
        Actions builder = new Actions(driver);
        builder.moveToElement(avatar).build().perform();

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("figcaption")));

        assertThat(driver.findElement(By.className("figcaption")).isDisplayed(), is(Boolean.TRUE));
    }

}
```

After visiting the page we find the first avatar and store it in a variable (`avatar`). We then use Selenium's `action.moveToElement` method and pass the avatar variable to it (which triggers the hover) and check to see if the additional user information displayed.


## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Hover over the first avatar
+ Assert that the caption displayed to the user
+ Close the browser

## Summary

Hopefully this will help you handle more complex user interactions like hovers.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
