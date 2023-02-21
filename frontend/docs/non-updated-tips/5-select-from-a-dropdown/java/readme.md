---
title: "How To Select From a Dropdown List"
slug: "5-select-from-a-dropdown"
number: 5
publish_date: 2015-11-09
tags:
  - "dropdown"
  - "forms"
level: 1
category: "testing"
---

## The Problem

Selecting from a dropdown list *seems* like one of those simple things. Just grab the list by it's element and select an item within it based on the text you want.

While it sounds pretty straightforward, there is a bit more finesse to it.

Let's take a look at a couple of different approaches.

## An Example

First let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: Dropdown.java

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class Dropdown {
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

Now let's wire up our test.

```java
// filename: Dropdown.java
// ...
    @Test
    public void dropdownTest() {
        driver.get("http://the-internet.herokuapp.com/dropdown");
        WebElement dropdownList = driver.findElement(By.id("dropdown"));
        List<WebElement> options = dropdownList.findElements(By.tagName("option"));
        for (int i = 0; i < options.size(); i++) {
            if (options.get(i).getText().equals("Option 1")) {
                options.get(i).click();
            }
        }
        String selectedOption = "";
        for (int i = 0; i < options.size(); i++) {
            if (options.get(i).isSelected()) {
                selectedOption = options.get(i).getText();
            }
        }
        assertThat(selectedOption, is("Option 1"));
    }
// ...
```

After visiting [the example application](http://the-internet.herokuapp.com/dropdown) we find the dropdown list by it's ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each `option`) with `findElements` (note the plural).

Grabbing all of the options with `findElements` returns a collection that we iterate over. When the text matches what we want, we click on it.

We finish the test by performing a check to see that our selection was made correctly. This is done by iterating over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it.

While this works, there is a simpler, built-in way to do this with Selenium. Let's give that a go.

## Another Example

```java
// filename: Dropdown.java
// ...
    @Test
    public void dropdownTestRedux() {
        driver.get("http://the-internet.herokuapp.com/dropdown");
        Select selectList = new Select(driver.findElement(By.id("dropdown")));
        selectList.selectByVisibleText("Option 1");
        assertThat(selectList.getFirstSelectedOption().getText(), is(equalTo("Option 1")));
    }

}
```

Similar to the first example, we are finding the dropdown list by it's ID. But instead of iterating over its option elements and clicking based on a conditional we are leveraging a built-in helper function of Selenium. With [`Select`](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/support/ui/Select.html) and it's `selectBy` methods (e.g., [`selectByVisibleText`](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/support/ui/Select.html#selectByVisibleText-java.lang.String-)) we're able to easily choose the item we want.

We then ask the `selectList` what option was selected by using [`getFirstSelectedOption`](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/support/ui/Select.html#getFirstSelectedOption--) and perform our assertion against it's text.

As an aside, in addition to selecting by text you can also select by value.

```java
        select.selectByValue("1");
```

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen for either example:

+ Open the browser
+ Visit the example application
+ Find the dropdown list
+ Select the specified item from the dropdown list
+ Assert that the selected option is what you expect 
+ Close the browser

## Outro

Hopefully this tip will help you breeze through selecting items from a dropdown list.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available [here](http://github.com/tourdedave/elemental-selenium-tips).

Happy Testing!
