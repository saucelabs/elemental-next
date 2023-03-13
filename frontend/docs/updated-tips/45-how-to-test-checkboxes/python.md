---
title: "Python"
id: "45-checkboxes-python"
slug: python/
number: 45
publish_date: 2019-08-09
last_update: 
  date: 2023-03-03
tags:
  - "checkboxes"
  - "attribute"
  - "selected"
level: 1
category: "testing"
language: python
---

# How To Test Checkboxes

## Intro

Checkboxes are an often used element in web applications but how do you work with them in your Selenium tests? 

## Use Case

Intuitively you may reach for a method that has the word 'checked' in it -- like `.checked` or `.is_checked` but this doesn't exist in Selenium. So how do you do it?

There are two ways to approach this -- by seeing if an element has a `checked` attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been _selected_.

Let's step through each approach to see their pros and cons.

## Example

For reference, here is the markup from [the page we will be testing against](http://the-internet.herokuapp.com/checkboxes) (an example from [the-internet](https://github.com/tourdedave/the-internet)).

```html
<form>
  <input type="checkbox"> unchecked<br>
  <input type="checkbox" checked=""> checked
</form>
```

Let's kick things off by requiring our dependent libraries (`import unittest` for our test framework and `from selenium import webdriver` to drive the browser), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: checkboxes.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


class Checkboxes(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()

# ...
```

Before we dig into writing a test to verify the state of the page, let's walk through both checkbox approaches to see what Selenium gives us.

To do that we'll want to grab all of the checkboxes on the page and iterate through them. Once using an attribute lookup and again asking if the element is selected. For each we'll output the return values we get from Selenium.

```python
# filename: checkboxes.py
# ...
    def test_list_values_for_different_approaches(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/checkboxes')
        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type="checkbox"]')

        print("With .get_attribute('checked')")
        for checkbox in checkboxes:
            print(checkbox.get_attribute('checked'))

        print("\nWith .is_selected")
        for checkbox in checkboxes:
            print(checkbox.is_selected())

if __name__ == "__main__":
    unittest.main()
```

When we save our file and run it (e.g., `python checkboxes.py` from the command-line), here is the output we'll see.

```sh
With .attribute('checked')
None
true

With .is_selected
False
True
```

With the attribute lookup, depending on the state of the checkbox, we receive either a `None` string value or a `true` boolean value. Whereas with `.is_selected` we get a boolean value either way.

Let's see what these approaches look like when put to use in our test.

```python
# filename: checkboxes.py
# ...
    def test_list_values_for_different_approaches(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/checkboxes')
        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type="checkbox"]')

        assert checkboxes[-1].get_attribute('checked')
        # or
        assert checkboxes[-1].is_selected()

if __name__ == "__main__":
    unittest.main()
```

With either approach we can simply assert on the return value (even if it's a string value of `'None`') and have things work as expected. We can confirm this by asserting on the checkbox which is not selected.

```python
# filename: checkboxes.py
# ...
    def test_list_values_for_different_approaches(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/checkboxes')
        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type="checkbox"]')

        assert checkboxes[0].get_attribute('checked')
        # or
        assert checkboxes[0].is_selected()
```

An `AssertionError` will be raised for either assertion.

```sh
======================================================================
FAIL: test_list_values_for_different_approaches (__main__.Checkboxes)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "45-checkboxes/python/checkboxes.py", line 31, in test_list_values_for_different_approaches
    assert checkboxes[0].get_attribute('checked')
AssertionError

----------------------------------------------------------------------
Ran 1 test in 3.356s

FAILED (failures=1)

shell returned 1
```

## Expected Behavior

When we save and run the file (e.g., `python checkboxes.py` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find all of the checkboxes on the page
+ Assert that the last checkbox (the one that is supposed to be checked on initial page load) is checked
+ Close the browser

## Summary

Attribute lookups are generally meant for pulling information out of the page for review however in this case they lend themselves to seeing if a checkbox is checked. There is a method which was built for this use case that is more readable and has a predictable set of return values. `isSelected` should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it.

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing;
including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
