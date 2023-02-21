---
title: "How To Work with Frames"
slug: "3-work-with-frames"
number: 3
publish_date: 2016-11-14
tags:
  - "frames"
level: 1
category: "testing"
---

## The Problem

On occasion you'll run into a relic of the front-end world -- frames. And when writing a test against them, you can easily get tripped up if you're not paying attention.

## A Solution

Rather than gnash your teeth when authoring your tests, you can easily work with the elements in a frame by telling Selenium to _switch_ to that frame first. Then the rest of your test should be business as usual.

Let's dig in with some examples.

## An Example

We'll first need to pull in our requisite libraries (`import unittest` for our test framework and `from selenium import webdriver` to drive the browser), declare our test class, and wire up some test `setUp` and `tearDown` methods.

```python
# filename: frames.py

import unittest
from selenium import webdriver


class Frames(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()

# ...
```

Now onto our test. In it we'll step through [an example of nested frames](http://the-internet.herokuapp.com/nested_frames) which can be found on [the-internet](https://github.com/tourdedave/the-internet).

```python
# filename: frames.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/nested_frames')
        driver.switch_to.frame('frame-top')
        driver.switch_to.frame('frame-middle')
        assert driver.find_element_by_id('content').text == "MIDDLE", "content should be MIDDLE"

# ...
```

With Selenium's `.switch_to.frame` method we can easily switch to the frame we want. It accepts either an ID or name attribute. But in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) _and then_ switch to the child frame (e.g., the middle frame).

Once we've done that we're able to find the element we need, grab its text, and assert that it's what we expect.

While this example helps illustrate the point of frame switching, it's not very practical.

## A More Practical Example

Here is a more likely example you'll run into -- working with a WYSIWYG Editor like [TinyMCE](http://www.tinymce.com/). You can see the page we're testing [here](http://the-internet.herokuapp.com/tinymce).

```python
# filename: frames.py
# ...
    def test_example_2(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/tinymce')
        driver.switch_to.frame('mce_0_ifr')
        editor = driver.find_element_by_id('tinymce')
        before_text = editor.text
        editor.clear()
        editor.send_keys('Hello World!')
        after_text = editor.text
        assert after_text != before_text, "%s equals %s" % (before_text, after_text)


if __name__ == "__main__":
    unittest.main()
```

Once the page loads we switch into the frame that contains TinyMCE and...

+ grab the original text and store it
+ clear and input new text
+ grab the new text value
+ assert that the original and new texts are not the same

Keep in mind that if we need to access a part of the page outside of the frame we are currently in we'll need to switch to it. Thankfully Selenium has method that enables us to quickly jump back to the top level of the page -- `switch_to.default_content`.

Here is what that looks like in practice.

```python
  driver.switch_to.default_content()
  assert driver.find_element_by_css_selector('h3').text != "", "element should not be empty"
```

## Expected Behavior

If we save the file and run it (e.g., `python frames.py` from the command-line) here is what will happen:

<u>Example 1</u>

+ Open the browser
+ Visit the page
+ Switch to the nested frame
+ Grab the text from the frame and assert that Selenium is in the correct place
+ Close the browser

<u>Example 2</u>

+ Open the browser
+ Visit the page
+ Switch to the frame that contains the TinyMCE editor
+ Grab and clear the text in the editor
+ Input and grab new text in the edtitor
+ Assert that the original and new text entries don't match
+ Switch to the top level of the page
+ Grab the text from the top of the page and assert that it's not empty
+ Close the browser

## Outro

Now you're ready to handily defeat frames when they cross your path.

Thanks to [Mike Millgate](https://github.com/trabulmonkee) for contributing the code for this tip, and to [Isaul Vargas](https://github.com/Dude-X) & [Peter Bittner](https://github.com/bittner) for code reviewing!

Happy Testing!
