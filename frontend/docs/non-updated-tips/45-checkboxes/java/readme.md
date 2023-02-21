---
title: "How To Test Checkboxes"
slug: "45-checkboxes"
number: 45
publish_date: 2015-11-11
tags:
  - "checkboxes"
  - "attribute"
  - "selected"
level: 1
category: "testing"
---

## The Problem

Checkboxes are an often used element in web applications. But how do you work with them in your Selenium tests? Intuitively you may reach for a method that has the word 'checked' in it -- like `.checked?` or `.isChecked`. But this doesn't exist in Selenium. So how do you do it?

## A Solution

There are two ways to approach this -- by seeing if an element has a `checked` attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been _selected_.

Let's step through each approach to see their pros and cons.

## An Example

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

## Outro

Attribute lookups are meant for pulling information out of the page for review. While they work in this circumstance, you're better off using a selected lookup. But the approach you choose will depend on how the checkboxes you're testing are constructed. 

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
