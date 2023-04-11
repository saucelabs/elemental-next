---
title: 'Python'
id: '52-grid-python'
slug: python/
number: 52
publish_date: 2016-11-17
last_update:
  date: 2023-03-15
tags:
  - 'grid'
  - 'selenium grid'
  - 'cross browser'
level: 2
category: 'tools'
language: python
---

# How to Use Selenium Grid

## Intro

If you're looking to run your tests on different browser and operating system combinations but you're unable to justify using a third-party solution like [Sauce Labs](https://saucelabs.com/) or [Browser Stack](http://www.browserstack.com/) then what do you do?

## A Solution

With [Selenium Grid](https://www.selenium.dev/documentation/grid/) you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with.

>A brief primer of Selenium Grid
>
>Selenium Grid is part of [the Selenium project](https://www.selenium.dev/). It lets you distribute test execution across several machines. You can connect to it with Selenium Remote by specifying the browser, browser version, and operating system you want. You specify these values through Selenium Remote's `Capabilities`.
>
>There are two main elements to Selenium Grid -- a hub, and nodes. First you need to stand up a hub. Then you can connect (or "register") nodes to that hub. Nodes are where your tests will run, and the hub is responsible for making sure your tests end up on the right one (e.g., the machine with the operating system and browser you specified in your test).

Let's continue with an example.

##  Example

`example needs validation`

### Part 1: Grid Setup

Selenium Grid comes built into the Selenium Standalone Server. So to get started we'll need to download the latest version of it from [here](https://www.selenium.dev/downloads/).

Then we need to start the hub.

```sh
> java -jar selenium-server-standalone.jar -role hub
19:05:12.718 INFO - Launching Selenium Grid hub
...
```

After that we can register nodes to it.

```sh
> java -jar selenium-server-standalone.jar -role node -hub http://localhost:4444/grid/register
19:05:57.880 INFO - Launching a Selenium Grid node
...
```

__NOTE: This example only demonstrates a single node on the same machine as the hub. To span nodes across multiple machines you will need to place the standalone server on each machine and launch it with the same registration command (replacing `http://localhost` with the location of your hub, and specifying additional parameters as needed).__

Now that the grid is running we can view the available browsers by visiting our Grid's console at `http://localhost:4444/grid/console`.

To refine the list of available browsers, we can specify an additional `-browser` parameter when registering the node. For instance, if we wanted to only offer Safari on a node, we could specify it with `-browser browserName=safari`, which would look like this:

```sh
java -jar selenium-server-standalone.jar -role node -hub http://localhost:4444/grid/register -browser browserName=safari
```

We could also repeat this parameter again if we wanted to explicitly specify more than one browser.

```sh
java -jar selenium-server-standalone.jar -role node -hub http://localhost:4444/grid/register -browser browserName=safari -browser browserName=chrome -browser browserName=firefox
```

There are numerous parameters that we can use at run time. You can see a full list [here](https://github.com/SeleniumHQ/selenium/wiki/Grid2#optional-parameters)==**`!! Broken link !!`**==.

### Part 2: Test Setup

Now let's wire up a simple test script to use our new Grid.

First we'll need to pull in our requisite libraries (`import unittest` for our test framework and `from selenium import webdriver` to drive the browser), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: grid.py
import unittest
from selenium import webdriver


class Grid(unittest.TestCase):

    def setUp(self):
        url = 'http://localhost:4444/wd/hub'
        desired_caps = {}
        desired_caps['browserName'] = 'firefox'
        self.driver = webdriver.Remote(url, desired_caps)

    def tearDown(self):
        self.driver.quit()

    def test_page_loaded(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com')
        assert driver.title == 'The Internet'

if __name__ == "__main__":
    unittest.main()
```

Notice in `setUp` we're using Selenium Remote (e.g., `webdriver.Remote`) to connect to the grid. And we are telling the grid which browser we want to use with a `desired_caps` dictionary (e.g., `desired_caps['browserName'] = 'firefox'`).

You can see a full list of the available Selenium `Capabilities` options [here](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities).

## Expected Behavior

When we save this file and run it (e.g., `python grid.py` from the command-line) here is what will happen:

+ test connects to the grid hub
+ hub determines which node has the necessary browser/platform combination
+ hub opens an instance of the browser on the found node
+ test runs on the new browser instance
+ test completes and the browser closes on the node

## Summary

If you're looking to set up Selenium Grid to work with Internet Explorer or Chrome, be sure to read up on how to set them up since there is additional configuration required for each. And if you run into issues, be sure to check out the browser driver documentation for the browser you're working with:

+ [ChromeDriver](https://chromedriver.chromium.org/)
+ [FirefoxDriver](https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html)
+ [SafariDriver](https://developer.apple.com/documentation/webkit/about_webdriver_for_safari)

Also, it's worth noting that while Selenium Grid is a great option for scaling your test infrastructure, it by itself will NOT give you parallelization. That is to say, it can handle as many connections as you throw at it (within reason), but you will still need to find a way to execute your tests in parallel.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

