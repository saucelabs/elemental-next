---
title: "How To Run Your Tests Locally Against Chrome"
slug: "29-chrome-driver"
number: 29
publish_date: 2016-11-26
tags:
  - "drivers"
  - "chromedriver"
  - "chrome"
  - "different browsers"
level: 2
category: "setup"
---

## The Problem

It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.

## A Solution

With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers.

WebDriver works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser.

Let's step through an example using [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/).

## An Example

Before starting, we'll need to download the latest ChromeDriver binary executable from [here](http://chromedriver.storage.googleapis.com/index.html). Once we have it we'll need to tell Selenium where it is. And there are three ways to do this:

+ Add it to the System PATH
+ Specify it in the Selenium setup
+ Launch ChromeDriver and connect to it via Selenium Remote

Let's step through the latter two options.

We'll start by pulling in our requisite libraries for interacting with the operating system (e.g., `import os`), our testing framework (e.g., `import unittest`), driving the browser with Selenium (e.g., `from selenium import webdriver`), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: chrome.py
import os
import unittest
from selenium import webdriver


class Chrome(unittest.TestCase):

    def setUp(self):
        chromedriver_path = os.getcwd() + '/vendor/chromedriver'
        self.driver = webdriver.Chrome(chromedriver_path)

    def tearDown(self):
        self.driver.quit()
# ...
```

Notice that in `setUp` we are telling Selenium where the ChromeDriver exectuable is with `chromedriver_path` before creating an instance of the browser and passing it in as an argument.

Now we're ready to add a simple test.

```python
# filename: chrome.rb
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/upload')
        assert driver.title == 'The Internet'

if __name__ == "__main__":
    unittest.main()
```

When we save this file and run it (e.g., `python chrome.py`) it will launch an instance of Chrome, visit the homepage of [the-internet](http://the-internet.herokuapp.com/), and assert that the page title loaded.

## Another Example

Alternatively, we can launch ChromeDriver from the command-line...

```sh
> vendor/chromedriver
Starting ChromeDriver on port 9515
Only local connections are allowed.
```

...and connect to it with Selenium Remote.

```python
# filename: chrome.py
# ...

    def setUp(self):
        self.driver = webdriver.Remote('http://localhost:9515', {'browserName': 'chrome'})

# ...
```

__NOTE: This approach will perform faster since ChromeDriver is already running and your test just needs to connect to it. Whereas the prior approach needs to start and stop ChromeDriver for _each_ test. The trade-off here is that ChromeDriver will keep running after your tests complete. So you'll either need to ensure it's always up, or come up with a way to shut it down after your tests finish.__

## Expected Behavior

When we save this file and run it (e.g., `python chrome.py` from the command-line) here is what will happen.

<u>Example 1</u>

+ ChromeDriver starts
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver stops

<u>Example 2</u>

+ ChromeDriver starts (via command-line execution)
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver continues to run until stopped

## Outro

Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements:

+ [ChromeDriver](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver)
+ [EdgeDriver](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/dev-guide/tools/webdriver/)
+ [FirefoxDriver](https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver)
+ [InternetExplorer Driver](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
+ [OperaPrestoDriver for Opera 12 and older](https://github.com/operasoftware/operaprestodriver)
+ [OperaChromiumDriver for Opera 15 and newer](https://github.com/operasoftware/operachromiumdriver)
+ [SafariDriver for Safari 5.1 - 9.x](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver)
+ [SafariDriver for Safari 10](https://webkit.org/blog/6900/webdriver-support-in-safari-10/)

Happy Testing!
