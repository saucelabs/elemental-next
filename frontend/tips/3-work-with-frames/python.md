---
language: python
level: 1
hide_sidebar: true
publish_date: 2016-11-14
last_update:
  date: 2023-02-22
---

## A Solution

Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling Selenium to switch to that frame first. Then the rest of your test should be more straightforward.

Let's explore further with some examples.

## Example 1

We'll first need to pull in our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests.

```python
# filename: frames.py

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By

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
        assert driver.find_element(By.ID,'content').text == "MIDDLE", "content should be MIDDLE"

# ...
```

With Selenium's `.switch_to.frame` method we can easily switch to the frame we want. It accepts either an ID or name attribute. But in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) _and then_ switch to the child frame (e.g., the middle frame).

Once we've done that we're able to find the element we need, grab its text, and assert that it's what we expect.

While this example helps illustrate the point of frame switching, it's not very practical.

## Example 2

Here is a more likely example you'll run into -- working with a WYSIWYG Editor like [TinyMCE](http://www.tinymce.com/). You can see the page we're testing [here](http://the-internet.herokuapp.com/tinymce).

```python
# filename: frames.py
# ...
    def test_example_2(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/tinymce')
        driver.switch_to.frame('mce_0_ifr')
        editor = driver.find_element(By.ID,'tinymce')
        before_text = editor.text
        editor.clear()
        editor.send_keys('Hello World!')
        after_text = editor.text
        assert after_text != before_text, "%s equals %s" % (before_text, after_text)


if __name__ == "__main__":
    unittest.main()
  assert driver.find_element(By.CSS_SELECTOR, 'h3').text != "", "element should not be empty"
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

## Summary

Now you're ready to handily defeat frames when they cross your path.

Thanks to [Mike Millgate](https://github.com/trabulmonkee) for contributing the Python code for this tip, and to [Isaul Vargas](https://github.com/Dude-X) & [Peter Bittner](https://github.com/bittner) for code reviewing!

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
