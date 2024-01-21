## Example

Before starting, we'll need to download the latest ChromeDriver binary executable from [here](http://chromedriver.storage.googleapis.com/index.html). Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:

+ Add it to the System PATH
+ Specify it in the Selenium setup

We'll start by importing our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: ChromeDriverExample.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;

public class ChromeDriverExample {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        System.setProperty("web-driver.chrome.driver",
                System.getProperty("user.dir") + "/../../vendor/chrome-driver-2.15/chromedriver_mac32");
        driver = new ChromeDriver();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }
// ...
```

Notice that in `setUp` we are telling Selenium where the ChromeDriver exectuable is with `setProperty("webdriver.chrome.driver"` before creating an instance of the browser. And by using `System.getProperty("user.dir")` we are able to reference the ChromeDriver binary within our project.

Now we're ready to add a test.

```java
// filename: ChromeDriverExample.java
// ...
    @Test
    public void chromeDriverTest() {
        driver.get("http://the-internet.herokuapp.com/");
        assertThat(driver.getTitle(), is(equalTo("The Internet")));
    }

}
```

If we save this file and run it (e.g., `mvn clean test`) it will launch an instance of Chrome, visit the homepage of [the-internet](http://the-internet.herokuapp.com/), and assert that the page title loaded.

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen.

+ ChromeDriver starts
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver stops

## Summary

Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official [Selenium Quick Reference page for Installing Browser Drivers](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference).

Happy Testing!
