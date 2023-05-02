---
title: Python
id: "2-download-a-file-python"
slug: python/
number: 2
publish_date: 2016-09-23
last_update:
  date: 2023-03-02
tags:
  - "files"
  - "downloading"
  - "file download"
level: 2
category:
  - remote
  - fundamentals
language: python
---

# How to Download A File

## Intro

Just like with [uploading files](/docs/how-to-upload-a-file/) we hit the same issue with downloading them -- a dialog box
just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.

## A Solution

In order to avoid the dialog box, we will be instructing the browser to download files to a specific location without being prompted.

After the file is downloaded we can then perform some simple checks to make sure the file is what we expect.

Let's continue with an example.

## Example

Let's start by pulling in our requisite libraries for interacting with the operating system (e.g., `import os`), creating a temporary directory and cleaning it up, using our testing framework (e.g., `import unittest`), and driving the browser with Selenium (e.g., `from selenium import webdriver`).

```python
# filename: download.py
import os
import time
import shutil
import tempfile
import unittest
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By

# ...
```

Now to create a test class and add our test's setup.

```python
# filename: download.py
class Download(unittest.TestCase):

    def setUp(self):
        self.download_dir = tempfile.mkdtemp()
        options = Options()
        options.set_preference("browser.download.dir", self.download_dir)
        options.set_preference("browser.download.folderList", 2)
        options.set_preference(
            "browser.helperApps.neverAsk.saveToDisk",
            "images/jpeg, application/pdf, application/octet-stream")
        options.set_preference("pdfjs.disabled", True)
        self.driver = webdriver.Firefox(options=options)
# ...
```

Our `setUp(self):` method is where the magic is happening in this example. In it we're creating a uniquely named temp directory (e.g., `self.download_dir = tempfile.mkdtemp()`), configuring a browser profile object (for Firefox in this case), and plying it with the necessary configuration parameters to make it automatically download the file where we want (e.g., in the newly created temp directory).

Here's a breakdown of each of the browser preferences being set:

- `browser.download.dir` accepts a string. This is how we set the custom download path. It needs to be an absolute path.
- `browser.download.folderList` takes a number. It tells Firefox which download directory to use. `2` tells it to use a custom download path, wheras `1` would use the browser's default path, and `0` would place them on the Desktop.
- `browser.helperApps.neverAsk.saveToDisk` tells Firefox when not to prompt for a file download. It accepts a string of [the file's MIME type](http://en.wikipedia.org/wiki/Internet_media_type). If you want to specify more than one, you do it with a comma-separated string (which we've done).
- `pdfjs.disabled` is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.

This object is then passed into our instance of Selenium (e.g., `self.driver = webdriver.Firefox(options=options`).

Now let's take care of our test's teardown.

```python
# filename: download.py
# ...
  def tearDown(self):
      self.driver.quit()
      shutil.rmtree(self.download_dir)
# ...
```

In `tearDown(self):` we close the browser instance and then clean up the temp directory by deleting it, which will recursively delete the files in the folder before deleting it.

Now to wire up our test.

```python
# filename: download.py
# ...
    def test_example_1(self):
        driver = self.driver
        driver.get('http://the-internet.herokuapp.com/download')
        download_link = driver.find_element(By.CSS_SELECTOR, '.example a')
        download_link.click()

        time.sleep(1.0)  # necessary for slow download speeds

        files = os.listdir(self.download_dir)
        files = [os.path.join(self.download_dir, f)
                 for f in files]  # add directory to each filename
        assert len(files) > 0, "no files were downloaded"
        assert os.path.getsize(files[0]) > 0, "downloaded file was empty"


if __name__ == "__main__":
    unittest.main()
```

After visiting the page we find the first download link and click it. The click triggers an automatic download to the temp directory created in `setUp()`. We need to wait for the download to finish, so we add a brief sleep (e.g., `time.sleep(1.0)`). After the file downloads, we perform some rudimentary checks to make sure the unique temp directory isn't empty and then check the file to see that it isn't empty either.

The last two lines of the file are so the file can be executed directly from the command-line.

## Expected Behavior

When we save this file and run it (e.g., `python download.py` from the command-line) this is what will happen:

- Create a uniquely named temp directory in the present working directory
- Open the browser
- Visit the page
- Find and click the first download link on the page
- Automatically download the file to the temp directory without prompting
- Check that the temp directory is not empty
- Check that the downloaded file is not empty
- Close the browser
- Delete the temp directory

## Summary

A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is not sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it [here](http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/). In a future tip I'll cover a more reliable, faster, and scalable browser agnostic approach to downloading files. Stay tuned.

Thanks to [Mike Millgate](https://github.com/trabulmonkee) for contributing the Python code for this tip, and to [Isaul Vargas](https://github.com/Dude-X) & [Peter Bittner](https://github.com/bittner) for code reviewing!

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
