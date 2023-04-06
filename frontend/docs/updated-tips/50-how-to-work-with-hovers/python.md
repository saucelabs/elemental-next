---
title: Python'
id: '50-hovers-python'
slug: python/
number: 50
publish_date: 2016-11-23
last_update:
  date: 2023-02-22
tags:
  - 'hover'
  - 'hovers'
  - 'action builder'
level: 1
category: 'fundamentals'
language: python
---

# How to Work with Hovers

## Intro

If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.

## A Solution

The most popular use case for a hover action is to display additional menu options(submenu.)

By leveraging Selenium's [Actions](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html) we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after.

## Example

Our example application is available [here](http://the-internet.herokuapp.com/hovers) on [the-internet](http://github.com/tourdedave/the-internet). It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile.

We're going to write a test that will hover over the first avatar and make sure that this additional information appears.

First we'll include our requisite libraries, declare the test class, and wire up some simple `setUp` and `tearDown` methods.

```python
# filename: hovers.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By


class Hovers(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()

# ...
```

Now let's write our test.

```python
# filename: hovers.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/hovers')
        avatar = driver.find_element(By.CLASS_NAME, 'figure')
        ActionChains(driver).move_to_element(avatar).perform()
        avatar_caption = driver.find_element(By.CLASS_NAME, 'figcaption')
        assert avatar_caption.is_displayed()

if __name__ == "__main__":
    unittest.main()
```

After loading the page we find the first avatar and store it in a variable (`avatar`). We then use the `.move_to_element` method and feed it the avatar variable (which triggers the hover).

We then check to see if the additional user information is displayed with `.is_displayed` in our assertion.

## Expected Behavior

When we save this file and run it (e.g., `python hover.py` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Hover over the first avatar
+ Assert that the caption appeared on the page
+ Close the browser

## Summary

Hopefully this will help you handle more complex user interactions like hovers.

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
