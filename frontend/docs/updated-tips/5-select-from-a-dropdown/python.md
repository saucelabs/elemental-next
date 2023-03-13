---
title: "Python"
id: "5-select-from-a-dropdown-python"
slug: python/
number: 5
publish_date: 2019-08-09
last_update: 
  date: 2023-03-02
tags:
  - "dropdown"
  - "forms"
level: 1
category: "testing"
language: python
---

# How To Select From a Dropdown

## Intro

Selecting from a dropdown list *seems* basic. Just grab the list by it's element and select an item within it based on the text you want.

While it sounds pretty straightforward, there is a bit more skill to it.

Let's take a look at a couple of different approaches.

## Use Case

Common use cases can be a user selecting sizes from a drop down menu when shopping, or different design choices of the same item.

## Example


First let's pull in our requisite libraries, declare the test class, and wire up some simple `setUp` and `tearDown` methods.

```python
# filename: dropdown.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


class DropDown(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()

# ...
```

Now lets' wire up our test.

```python
# filename: dropdown.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/dropdown')
        dropdown_list = driver.find_element(By.ID, 'dropdown')
        options = dropdown_list.find_elements(By.TAG_NAME, 'option')
        for opt in options:
            if opt.text == 'Option 1':
                opt.click()
                break
        for opt in options:
            if opt.is_selected():
                selected_option = opt.text
                break
        assert selected_option == 'Option 1', "Selected option should be Option 1"

```

After visiting [the example application](http://the-internet.herokuapp.com/dropdown) we find the dropdown list by its ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each `option`) with `find_elements_by_tag_name`.

Grabbing all of the options returns a collection that we iterate over and when the text matches what we want it will click on it.

We finish the test by performing a check to see that our selection was made correctly. This is done by reiterating over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it.

While this works, there is a simpler, built-in way to do this with Selenium. Let's give that a go.

## Example 2

```python
# filename: dropdown.py
import unittest
from selenium import webdriver
from selenium.webdriver.support.select import Select as WebDriverSelect
# ...

    def test_example_2(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/dropdown')
        dropdown = driver.find_element(By.ID, 'dropdown')
        select_list = WebDriverSelect(dropdown)
        select_list.select_by_visible_text('Option 1')
        selected_option = select_list.first_selected_option.text
        assert selected_option == 'Option 1', "Selected option should be Option 1"

if __name__ == "__main__":
    unittest.main()
```

Similar to the first example, we are finding the dropdown list by its ID. But instead of iterating over its option elements and clicking based on a conditional check, we are leveraging a built-in helper function of Selenium, [`Select`](http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#module-selenium.webdriver.support.select), and its [`select_by_visibile_text`](http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#selenium.webdriver.support.select.Select.select_by_visible_text) method to choose the item we want.

We then ask the `select_list` what option was selected by using the [`first_selected_option`](http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#selenium.webdriver.support.select.Select.first_selected_option) method. This returns a Selenium Element that we grab the text from, storing it in a variable (e.g., `selected_option`).

Then we perform our assertion against this variable (just like in the previous example).

__NOTE: In addition to selecting by text, you can also select by value.__

```python
  select_list.select_by_value('1')

## Expected Behavior

If you save this file with either of these examples and run it (e.g., `python dropdown.py` from the command-line) here is what will happen:

+ Open the browser
+ Visit the example application
+ Find the dropdown list
+ Select the requested item from the dropdown list
+ Assert that the selected option is the one you expect
+ Close the browser


## Summary

In this tip, we've gone over using Selenium to select from a drop down using the drop down list, or XPath to find an element within the dropdown list.

Hopefully this will help you when selecting items from a dropdown list. 

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
