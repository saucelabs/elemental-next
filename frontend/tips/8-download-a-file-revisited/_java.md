## Example

To start things off let's import our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.), and an HTTP library to handle our HEAD request (e.g., `org.apache.http.HttpResponse`, etc.) and start our class with some setup and teardown methods.

```java
// filename: DownloadFileRevisited.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.MatcherAssert.assertThat;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpHead;
import org.apache.http.impl.client.HttpClientBuilder;

public class DownloadFileRevisited {
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

Now we're ready to wire up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```java
// filename: DownloadFileRevisited.java
// ...
    @Test
    public void downloadFileRevisitedTest() throws Exception {
        driver.get("http://the-internet.herokuapp.com/download");
        String link = driver.findElement(By.cssSelector(".example a:nth-of-type(1)")).getAttribute("href");

        HttpClient httpClient = HttpClientBuilder.create().build();
        HttpHead request = new HttpHead(link);
        HttpResponse response = httpClient.execute(request);
        String contentType = response.getFirstHeader("Content-Type").getValue();
        int contentLength = Integer.parseInt(response.getFirstHeader("Content-Length").getValue());

        assertThat(contentType, is("application/octet-stream"));
        assertThat(contentLength, is(not(0)));
    }

}
```

Once we receive the response we check it's header for the content type (e.g., `response.getFirstHeader("Content-Type")`) and content length (e.g., `response.getFirstHeader("Content-Length")`) to make sure the file is the correct type and not empty.

## Expected Behavior

When you save this and run it (e.g., `mvn clean install` from the command-line) here is what will will happen:

+ Open the browser
+ Load the page
+ Grab the URL of the first download link
+ Perform a `HEAD` request against it with an HTTP library
+ Store the response headers
+ Check the response headers to see that the file type is correct
+ Check the response headers to see that the file is not empty
+ Close the browser

## Summary

Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach.

Thanks to [Roman Isko](https://github.com/RomanIsko) for contributing the initial Java code for this tip.

Happy Testing!
