---
language: java
level: 0
hide_sidebar: true
publish_date: 2015-11-09
last_update:
  date: 2023-04-02
---

## A Solution

Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling Selenium to switch to that frame first. Then the rest of your test should be more straightforward.

Let's explore further with some examples.


## Example 1

First we'll need to import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: Frames.java

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;

public class Frames {
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

Now onto our test. In it we'll step through [an example of nested frames](http://the-internet.herokuapp.com/nested_frames) from [the-internet](https://github.com/tourdedave/the-internet).

```java
// filename: Frames.java
// ...
    @Test
    public void nestedFrames() throws Exception {
        driver.get("http://the-internet.herokuapp.com/nested_frames");
        driver.switchTo().frame("frame-top");
        driver.switchTo().frame("frame-middle");
        assertThat(driver.findElement(By.id("content")).getText(), is(equalTo("MIDDLE")));
    }
// ...
```

With Selenium's [`.switchTo()`](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebDriver.html#switchTo--) method we can easily switch to the frame we want. When using it for frames (e.g., `driver.switchTo().frame();`) it accepts either an ID or name attribute. But in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) first _and then_ switch to the child frame (e.g., the middle frame).

Once we've done that we're able to find the element we need, grab it's text, and assert that it's what we expect.

While this example helps illustrate the point of frame switching, it's not very practical.

## Example 2
Here is a more likely example you'll run into -- working with a WYSIWYG Editor like [TinyMCE](http://www.tinymce.com/). You can see the page we're testing [here](http://the-internet.herokuapp.com/tinymce).

```java
// filename: Frames.java
// ...
    @Test
    public void iFrames() throws Exception {
        driver.get("http://the-internet.herokuapp.com/tinymce");
        driver.switchTo().frame("mce_0_ifr");
        WebElement editor = driver.findElement(By.id("tinymce"));
        String beforeText = editor.getText();
        editor.clear();
        editor.sendKeys("Hello World!");
        String afterText = editor.getText();
        assertThat(afterText, not(equalTo((beforeText))));
// ...
```

Once the page loads we switch into the frame that contains TinyMCE and...

+ grab the original text and store it
+ clear and input new text
+ grab the new text value
+ assert that the original and new texts are not the same

Keep in mind that if we need to access a part of the page outside of the frame we're currently in we'll need to switch to it. Thankfully Selenium has a method that enables us to quickly jump back to the top level of the page -- [`driver.switchTo().defaultContent();`](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebDriver.TargetLocator.html#defaultContent--).

Here is what that looks like in practice.

```java
// filename: Frames.java
// ...
        driver.switchTo().defaultContent();
        assertThat(driver.findElement(By.cssSelector("h3")).getText(),
                is("An iFrame containing the TinyMCE WYSIWYG Editor"));
    }

}
```

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

<u>Example 1</u>

+ Open the browser
+ Visit the page
+ Switch to the nested frame
+ Grab the text from the frame and assert that Selenium is in the correct place
+ Close the browser

<u>Example 2</u>

+ Open the browser
+ Visit the page
+ Switch to the frame that contains the TinyMCE editor
+ Find and store the text in the editor
+ Clear the text in the editor
+ Input new text in the editor
+ Find and store the new text in the editor
+ Assert that the original and new text entries don't match
+ Switch to the top level of the page
+ Grab the text from the top of the page and assert it's what we expect
+ Close the browser

## Summary

Now you're ready to handily defeat frames when they cross your path.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
