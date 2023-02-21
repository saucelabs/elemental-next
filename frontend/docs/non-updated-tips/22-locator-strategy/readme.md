---
title: "Choosing a Locator Strategy"
slug: "22-locator-strategy"
number: 22
publish_date: 2013-10-22
tags:
  - "locators"
  - "locator strategy"
  - "css selectors"
level: 1
category: "strategy"
---

## The Problem

At the heart of Selenium is the ability to interact with a page through it's elements by way of various locator strategies. Identifier, Id, Name, Link, DOM, XPath, and CSS -- oh my!

This is the life-blood of your automated tests and as you can see there are numerous ones to choose from. But which ones do you use? And when do you use them? And why?

## A Solution

While each locator strategy serves its purpose there is one approach that is better. One that is cross-browser performant, simpler to maintain, and powerful -- that's CSS Selectors.

## A Quick Primer on CSS Selectors

In web design CSS (Cascading Style Sheets) is used to apply styles to the markup (HTML) on a page. CSS is able to do this by declaring which bits of the the markup it wants to interact with through the use of selectors. Selenium operates in a similar manner but instead of changing the style of elements it interacts with them by clicking, getting values from, typing, sending keys, etc.

## An Example

With the following markup (taken from [here](http://the-internet.herokuapp.com/download)) we can demonstrate grabbing the first link from a series of links with varying degrees of precision via CSS Selectors.

```html
<div id="content" class="large-12 columns">
  <div class="example">
    <h3>File Downloader</h3>
    <a href="download/hello-world.pdf">hello-world.pdf</a><br>
    <a href="download/avatar.jpg">avatar.jpg</a>
  </div>
</div>
```

To play along at home here are the setup, teardown, and run actions we will use.

```ruby
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

The way Selenium works is by first finding the element you want and then chaining additional actions to it. So, to grab the first link and output it's URL we can do the following.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/download'
  link = @driver.find_element(css: 'a').attribute('href')
  puts link
end
```

Note the `css: a`. The `css:` is us telling Selenium what locator strategy to use, and the `a` is a selector for a link.

While this works it's far from perfect. Of all the possible links on the page Selenium will return the first one. So, if there were other links aside from the ones listed in the download list, we may not get the result we want. To help this, we can be more precise with our CSS.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/download'
  link = @driver.find_element(css: '#content a').attribute('href')
  puts link
end
```

Note the `css: '#content a'`. The `#content` is a selector for an HTML element with `id="content"`. With it we are able to chain together the previously used `a` (separated by spaces) to grab the first link from within the content div on the page. And if we wanted to be more precise we could scope in further.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/download'
  link = @driver.find_element(css: '#content .example a').attribute('href')
  puts link
end
```

Note the `css: '#content .example a'`. The `.example` is a selector for an HTML element with `class="example"`. With this we are able to get the first link from within the example div which is within the content div.

Alternatively, we could have just scoped into `.example a`. Either would have worked and for this simple example it doesn't matter. The layout of a page will ultimately influence your CSS Selector decision. The ultimate goal is to find and use unique and reliable selectors that will get you the intended behavior you want for your test.

You can find a full list of CSS Selectors [here](http://www.w3schools.com/cssref/css_selectors.asp).

## How To Find CSS Selectors

The simplest way to find CSS Selectors is to inspect the elements on a page. The best way to do this is from within your web browser. Fortunately popular browsers of today come pre-loaded with development tools that make this simple to accomplish.

When viewing the page right click on the element you want to interact with and click __Inspect Element__. This will bring up a small window with all of the HTML for the page but zoomed into your selection highlighted. From here you can see if there are unique attributes you can work with (e.g. `id`, `class`, etc). And at the bottom of the window a set of selectors will be listed showing you the selector for your selection and a heirarchy of the selectors on the page that lead up to your selection.

From here you should able to construct a CSS Selector to use in a test.

## Outro

In a perfect world all pages would be written with sound markup and uniquely named bits. But that's more the exception than the rule. So, you will likely find as you dig into automating various sites that things will not be as straightforward as the examples above. And there are some circumstances where you have a selector dialed in but you hit issues with older browsers.

To that end, stay tuned for future tips where we'll cover more advanced CSS Selector techniques and strategies for dealing with older browsers.

Until then, Happy Testing!
