---
title: 'Python'
id: '1-upload-a-file-python'
slug: python/
number: 1
publish_date: 2016-09-13
last_update: 
  date: 2023-02-22
tags:
  - 'file'
  - 'upload'
  - 'file upload'
level: 1
category:
  - remote
  - fundamentals
language: python
---

# How To Upload A File

## Intro

Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium.

## Use Case 

In these cases people often look to a third-party tool to manipulate this window (e.g., [AutoIt](http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/)). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations.


## A Solution

A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) _into_ the form and then submit the form.

Let's step through an example.

## Example

__NOTE: We are using [a file upload example](http://the-internet.herokuapp.com/upload) found on [the-internet](https://github.com/tourdedave/the-internet).__

First let's pull in our requisite libraries for interacting with the operating system (e.g., `import os`), our testing framework (e.g., `import unittest`), and driving the browser with Selenium (e.g., `from selenium import webdriver`).

```python
# filename: upload.py

import os
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By

# ...
```

Now to create a new class file and add in the test's setup and teardown.

```python
# filename: upload.py
# ...
class Upload(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
```

After specifying the class and establishing inheritance so it's a test case for `unittest` (e.g., `class Upload(unitest.TestCase)`) we create methods. The first method, `setUp(self):`, will execute before each test in this class. In it we are launching a new instance of Firefox with Selenium and storing it in a class variable that we'll use throughout this class (e.g., `self.driver = webdriver.Firefox()`). After our test executes the second method, `tearDown(self):`, will execute. This calls `self.driver.quit()` which ends the session by closing the browser instance and the destroying the Selenium object in-memory.

Now to wire up our test.

```python
# filename: upload.py
# ...
    def test_example_1(self):
        driver = self.driver
        filename = 'some-file.txt'
        file = os.path.join(os.getcwd(), filename)
        driver.get('http://the-internet.herokuapp.com/upload')
        driver.find_element(By.ID, 'file-upload').send_keys(file)
        driver.find_element(By.ID,'file-submit').click()

        uploaded_file = driver.find_element(By.ID, 'uploaded-files').text
        assert uploaded_file == filename, "uploaded file should be %s" % filename

if __name__ == "__main__":
    unittest.main()
```

After declaring the test method (e.g., `def test_example_1(self):`) we store `self.driver` in a local variable (e.g., `driver = self.driver`). This way we don't have to litter our test method with `self.driver` and can call `driver` instead. Next we specify the file we'd like to upload. There's already a text file called `some-file.txt` in the current working directory, so we grab both the file name and its full path, storing both of these values in variables (e.g., `filename` and `file` respectively).

Next we visit the page with the upload form, input the string value of `file` (e.g., the full path to the file plus the filename with its extension), and submit the form. After the file is uploaded to the page it will display the filename it just processed. We use this text on the page to perform our assertion (making sure the uploaded file is what we expect).

The two lines at the end of the file are so the file can be executed directly from the command-line.

## Expected Behavior

When we save this file and run it (e.g., `python upload.py` from the command-line) this is what will happen:

+ Open the browser
+ Visit the upload form page
+ Inject the file path into the form and submit it
+ Page displays the uploaded filename
+ Grab the text from the page and assert it's what we expect
+ Close the browser

## Summary

This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at [`file_detector`](http://seleniumhq.github.io/selenium/docs/api/py/webdriver_remote/selenium.webdriver.remote.webdriver.html?highlight=detect#selenium.webdriver.remote.webdriver.WebDriver.file_detector).

Thanks to [Mike Millgate](https://github.com/trabulmonkee) for contributing the code for this tip, and to [Isaul Vargas](https://github.com/Dude-X) & [Peter Bittner](https://github.com/bittner) for code reviewing!

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

