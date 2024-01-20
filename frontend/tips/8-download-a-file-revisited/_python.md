## Example

To start things off let's pull in our requisite libraries (`import unittest` for our test framework, `from selenium import webdriver` to drive the browser, and `import httplib` for our HTTP library), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: file_download_revisited.py
import unittest
from selenium import webdriver
import httplib # Use http.client if using Python 3.x.x
from selenium.webdriver.common.by import By


class FileDownloadRevisited(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
# ...
```

Now we're ready to write up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```python
# filename: file_download_revisited.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/download')
        download_link = driver.find_element(By.CSS_SELECTOR,'.example a').get_attribute('href')

        connection = http.client.HTTPConnection('the-internet.herokuapp.com')
        connection.request('HEAD', download_link)
        response = connection.getresponse()
        content_type = response.getheader('Content-type')
        content_length = response.getheader('Content-length')
        content_length = int(content_length)

        assert content_type == 'application/octet-stream'
        assert content_length > 0

if __name__ == "__main__":
    unittest.main()
```

Once we receive the response we can check its header for the `Content-type` and `Content-length` to make sure the file is the correct type and not empty.

## Expected Behavior

When you save this and run it (e.g., `python file_download_revisited.py` from the command-line) here is what will will happen:

+ Open the browser
+ Load the page
+ Grab the URL of the first download link
+ Perform a `HEAD` request against it with an HTTP library
+ Store the response
+ Check the response headers to see that the file type is correct
+ Check the response headers to see that the file is not empty

## Summary

Compared to the browser specific configuration with Selenium this is hands down a leaner, faster, and more maintainable approach. But unfortunately it only works with files served up from a flat URL. So if you're trying to test file downloads that are generated in-memory as part of the browser session (a.k.a. not accessible from a URL) then you'll need to reach for the browser specific Selenium configuration.

Happy Testing!

