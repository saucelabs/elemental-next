---
title: "CSS vs. XPath"
slug: "32-xpath-vs-css"
number: 32
publish_date: 2014-01-07
tags:
  - "selectors"
  - "xpath"
  - "css"
  - "css selectors"
  - "locators"
  - "locator strategy"
level: 2
category: "benchmarks"
---

__NOTE: This is part 1 of 3. For the second installment, [go here](http://elementalselenium.com/tips/33-xpath-vs-css-revisited). For the last installment, go [here](http://elementalselenium.com/tips/34-xpath-vs-css-revisited-2).__

## The Problem

One of the most heated and subjective conversations in the Selenium community is which locator strategy is better, often circling around two -- XPath and CSS. People in favor of CSS say that it is more readable and faster (especially when running against Internet Explorer). While those in favor of XPath tout it's ability to transverse the page (while CSS cannot).

With such a divide it can be hard to determine the best approach for you and your team. Especially when most of these claims are outdated.

## A Solution

Let's cut through the noise by running our own performance tests across all major browsers to see how CSS and XPath stack up and fall down. Then we will be able to determine a more helpful locator strategy.

## An Example

To test the differences between CSS and XPath we will use two sets of tests. The first set will work with simple attributes like ID and Class, and the other will traverse the DOM top down to work with nested elements.

Ideally, this would be run locally and the speed of each find element action would be measured and compared. But for this we're going to use Sauce Labs and track the total test time for each run. While the prior is more precise, the latter is more accurate since it demonstrates an end-to-end workflow.

__NOTE: For a more rigorous benchmark, check out [Tip 33 -- CSS vs. XPath, Under a Microscope](http://elementalselenium.com/tips/33-xpath-vs-css-revisited).__

For our example application we will use [a page with two HTML data tables](http://the-internet.herokuapp.com/tables). One table is written without helpful attributes, and the other with them. The test code used can be seen [here](https://gist.github.com/tourdedave/8309313).

Here are the results after running the suite three consecutive times and averaging them (each linkable to a job in Sauce Labs).

### Finding Elements By ID and Class

Browser | CSS | XPath  
Internet Explorer 8 | [23 seconds](https://saucelabs.com/tests/99c76814cf9749ef83a0908af96f36e8)  | [22 seconds](https://saucelabs.com/tests/3052b7b1d04d4a6ca8e69a78e2c7143f)  
Chrome 31           | [17 seconds](https://saucelabs.com/tests/57e12106969b4c27a888f34815eabade)  | [16 seconds](https://saucelabs.com/tests/aadb81d6c7e74485aa6b4cc8b5545306)  
Firefox 26          | [22 seconds](https://saucelabs.com/tests/0195437ad34f41be9ccf50d2b354bca5)  | [22 seconds](https://saucelabs.com/tests/882bb654f1f247938d9283acd687c6a7)  
Opera 12            | [17 seconds](https://saucelabs.com/tests/dc33e27d94ed4a6481375223bf836647)  | [20 seconds](https://saucelabs.com/tests/0f1187556f50476484c71e182151c70c)  
Safari 5            | [18 seconds](https://saucelabs.com/tests/4bc307aec4d9467e85538d29ac9929d1)  | [18 seconds](https://saucelabs.com/tests/8bd1c7fbb2604429ba903f0a814ee9df)  

### Finding Elements By Traversing

Browser | CSS | XPath  
Internet Explorer 8 | [not supported](https://saucelabs.com/tests/4caa9a370f234359afbd31bb86ae3089)  | [29 seconds](https://saucelabs.com/tests/8405a88ef187475d9ca191fb2adf5634)  
Chrome 31           | [24 seconds](https://saucelabs.com/tests/cdae032631a34f87b75ca1daadbaf6cf)  | [26 seconds](https://saucelabs.com/tests/cae82a0567d845858c35602d34558f8c)  
Firefox 26          | [27 seconds](https://saucelabs.com/tests/62192045bf2149e6bae5f1010b491810)  | [27 seconds](https://saucelabs.com/tests/50dc24e1e484489cbe8eaa8eb2cebbf1)  
Opera 12            | [25 seconds](https://saucelabs.com/tests/399fbd76410d42ca9207ed829da93952)  | [25 seconds](https://saucelabs.com/tests/0f4bd7a9ab8c4bdcb5d0bef91043c41b)  
Safari 5            | [23 seconds](https://saucelabs.com/tests/9247cb6c27c9431b8f5d555ee00e22c3)  | [22 seconds](https://saucelabs.com/tests/7cf2656786094645b9fcf2329f452c80)  


## What The Results Tell Us

The results help illustrate and illuminate a couple of things.

For starters there is no dramatic difference in performance between XPath and CSS. This is surprising since it is [the main reason cited in favor of CSS](http://stackoverflow.com/questions/13975595/why-one-should-prefer-using-css-over-xpath-in-ie/14139380#14139380). There may be other functionality or page structures that demonstrates this speed gap (e.g. more dense and complex pages), but it's not readily apparent -- and I'm skeptical that it would make a substantial impact (e.g. the order of magnitude difference demonstrated by [Santi](https://twitter.com/santiycr) in [a presentation at the SF Selenium Meetup back in 2011](http://www.youtube.com/watch?v=6vPu3TO6XZ4)).

Traversing the DOM in older browsers like Internet Explorer 8 does not work with CSS but is fine with XPath. And XPath can walk up the DOM (e.g. from child to parent), whereas CSS can only traverse down the DOM (e.g. from parent to child).

Based on the data, XPath looks more favorable than it once was.

## Some Additional Food For Thought

Not being able to traverse the DOM with CSS in older browsers isn't necessarily a bad thing. To me it's more of an indicator that your page has poor design and could benefit from some helpful markup. I outline an approach in [a previous tip](http://elementalselenium.com/tips/25-tables) under the heading "But What About Older Browsers?".

Some other arguments in favor of CSS are that they are more readable, brief, and concise. While I tend to agree, it is a subjective call. Sauce Labs has [a good set of examples that demonstrate CSS and XPath side-by-side to accomplish both simple and advanced tasks](http://saucelabs.com/resources/selenium/css-selectors). It's worth a look for you to determine for yourself.

In [Ben Burton](https://twitter.com/bjburton)'s talk ([Selenium WebDriver Best Practices](http://vimeo.com/44133409)) he posits that you should use CSS because that's how applications are built. This makes the tests easier to write, talk about, and have others help maintain. This is also a point that Santi makes in his presentation.

[Adam Goucher](https://twitter.com/adamgoucher)'s advice is to adopt a more hybrid approach -- focusing first on IDs, then CSS, and leveraging XPath only when you __need__ it (e.g. walking up the DOM). He says he does this without hesitation because it's the right tool for the task, and that XPath will always be more powerful for advanced locators.

## Which Do You Choose?

It's a tough call to make. Especially now that we're armed with the knowledge that the choice is not as reliant on performance as it once was. But the choice is not as permanent as [choosing a programming language](http://elementalselenium.com/tips/21-choosing-a-language), and if you are using helpful abstraction (e.g. [Page Objects](http://elementalselenium.com/tips/tags/page_object)) then leveraging a hybrid approach is simple to implement.

It's just a matter of finding what works for you and your team and not listening to all the hype.

Good luck and Happy Testing!
