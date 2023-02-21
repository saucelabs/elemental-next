---
title: "How To Take A Screenshot on Failure"
slug: "16-take-screenshot-on-failure"
number: 16
publish_date: 2015-11-11
tags:
  - "reporting"
  - "screenshot"
level: 2
category: "reporting"
---

## The Problem

With browser tests it can often be challenging to track down the issue that caused a failure. By itself a failure message along with a stack trace is hardly enough to go on. Especially when you run the test again and it passes.

## A Solution

A simple way to gain insight into your test failures is to capture screenshots at the moment of a failure. And it's a quick and easy thing to add to your tests.

Let's dig in with an example.

## An Example

Let's start by importing our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with a setup method.

```java
// filename: Screenshot.java
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TestRule;
import org.junit.rules.TestWatcher;
import org.junit.runner.Description;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class Screenshot {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
    }
// ...
```

We still need to handle our teardown. But in order to get the timing right with screenshots on failure we'll need to break from the norm of a simple `@After` annotation. For this we'll look to a [JUnit Rule](https://github.com/junit-team/junit/wiki/Rules), specifically the [TestWatcher](http://junit.org/apidocs/org/junit/rules/TestWatcher.html).

```java
// filename: Screenshot.java
// ...
    @Rule
    public TestRule watcher = new TestWatcher() {
        @Override
        protected void failed(Throwable throwable, Description description) {
            File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            try {
                FileUtils.copyFile(scrFile,
                        new File("failshot_"
                                + description.getClassName()
                                + "_" + description.getMethodName()
                                + ".png"));
            } catch (IOException exception) {
                exception.printStackTrace();
            }
        }

        @Override
        protected void finished(Description description) {
            driver.quit();
        }
    };
// ...
```

With a `TestWatcher` we easily gain access to a test after it's failed (e.g., in the `failed` method) and when the test completes regardless of it's outcome (e.g., the `finished` method). So for our teardown we issue `driver.quit();` in `finished`. And when there's a failure we capture a screenshot and write it to disk (in the current working directory) in `failed`.

There are numerous ways to make the filename unique (e.g., unique ID, timestamp, etc.). The simplest way to get started is with the test class name and the test method name, which we've done.

Now let's wire up our test with a forced failure.

```java
// filename: Screenshot.java
// ...
    @Test
    public void OnError() {
        driver.get("http://the-internet.herokuapp.com");
        assertThat(false, is(true));
    }

}
```

## Expected Behavior

When you save this file and run it (`mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Fail
+ Capture a screenshot in the current working directory with the name `failshot_Screenshot_OnError.png`
+ Close the browser

## Outro

Happy Testing!
