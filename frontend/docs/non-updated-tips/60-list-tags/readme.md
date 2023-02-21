---
title: "How To Generate A List of Tags From Your Tests"
slug: "60-list-tags"
number: 60
publish_date: 2014-07-22
tags:
  - "tagging"
  - "tags"
  - "annotations"
  - "test_packs"
level: 3
category: "tagging"
---

## The Problem

In [a previous tip](http://elementalselenium.com/tips/58-tagging) I covered how to slice and dice your tests with tags. It's a powerful tool for targeted test execution as well as a lightweight form of documentation. But what happens when you want to see a summary of the tags you're using across all of your tests?

Unfortunately, most solution don't offer this kind of functionality out of the box -- leaving you to manually rifle through your tests to get a sense of things.

## A Solution

By leveraging the before and after hooks in our test framework, we can interrogate each test in one fell swoop to get the tags and generate a simple report.

Let's dig in with an example.

## An Example

To do this in RSpec, we're going to leverage `RSpec.configure` in a file called `tag_lister.rb`. To keep things simple, let's wrap this behavior in a method called `list_tags` and have it live within a module called `TagLister`.

```ruby
# filename: tag_lister.rb

require 'rspec'

module TagLister
  def self.list_tags
    RSpec.configure do |c|
      c.add_setting :tags
      c.before(:suite) { RSpec.configuration.tags = {} }
```

In our RSpec configuration we first need to create a place to store the tag data, so we add a setting called `tags` and make it a hash.

Now we're ready to step through each test to find the tag data.

```ruby
# filename: tag_lister.rb

...
      c.around(:each) do |example|
        tag_recorder = RSpec.configuration.tags
        standard_keys = [:example_group,
                         :block,
                         :description_args,
                         :caller,
                         :execution_result,
                         :full_description,
                         :line_number,
                         :file_path,
                         :description,
                         :described_class,
                         :location]
        example.metadata.each do |key, value|
          this_tag = "#{key}:#{value}" unless standard_keys.include?(key)
          unless this_tag.nil?
            tag_recorder[this_tag] = [] unless tag_recorder[this_tag]
            tag_recorder[this_tag] << [
              example.metadata[:full_description],
              example.metadata[:file_path],
              example.metadata[:line_number]
            ]
          end
        end
      end

```

In `around(:each)` we're able to interogate each test (a.k.a. `example`) to see if it contains any data in addition to the standard set of keys that we can expect from RSpec. If it does, then we assume that these additional keys are tags and store the test name, path to test file, and line number of the test file that uses this tag (or these tags).

We store this information in an array (and potentially an array of arrays) within our `tags` hash. Here's a sample data set to help wrap your head around it:

```ruby
{"wip:true"=>[["One passes", "./spec/one_spec.rb", 2], ["One fails", "./spec/one_spec.rb", 3]],
"smoke:true"=>[["Three passes", "./spec/three_spec.rb", 2], ["Three fails", "./spec/three_spec.rb", 3]],
"story:BIZ-1234"=>[["Two passes", "./spec/two_spec.rb", 2]], "story:BIZ-1235"=>[["Two fails", "./spec/two_spec.rb", 3]]}
```

Now that we have all of the tags and the test data that shows where they are in use, we can generate a simple report with it.

```ruby
# filename: tag_lister.rb

...
      c.after(:suite) do
        tags = RSpec.configuration.tags

        case ENV['TAG_SORT_ORDER']
        when 'alphabetical'
          tags = tags.sort_by { |tag| tag[0] }
        when 'usage'
          tags = tags.sort_by { |tag| tag[1].count }.reverse
        end

        puts "\n\n"
        puts "***************"
        puts "* TAGS IN USE *"
        puts "***************"
        puts "\n"

        tags.each do |tag|
          puts "#{tag[0]} (used #{tag[1].count} times)"
          tag[1].each do |test_data|
            puts "  #{test_data[0]} (#{test_data[1]}:#{test_data[2]})\n"
          end
        end

        puts "\n#{tags.count} tags in use: sorted in #{ENV['TAG_SORT_ORDER']} order"

      end
    end

```

There are a couple of different ways we'll likely want to see the tag data. So we wire up the ability to sort alphabetically by tag name as well as by usage in descending order (e.g., the number of times a tag is used). In our current tagging data structure, `tag[0]` is the tag name (a.k.a. the hash key) and `tag[1]` is the array that contains an array (or multiple arrays) of test data.

After sorting the tags, we output a heading (e.g., `* TAGS IN USE*`), iterate through the collection of tag & test data, and close things out with a summary statement (listing the total tag count and sorting method used).

Now we just need to pull in our test files, start RSpec, and then add a trigger to run everything.

```ruby
# filename: tag_lister.rb

...
    tests = Dir.glob(File.join(Dir.getwd, 'spec/**/*'))
    RSpec::Core::Runner.run(tests)

  end
end

ENV['TAG_SORT_ORDER'] = ARGV[0] || 'usage'
TagLister.list_tags
```

This script is built to live one level up from the test directory. And it assumes that the test directory is called `spec`.

We make it so we can pass an argument at runtime, which then gets fed into the tag sorting environment variable (`ENV['TAG_SORT_ORDER']`). If no argument is provided, we default the value to `'usage'`.

When we save this and run it with `ruby tag_lister.rb`, we should see a report outputted in the terminal.

Here is an example:

```sh
......

***************
* TAGS IN USE *
***************

wip:true (used 2 times)
  One passes (./spec/one_spec.rb:2)
  One fails (./spec/one_spec.rb:3)
smoke:true (used 2 times)
  Three passes (./spec/three_spec.rb:2)
  Three fails (./spec/three_spec.rb:3)
story:BIZ-1234 (used 1 times)
  Two passes (./spec/two_spec.rb:2)
story:BIZ-1235 (used 1 times)
  Two fails (./spec/two_spec.rb:3)

4 tags in use: sorted in usage order


Finished in 0.00106 seconds (files took 0.09029 seconds to load)
6 examples, 0 failures
```

## Expected Behavior

+ Iterate over each test, collecting tags and their test data
+ Display a report of tags in use (sorted based on run-time preference)

## Outro

If you'd like to see the code and example specs used to generate the above report, you can find them [here](https://github.com/tourdedave/rspec-list-tags).

Happy Testing!
