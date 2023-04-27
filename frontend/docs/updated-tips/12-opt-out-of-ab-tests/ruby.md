---
title: '12: Opt Out of AB Tests'
id: '12-opt-out-of-ab-tests-ruby'
sidebar_label: Ruby 
text: "Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests."
number: 12
publish_date: 2015-10-15
last_update:
  date: 2023-02-28
tags:
  - 'ab tests'
  - 'optimizely'
  - 'opt-out'
level: 2
category:
  - 'troubleshoting'
language: ruby
---

# How to Opt-out of A/B Tests

## Intro

Occasionally when running tests you may see unexpected behavior due to [A/B testing (a.k.a. split testing)](http://en.wikipedia.org/wiki/A/B_testing) of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests.

## A Solution

First, here is a primer on Split Testing.
>### Split Testing
>Split testing is a simple way to experiment with an application's features to see which changes lead to higher user engagement. A simple example would be testing variations of an e-mail landing page to see if more people sign up. In such a split test there would be the control (how the application looks and behaves now) and variants (e.g., 2 or 3 changes that could include changing text or images on the page, element positioning, color of the submit button, etc).
>
>Once the variants are configured, they are put into rotation, and the experiment starts. During this experiment each user will see a different version of the feature and their engagement with it will be tracked. Split tests live for the length of the experiment or until a winner is found (e.g., tracking indicates that a variant converted higher than the control). If no winner is found, new variants may be created and another experiment tried. If a winner is found, then the winning variant becomes the new control and the feature gets updated accordingly.


Thankfully there are some standard opt-out mechanisms built into A/B testing platforms. They tend to come in the form of an appended URL or forging a cookie.

Let's start with an example for each approach with a popular A/B testing platform, [Optimizely](https://www.optimizely.com/).

## Example

Our example page is from [the-internet](http://github.com/tourdedave/the-internet) and can be seen [here](http://the-internet.herokuapp.com/abtest). There are three different versions of the page that are available. On each page the heading text will vary:

+ Control: `A/B Test Control`
+ Variation 1: `A/B Test Variation 1`
+ Opt-out: `No A/B Test`

Let's kick things off by loading our requisite libraries (e.g., `selenium-webdriver` to control the browser and `rspec/expectations` and it's matchers for our assertions) and adding some simple `setup`, `teardown`, and `run` methods to handle our test configuration.

```ruby
# filename: split_test.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include ::RSpec::Matchers

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

Now let's wire up our first test to step through loading the split testing page and verifying that the text changes as we forge an opt-out cookie.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/abtest'
  heading_text = @driver.find_element(css: 'h3').text
  expect(['A/B Test Variation 1', 'A/B Test Control'].include? heading_text).to eql true
  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')
  @driver.navigate.refresh
  heading_text = @driver.find_element(css: 'h3').text
  expect(heading_text).to eql('No A/B Test')
end
```

After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again.

We could also load the opt-out cookie before navigating to this page.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')
  @driver.get 'http://the-internet.herokuapp.com/abtest'
  expect(@driver.find_element(css: 'h3').text).to eql('No A/B Test')
end
```

Here we first navigate to the main page of the site and then add the opt-out cookie. After that, we navigate to the split test page and perform our checks. Alternatively, we could opt out without forging a cookie. Instead we would need to append an opt out request to the URL.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true'
  @driver.switch_to.alert.dismiss
  expect(@driver.find_element(css: 'h3').text).to eql('No A/B Test')
end
```

By appending `?optimizely_opt_out=true` we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., `@driver.switch_to.alert.dismiss`) before performing our check.

## Expected Behavior

If you save this file and run it (e.g., `ruby split_test.rb` from the command-line) here is what will happen:

+ Open the browser
+ Opt-out of the split tests (either by cookie or appended URL)
+ Visit the split testing page
+ Grab the header text
+ Confirm that the session is opted out of the split tests
+ Close the browser

## Summary

Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
