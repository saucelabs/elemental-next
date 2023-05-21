---
title: "45: How To Test Checkboxes"
id: "45-checkboxes-java"
contentUrl: "docs/how-to-test-checkboxes/45-checkboxes-java"
sidebar_label: Java
text: "Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests."
number: 45
hide_table_of_contents: true
publish_date: 2015-10-13
last_update:
  date: 2023-03-30
tags:
  - 'checkboxes'
  - 'attribute'
  - 'selected'
level: 1
category:
  - fundamentals
language: java
---

# How to Test Checkboxes

## Intro

Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests.

Intuitively you may reach for a method that has the word 'checked' in it -- like `.checked` or `.is_checked` but this doesn't exist in Selenium.

## A Solution

There are two ways to approach this issue -- by seeing if an element has a `checked` attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been _selected_.

We're going to go through each of these approaches to see their pros and cons.

## Example

For reference, here is the markup from [the page we'll be testing against](http://the-internet.herokuapp.com/checkboxes) (from [the-internet](https://github.com/tourdedave/the-internet)).

```html
<form>
  <input type="checkbox"> unchecked<br>
  <input type="checkbox" checked=""> checked
</form>
```

First let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: Checkboxes.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.List;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class Checkboxes {
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

Before we write any tests, let's walk through both checkbox approaches to see what Selenium gives us.

To do that we'll want to grab all of the checkboxes on the page, and iterate through them. Once using an attribute lookup, and again asking if the element is selected. Each time outputting the return value we get from Selenium.

```java
    @Test
    public void checkboxDiscoveryTest() {
        driver.get("http://the-internet.herokuapp.com/checkboxes");
        List<WebElement> checkboxes = driver.findElements(By.cssSelector("input[type='checkbox']"));

        System.out.println("With .attribute('checked')");
        for (WebElement checkbox : checkboxes) {
            System.out.println(String.valueOf(checkbox.getAttribute("checked")));
        }

        System.out.println("\nWith .selected?");
        for (WebElement checkbox : checkboxes) {
            System.out.println(checkbox.isSelected());
        }
    }
// ...
```

When we save our file and run it (e.g., `mvn clean test` from the command-line), here is the output we'll see:

```sh
With .attribute('checked')
null
"true"

With .selected?
false
true
```

With the attribute lookup, depending on the state of the checkbox, we receive either a `null` or a string with the value `"true"`. Whereas with `.selected?` we get a boolean (`true` or `false`) response.

Let's see what these approaches look like when put to use in a test.

```java
// filename: Checkboxes.java
// ...
    @Test
    public void checkboxOption1Test() throws Exception {
        driver.get("http://the-internet.herokuapp.com/checkboxes");
        WebElement checkbox = driver.findElement(By.cssSelector("form input:nth-of-type(2)"));
        assertThat(checkbox.getAttribute("checked"), is(not("null")));
        assertThat(checkbox.getAttribute("checked"), is("true"));
    }
// ...
```

With an attribute lookup we check against the return value (which is a String). In this case we're seeing if the return value is not `"null"` and is `"true"`. Let's see what the other approach looks like.

```java
// filename: Checkboxes.java
// ...
    @Test
    public void checkboxOption2Test() throws Exception {
        driver.get("http://the-internet.herokuapp.com/checkboxes");
        WebElement checkbox = driver.findElement(By.cssSelector("form input:nth-of-type(2)"));
        assertThat(checkbox.isSelected(), is(true));
    }

}
```

In this case, when referencing the return value it's a simple matter of checking against a boolean.


## Expected Behavior

When you save and run the file (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find all of the checkboxes on the page
+ Assert that the second checkbox (the one that is supposed to be checked on initial page load) is checked
+ Close the browser

## Summary

Attribute lookups are meant for pulling information out of the page for review. While they work in this circumstance, you're better off using a selected lookup. But the approach you choose will depend on how the checkboxes you're testing are constructed. 

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.