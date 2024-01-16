---
language: ruby
level: 2
hide_sidebar: true
publish_date: 2015-07-14
last_update:
  date: 2023-02-28
---

## A Solution

Enter Data-driven Testing.

By storing your desired inputs and expected outcomes in a central repository of some kind (e.g. a comma separated file, database, etc) you can easily wire up tests to use each of them instead of writing numerous tests and hard-coding these values directly in your test code.

## Example

Let's start with an example -- testing a login form on a website (e.g., with [this example](http://the-internet.herokuapp.com/login) on [the-internet](https://github.com/tourdedave/the-internet)).

First, we are going to create a file to store the test inputs and expected outputs in. In this case, a CSV (comma-separated value) file called `user_data.csv`, like so:

```text
account_type,username,password,notification_message
bad_password,tomsmith,badPassword,Your password is invalid!
bad_username,badUsername,SuperSecretPassword!,Your username is invalid!
standard_user,tomsmith,SuperSecretPassword!,You logged into a secure area!
```

Next let's create our test file, require our requisite libraries (e.g., `selenium-webdriver` to control the browser, `rspec/expectations` & `RSpec::Matchers` for our assertion, and `csv` to import the data from our CSV file) and add some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: data_driven.rb

require 'selenium-webdriver'
require 'rspec/expectations'
require 'csv'
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

Now let's wire up our CSV parsing.

```ruby
def user_data
  user_data = CSV.read Dir.pwd + '/user_data.csv'
  descriptor = user_data.shift
  descriptor = descriptor.map { |key| key.to_sym }
  user_data.map { |user| Hash[ descriptor.zip(user) ] }
end
```

In `user_data` we read the CSV file in and grab the first row in it with `.shift`. We store this row in a variable called `descriptor` and convert each value into a symbol. We then iterate over the rest of the CSV data and create a Hash object for each row of user data. In each Hash we are binding the relevant descriptor to each piece of user data (through the use of `.zip`). This enables us to reference each of the user values by looking them up in the Hash by their descriptor symbol.

Next we'll need a helper method that will responsibly obtain the notification text from the page. It will need to both wait for the text to appear and clean up the resulting text so it doesn't include any extraneous characters.

```ruby
def notification_text
  wait = Selenium::WebDriver::Wait.new(timeout: 5)
  wait.until { @driver.find_element(class: 'flash').displayed? }
  @driver.find_element(class: 'flash').text.delete('^a-zA-z !.')
end
```

We use the stock Selenium Wait function (e.g., an explicit wait) to continuously perform an action until either the timeout is reached or the action is true (whichever comes first). We then use it to see if the notification text is displayed on the page. If it is, then we grab the text and clean it up with a regular expression that deletes non-letter characters while preserving `!` and `.` (which are expected in the output we're testing for).

Now we're ready to wire up our test. In it we will iterate through each of the user entries in the CSV file and use their data to both complete a login action and verify the notification message.

```ruby
user_data.each do |user|
  run do
    @driver.get 'http://the-internet.herokuapp.com/login'
    @driver.find_element(id: 'username').send_keys user[:username]
    @driver.find_element(id: 'password').send_keys user[:password]
    @driver.find_element(id: 'login').submit
    begin
      expect(notification_text).to eql user[:notification_message]
    rescue Exception => error
      puts error.message
    end
  end
end
```

We wrap the notification message assertion in a `rescue` block so that when an exception occurs the test will continue on with the next piece of user data after outputting the failure message to the command prompt.

## Expected Behavior

If you save this file and run it (e.g., `ruby data_driven.rb` from the command-line) the script will parse the CSV file and perform the following for each entry:

+ Open the browser
+ Load the login page
+ Submit the login form with user data
+ Grab the notification message and assert it against the expected value
+ Close the browser

## Summary

By storing data in a central repository to use for your tests and using Data-driven testing, you can simplify running repeated tests with various outputs.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
