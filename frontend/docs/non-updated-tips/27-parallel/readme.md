---
title: "How To Speed Up Your Tests With Parallelization"
slug: "27-parallel"
number: 27
publish_date: 2013-11-26
tags:
  - "parallelization"
  - "good test writing"
level: 2
category: "performance"
---

## The Problem

Compared to Unit and Integration Tests, Selenium is slow. A single test can easily take minutes to run. And when you have a lot of them, it can quickly compound your suite to take hours to complete (just for a single browser) -- hampering your ability to get fast feedback.

## A Solution

Rather than run your tests in series (which is what you get out of the box with Selenium) you can dramatically speed things up by running them in parallel. Couple this with [the ability to run your tests in any browser](http://elementalselenium.com/tips/26-cloud) and you're on to some solid footing with your test automation.

But keep in mind that doing this requires some consideration into how you structure your tests, but the pay off is well worth the effort.

## A brief primer on Good Test Writing

In order to write tests that work well in parallel there are some simple guidelines to follow:

+ Write atomic and autonomous tests
+ Group like tests together in small batches
+ Be descriptive
+ Use a Test Runner

### Atomic & Autonomous Tests

Each test needs to be concise (e.g. testing a single feature rather than multiple features) and be able to be run independently (e.g. sets up it's own data rather than relying on a previous test to do it). Doing this may require a mental shift, discipline, and more up front effort. But __it will make a dramatic impact on the quality, effectiveness, and maintainability of your tests__.

### Grouping Tests

As your test suite grows you should have multiple test files, each containing a small grouping of tests broken out by functionality that they're exercising. This will go a long way towards organization and maintenance as your test suite grows -- as well as faster execution times (depending on your approach to parallelization).

### Being Descriptive

Each test file should be named appropriately, and each test within it should have an informative name (even if it may be a bit verbose). Also, each test (or grouping of tests) should be tagged for flexible execution later (e.g. on a Continuous Integration server).

This way you can run parts of your test suite as needed, and the results will be informative thanks to helpful naming.

### Test Runners

At the heart of every testing framework is a test runner that does a lot of the heavy lifting (e.g. test group execution, easy global configuration for setup and teardown, reporting, etc.). So rather than reinvent the wheel, you can use one of the many that already exists (there's more than one for every language). And with it you can bolt on third party libraries to extend it's functionality if there's something missing -- like parallelization.

## An Example

__NOTE: For this example we will be using [RSpec](http://rspec.info/) as the Test Runner and [parallel-tests](https://github.com/grosser/parallel_tests) for parallelization.__

In RSpec, test files are referred to as 'specs'. So for our initial spec I've used the test code from [a previous tip on working with Data Tables](http://elementalselenium.com/tips/25-tables). Don't get too distracted by what the test steps are doing, the organization and naming of things is more important for this example.

```ruby
# data_table_sorting_spec.rb

require 'selenium-webdriver'

describe 'Data Table Sorting' do

  before(:each) do
    @driver = Selenium::WebDriver.for :firefox
  end

  after(:each) do
    @driver.quit
  end

  context 'Without Attributes' do

    it 'in Ascending Order' do
      @driver.get 'http://the-internet.herokuapp.com/tables'
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')
      due_values = []
      dues.each { |due| due_values << due.text.gsub(/\$/,'').to_i }
      (due_values == due_values.sort).should == true
    end

    it 'in Descending Order' do
      @driver.get 'http://the-internet.herokuapp.com/tables'
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')
      due_values = []
      dues.each { |due| due_values << due.text.gsub(/\$/,'').to_i }
      (due_values == due_values.sort).should == false
    end

  end

  context 'With Attributes' do

    it 'in Ascending Order' do
      @driver.get 'http://the-internet.herokuapp.com/tables'
      @driver.find_element(css: '#table2 thead .dues').click
      dues = @driver.find_elements(css: '#table2 tbody .dues')
      due_values = []
      dues.each { |due| due_values << due.text.gsub(/\$/,'').to_f }
      (due_values == due_values.sort).should == true
    end

    it 'in Descending Order' do
      @driver.get 'http://the-internet.herokuapp.com/tables'
      @driver.find_element(css: '#table2 thead .dues').click
      @driver.find_element(css: '#table2 thead .dues').click
      dues = @driver.find_elements(css: '#table2 tbody .dues')
      due_values = []
      dues.each { |due| due_values << due.text.gsub(/\$/,'').to_f }
      (due_values == due_values.sort).should == false
    end

  end

end
```

At the top of the file we include our dependent library (`selenium-webdriver`) and declare the name of our test group ('Sort Data Table') with a `describe` statement. We then wire up our before and after actions which are responsible for setting up and tearing down an instance of Selenium for each test. Each of our tests are grouped into logical separations using `context` blocks and defined within an `it` block.

If we run this (e.g. with the command `rspec data_table_sorting_spec.rb`) it will fire up one browser at a time until each test is completed. And If we download, install, and run it through [parallel_tests](https://github.com/grosser/parallel_tests) (e.g. with the command `paralell_rspec data_table_sorting_spec.rb`) -- the same thing would happen. Why? Because parallel_tests executes things at the file level rather than at the individual test level (this holds true even when running tests by tag).

In order to take advantage of parallelization we will need to break these tests up into different files.

But before we do that we can simplify our test code by abstracting out our setup and teardown actions into a central place (known as a `spec_helper` in the RSpec parlance).

```ruby
# spec_helper.rb

require 'selenium-webdriver'

RSpec.configure do |config|

  config.before(:each) do
    @driver = Selenium::WebDriver.for :firefox
  end

  config.after(:each) do
    @driver.quit
  end

end
```

Now that we have that we can create a new spec file and place some of our tests in it.

```ruby
# data_table_sorting_with_attributes_spec.rb

require 'spec_helper'

describe 'Sort Data Table' do

  context 'With Attributes' do

    it 'in Ascending Order' do
      @driver.get 'http://the-internet.herokuapp.com/tables'
      @driver.find_element(css: '#table2 thead .dues').click
      dues = @driver.find_elements(css: '#table2 tbody .dues')
      due_values = []
      dues.each { |due| due_values << due.text.gsub(/\$/,'').to_f }
      (due_values == due_values.sort).should == true
    end

    it 'in Descending Order' do
      @driver.get 'http://the-internet.herokuapp.com/tables'
      @driver.find_element(css: '#table2 thead .dues').click
      @driver.find_element(css: '#table2 thead .dues').click
      dues = @driver.find_elements(css: '#table2 tbody .dues')
      due_values = []
      dues.each { |due| due_values << due.text.gsub(/\$/,'').to_f }
      (due_values == due_values.sort).should == false
    end

  end

end
```

Notice that the require statement has changed from `selenium-webdriver` to `spec_helper`. Since we abstracted things out into a spec_helper file we now need to require it in all of our specs -- and the dependent libraries for our test suite live there instead.

```ruby
# data_table_sorting_without_attributes_spec.rb

require 'spec_helper'

describe 'Sort Data Table' do

  context 'Without Attributes' do

    it 'in Ascending Order' do
      @driver.get 'http://the-internet.herokuapp.com/tables'
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')
      due_values = []
      dues.each { |due| due_values << due.text.gsub(/\$/,'').to_i }
      (due_values == due_values.sort).should == true
    end

    it 'in Descending Order' do
      @driver.get 'http://the-internet.herokuapp.com/tables'
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
      dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')
      due_values = []
      dues.each { |due| due_values << due.text.gsub(/\$/,'').to_i }
      (due_values == due_values.sort).should == false
    end

  end

end
```

To get this last file we could have renamed the original test file, or created it anew and deleted the original.

Notice that the `describe` name is the same between test files (e.g. 'Sort Data Table'). In RSpec names do not need to be unique, and these tests logically fit together, this is a welcome consistency.

Now when we run our tests through parallel_tests we get concurrent test runs with two browsers firing at the same time, yielding (in this case) roughly a 30% drop in execution times (e.g. 17 seconds down to 12 seconds). You can easily up the number of processes being run as a command-line argument (e.g. `-n 5`). But this will only make a difference as you have more specs given how parallel_tests groups and executes things.

Now that we have a working example that runs concurrently, we can point it at a cloud offering like Sauce Labs, and have access to any browser we want. We just have to update our setup action in the `spec_helper`.

__NOTE: This was covered in a previous tip. For a full write-up, go [here](http://elementalselenium.com/tips/26-cloud).__

```ruby
# spec_helper.rb

require 'selenium-webdriver'

RSpec.configure do |config|

  config.before(:each) do
    caps = Selenium::WebDriver::Remote::Capabilities.firefox
    caps.version = "23"
    caps.platform = "Windows XP"
    caps[:name] = self.example.metadata[:full_description]

    @driver = Selenium::WebDriver.for(
      :remote,
      :url => "http://SAUCE_USERNAME:SAUCE_API_KEY@
        ondemand.saucelabs.com:80/wd/hub",
      :desired_capabilities => caps)
  end

  config.after(:each) do
    @driver.quit
  end

end
```

Now when we run our tests with parallel_tests we can see the concurrent execution happening in Sauce Labs.

Sauce Labs is built to handle your tests concurrently, so you should be able to turn the number of processes up with no sweat. You will just need to be cogniscent of how many parallel tests your account has access to (e.g. 3 for Sauce Open accounts).

## Outro

Hopefully this tip has helped steer you on a path towards better test writing and parallelization.

Stay tuned for future tips where we'll cover how to take full advantage of your test suite by wiring it into a Continuous Integration server and making the requisite changes to your test runner.

Also, if you want to see some write-ups on how to do parallelization in other languages, here is one in [Python](http://sauceio.com/index.php/2013/11/parallel-testing-with-python-and-selenium-on-sauce-online-workshop-recap/) and another in [Java](http://sauceio.com/index.php/2013/01/so-you-want-to-run-tests-in-parallel-now-what/).

Happy Testing!
