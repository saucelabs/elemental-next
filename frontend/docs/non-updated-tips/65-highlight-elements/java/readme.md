---
title: "How To Visually Verify Your Locators"
slug: "65-highlight-elements"
number: 65
publish_date: 2015-11-11
tags:
  - "guest post"
  - "highlight"
  - "javascript"
  - "locators"
level: 2
category: "testing"
---

This is a pseudo guest post from Brian Goad. I've adapted a blog post of his with permission. You can see the original [here](http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/). Brian is a Test Engineer at [Digitalsmiths](http://www.digitalsmiths.com/). You can follow him on Twitter at [@bbbco](https://twitter.com/bbbco) and check out his testing blog [here](http://swdandruby.wordpress.com/).

## The Problem

It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?

## A Solution

By leveraging some simple JavaScript and CSS styling, you can highlight a targeted element on the page so you can visually inspect it to make sure it's the one you want.

Let's take a look at an example.

## An Example

First let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: HighlightElement.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class HighlightElement {
    WebDriver driver;
    JavascriptExecutor js;

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
        js = (JavascriptExecutor) driver;
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }
// ...
```

Now let's create a `highlightElement` helper method that will accept a Selenium WebDriver `element` and a time to wait (e.g., `duration`) as arguments.

By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a sensible default (e.g., 3 seconds).

```java
// filename: HighlightElement.java
// ...
    private void highlightElement(WebElement element, int duration) throws InterruptedException {
        String original_style = element.getAttribute("style");

        js.executeScript(
                "arguments[0].setAttribute(arguments[1], arguments[2])",
                element,
                "style",
                "border: 2px solid red; border-style: dashed;");

        if (duration > 0) {
            Thread.sleep(duration * 1000);
            js.executeScript(
                    "arguments[0].setAttribute(arguments[1], arguments[2])",
                    element,
                    "style",
                    original_style);
        }
    }
```

There are three things going on here.

+ We store the style of the element so we can revert it back when we're done
+ We change the style of the element so it visually stands out (e.g., a red dashed border)
+ We revert the style of the element back after 3 seconds (or longer if specified)

We're accomplishing the style change through JavaScript's `setAttribute` function. And we're executing it with Selenium's `executeScript` command.

To use this in our test is simple, we just need to find an element and then pass it to `highlightElement`.

```java
// filename: HighlightElement.java
// ...
    @Test
    public void highlightElementTest() throws InterruptedException {
        driver.get("http://the-internet.herokuapp.com/large");
        WebElement element = driver.findElement(By.id("sibling-2.3"));
        highlightElement(element, 3);
    }

}
```

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen.

+ Open the browser
+ Load the page
+ Find the element to highlight
+ Change the styling of the element so it has a red dashed-line border
+ Wait 3 seconds
+ Revert the styling of the element back (removing the red border)
+ Close the browser

## Outro

This approach can be handy when trying to debug your test. Alternatively, you could verify your locators by using a browser plugin like FireFinder. You can read more about how to do that in [tip 35](/tips/verifying-locators).

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
