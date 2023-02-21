---
title: "How To Take A Screenshot on Failure"
slug: "16-take-screenshot-on-failure"
number: 16
publish_date: 2016-11-26
tags:
  - "reporting"
  - "screenshot"
level: 2
category: "reporting"
---

## The Problem

With browser tests it can often be challenging to track down the issue that caused a failure. By itself a failure message along with a stack trace is hardly enough to go on. Especially when you run the test again and it passes.

## A Solution

A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. And it's a quick and easy thing to add to your tests.

Let's dig in with an example.

## An Example

Let's start by importing our requisite libraries (`import unittest` for our test framework, `from selenium import webdriver` to drive the browser, and `import sys` to determine when there's a test failure), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: screenshot.py
import sys
import unittest
from selenium import webdriver


class ScreenShotOnFailure(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        if sys.exc_info()[0]:
            self.driver.save_screenshot("failshot_%s.png" % self._testMethodName)
        self.driver.quit()
# ...
```

In `tearDown` we check to see if `sys.exc_info()[0]` exists. If it does, then there's been a test failure and we capture a screenshot through the help of Selenium's `.save_screenshot` method. `.save_screenshot` accepts a filename as a string (e.g., `'failshot.png'`). To make the filename unique we use the test method name (e.g., `self._testMethodName`). When this command executes it will save an image file to the local system in the current working directory.

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

## Outro

Happy Testing!
