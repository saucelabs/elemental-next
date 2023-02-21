---
title: "How To Download a File Without a Browser"
slug: "8-download-a-file-revisited"
number: 8
publish_date: 2016-11-24
tags:
  - "files"
  - "downloading"
level: 2
category: "testing"
---

## The Problem

In a [previous tip](/tips/2-download-a-file) we stepped through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done.

While this works it requires a custom configuration that is inconsistent from browser to browser.

## A Solution

Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file _can_ be downloaded. And we can do that by using an HTTP client alongside Selenium in our test.

With an HTTP library we can perform a header (or `HEAD`) request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size).

Let's dig with an example.

## An Example

To start things off let's pull in our requisite libraries (`import unittest` for our test framework, `from selenium import webdriver` to drive the browser, and `import httplib` for our HTTP library), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: file_download_revisited.py
import unittest
from selenium import webdriver
import httplib # Use http.client if using Python 3.x.x


class FileDownloadRevisited(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
# ...
```

Now we're ready to wire up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```python
# filename: file_download_revisited.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/download')
        download_link = driver.find_element_by_css_selector('.example a').get_attribute('href')

        connection = httplib.HTTPConnection('the-internet.herokuapp.com')
        connection.request('HEAD', download_link)
        response = connection.getresponse()
        content_type = response.getheader('Content-type')
        content_length = response.getheader('Content-length')

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

## Outro

Compared to the browser specific configuration with Selenium this is hands down a leaner, faster, and more maintainable approach. But unfortunately it only works with files served up from a flat URL. So if you're trying to test file downloads that are generated in-memory as part of the browser session (a.k.a. not accessible from a URL) then you'll need to reach for the browser specific Selenium configuration.

Happy Testing!
