---
title: "How To Test For Disabled Elements"
slug: "40-disabled-element"
number: 40
publish_date: 2016-11-18
tags:
  - "dropdown list"
  - "dropdown lists"
  - "disabled element"
level: 2
category: "testing"
---

## The Problem

On occasion you may have the need to check if an element on a page is disabled or enabled. Sounds simple enough, but how do you do it? It's not a well known function of Selenium. So doing a trivial action like this can quickly become a pain.

## A Solution

If we look at [the API documentation for Selenium's Element class](http://seleniumhq.github.io/selenium/docs/api/py/webdriver_remote/selenium.webdriver.remote.webelement.html) we can see there is an available method called `is_enabled` that can help us accomplish what we want.

Let's take a look at how to use it.

## An Example

For this example we will use [a dropdown list](http://the-internet.herokuapp.com/dropdown) from [the-internet](http://github.com/tourdedave/the-internet). In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled.
First let's require our dependent libraries (`import unittest` for our test framework and `from selenium import webdriver` to drive the browser), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: disabled_elements.py
import unittest
from selenium import webdriver


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
        dropdown_list = driver.find_elements_by_tag_name('option')
        assert dropdown_list[0].is_enabled() is False

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

## Outro

Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable.

Happy Testing!
