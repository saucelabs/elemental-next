---
language: java
level: 1
hide_sidebar: true
publish_date: 2015-11-09
last_update:
  date: 2023-04-03
---

## A Solution

You can easily issue a key press by using the `send_keys` command. This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on [the Selenium Actions page for Building Advanced User Interactions](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html)).

Either approach will send a key press. The latter approach will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found.

Let's try out a couple of examples.

## Example

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
        driver.findElement(By.id("target")).sendKeys(Keys.SPACE);
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

## Summary

If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. But if you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this ti.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
