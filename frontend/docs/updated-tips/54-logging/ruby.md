---
title: "How to Access Selenium Logs in Real-Time"
id: '54-logging'
contentUrl: 'docs/logging/54-logging'
sidebar_label: Ruby
text: 'Logging is a deep rabbit hole to fall down in Selenium. The documentation isn't complete and the approach for each of the browser and language bindings is inconsistent and hard to find examples for.'
hide_table_of_contents: true
number: 54
publish_date: 2014-06-10
tags:
  - "logging"
  - "logs"
  - "growl"
  - "growl notifications"
level: 3
category: "troubleshooting"
language: ruby
---

# How to Access Selenium Logs in Real-Time

## Intro

Logging is a deep rabbit hole to fall down in Selenium. [The documentation](https://code.google.com/p/selenium/wiki/Logging) isn't complete and the approach for each of the browser and language bindings is inconsistent and hard to find examples for.

## A Solution

By accessing what we want through the [WebDriver Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol), we can get at the logs we want in a browser agnostic way that also gets us the information in real time.

## Example

First, we'll need to [download a copy of Selenium Server](https://www.selenium.dev/downloads/) and launch it.

```sh
java -jar selenium-server-4.8.2.jar standalone
```

Next, we'll want to create a mechanism to access the Selenium Server logs through the WebDriver Wire Protocol via an HTTP library -- filtering out the logs we don't want and return the most recent one.

```ruby
# filename: logger.rb

require 'rest-client'
require 'json'

class Logger

  def initialize(session_id)
    @session_id = session_id
  end

  def latest
    parse(fetch).last
  end

  private

  def fetch
    RestClient.post(
      "http://127.0.0.1:4444/wd/hub/session/#{@session_id}/log",
      { "type" => "client" }.to_json,
      content_type: :json,
      accept: :json
    )
  end

  def parse(input)
    logs = JSON.parse(input)
    messages = []
    logs["value"].each do |entry|
      msg = entry["message"]
      unless msg.include? "session:" or
        msg.include? "fetching logs" or
          msg.include? "execute script"
            messages << msg.scan(/handle(.*)$/)[-1][-1]
      end
    end
    messages
  end

end
```

A couple of things to note.

The `session_id` will come from the instance of Selenium that gets created in our test (via Selenium Grid). To see your sessions, navigate to the instance in your web broswer (http://localhost:4444/) and then click Sessions in the side panel. This session ID maps to a URI endpoint on the Selenium Server that we use to get the logging payload with an HTTP POST (see `fetch`). We are then taking that payload (which comes back as a JSON object in String form) and parsing it into JSON, iterating through it, grabbing the relevant bits we want (see `parse`). When that's all done, we return the last entry found (see `latest`).

And of [all the available log types we can access](https://code.google.com/p/selenium/wiki/Logging#Log_Types), we're grabbing the client logs (which will give us the real time actions taken in our test).

__NOTE: Each time we access the logs, it will clear the cache of logs. So the next time we access them, it will only return new entries.__

Now we're ready to wire up our test to use the Selenium Server, access our logger class, and output the latest log entries after each Selenium action.

```ruby
# filename: log_test.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers
require_relative 'logger'

def setup
  @driver = Selenium::WebDriver.for :remote, url: 'http://127.0.0.1:4444/wd/hub'
  @logger = Logger.new(@driver.session_id)
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

run do
  @driver.get 'http://the-internet.herokuapp.com'
  puts @logger.latest
  @driver.find_elements(css: 'a').last.click
  puts @logger.latest
end
```

When we run this (e.g., `ruby log_test.rb`), here's what we should see.

```sh
 Done: [get: http://the-internet.herokuapp.com]
 Done: [click: 23 [[FirefoxDriver: firefox on MAC (2afa5f83-1aba-ad43-b1f3-9b4907ae9471)] -> css selector: a]]
```

If we couple this with jQuery Growl Notifications ([covered in the last tip](http://elementalselenium.com/tips/53-growl)) then we can really put this information to work.

Let's add some helper methods to add jQuery Growl to the page and display notification messages.

```ruby
def add_growl_notifications
  @driver.execute_script("if (!window.jQuery) {
      var jquery = document.createElement('script'); jquery.type = 'text/javascript';
      jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';
      document.getElementsByTagName('head')[0].appendChild(jquery);
    }")

  @driver.execute_script("$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')")

  @driver.execute_script("$('head').append('<link rel=\"stylesheet\" href=\"http://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');")
end

def display_growl_message(message)
  @driver.execute_script("$.growl({ title: 'Selenium', message: '#{message}' });")
  sleep 2
end
```

Now let's update our test to perform an action and then display it through jQuery Growl notifications.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  add_growl_notifications
  display_growl_message(@logger.latest)
end
```

When we run this (e.g., `ruby log_test.rb`), we should see the latest log action appear in a growl notification within the browser window.


## Expected Behavior

+ Load the browser
+ Take an action
+ Grab the action from the logs
+ Display the action

## Summary

Hopefully that was a helpful tip on how to get browser-agnostic, real-time logging information.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
