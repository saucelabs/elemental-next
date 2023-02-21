---
title: "How To Do Load Testing with JMeter and Selenium"
slug: "68-load-testing-revisited"
number: 68
publish_date: 2014-10-08
tags:
  - "jmeter"
  - "load testing"
level: 3
category: "testing"
---

## The Problem

In [a previous tip](http://elementalselenium.com/tips/48-load-testing) I demonstrated a way to accomplish a simple load test with a Selenium script and an HTTP library. While it works, it's only useful for rudimentary test cases.

For more involved test cases and more powerful load generation, we're going to need something stronger.

## A Solution

JMeter is the defacto open source load testing solution that is used in industry. The hardest part of using it is authoring the test cases (e.g., in the JMeter GUI). Thankfully we can sidestep that by repurposing our Selenium tests into initial JMeter scripts. To do this we'll need a proxy server, the HTTP Archive (HAR) each test generates, and a HAR to JMeter XML (JMX) converter.

When we're done, we'll have working JMeter test cases that we can modify and run (either from the GUI or the command-line).

Let's dig in with an example.

## An Example

We'll first need to `require` our requisite libraries (e.g., `selenium-webdriver` for Selenium, `browsermob/proxy` for our proxy, and `convert` to convert -- a local file to convert the HAR to JMX).

Then we'll need to launch the proxy (e.g., `configure_proxy`), connect it to a browser profile (e.g., `browser_profile`), and tell Selenium to use this as it launches the browser (e.g., `setup`).

```ruby
# filename: har.rb

require 'selenium-webdriver'
require 'browsermob/proxy'
require_relative 'convert'

def configure_proxy
  proxy_binary = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')
  proxy_binary.start
  proxy_binary.create_proxy
end

def browser_profile
  profile = Selenium::WebDriver::Firefox::Profile.new
  profile.proxy = @proxy.selenium_proxy
  profile
end

def setup
  @proxy = configure_proxy
  @driver = Selenium::WebDriver.for :firefox, profile: browser_profile
end
```

Now we need to make sure each test run closes the proxy and cleans up the browser (e.g., `teardown`). We'll also want to add a helper method to capture the traffic and wire everything up with a central `run` method.

```ruby
def teardown
  @driver.quit
  @proxy.close
end

def capture_traffic
  @proxy.new_har
  yield
  @proxy.har
end

def run
  setup
  @har = capture_traffic { yield }
  teardown
end
```

Now it's a simple matter of specifying the Selenium actions and outputting the HAR to a file.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'
  @driver.find_element(css: '#start button').click
  Selenium::WebDriver::Wait.new(timeout: 8).until do
    @driver.find_element(css: '#finish')
  end
end

@har.save_to './selenium.har'
```

If we save this and run it (e.g., `ruby har.rb` from the command-line) it will launch the browser, run the Selenium commands, and create a new file called `selenium.har` (or overwrite it if there's one there already).

Now we're ready to convert the HAR file to JMeter XML. To do that, we can use [the basic HAR converter](https://github.com/flood-io/ruby-jmeter/blob/master/examples/basic_har.rb) that is available in the examples of [the `ruby-jmeter` gem](https://github.com/flood-io/ruby-jmeter) (thanks to the fine folks at [flood.io](https://flood.io/)).

With a few modifications, it's ready for our needs.

```ruby
# filename: convert.rb

require 'ruby-jmeter'
require 'recursive-open-struct'
require 'json'
require 'pry-debugger'

module HARtoJMX
  def self.convert(file)
    har = RecursiveOpenStruct.new(JSON.parse(File.open(file).read), recurse_over_arrays: true)

    test do
      cache

      cookies

      header [ 
        { name: 'Accept-Encoding', value: 'gzip,deflate,sdch' },
        { name: 'Accept', value: 'text/javascript, text/html, application/xml, text/xml, */*' }
      ]

      threads count: 1 do

        har.log.entries.collect {|entry| entry.pageref }.uniq.each do |page|

          transaction name: page do
            har.log.entries.select {|request| request.pageref == page }.each do |entry|
              next unless entry.request.url =~ /http/
              params = entry.request.postData && entry.request.postData.params.collect {|param| [param.name, param.value] }.flatten
              self.send entry.request.to_h.values.first.downcase, entry.request.url, fill_in: Hash[*params] do
                with_xhr if entry.request.headers.to_s =~ /XMLHttpRequest/
              end
            end
          end
        end
      end
    end.jmx
  end
end
```

Now let's put it to use in our Selenium script.

```ruby
# filename: har.rb

...

HARtoJMX.convert 'selenium.har'
# the default filename output is `jmeter.jmx`
```

Assuming you've [downloaded a copy of JMeter](http://jmeter.apache.org/download_jmeter.cgi) you're ready to run your load test.

To execute it from the command-line you'll need to specify the path to the JMeter binary executable, a couple of arguments, and the path to the JMX file.

```sh
./apache-jmeter-2.11/bin/jmeter -n -t ./jmeter.jmx
```

`-n` tells JMeter ot run in non-GUI mode, and `-t` is used to specify the path to the JMX file.

## Expected Behavior

+ Selenium runs the test in Firefox while connected to the proxy server
+ The HTTP Archive (HAR) is exported to a file on disk
+ The HAR file is converted to a JMeter XML (JMX) file
+ JMeter is launched from the command-line and runs using the new JMX file

## Outro

Alternatively, you could open up the JMeter GUI, load the JMX file, and add on to it/reconfigure it/etc. This is a _much_ better place to start from since it saves you loads of up front busy work creating the load test from scratch.

From here, it would be pretty trivial to add in a data set (e.g., [parameterize the test case](https://wiki.apache.org/jmeter/JMeterFAQ#How_do_I_parameterize_my_JMeter_test_cases.3F)), increase the number of concurrent users, and change all kinds of simulated user behavior.

If you go this route, be sure to take a look at the JMeter Wiki. It's got loads of good information.

Happy Testing!
