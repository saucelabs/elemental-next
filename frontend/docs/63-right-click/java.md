---
level: 2
language: java
hide_sidebar: true
publish_date: 2015-11-11
last_update:
  date: 2023-04-03
---

## A Solution

By leveraging [Selenium's Action Builder](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html) we can issue a right-click command (a.k.a. a [`contextClick`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html#contextClick())).

We can then select an option from the menu by traversing it with keyboard arrow keys (which we can issue with the Action Builder's [`sendKeys`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html#sendKeys(java.lang.CharSequence...)) command.

Let's continue with an example.

## Example

Let's start by importing our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: RightClick.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class RightClick {
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

Now we're ready to write our test.

Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that will render a custom context menu when we right-click on a specific area of the page ([link](http://the-internet.herokuapp.com/context_menu)).
Clicking the context menu item will trigger a JavaScript alert which will say `You selected a context menu`. We'll grab this text and use it to assert that the menu was actually triggered.

```java
// filename: RightClick.java
// ...
    @Test
    public void rightClickTest() throws InterruptedException {
        driver.get("http://the-internet.herokuapp.com/context_menu");
        WebElement menu = driver.findElement(By.id("hot-spot"));
        Actions action = new Actions(driver);
        action.contextClick(menu)
                .sendKeys(Keys.ARROW_DOWN)
                .sendKeys(Keys.ARROW_DOWN)
                .sendKeys(Keys.ARROW_DOWN)
                .sendKeys(Keys.ENTER)
                .perform();
        Alert alert = driver.switchTo().alert();
        assertThat(alert.getText(), is(equalTo("You selected a context menu")));
    }

}
```

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find and right-click the area of the page that renders a custom context menu
+ Navigate to the context menu option with keyboard keys
+ JavaScript alert appears
+ Grab the text of the JavaScript alert
+ Assert that the text from the alert is what we expect
+ Close the browser

## Summary

To learn more about context menus, you can read [this write-up from the Tree House blog](http://blog.teamtreehouse.com/building-html5-context-menus).

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
