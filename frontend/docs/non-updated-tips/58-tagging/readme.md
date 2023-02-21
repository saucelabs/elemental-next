---
title: "How To Slice and Dice Your Tests With Tags"
slug: "58-tagging"
number: 58
publish_date: 2014-07-09
tags:
  - "tagging"
  - "tags"
  - "annotations"
  - "test packs"
level: 1
category: "tagging"
---

## The Problem

As your test suite grows you'll likely employ some kind of folder structure to help make sense of everything -- grouping like tests together. But what do you do when you want to run a set of tests that span across your organizational structure? Especially when your organizational structure isn't set in stone?

## A Solution

By applying some metadata to your tests, you can specify a filter at runtime to execute a focused group of tests -- effectively creating a dynamic test suite that takes into account all of your tests, returning just the ones you want.

Here are some tagging ideas to help get you started:

+ `wip` (e.g., work in progress)
+ `smoke` (e.g., smoke tests)
+ `moneymakers` (e.g., the user paths that correlate to the bottom line of the business)
+ `component name`
+ `story number` (e.g., traceability to your development stories)

Let's dig in with an example.

## An Example

In RSpec, this metadata and filtered execution is referred to as [tags](https://www.relishapp.com/rspec/rspec-core/v/2-4/docs/command-line/tag-option) (or tagging).

A tag is a simple key/value pair that can be specified within any test file. Alternatively, you can specify just a key (as a symbol) for the tag.

Here is an example spec file with a `:smoke` tag applied to the entire file.

```ruby
# filename: spec/example_spec.rb

require 'selenium-webdriver'

describe 'Login', :smoke do

  before(:each) do
    @driver = Selenium::WebDriver.for :firefox
  end

  after(:each) do
    @driver.quit
  end

  it 'succeeded' do
    # test code goes here
  end

  it 'failed' do
    # test code goes here
  end

end
```

To run this, you would specify `--tag` and the tag name (without the `:`) as a runtime parameter, like so:

```sh
rspec --tag smoke
```

Alternatively, you can ignore tags with a `~` prepended to the tag name.

```sh
rspec --tag ~smoke
```

You can also tag each individual test and specify multiple tags at run time.

```ruby
# filename: spec/example_spec.rb

require 'selenium-webdriver'

describe 'Login' do

  before(:each) do
    @driver = Selenium::WebDriver.for :firefox
  end

  after(:each) do
    @driver.quit
  end

  it 'succeeded', :smoke do
    # test code goes here
  end

  it 'failed', :wip do
    # test code goes here
  end

end
```

To run just the smoke tag and negate the wip tag, you would do the following:

```sh
rspec --tag smoke --tag ~wip
```

## A note about tagging in RSpec

If you're running RSpec 2 or earlier, the following config is required:

```ruby
require 'rspec'
RSpec.configure { |c| c.treat_symbols_as_metadata_keys_with_true_values = true }
```

Otherwise, you'll have to specify tags using the standard key/value syntax (e.g., `:smoke` would be `smoke: true`).

## Expected Behavior

+ Run the test suite
+ The test suite identifies which tests to run based on the tags provided
+ Executes the filtered set of tests, ignoring the rest

## Outro

Happy Testing!
