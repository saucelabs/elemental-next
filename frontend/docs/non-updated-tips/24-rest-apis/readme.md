---
title: "Fast and Reliable Test Setup with REST APIs"
slug: "24-rest-apis"
number: 24
publish_date: 2013-11-5
tags:
  - "REST APIs"
  - "test setup"
  - "guest post"
level: 2
category: "testing"
---

__Note: This is a guest post from Robert Schultheis, a Test Engineer at [Knewton](http://www.knewton.com/) who is doing great things with REST APIs in his testing practice.__

## The Problem

When we list out the properties that make a test a "good test", some of things that often come up are:

* Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail.
* Independent. A test should not have it's outcome affected by any other test in the test suite.
* Fast. This doesn't need much explanation. The quicker a test suite runs, the more useful it is.

Of course there are many other properties that might be included in such a list, but I mention these specifically because they can be particularly challenging to achieve in a Selenium test suite. The reason for this is that Selenium tests often involve setups that may include a sign-up, a login, some navigation, form submission, or other interactions with a website. Only after doing those things are you ready to assert on some aspect of the website.  If you confine your tests to only being allowed to interact with the website, there is little that can be done to alleviate this issue.

## A Solution

REST APIs are increasingly common in the backends of newer websites. If you are fortunate enough to have such an architecture in the site you are testing it may make sense to make use of those REST APIs in your Selenium test suite. By using calls to the REST APIs in the backend to perform parts of a test setup, and using Selenium to perform the assertion within the website normally, we can end up with tests that are faster, more focused, and more reliable.

REST APIs are based on the HTTP protocol, which is the same protocol that powers essentially the entire internet.  Nearly every modern programming language has libraries that can be used to make HTTP requests, thus we can add support for calling into REST APIs to virtually any test suite.

# An Example

I decided to pick an example that is nearly ubiquitous: sign-up. When we make a new user for a test, we have a "clean slate" which allows us great control over how to shape that user for our test. We eliminate possible corruption of our test user's state from other tests. And if we make that user using a REST API call, we avoid the time penalty of having to fill out a sign-up form (not to mention having to find any emails involved in confirming an email address).

Suppose our hypothetical website is backed by a REST API, and it documents a call to create a user as follows:

`POST http://api.myfakeapp.com/v1/create-user`

This call takes a JSON request body, and creates a user.

```javascript
{
  'username':   'example-username',
  'password':   'abcd1234',
  'email':      'bob@example.com',
  'first_name': 'bob',
  'last_name':  'example'
}
```

That tells us we will have to send an `HTTP POST` request to the URL `/v1/create-user`, with a JSON object body that has valid values for all of the fields shown. If this all sounds scary, it might help to know that this is more-or-less what your browser does when you submit a form. In this case though, we are going to do it sans-browser.

The following module has a `create_test_user` method which we will incorporate into our test setups. It contains some helpful inline comments that describe each of the actions being taken.

```ruby
# filename: rest_api_interface.rb

require 'net/http'
require 'json'
require 'securerandom'

module RestApiInterface

  Headers = {
    'content-type' => 'application/json',
    'user-agent' => 'Rest Api Helper',
  }

  def post_to_api path, post_body_obj
    json_body = JSON.generate(post_body_obj)
    response = nil
    Net::HTTP.start('api.myfakeapp.com') do |http|
      response = http.post(path, json_body, Headers)
    end
    response
  end

  def create_test_user
    # Step 1: Build the user parameters randomly
    random_test_user = {
      'username'   => random_string,
      'password'   => random_string,
      'email'      => "#{random_string}@testing.com",
      'first_name' => 'test',
      'last_name'  => 'user',
    }

    # Step 2: Execute the API call
    response = post_to_api '/v0/oauth/create-profile', random_test_user

    # Step 3: Ensure the api call returned a success code
    if response.code != '200'
      raise 'User creation failed'
    end

    # Final Step: Return the user object so we can use it
    random_test_user
  end

  def random_string
    # This is an easy way to get a good randomized string
    SecureRandom.hex
  end
end

```

With this we are now ready to make, and then use, test users from within our Selenium code.

```ruby
require 'selenium-webdriver'
require 'rest_api_interface'
include RestApiInterface

def setup
  @driver = Selenium::WebDriver.for :firefox
  @user = create_test_user
end

def login
  @driver.get 'http://myfakeapp.com'
  @driver.find_element(:css, 'input[name="username"]').send_keys @user['username']
  @driver.find_element(:css, 'input[name="password"]').send_keys @user['password']
  @driver.find_element(:css, 'button[name="login"]').click
end

def teardown
  @driver.quit
end

def run
  setup
  login
  yield
  teardown
end
```

With support code like the above, we are free to write code that can assume we are logged in with a clean user. Like the following (which will output the user that is logged in).

```ruby
run do
  puts @driver.find_element(:css, '#user_id').text
end
```

## Going beyond signups

This technique of mixing in REST API calls with your Selenium code is very powerful. Admittedly, the example given is easy to criticize. Signing up a fresh user for every test is probably not an appropriate strategy for many sites. Further, the example does not get around having to login. Once the mechanics of this kind of interaction are in place however, it becomes possible to setup many kind of resources and relationships between them using REST API calls.

I used to work for an organization that ran highly specialized markets, with several configuration options, as well as different kinds of users including buyers and sellers. I used this technique to build test markets through all permutations of configuration with test buyers and sellers. My Selenium tests would then simply visit the test markets as the test buyers and sellers and confirm the expected features were available.This allowed my tests to provide both a high level of coverage while staying fast, precise, and wholly self-contained.

## Testing against REST only

Once you've gotten used to using REST APIs to create test data fast, there is a question that naturally pops up: "Why not just test against the REST API itself, without using Selenium?"

Indeed, there are many great reasons to consider pure REST API tests to supplement a Selenium test suite. When compared to Selenium tests, pure REST API tests are:

* Extremely fast
* Extremely reliable
* Easier to build higher levels of test coverage
* Simpler execution architecture.
* More encouraging of testable design in the application

REST API tests are very appropriate for exercising the business logic that powers an application. Of course they leave a lot of important parts of the application untested including Javascript within the website, thus they should never be considered a complete Selenium replacement.

__Note: Given the ever increasing important of mobile applications, I believe special mention concerning the testing of a mobile application is important here. There are several Selenium like tools for mobile testing out there, but the landscape is still quite immature. Fortunately, the majority of most mobile applications are in fact backed by a REST API. Pure REST API testing should be considered an important component of any test plan for every mobile application!__

## Outro

When considering how to make your Selenium suite have higher coverage, run faster, and be more reliable, it is often worth looking beyond Selenium for solutions to these common problems. REST APIs are becoming very common and provide a relatively easy means for creating test data which Selenium tests can make use of. REST APIs can in fact be a powerful way to test an application all by themselves.

## About the Author

Robert Schultheis is a Test Engineer for [Knewton](http://www.knewton.com/), a company devoted to personalizing education for every student globally.  He recently gave [a talk](http://www.youtube.com/watch?v=WIMF7Nc1sbY) with more details about using REST APIs for testing and beyond.  And he has released a Ruby gem known as [Grifter](https://github.com/Knewton/grifter) which allows for the creation of DSLs for interacting with REST APIs easily.

Robert wishes to express his gratitude to Dave for allowing him a chance to author this guest post, and wishes "Happy Testing" to all Elemental Selenium readers.
