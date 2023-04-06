---
title: 'Ruby'
id: '2-download-a-file-ruby'
slug: ruby/
number: 2
publish_date: 2015-07-27
last_update:
  date: 2023-03-08
tags:
  - 'files'
  - 'downloading'
  - 'file download'
level: 2
category: 
  - remote
  - fundamentals
language: ruby
---
# How To Download a File

## Intro

Just like with [uploading files](/docs/updated-tips/how-to-upload-a-file/) we hit the same issue with downloading them -- a dialog box 
just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.

## A Solution

In order to avoid the dialog box, we will be instructing the browser to download files to a specific location without being prompted.

After the file is downloaded we can then perform some simple checks to make sure the file is what we expect.

Let's continue with an example.

## Example

Let's start off by pulling in our requisite libraries (e.g., `selenium-webdriver` to drive the browser, `rspec/expectations` 
and `RSpec::Matchers` for assertions, `uuid` to help create a uniquely named temporary download directory, and `fileutils` 
to create & destroy the temp directory) and wiring up our `setup` method.


```ruby
# filename: download_file.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers
require 'uuid'
require 'fileutils'

def setup
  @download_dir = File.join(Dir.pwd, UUID.new.generate)
  FileUtils.mkdir_p @download_dir

  # Firefox
  options = Selenium::WebDriver::Options.firefox
  options.add_preference('browser.download.dir', @download_dir)  
  options.add_preference('browser.download.folderList', 2)  
  options.add_preference('browser.helperApps.neverAsk.saveToDisk', 'images/jpeg, application/pdf, application/octet-stream')
  options.add_preference('pdfjs.disabled', true)
  @driver = Selenium::WebDriver.for :firefox, options: options
end
```

Our `setup` method is where the magic is happening in this example. In it we're creating a uniquely named 
temp directory and storing the absolute path of it in an instance variable that we'll use throughout this file.

We're also setting a few browser preferences (for Firefox in this case) and plying it with the necessary configuration 
parameters to make it automatically download the file where we want. Here's a breakdown of each of them:

+ `browser.download.dir` accepts a string. This is how we set the custom download path. It needs to be an absolute path.
+ `browser.download.folderList` takes a number. It tells Firefox which download directory to use. `2` tells it to use a custom download path, wheras `1` would use the browser's default path, and `0` would place them on the Desktop.
+ `browser.helperApps.neverAsk.saveToDisk` tells Firefox when not to prompt for a file download. It accepts a string of [the file's MIME type](http://en.wikipedia.org/wiki/Internet_media_type). If you want to specify more than one, you do it with a comma-separated string.
+ `pdfjs.disabled` is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.

These preferences are then passed into our instance of Selenium.

Now let's add some `teardown` and `run` methods.


```ruby
def teardown
  @driver.quit
  FileUtils.rm_rf @download_dir
end

def run
  setup
  yield
  teardown
end
```

In `teardown` we make sure to clean up the temp directory after closing the browser. Other than that, it's business as usual.

Now onto the test itself.


```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/download'
  download_link = @driver.find_element(css: '.example a')
  download_link.click

  files = Dir.glob("#{@download_dir}/*")
  expect(files.empty?).to eql false
  expect(File.size(files.first)).to be > 0
end
```

After loading the page we find the first download link and click it. The click triggers an automatic download to the temp 
directory created in `setup`. After that, we perform some rudimentary checks to make sure the directory isn't empty and 
that the file isn't empty either.

## Expected Behavior

When you save this file and run it (e.g., `ruby download_file.rb` from the command-line) here is will happen.

+ Create a uniquely named temp directory
+ Load the browser
+ Visit the page
+ Find and click the first download link on the page
+ Automatically download the file to the temp directory without prompting
+ Check that the temp directory is not empty
+ Check that the downloaded file is not empty
+ Close the browser
+ Delete the temp directory and it's contents

## Summary

A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is 
not sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it 
[here](http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/).

Happy Testing!
## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by 
thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect 
for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, 
ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at 
numerous conferences and meetups around the world about automated acceptance testing.

