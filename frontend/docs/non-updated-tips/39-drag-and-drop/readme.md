---
title: "How To Test HTML5 Drag and Drop"
slug: "39-drag-and-drop"
number: 39
publish_date: 2014-02-25
tags:
  - "drag and drop"
  - "DnD"
  - "javascript"
  - "bug"
level: 2
category: "testing"
---

## The Problem

Exercising a page's dragging and dropping functionality used to be simple with [Selenium's Action Builder](http://selenium.googlecode.com/svn/trunk/docs/api/rb/Selenium/WebDriver/ActionBuilder.html), but sadly, [it won't work with HTML5 drag and drop](https://code.google.com/p/selenium/issues/detail?id=6315).

## A Solution

As a workaround we can simulate dragging and dropping by executing JavaScript with Selenium. Let's dig in with an example.

## An Example

You can see a simple HTML5 drag and drop example [here on the-internet](http://the-internet.herokuapp.com/drag_and_drop).

First, let's borrow [the JavaScript made available by rcorreia on GitHub](https://gist.github.com/rcorreia/2362544) for this workaround and store it in a local file (e.g., `dnd.js`).

Now we can create a Selenium script to consume the JavaScript file, visit the page, execute the JavaScript, and perform an assertion.

```ruby
require 'selenium-webdriver'
require 'rspec-expectations'

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

After including our dependent libraries, we wire up our `setup`, `teardown`, and `run` actions. Now we're ready to write our test.

```ruby
run do
  @driver.get "http://the-internet.herokuapp.com/drag_and_drop"

  dnd_javascript = File.read(Dir.pwd + '/dnd.js')
  @driver.execute_script(dnd_javascript+"$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});")

  @driver.find_element(id: 'column-a').text.should == 'B'
  @driver.find_element(id: 'column-b').text.should == 'A'
end
```

After loading the page we read in the `dnd.js` file and store it in a local variable. We then use Selenium to execute `dnd_javascript` along with the function calls and elements we want to work with. After that, it's just a simple matter of grabbing text from the page and making an assertion against it.

Since there are only two elements to drag and drop on the page, they should have switched places. So, `column-a` should now contain the text 'B', and `column-b` should contain the text 'A'.

## Outro

Hopefully this tip has helped you figure out how to wrangle HTML5 dragging and dropping while there is a known bug for it in Selenium.

Happy Testing!
