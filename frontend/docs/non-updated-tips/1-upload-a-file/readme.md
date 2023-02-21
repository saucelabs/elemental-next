---
title: "How To Upload a File"
slug: "1-upload-a-file"
number: 1
publish_date: 2015-07-19
tags:
  - "file"
  - "upload"
  - "file upload"
level: 1
category: "testing"
---

## The Problem

Uploading a file is a common piece of functionality found on the web. But when trying to automate it you get prompted with a with a dialog box that is just out of reach for Selenium.

In these cases people often look to a third-party tool to manipulate this window (e.g., [AutoIt](http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/)). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations.

## A Solution

A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) _into_ the form and then submit the form.

Let's step through an example.

## An Example

__NOTE: We are using [a file upload example](http://the-internet.herokuapp.com/upload) found on [the-internet](https://github.com/tourdedave/the-internet).__

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

When we save this file and run it (e.g., `ruby upload.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the upload example page
+ Inject the file path into the form and submit the form
+ Grab the filename text that the page displays after processing the upload
+ Assert that the filename text matches the filename provided in the test

## Outro

This approach will work across all browsers. But if you want to use it with a remote instance (e.g., a Selenium Grid or Sauce Labs), then you'll want to have a look at [the `file_detector` driver extension](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/DriverExtensions/UploadsFiles.html#file_detector%3D-instance_method).

Happy Testing!
