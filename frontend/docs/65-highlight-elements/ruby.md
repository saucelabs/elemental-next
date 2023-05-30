---
language: ruby
level: 2
hide_sidebar: true
publish_date: 2014-09-11
last_update:
  date: 2023-03-06
---

## A Solution

By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want.

Let's take a look at an example.

## Example

For our initial setup let's pull in the `selenium-webdriver` gem and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: highlight.rb

require 'selenium-webdriver'

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

Now let's create a `highlight` helper method that will accept a Selenium WebDriver `element` and a time to wait (e.g., `duration`) as arguments.

By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a default (e.g., 3 seconds).

```ruby
def highlight(element, duration = 3)

  # store original style so it can be reset later
  original_style = element.attribute("style")

  # style element with yellow border
  @driver.execute_script(
    "arguments[0].setAttribute(arguments[1], arguments[2])",
    element,
    "style",
    "border: 2px solid red; border-style: dashed;")

  # keep element highlighted for a spell and then revert
  if duration > 0
    sleep duration
    @driver.execute_script(
      "arguments[0].setAttribute(arguments[1], arguments[2])",
      element,
      "style",
      original_style)
  end

end
```

There are three things going on here.

1. We store the style of the element so we can revert it back when we're done
2. We change the style of the element so it visually stands out (e.g., a red dashed border)
3. We revert the style of the element back after 3 seconds

We're accomplishing the style change through JavaScript's `setAttribute` function. And we're executing it with Selenium's `execute_script` command.

Now to use this in our test is simple, we just prepend a `find_element` action with the `highlight` command.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/large'
  highlight @driver.find_element(id: 'sibling-2.3')
end
```


## Expected Behavior

If you were to save this file and run it (e.g., `ruby highlight.rb` from the command-line), here is what you would see.

1. Load the page
2. Find the element
3. Change the styling of the element so it has a red dashed-line border
4. Wait 3 seconds
5. Revert the styling to remove the border

## Summary

If you wanted to take this a step further, you could leverage this approach along with an interactive debugger.

Alternatively, you could verify your locators by using a browser plugin like FireFinder.

Happy Testing!

## About The Author

You can follow Brian on Twitter at [@bbbco](https://twitter.com/bbbco).

![Brian D. Goad profile picture](/img/authors/brian-goad.jpeg#author-img 'a title')
