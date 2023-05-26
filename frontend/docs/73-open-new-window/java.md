---
language: java
level: 1
hide_sidebar: true
publish_date: 2023-02-17
last_update:
    date: 2023-03-21
---

## A Solution

With the release of Selenium 4 comes the `newWindow` command which allows you to create a new window or new tab (without needing a keyboard input), then select that tab, and navigate to a website:

| **Language** | **New Window**                                                                                                                                                                                                  | **New Tab**                                                                                                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Java**     | [`driver.switchTo().newWindow(WindowType.WINDOW);`](https://github.com/saucelabs-training/demo-java/blob/docs-1.2/selenium-examples/src/test/java/com/saucedemo/selenium/se4newfeatures/NewWindowTest.java#L13) | [`driver.switchTo().newWindow(WindowType.TAB);`](https://github.com/saucelabs-training/demo-java/blob/docs-1.2/selenium-examples/src/test/java/com/saucedemo/selenium/se4newfeatures/NewWindowTest.java#L21) |
| **Python**   | [`driver.switch_to.new_window('window')`](https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_new_window.py#L5)                                                 | [`driver.switch_to.new_window('tab')`](https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_new_window.py#L12)                                                |
| **Ruby**     | [`@driver.switch_to.new_window(:window)`](https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/new_window_spec.rb#L7)                                                 | [`@driver.switch_to.new_window(:tab)`](https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/new_window_spec.rb#L13)                                                |
| **C#**       | [`Driver.SwitchTo().NewWindow(WindowType.Window);`](https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/NewWindow.cs#L39)        | [`Driver.SwitchTo().NewWindow(WindowType.Tab);`](https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/NewWindow.cs#L48)        |

##### _Click on any of the code snippets in the table for more information and script demos._

<br />

## Example

To open a new window, you call the driver you instantiated with a method that allows you to switch to a new window or tab.

After using the new window (or tab) method, use the `driver.get` method to navigate to a website or URL. See the examples in the table of the previous section to see how this would be implemented.

Now you can add any other actions or assertions you’d like to do on the page. In the `Java` example below, you can see how a test and multiple windows are created and handled:

```java
// filename: new-window.java

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import junit.framework.TestCase;
import org.openqa.selenium.Point;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class NewWindow {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }


    @Test
    public void multipleWindows() throws InterruptedException {
        driver.get("http://the-internet.herokuapp.com/windows");
        driver.switchTo().newWindow(WindowType.WINDOW);
        driver.manage().window().setPosition(new Point(100, 400));
        driver.get("https://the-internet.herokuapp.com/typos");

        TestCase Assertions = null;
        TestCase.assertEquals(2, driver.getWindowHandles().toArray().length);
    }
}
```

## Expected Behavior

If you run the `Java` example referenced above (`new-window.java`), this test will:

- Open Firefox browser
- Navigate to the-internet website
- Open a New Window and move it to a different position on the screen
- Navigate to the Typos page on the-internet website
- Check the number of windows open
- Close all browsers

## Summary

There are many possible use cases for this new way of opening and focusing on new browser tabs and windows across OS and browser combinations.

From testing the way a user can interact with two windows side-by-side, to testing performance and behavior of multiple windows, this new command makes it simpler to test on multiple web pages.

Happy Testing!

## About The Author

This tip is brought to you by [Lindsay Walker](https://www.linkedin.com/in/lindsayjowalker/)

![Lindsay Walker profile picture](/img/authors/lindsay-walker.jpeg#author-img 'a title')
