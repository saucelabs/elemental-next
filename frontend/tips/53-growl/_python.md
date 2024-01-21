## Example

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

        time.sleep(5)

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

## Summary

In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test).

I'd like to give a big thanks to Jon Austen ([Twitter](https://twitter.com/austenjt), [GitHub](https://github.com/djangofan)) for giving me the idea to use jQuery Growl with Selenium.

Happy Testing!
