---
title: "How To Pick a Programming Language"
slug: "21-choosing-a-language"
number: 21
publish_date: 2015-10-13
tags:
  - "programming language"
  - "frameworks"
level: 1
category: "strategy"
---

## The Problem

In order to work well with Selenium you need to choose a programming language to write your acceptance tests in. Conventional wisdom will tell you to choose the same language that the application you're testing is written in. That way if you get stuck you can ask the Developers on your team for help.

But if you're not proficient in this language (or new to software development) then your progress will be slow and you'll likely end up asking for more Developer help than they have time -- hindering your automation efforts and setting you up for failure.

## A Solution

A great way to determine which language to go with is to answer one simple question: __Who will own the automated tests?__

The answer to this, and the discussion that unfolds from it, will help you more effectively choose a programming language for test automation.

## What To Do With The Answer

If you're a Tester (or a team of Testers) and you will be building and maintaining the test automation, then it's best to consider what languages you (and your team) already have experience with, or are interested in gaining, rather than what the application you're testing is built in. Have a discussion with your team to see what interests them.

For example, there's not much advantage in writing your test automation in Java if your team has no previous development experience and will be the ones owning it. Instead, try to choose a language that is more approachable -- e.g. a scripting language like Ruby or Python. But if you're a Developer that is working on the application and just looking to add automated acceptance testing to the mix then it makes sense to continue with the same language.

## Some Additional Food For Thought

As your suite of tests grow you will find the need to add functionality to make things easier to use, run faster, offer better reporting, etc. When this happens you will effectively be doing two jobs -- building a test harness (a.k.a. a Selenium framework) AND writing automated tests.

As you're considering which language to go with, consider what open source frameworks already exist for the languages you're considering. Going with one that's already built will save you a lot of time and give you a host of functionality out of the box that you would otherwise have to build and maintain yourself -- and it's FREE.

You can find a list of open source Selenium WebDriver frameworks and their respective languages [here](http://davehaeffner.com/resources/selenium-frameworks/). But if you feel the urge to build your own framework (which most people do), then check out [The Selenium Guidebook](https://seleniumguidebook.com/). It steps through the nuts and bolts of building a Selenium framework with detailed examples.

## Outro

Choosing a programming language for automated testing is not a decision that should be taken lightly. If you're just starting out (or looking to port your tests) then considering and discussing this will help position you for greater success.

For a second and third opinion on this topic you can read Adam Goucher and Joe Colantonio's takes [here](http://sauceio.com/index.php/2015/02/stop-being-a-language-snob-debunking-the-but-our-application-is-written-in-x-myth/) and [here](http://www.joecolantonio.com/2015/05/31/selenium-what-programming-language-you-should-learn-to-get-into-test-automation/).

Happy Testing!
