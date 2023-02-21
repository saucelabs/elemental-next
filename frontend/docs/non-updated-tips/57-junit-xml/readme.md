---
title: "How To Prepare Your Tests for Continuous Integration"
slug: "57-junit-xml"
number: 57
publish_date: 2015-07-14
tags:
  - "xml"
  - "junit xml"
  - "ci"
  - "continuous integration"
  - "reporting"
level: 1
category: "reporting"
---

## The Problem

If you want your Selenium tests to automatically run and report failures to you and your team, you'll want to wire them up to a [Continuous Integration](http://en.wikipedia.org/wiki/Continuous_integration) (CI) server. In order to make the most of this setup, you'll need to make sure your test suite outputs a machine readable test report.

But what does this entail? How do you set it up? And will it work when running things in parallel?

## A Solution

CI servers work with a standardized report format called JUnit XML which is a standard offering across testing frameworks. If it's not something available off the shelf for your framework, odds are there's a plug-in to enable it.

The report will include test results (e.g., failure messages and stack traces) and test metrics (e.g., start time, end time, number of tests, etc.). Your CI server (once configured to do so) will consume this report after each test run and tell you when things pass and fail. It will also offer trend data over time to help determine the stability of your test suite.

Let's step through an example of how to configure a test suite in order to output a JUnit XML report.

## An Example

In [RSpec](http://rspec.info/), you need a plugin to configure JUnit XML output. There are two popular ones:

+ [yarjuf (Yet Another RSpec JUnit Formatter)](https://github.com/natritmeyer/yarjuf)
+ [RSpec JUnit Formatter](https://github.com/sj26/rspec_junit_formatter)

Let's step through how to use the latter of the two.

After installing RSpec JUnit Formatter we need to specify two new parameters at run-time: a formatter, and an output file.

```sh
rspec --format RspecJunitFormatter  --out result.xml
```

Running tests with these parameters will format the test results into JUnit XML and pipe them into a `result.xml` file (and overwrite it on subsequent runs).

If we didn't want to type these parameters out every time we could place them into an RSpec command helper file (e.g., `.rspec`).

```ruby
# filename: .rspec

--format RspecJunitFormatter
--out result.xml
```

If we want to run our tests in parallel (using something like [parallel_tests](https://github.com/grosser/parallel_tests)), then we will want to generate a uniquely named result file for each parallel process (otherwise concurrent test runs will overwrite the same file rendering the results effectively useless). To do that we can use interpolation thanks to [ERB](http://www.stuartellis.eu/articles/erb/) and an environment variable made available by parallel_tests.

Thankfully parallel_tests has a RSpec command helper file as well (e.g., `.parallel_rspec`).

```ruby
# filename: .parallel_rspec

--format RspecJunitFormatter
--out result<%= ENV['TEST_ENV_NUMBER'] %>.xml
```

Now with numerous tests being run through `parallel_tests` the final result will be a series of JUnit XML files (e.g., `result1.xml`, `result2.xml`, etc.).

And if we didn't want this to run all of the time (like if we only wanted JUnit XML output to get generated when running our tests on a CI server) then we can add a conditional to our `.parallel_rspec` file.

```ruby
# filename: .parallel_rspec

<% if ENV['CI'] %>
--format RspecJunitFormatter
--out results/result<%= ENV['TEST_ENV_NUMBER'] %>.xml
<% end %>
```

Now all we need to do is specify an environment variable at run time in order to trigger JUnit XML output (e.g., `CI=on parallel_rspec`).

## Outro

Now you're ready to plug your Selenium tests into a CI Server and let them report the results.

Happy Testing!
