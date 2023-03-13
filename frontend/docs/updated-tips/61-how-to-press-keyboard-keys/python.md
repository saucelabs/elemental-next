---
title: "Python"
id: "61-keyboard-keys-python"
slug: python/
number: 61
publish_date: 2016-11-19
last_update:
    date: 2023-03-03
tags:
  - "keyboard"
  - "keys"
  - "key presses"
  - "tab"
  - "enter"
level: 1
category: "testing"
---

# How To Press Keyboard Keys

## Intro

On occasion you'll come across functionality that requires the use of keyboard key presses in your tests.

Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter.

But how do you do it and where do you start?

## Use Case

Common use cases to press keyboard keys include simulating a user typing into a variety of inputs. You'll find inputs are also needed in search bars, forms, and as stated above, traversing the user interface.

## A Solution

You can easily issue a key press by using the `send_keys` command.

This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on [the Selenium project's Wiki page for Advanced User Interactions](https://github.com/SeleniumHQ/selenium/wiki/Advanced-User-Interactions)). Either approach will send a key press. The latter will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found.

Let's step through a couple of examples.

## An Example

First we'll include our requisite libraries, declare the test class, and wire up some simple `setUp` and `tearDown` methods.

```python
# filename: keyboard_keys.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By

class KeyboardKeys(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
# ...
```

Now we can wire up our test.

Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that will display what key has been pressed ([link](http://the-internet.herokuapp.com/key_presses)). We'll use the result text that gets displayed to perform our assertion.

==**`!! Deprecated code needs replacing !!`**==

```python
# filename: keyboard_keys.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/key_presses')
        ddriver.find_element(By.CLASS_NAME, 'example').send_keys(Keys.SPACE)
        assert driver.find_element(By.ID, 'result').text == 'You entered: SPACE'
        ActionChains(driver).send_keys(Keys.TAB).perform()
        assert driver.find_element(By.ID, 'result').text == 'You entered: TAB'


if __name__ == "__main__":
    unittest.main()
```

After visiting the page we find an element that's visible (e.g., the div that contains the example on the page) and send the space key to it (e.g., `.send_keys(Keys.SPACE`). Then we grab the resulting text (e.g., `driver.find_element(By.ID, 'result').text`) and assert that it says what we expect (e.g., `'You entered: SPACE'`).

Alternatively, we can also issue a key press without finding the element first by using the Action Builder (e.g., `ActionChains`).

```python
# filename: keyboard_keys.py
# ...
    def test_example_1(self):
        # ...
        ActionChains(driver).send_keys(Keys.TAB).perform()
        assert driver.find_element(By.ID, 'result').text == 'You entered: TAB'

if __name__ == "__main__":
    unittest.main()
```

## Expected Behavior

When we save this file and run it (e.g. `python keyboard_keys.py` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find the element and send the space key to it
+ Find the result text on the page and check that it's what we expect
+ Send the tab key to the element that's currently in focus
+ Find the result text on the page and check that it's what we expect
+ Close the browser

## Summary

If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. But if you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should reach for.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.



