---
title: "How To Generate An HTML Test Report"
slug: "59-html-reporting"
number: 59
publish_date: 2015-07-08
tags:
  - "reporting"
  - "html"
  - "html reporting"
  - "screenshot"
level: 2
category: "reporting"
---

## The Problem

In order to make your tests relevant you need to be able to know when there's a failure and what caused it. You can easily [take screenshots on failure](http://elementalselenium.com/tips/16-take-screenshot-on-failure) and [prepare your tests for Continuous Integration](http://elementalselenium.com/tips/57-junit-xml). But how do you weave these together into a human readable format that can help you and your team diagnose test failures quickly?

The general approach is to create an HTML report with test results and failure screenshots intertwined. But this is easier said than done since there is no proven standard -- leaving you to code your own approach based on the test framework you're using.

## A Solution

By leveraging a language agnostic open-source library like the [Allure Framework](https://github.com/allure-framework/allure-core/wiki) you can easily generate a robust, human-readable HTML report from each of your test runs.

## A brief primer on Allure

What is the Allure Framework? The project page says it best.

> Allure Framework is a flexible, lightweight multi-language framework for writing self-documenting tests, with the ability to store attachments, such as screenshots, logs and so on.

It has adaptors for testing frameworks across numerous programming languages. You can see a full list [here](https://github.com/allure-framework/allure-core/wiki#gathering-information-about-tests).

It works in two-steps; first gathering test results information (storing it in an XML file) and then using that information (along with screenshots) to generate the HTML report. You can see an example HTML report of theirs [here](http://ci.qatools.ru/job/allure-core_master-deploy/lastSuccessfulBuild/artifact/allure-report-preview/target/allure-report/index.html#/).

Let's dig in with an example of how to use it.

## An Example

For this example we'll be using [RSpec](http://rspec.info/) (a popular Ruby testing framework) and the [Allure RSpec adaptor](http://github.com/allure-framework/allure-rspec).

```ruby
# filename: reporting_spec.rb

require 'selenium-webdriver'
require 'allure-rspec'
require 'uuid'

RSpec.configure do |config|
  config.include AllureRSpec::Adaptor

  config.before(:each) do
    @driver = Selenium::WebDriver.for :firefox
  end

  config.after(:each) do |example|
    if example.exception
      example.attach_file('screenshot', File.new(
        @driver.save_screenshot(
          File.join(Dir.pwd, "results/#{UUID.new.generate}.png"))))
    end

    @driver.quit
  end
end

AllureRSpec.configure do |config|
  config.output_dir = 'results'
  config.clean_dir = true # this is the default value
end
```

After including our requisite libraries (e.g., `selenium-webdriver` to control the browser, `rspec-allure` to generate the HTML report, and `uuid` to give each screenshot a unique name) we configure RSpec and Allure.

In the `RSpec.configure` block we configure Selenium to create a browser instance before each test and destroy it after each test. After each test we're also checking to see if a test failure has occurred (e.g., `if example.exception`). If so then we capture a screenshot with Selenium's `.save_screenshot` method and attach it to the example (e.g., `example.attach_file(`). This is an Allure method which will include the screenshot in the XML output, and ultimately, the final HTML report.

In our `AllureRSpec.configure` block we are specifying a folder where the test result files will get generated . This is for ease of organization. There is a default path that Allure will use if one is not specified (e.g., `gen/allure-results`).

Now we can create our tests. Let's make one that passes and another that fails so we can see what the report looks like.

```ruby
# filename: reporting_spec.rb

# ...

describe "Reporting" do
  it 'passes' do
    @driver.get 'http://the-internet.herokuapp.com'
    expect(true).to eql true
  end

  it 'fails' do
    @driver.get 'http://the-internet.herokuapp.com'
    expect(true).to eql false
  end
end
```

When we save this file and run it from the command line (e.g., `rspec reporting_spec.rb`) it will output screenshots and XML files to a `results` folder in the present working directory.

Now we're ready to download the [Allure Command Line Tool](https://github.com/allure-framework/allure-cli) and use it to turn the test output into an HTML report. After running the tool we will see an `output` directory which with contain the final HTML report.

```sh
java -jar /path/to/allure-cli.jar ./results
```

You can see an example HTML report from this example [here](http://allure-reporting.herokuapp.com/index.html#/home).

## Expected Behavior

+ Tests run
+ Screenshots for each failure and resulting XML are generated and stored in the `results` directory
+ Allure Command Line Tool creates an HTML report in the `output` directory

## Outro

Happy Testing!
