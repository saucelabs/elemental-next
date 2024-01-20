## Example

__NOTE: We are using [a file upload example](http://the-internet.herokuapp.com/upload) found on [the-internet](https://github.com/tourdedave/the-internet).__

First let's import our requisite classes for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), matchers for assertions (e.g., `org.hamcrest.CoreMatchers`, etc. ), and something to handle local files (e.g., `java.io.File`).

```java
// filename: Upload.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;
import java.io.File;
```

Now to create a class and take care of the test's setup and teardown.

```java
// filename: Upload.java
// ...
public class Upload {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }
```

After specifying the class (e.g., `public class Upload {`) we create a field variable (e.g., `WebDriver driver;`) to store our Selenium instance for reuse throughout the class. We then create a `setUp()` method with a `@Before` annotation so it runs before our test. In this method we are creating an instance of Selenium with Firefox (e.g., `driver = new FirefoxDriver();`).

After our test executes, the `tearDown()` method will run thanks to the `@After` annotation. This calls `driver.quit();` which will close the browser instance.

Now to wire up our test.

```java
    @Test
    public void uploadFile() throws Exception {
        String filename = "some-file.txt";
        File file = new File(filename);
        String path = file.getAbsolutePath();
        driver.get("http://the-internet.herokuapp.com/upload");
        driver.findElement(By.id("file-upload")).sendKeys(path);
        driver.findElement(By.id("file-submit")).click();
        String text = driver.findElement(By.id("uploaded-files")).getText();
        assertThat(text, is(equalTo(filename)));
    }

}
```

We create an `uploadFile()` method and annotate it with `@Test` so it is run as a test. In it we create a new file called `some-file.txt` in the present working directory and get it's absolute path.

Next we visit the page with the upload form, input the string value of `path` (e.g., the full path to the file plus the filename with it's extension), and submit the form. After the file is uploaded to the page it will display the filename it just processed. We use this text to perform our assertion (making sure the uploaded file is what we expect).

## Expected Behavior

When we save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Visit the upload form page
+ Inject the file path into the form and submit it
+ Page displays the uploaded filename
+ Grab the text from the page and assert it's what we expect
+ Close the browser
## Summary

This approach will work across all browsers. But if you want to use it with a remote instance (e.g., a Selenium Grid or Sauce Labs), then you'll want to have a look at [`FileDetector`](https://github.com/SeleniumHQ/selenium/blob/ab1e647d0fc8fc39e6b00ae94321ab228b6728f2/java/client/src/org/openqa/selenium/remote/FileDetector.java). You can see a write-up on it from Sauce Labs [here](https://saucelabs.com/resources/articles/selenium-file-upload).

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip!

Happy Testing!

## About The Author
Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
