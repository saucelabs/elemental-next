---
title: "How To Add Growl Notifications To Your Tests"
slug: "53-growl"
number: 53
publish_date: 2016-11-22
tags:
  - "jquery"
  - "growl"
  - "growl notifications"
  - "jquery-growl"
level: 2
category: "reporting"
---

## The Problem

Good test reports are a fundamental component of successful test automation. But running down a test failure by looking at a test report can be a real pain sometimes.

Leaving you with no choice but to roll up your sleeves and get your hands dirty with debug statements, or step through things piece by piece -- all for the sake of trying to track down a transient issue.

## A Solution

By leveraging something like [jQuery Growl](http://ksylvest.github.io/jquery-growl/) you can output non-interactive debugging statements directly to the page you're testing. This way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs 

Let's step through an example of how to set this up.

## An Example

First we'll need to pull in our requisite libraries (`import unittest` for our test framework, `from selenium import webdriver` to drive the browser, and `import time` to add a delay in our script so we're able to see the notification messages), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: growl.py
import unittest
from selenium import webdriver
import time


class Growl(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()

# ...
```

Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load [jQuery](http://jquery.com/), jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page.

```python
# filename: growl.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com')

        # Check for jQuery on the page, add it if needbe
        driver.execute_script(
            "if (!window.jQuery) {"
            "var jquery = document.createElement('script');"
            "jquery.type = 'text/javascript';"
            "jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';"
            "document.getElementsByTagName('head')[0].appendChild(jquery);}")

        # Use jQuery to add jquery-growl to the page
        driver.execute_script("$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')")

        # Use jQuery to add jquery-growl styles to the page
        driver.execute_script(
            "$('head').append('"
            "<link rel=stylesheet "
            "href=http://the-internet.herokuapp.com/css/jquery.growl.css "
            "type=text/css />');")

        # jquery-growl w/ no frills
        driver.execute_script("$.growl({ title: 'GET', message: '/' });")

        time.sleep(5)

if __name__ == "__main__":
    unittest.main()
```

And if we wanted to see color-coded notifications, then we could use one of the following:

```python
        driver.execute_script("$.growl.error({ title: 'ERROR', message: 'your error message goes here' });")
        driver.execute_script("$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });")
        driver.execute_script("$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });")
```

## Expected Behavior

When we save this file and run it (e.g., `python growl.py`) here is what will happen:

+ Browser opens
+ Load the page
+ Add jQuery, jQuery Growl, and jQuery Growl notifications to the page
+ Display a set of notification messages in the top-right corner of the page
+ Notification messages disappear
+ Browser closes

## Outro

In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test).

In a future tip I'll step through how to access Selenium logging output so we can wire it up to these notifications.

I'd like to give a big thanks to Jon Austen ([Twitter](https://twitter.com/austenjt), [GitHub](https://github.com/djangofan)) for giving me the idea to use jQuery Growl with Selenium.

Happy Testing!
