---
title: "How To Work With JavaScript Alerts"
slug: "51-javascript-alerts"
number: 51
publish_date: 2016-11-19
last_update:
  date: 2023-03-03
tags:
  - "javascript"
  - "javascript alerts"
  - "javascript popups"
  - "javascript dialogs"
level: 1
category: "testing"
---

# How To Work With JavaScript Alerts

# Intro

Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes. 

## Use Case

A popular use case for alerts is in the case of error prevention for password restrictions.

If your application triggers any JavaScript pop-ups (a.k.a. alerts, dialogs, etc.) then you need to know how to handle them in your Selenium tests.

## A Solution

Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.

## Example

Our example application is available [here](http://the-internet.herokuapp.com/javascript_alerts) on [the-internet](http://github.com/tourdedave/the-internet). It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click `Ok` or `Cancel`).

First, we'll include our requisite libraries, declare the test class, and wire up some simple `setUp` and `tearDown` methods.

```python
# filename: javascript_alerts.py
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


class JavaScriptAlerts(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
# ...
```

Now let's write our test.

```python
# filename: javascript_alerts.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/javascript_alerts')
        driver.find_element(By.CSS_SELECTOR, "ul > li:nth-child(1) > button").click()
        popup = driver.switch_to.alert
        popup.accept()
        result = driver.find_element(By.ID, 'result').text
        assert result == 'You successfully clicked an alert'

if __name__ == "__main__":
    unittest.main()
```

A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find all of the buttons on the page using `find_elements` and click on the second one. Since `find_elements` returns a list of all found elements, we can assume that the first item can be selected using `[0]` (since lists in Python start counting at `0`). So the second item would be `[1]`.

After click the button to trigger the JavaScript Alert we use Selenium's `switch_to.alert` method to focus on the JavaScript pop-up and use `.accept()` to click `Ok`. If we wanted to click `Cancel` we would have used `.dismiss()`.

After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words `You clicked: Ok` are displayed on the page.

## Expected Behavior

When we save this file and run it (e.g., `python javascript_alerts.py` from the command-line) here is what will happen:

+ Open the browser
+ Load the page
+ Click the second button on the page
+ JavaScript Confirmation Alert appears
+ Accept the JavaScript Confirmation Alert
+ Assert that the result on the page is what we expect
+ Close the browser

## Summary

We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's `switchTo().alert()`. After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result. 

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

