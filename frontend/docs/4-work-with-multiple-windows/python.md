---
language: python
level: 2
hide_sidebar: true
publish_date: 2016-11-14
last_update:
  date: 2023-03-14
---

## Example 1

First we'll need to pull in our requisite libraries (`import unittest` for our test framework and `from selenium import webdriver` to drive the browser), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: new_window.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


class Windows(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
# ...
```

Now let's write a test that exercises new window functionality from an application. In this case, we'll be using [the new window example](http://the-internet.herokuapp.com/windows) found on [the-internet](https://github.com/tourdedave/the-internet).

```python
# filename: new_window.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/windows')
        driver.find_element(By.CSS_SELECTOR,'.example a').click()
        driver.switch_to.window(driver.window_handles[0])
        assert driver.title != "New Window", "title should not be New Window"
        driver.switch_to.window(driver.window_handles[-1])
        assert driver.title == "New Window", "title should be New Window"

# ...
```

After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the last one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window.

While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return in the order opened, others _alphabetically_.

Here's a more resilient approach. One that will work across all browsers.

## Example 2

```python
# filename: new_window.py
# ...
    def test_example_2(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/windows')

        first_window = driver.window_handles[0]
        driver.find_element(By.CSS_SELECTOR,'.example a').click()
        all_windows = driver.window_handles
        for window in all_windows:
            if window != first_window:
                new_window = window
        driver.switch_to.window(first_window)
        assert driver.title != "New Window", "title should not be New Window"
        driver.switch_to.window(new_window)
        assert driver.title == "New Window", "title should be New Window"

if __name__ == "__main__":
    unittest.main()
```

After loading the page we store the window handle in a variable (e.g., `first_window`) and then proceed with clicking the new window link.

Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the first one we've already stored). We store the result in another variable (e.g., `new_window`) and then switch between the windows. Each time checking the page title to make sure the correct window is in focus.

## Expected Behavior

+ Open the browser
+ Visit the page
+ Find the window handle for the current window
+ Click a link that opens a new window
+ Find the window handle out of all available window handles
+ Switch between the windows
+ Assert that the correct window is in focus
+ Close the browser

## Summary

Thanks to [Jim Evans](https://twitter.com/jimevansmusic) for providing the info for this tip, [Mike Millgate](https://github.com/trabulmonkee) for contributing the Python code for this tip, and [Isaul Vargas](https://github.com/Dude-X) & [Peter Bittner](https://github.com/bittner) for code reviewing!

For more information about switching windows (and tabs) visit the official Selenium HQ [documentation page] (https://www.selenium.dev/documentation/webdriver/interactions/windows/).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
