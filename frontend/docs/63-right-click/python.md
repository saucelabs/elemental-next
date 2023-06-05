---
language: python
level: 2
hide_sidebar: true
publish_date: 2016-11-20
last_update:
  date: 2023-03-15
---

## A Solution

By leveraging Selenium's Action Builder (a.k.a. [ActionChains](http://seleniumhq.github.io/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html?highlight=actionchains#selenium.webdriver.common.action_chains.ActionChains) in the Selenium Python bindings) we can issue a right-click command (a.k.a. a [`context_click`](http://seleniumhq.github.io/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html?highlight=actionchains#selenium.webdriver.common.action_chains.ActionChains.context_click)).

We can then select an option from the menu by traversing it with keyboard arrow keys (which we can issue with the Action Builder's [`send_keys`](http://seleniumhq.github.io/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html?highlight=actionchains#selenium.webdriver.common.action_chains.ActionChains.send_keys) command).

Let's continue with an example.

## Example

Let's start by pulling in our requisite libraries, declare the test class, and wire up some simple `setUp` and `tearDown` methods.

```python
# filename: right_click.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


class RightClick(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
# ...
```

Now we're ready to write our test.

We'll use an example from [the-internet](https://github.com/tourdedave/the-internet) that will render a custom context menu when we right-click on a specific area of the page ([link](http://the-internet.herokuapp.com/context_menu)). Clicking the context menu will trigger a JavaScript alert which will say `You selected a context menu`. We'll grab this text and use it to assert that the menu was actually triggered.

```python
# filename: right_click.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/context_menu')
        menu_area = driver.find_element(By.ID,'hot-spot')
        ActionChains(driver).context_click(
            menu_area).send_keys(
            Keys.ARROW_DOWN).send_keys(
            Keys.ARROW_DOWN).send_keys(
            Keys.ARROW_DOWN).send_keys(
            Keys.ENTER).perform()
        alert = driver.switch_to.alert
        assert alert.text == 'You selected a context menu'

if __name__ == "__main__":
    unittest.main()
```

## Expected Behavior

When we save this file and run it (e.g., `python right_click.py`) from the command-line) here is what will happen:

+ Open the browser and visit the page
+ Find and right-click the area which will render a custom context menu
+ Select the context menu option with keyboard keys
+ JavaScript alert appears
+ Grab the text of the JavaScript alert
+ Assert that the text from the alert is what we expect
+ Close the browser

## Summary

To learn more about context menus, you can read [this write-up from the Tree House blog](http://blog.teamtreehouse.com/building-html5-context-menus).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
