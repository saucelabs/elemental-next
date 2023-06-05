---
language: ruby
level: 1
hide_sidebar: true
publish_date: 2015-07-19
last_update:
  date: 2023-02-27
---

## A Solution

A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) into the form and then submit the form.

Let's step through an example.

## Example(s)

**NOTE: We are using [a file upload example](http://the-internet.herokuapp.com/upload) found on [the-internet](https://github.com/tourdedave/the-internet).**

First let's include our requisite libraries (e.g., `selenium-webdriver` to drive the browser, and `rspec/expectations` & `RSpec::Matchers` for our assertion) and wire-up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: upload.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :firefox
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end
```

Now we're ready to write our file upload test.

```ruby
run do
  filename = 'some-file.txt'
  file = File.join(Dir.pwd, filename)

  @driver.get 'http://the-internet.herokuapp.com/upload'
  @driver.find_element(id: 'file-upload').send_keys file
  @driver.find_element(id: 'file-submit').click

  uploaded_file = @driver.find_element(id: 'uploaded-files').text
  expect(uploaded_file).to eql filename
end
```

After specifying the `filename` we get the full path to the file (which we're doing with `File.join(Dir.pwd, filename)`). This approach assumes that the file is living in the same directory as the test script.

Next we visit the page with the upload form, input the `file` text (e.g., the full path to the file plus the filename with it's extension), and submit the form. After the file is uploaded the page will display the filename that it just processed. We use this text to perform our assertion (making sure the uploaded file is what we expect).

## Expected Behavior

When we save this file and run it (e.g., `ruby upload.rb` from the command-line) this is what will happen:

- Open the browser
- Visit the upload form page
- Inject the file path into the form and submit it
- Page displays the uploaded filename
- Grab the text from the page and assert it's what we expect
- Close the browser

## Summary

This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at [`file_detector`](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/DriverExtensions/UploadsFiles.html#file_detector%3D-instance_method).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
