## Example 1

Let's start by requiring our requisite libraries (`import unittest` for our test framework and `from selenium import webdriver` to drive the browser), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: basic_auth_1.py

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By

class BasicAuth1(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
```

Now to add our test.

```python
# filename: basic_auth_1.py
# ...
    def test_visit_basic_auth_secured_page(self):
        driver = self.driver
        driver.get('http://admin:admin@the-internet.herokuapp.com/basic_auth')
        page_message = driver.find_element(By.CSS_SELECTOR, '.example p').text
        assert page_message == 'Congratulations! You must have the proper credentials.'

if __name__ == "__main__":
    unittest.main()
```

In the test we're loading the page by passing in the username and password in the front of the URL (e.g., `http://admin:admin@`). Once it loads we grab text from the page to make sure we ended up in the right place.

## Example 2

Alternatively, we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth.

Here's what that would look like.

```python
# filename: basic_auth_2.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


class BasicAuth1(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()
        self.driver.get('http://admin:admin@the-internet.herokuapp.com/basic_auth')

    def tearDown(self):
        self.driver.quit()

    def test_visit_basic_auth_secured_page(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/basic_auth')
        page_message = driver.find_element(By.CSS_SELECTOR, '.example p').text
        assert page_message == 'Congratulations! You must have the proper credentials.'

if __name__ == "__main__":
    unittest.main()
```

__NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of *each* type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).__

## Expected Behavior

When you save the first example and run it (e.g., `python basic_auth_1.py`), here is what will happen:

+ Open the browser
+ Visit the page using Basic Auth
+ Get the page text
+ Assert that the text is what we expect
+ Close the browser

And when you save the second example and run it (e.g., `python basic_auth_2.py`), here is what will happen:

+ Open the browser
+ Visit the page using Basic Auth in the setup
+ Navigate to the Basic Auth page (without providing credentials)
+ Get the page text
+ Assert that the text is what we expect

## Summary

Hopefully this tip will help save you from getting tripped by Basic Auth when you come across it.

Happy Testing!