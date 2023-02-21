---
title: "How To Work With Hovers"
slug: "50-hovers"
number: 50
publish_date: 2016-11-23
tags:
  - "hover"
  - "hovers"
  - "action builder"
level: 1
category: "testing"
---

## The Problem

If you need to work with mouse hovers in your tests it may not be obvious how to do this with Selenium. And a quick search through the documentation can easily leave you befuddled forcing you to go spelunking through StackOverflow for the solution.

## A Solution

By leveraging Selenium's Action Builder (a.k.a. [ActionChains](http://seleniumhq.github.io/selenium/docs/api/py/_modules/selenium/webdriver/common/action_chains.html) in the Python Selenium bindings) we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after.

Let's dig in with an example.

## An Example

Our example application is available [here](http://the-internet.herokuapp.com/hovers) on [the-internet](http://github.com/tourdedave/the-internet). It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile.

Let's write a test that will hover over the first avatar and make sure that this additional information appears.

First we'll include our requisite libraries, declare the test class, and wire up some simple `setUp` and `tearDown` methods.

```python
# filename: hovers.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains


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
        avatar = driver.find_element_by_class_name('figure')
        ActionChains(driver).move_to_element(avatar).perform()
        avatar_caption = driver.find_element_by_class_name('figcaption')
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

## Outro

Happy Testing!
