---
title: Java
id: how-to-add-growl-notifications-java
slug: java/
number: 53
publish_date: 2016-11-22
last_update:
  date: 2023-04-03
tags:
  - jquery
  - growl
  - growl notifications
  - jquery-growl
level: 2
category:
  - troubleshooting
language: java
---

# How to Add Growl Notifications to Your Tests

## Intro

Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece -- all for the sake of trying to track down a transient issue.

## A Solution

By leveraging something like [jQuery Growl](http://ksylvest.github.io/jquery-growl/) you can output non-interactive debugging statements directly to the page you're testing.

With Growl way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs

Let's step through an example of how to set this up.


## Example

First let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: Growl.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Growl {
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

Next we'll need to visit the page we want to display notifications on and do some work with JavaScript to load [jQuery](http://jquery.com/), jQuery Growl, and styles for jQuery Growl. After that, we can issue commands to jQuery Growl to make notification messages display on the page.

```java
// filename: Growl.java
// ...
    @Test
    public void growlTest() throws InterruptedException {
        driver.get("http://the-internet.herokuapp.com/");

        // Check for jQuery on the page, add it if need be
        js.executeScript("if (!window.jQuery) {" +
                "var jquery = document.createElement('script'); jquery.type = 'text/javascript';" +
                "jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';" +
                "document.getElementsByTagName('head')[0].appendChild(jquery);" +
                "}");

        // Use jQuery to add jquery-growl to the page
        js.executeScript("$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

        // Use jQuery to add jquery-growl styles to the page
        js.executeScript("$('head').append('<link rel=\"stylesheet\" href=\"http://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');");

        Thread.sleep(5000); // Adding 2 seconds of extra time

        // jquery-growl w/ no frills
        js.executeScript("$.growl({ title: 'GET', message: '/' });");

        Thread.sleep(5000); // Adding 2 seconds of extra time to see 'GET' message
// ...
```

And if we wanted to see color-coded notifications, then we could use one of the following:

```java
// filename: Growl.java
// ...
        // jquery-growl w/ colorized output
        js.executeScript("$.growl.error({ title: 'ERROR', message: 'your error message goes here' });");
        js.executeScript("$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });");
        js.executeScript("$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });");
        Thread.sleep(5000);
    }

}
```
The `Thread.Sleep(5000);` is there for demonstration purposes. It will keep the Growl notifications on the page for 5 seconds so they're easier to see. However, if your test fails due to `growl`, you can also use `Thread.Sleep(5000);` to add some more time to your test.

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Browser opens
+ Visit the page
+ Make sure jQuery is on the page, add it if it's not
+ Add jQuery Growl to the page
+ Display a set of notification messages in the top-right corner of the page with jQuery Growl
+ Notification messages disappear after 5 seconds
+ Browser closes

## Summary

In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this, then that's the price you have to pay (unless you can get your team to add it to the application under test).

I'd like to give a big thanks to Jon Austen ([Twitter](https://twitter.com/austenjt), [GitHub](https://github.com/djangofan), [Blog](http://jonausten.info/)) for giving me the idea to use jQuery Growl with Selenium and [Roman Isko](https://github.com/RomanIsko) for contributing the code to port this tip to Java. Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.