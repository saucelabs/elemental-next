## Example

Before starting, we'll need to download the latest ChromeDriver binary executable from [here](http://chromedriver.storage.googleapis.com/index.html). Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:

+ Add it to the System PATH
+ Specify it in the Selenium setup

We'll start by pulling in our requisite libraries for interacting with the operating system (e.g., `import os`), our testing framework (e.g., `import unittest`), driving the browser with Selenium (e.g., `from selenium import webdriver`), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: chrome.py
import os
import unittest
from selenium import webdriver


class Chrome(unittest.TestCase):

    def setUp(self):
        chromedriver_path = os.getcwd() + '/vendor/chromedriver'
        self.driver = webdriver.Chrome(chromedriver_path)

    def tearDown(self):
        self.driver.quit()
# ...
```

Notice that in `setUp` we are telling Selenium where the ChromeDriver exectuable is with `chromedriver_path` before creating an instance of the browser and passing it in as an argument.

Now we're ready to add a simple test.

```python
# filename: chrome.rb
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/upload')
        assert driver.title == 'The Internet'

if __name__ == "__main__":
    unittest.main()
```

When we save this file and run it (e.g., `python chrome.py`) it will launch an instance of Chrome, visit the homepage of [the-internet](http://the-internet.herokuapp.com/), and assert that the page title loaded.

## Expected Behavior

When we save this file and run it (e.g., `python chrome.py` from the command-line) here is what will happen.

<u>Example</u>

+ ChromeDriver starts
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver stops

## Summary

Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official [Selenium Quick Reference page for Installing Browser Drivers](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference).

Happy Testing!
