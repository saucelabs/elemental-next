---
title: 'Python'
id: '6-take-screenshot-on-failure-python'
slug: python/
number: 16
publish_date: 2016-11-26
last_update:
  date: 2023-03-14
tags:
  - "reporting"
  - "screenshot"
level: 2
category:
  - troubleshooting
language: python
---

# How to Take A Screenshot On Failure

## Intro

With browser tests it can often be challenging to track down the issue that caused a failure.

By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future.

## A Solution

A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. And it's a quick and easy thing to add to your tests.

Let's start with an example.

## Example

Let's start by importing our requisite libraries (`import unittest` for our test framework, `from selenium import webdriver` to drive the browser, and `import sys` to determine when there's a test failure), declare our test class, and write test `setUp` and `tearDown` methods.

```python
# filename: screenshot.py
import sys
import unittest
from selenium import webdriver


class ScreenShotOnFailure(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def tearDown(self):
        if sys.exc_info():
            self.driver.save_screenshot("failshot_%s.png" % self._testMethodName)
        self.driver.quit()
# ...
```

In `tearDown` we check to see if `sys.exc_info()` exists. If it does, then there's been a test failure and we capture a screenshot through the help of Selenium's `.save_screenshot` method. `.save_screenshot` accepts a filename as a string (e.g., `'failshot.png'`). To make the filename unique we use the test method name (e.g., `self._testMethodName`). When this command executes it will save an image file to the local system in the current working directory.

Now to wire up a test which will fail.

```python
# filename: screenshot.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com')
        assert driver.title == 'blah blah blah'

if __name__ == "__main__":
    unittest.main()
```

## Expected Behavior

When we save this file and run it (`python screenshot.py` from the command-line) here is what will happen:

+ Open the browser
+ Load the homepage of [the-internet](http://github.com/tourdedave/the-internet)
+ Check the text of the page header and fail
+ Output a failure message in the terminal
+ Capture a screenshot in the current working directory
+ Close the browser

## Summary

Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight. Using the `import sys` determines when there's been a test failure.

If you want truly unique filenames, then you should use a unique ID in the filename instead of a timestamp (e.g., something like [`uuid`](https://github.com/assaf/uuid)). This will prevent screenshots from getting overwritten when you have two (or more) tests taking screenshots at the same time.

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
