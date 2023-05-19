---
title: "65: Highlight Elements"
id: "65-highlight-elements-java"
contentUrl: "docs/highlight-elements/65-highlight-elements-java"
sidebar_label: Java
text: "It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?"
number: 65
hide_table_of_contents: true
publish_date: 2014-09-11
last_update:
  date: 2023-04-03
tags:
  - 'guest post'
  - 'highlight'
  - 'javascript'
  - 'locators'
level: 2
category:
  - troubleshooting
language: java
---

# How to Visually Verify Your Locators

## Intro

>This is a pseudo guest post from Brian Goad. I've adapted one of his blog posts with his permission. You can see the original blog post [here](http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/).

It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?

## A Solution

By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want.

Let's take a look at an example.

## Example

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

## Summary

If you wanted to take this a step further, you could leverage this approach along with an interactive debugger. You can read more about how to do that [here in Brian's other guest post](http://elementalselenium.com/tips/14-interactive-prompts-revisited)==**`!! Link needs replacing !!`**==.

Alternatively, you could verify your locators by using a browser plugin like FireFinder. You can read more about how to do that [here in this previous tip](http://elementalselenium.com/tips/verifying-locators)==**`!! Link needs replacing !!`**==.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.