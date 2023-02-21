---
title: "How To Press Keyboard Keys"
slug: "61-keyboard-keys"
number: 61
publish_date: 2015-11-09
tags:
  - "keyboard"
  - "keys"
  - "key presses"
  - "tab"
  - "enter"
level: 1
category: "testing"
---

## The Problem

On occasion you'll come across functionality that requires the use of keyboard key presses in your tests.

Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter.

But how do you do it and where do you start?

## A Solution

You can easily issue a key press by using the `send_keys` command.

This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on [the Selenium project's Wiki page for Advanced User Interactions](https://github.com/SeleniumHQ/selenium/wiki/Advanced-User-Interactions)). Either approach will send a key press. The latter will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found.

You can see a full list of keyboard key symbols [here](https://github.com/SeleniumHQ/selenium/blob/master/java/client/src/org/openqa/selenium/Keys.java).

Let's step through a couple of examples.

## An Example

First let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: KeyboardKeys.java

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.Keys;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;

public class KeyboardKeys {
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

Now we can wire up our test.

Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that will display what key has been pressed ([link](http://the-internet.herokuapp.com/key_presses)). We'll use the result text that gets displayed to perform our assertion.

```java
// filename: KeyboardKeys.java
// ...
    @Test
    public void uploadFile() throws Exception {
        driver.get("http://the-internet.herokuapp.com/key_presses");
        driver.findElement(By.id("content")).sendKeys(Keys.SPACE);
        assertThat(driver.findElement(By.id("result")).getText(), is("You entered: SPACE"));
// ...
```

After visiting the page we find an element that's visible (e.g., the one that contains the example on the page) and send the space key to it (e.g., `builder.sendKeys(Keys.SPACE).build().perform()`). Then we grab the resulting text (e.g., `driver.findElement(By.id("result")).getText()`) and assert that it says what we expect (e.g., `is("You entered: SPACE"));`).

Alternatively, we can also issue a key press without finding the element first.

```java
// filename: KeyboardKeys.java
// ...
        Actions builder = new Actions(driver);
        builder.sendKeys(Keys.LEFT).build().perform();
        assertThat(driver.findElement(By.id("result")).getText(), is("You entered: LEFT"));
    }

}
```

## Expected Behavior

When you save this file and run it (e.g. `mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find the element and send the space key to it
+ Find the result text on the page and check to that it's what we expect
+ Send the left arrow key to the element that's currently in focus
+ Find the result text on the page and check to that it's what we expect
+ Close the browser

## Outro

If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. But if you don't have a receiving element, or you need to string together multiple key presses, then the action builder is what you should reach for.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
