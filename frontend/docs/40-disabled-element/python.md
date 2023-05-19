---
title: '40: Disabled Element'
id: '40-disabled-element-python'
contentUrl: "docs/disabled-element/40-disabled-element-python"
sidebar_label: Python 
text: "On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain."
number: 40
hide_table_of_contents: true
publish_date: 2015-07-06
last_update:
  date: 2023-04-06
tags:
  - 'dropdown list'
  - 'dropdown lists'
  - 'disabled element'
level: 2
category:
  - remote
  - troubleshooting
language: python
---

# How to Test For Disabled Elements

## Intro

On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.

## A Solution

If we look at [the API documentation for Selenium's Element class](http://seleniumhq.github.io/selenium/docs/api/py/webdriver_remote/selenium.webdriver.remote.webelement.html) we can see there is an available method called `Enabled` that can help us accomplish what we want.

Let's take a look at how to use it.

For this example we will use [a dropdown list](http://the-internet.herokuapp.com/dropdown) from [the-internet](http://github.com/tourdedave/the-internet). In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled.
First let's require our dependent libraries (`import unittest` for our test framework and `from selenium import webdriver` to drive the browser), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: disabled_elements.py
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest


class DisabledElements(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
# ...
```

Now let's wire up our test.

```python
# filename: disabled_elements.py
# ...
    def test_dropdown(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/dropdown')
        wait = WebDriverWait(driver, 10)
        dropdown_list = wait.until(
            EC.presence_of_all_elements_located((By.ID, 'dropdown')))
        assert not dropdown_list[0].is_enabled() is False


if __name__ == "__main__":
    unittest.main()

```

After loading the page, we find all of the elements that have an option tag (which are all of the items in the dropdown list). This returns a list of elements, so we use the first one (which is the one with the text of `'Please select an option'`).

Once we have the element we want we see if it's enabled (with `.is_enabled`) and assert based on the response.

And since we grabbed all of the dropdown list options, we can easily test the opposite case by checking the second or third option in the list.

```python
        assert dropdown_list[1].is_enabled() is True
```

## Expected Behavior

When we save this file and run it (e.g., `python disabled_elements.py` from the command-line) here is what will happen:

+ Open a browser
+ Visit the page
+ Grab all dropdown list elements
+ Assert that the first element in the list is not enabled
+ Assert that the second element in the list is enabled
+ Close the browser

## Summary

Hopefully this tip has helped make the task of seeing whether or not an element is enabled or disabled more approachable.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
