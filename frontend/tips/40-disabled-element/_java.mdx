## Example

For this example we will use [the dropdown list](http://github.com/tourdedave/the-internet) from [the-internet](http://the-internet.herokuapp.com/dropdown). In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled.

Let's start by importing our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: DisabledElements.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

public class DisabledElements {
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

Now to wire up our test.

```java
// filename: DisabledElements.java
// ...
    @Test
    public void test() {
        driver.get("http://the-internet.herokuapp.com/dropdown");
        Select dropdown = new Select(driver.findElement(By.id("dropdown")));
        assertThat(dropdown.getOptions().get(0).isEnabled(), is(false));
    }

}
```

After visiting the page we find the dropdown list with the `Select` function and store it in a variable. We then put it to use in our assertion, scoping to the first value (`dropdown.getOptions().get(0)`) to check if it's enabled (e.g., `.isEnabled()`). This will return a boolean result. If the element is disabled (e.g., not selectable) then Selenium will return `false`. So that's what we use in our assertion (e.g., `is(false)`).

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Open a browser
+ Visit the page
+ Grab the dropdown list
+ Assert that the target element is not enabled
+ Close the browser

## Summary

Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable.

Happy Testing!
