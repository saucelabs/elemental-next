---
language: java
level: 1
hide_sidebar: true
publish_date: 2015-11-10
last_update:
  date: 2023-04-03
---

## A Solution

Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.


## Example

Our example application is available [here](http://the-internet.herokuapp.com/javascript_alerts) on [the-internet](http://github.com/tourdedave/the-internet). It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click `Ok` or `Cancel`).

First let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: JavaScriptAlert.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class JavaScriptAlert {
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

Now let's write our test.

```java
// filename: JavaScriptAlert.java
// ...
    @Test
    public void JavaScriptAlertTest() {
        driver.get("http://the-internet.herokuapp.com/javascript_alerts");
        driver.findElement(By.cssSelector(".example li:nth-child(2) button")).click();
        Alert popup = driver.switchTo().alert();
        popup.accept();
        String result = driver.findElement(By.id("result")).getText();
        assertThat(result, is(equalTo("You clicked: Ok")));
    }

}
```

A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find it with a child CSS Pseudo-class (`nth-child(2)`).

After click the button to trigger the JavaScript Alert we use Selenium's `switchTo().alert();` method to focus on the JavaScript pop-up and use `.accept();` to click `Ok`. If we wanted to click `Cancel` we would have used `.dismiss();`.

After accepting the alert, our browser window will automatically regain focus and the page will display the result that we chose. We use this text for our assertion, making sure that the words `You clicked: Ok` are displayed.


## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Load the page
+ Click the second button on the page
+ JavaScript Confirmation Alert appears
+ JavaScript Confirmation Alert is accepted and goes away
+ Assert that the result on the page is what we expect
+ Close the browser

## Summary

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
