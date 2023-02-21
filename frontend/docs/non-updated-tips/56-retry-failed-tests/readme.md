---
title: "How To Automatically Retry Failed Tests"
slug: "56-retry-failed-tests"
number: 56
publish_date: 2014-06-24
tags:
  - "retry"
  - "failure retry"
  - "reliability"
level: 3
category: "patterns"
---

## The Problem

You want reliable tests. But no matter how hard you try, you're going to run into intermittent test failures. These can be frustrating time wasters that distract you and your team and begin to erode the trust placed in the automated tests. Once that begins, it's a slippery slope.

## A Solution

Rather than rerun your entire test suite to suss out transient failures -- you can log which tests fail, and retry just those a second time.

Let's dig in with an example.

## An Example

Let's assume we have a bunch of tests written in [RSpec](http://rspec.info/), which would look something like this:

```sh
└── spec
    ├── 11_spec.rb
    ├── 1_spec.rb
    ├── 2_spec.rb
    ├── 3_spec.rb
    ├── 4_spec.rb
    ├── 5_spec.rb
    ├── 6_spec.rb
    ├── 7_spec.rb
    ├── 8_spec.rb
    ├── 9_spec.rb
    └── this_spec.rb
```

And let's assume that we will execute these tests in parallel (using [parallel_tests](https://github.com/grosser/parallel_tests)).

Some of the tests will pass, and some of them will fail. In order to track which ones fail, we will want to keep a log. The simplest way to do this would be to output a list of failures to a file. That way the list of failures will persist after the suite of tests completes, so we can perform a retry action using the list of failures.

Thankfully RSpec comes with some of the plumbing to help accomplish this -- through the use of a [custom formatter](https://github.com/dchelimsky/rspec/wiki/Custom-Formatters); specifically the [base formatter](http://rubydoc.info/gems/rspec-core/2.6.4/RSpec/Core/Formatters/BaseFormatter).

Let's create one.

```ruby
# filename: failure_catcher.rb

require 'rspec/core/formatters/base_formatter'

class FailureCatcher < RSpec::Core::Formatters::BaseFormatter

  # create files called rspec_#.failures with a list of failed examples
  def dump_failures
    return if failed_examples.empty?
    f = File.new("rspec#{ENV['TEST_ENV_NUMBER']}.failures", "w+")
    failed_examples.each do |example|
      f.puts retry_command(example)
    end
    f.close
  end

  def retry_command(example)
    example_name = example.full_description.gsub("\"", "\\\"")
    "-e \"#{example_name}\""
  end

end
```

In order to extend the base formatter we first need to require it, and then inherit from it when declaring our class (e.g., `< RSpec::Core::Formatters::BaseFormatter`).

After that we have access to the helper method we want (e.g., `dump_failures`). In `dump_failures` we can access detailed information about each failed test through the `failed_examples` accessor.

After checking to see if there are any failed examples, we create a new uniquely named file (leveraging the environment variable created by our parallel executor), iterate through all of the failed examples, and store a properly formatted retry execution command with the name of the failed test.

To use this formatter we'll need to specify it at run-time, and to leverage a retry action we'll need to wrap our run-time execution. Let's wire all of this up using [Rake](https://github.com/jimweirich/rake).

```ruby
# filename: Rakefile

def gather_failures
  opts = ""
  files = Dir.glob('*.failures')
  files.each { |file| opts << File.read(file).gsub(/\n/, ' ') }
  all_failures = './all.failures'
  File.write(all_failures, opts.rstrip)
  return File.read all_failures
end

def cleanup(files = '')
  system("rm #{files}") unless Dir.glob("#{files}").empty?
end

def launch(params = {})
  if params[:test_options].include? '-e'
    count = params[:test_options].split(/failed/).count - 1
    puts "Retrying #{count} failed tests!"
  end
  system("parallel_rspec -n #{params[:processes] || 5} \
          --test-options '#{params[:test_options]}' spec")
end

def run(processes = 5)
  launch(processes: processes,
    test_options: '--require ./failure_catcher.rb \
    --format FailureCatcher')
end

def rerun(processes = 5)
  launch(processes: processes, test_options: gather_failures)
end

desc "parallel test execution with failure retries"
task :run_tests, :number_of_processes do |t, args|
  run args[:number_of_processes]
  unless $?.success?
    rerun args[:number_of_processes]
    cleanup '*.failures'
  end
end
```

There are five methods and one Rake task. The first two methods (`gather_failures` and `cleanup`) are for rounding up a list of failed tests from the *.failure files and deleting them when we're finished. The next three methods (`launch`, `run`, and `rerun`) are for executing the test suite and retrying just the failures.

The Rake task is where we tie everything together.

In it we make the number of concurrent processes configurable through the use of an optional run-time argument. We then call `run` (passing in the argument) which executes the full suite. After the suite completes, we perform a check against the exit code to see if there were any failures. If there were, then we call `rerun` (along with the argument for number of processes),  and then call `cleanup` to remove the failure files.

## Expected Behavior

+ Tests execute in parallel
+ A list of failed tests get stored in output files (one for each process)
+ Failed tests get rerun
+ Output files for failed tests get deleted

## Outro

Hat-tip to [rspec-rerun](https://github.com/dblock/rspec-rerun) for the initial implementation, and to [the write-up that led me there](http://artsy.github.io/blog/2012/05/15/how-to-organize-over-3000-rspec-specs-and-retry-test-failures/).

I've made the code for this example available [here](https://github.com/tourdedave/better-rspec-rerun). And if you're interested in a more targeted retry approach, check out [this previous tip](http://elementalselenium.com/tips/10-retry-test-actions).

Happy Testing!
