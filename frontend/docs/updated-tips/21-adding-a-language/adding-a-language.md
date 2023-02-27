---
title: 'How To Pick a Programming Language'
slug: '21-choosing-a-language'
number: 21
publish_date: 2015-10-13
last_update: 
  date: 2023-02-22
tags:
  - 'programming language'
  - 'frameworks'
level: 1
category: 'strategy'
---

# How To Pick A Programming Language

## Intro

In order to work well with Selenium you need to choose a programming language to write your acceptance tests in. This guide will help you determine which language to choose for testing. 

## Use Case

It might seem like a good idea to choose the same language that the application you're testing is written in, because if you get stuck you can ask the developers on your team for help.

But if you're not proficient in this language (or new to software development), then your progress will be slow and you'll likely end up asking for more developer help than they have time for which could hinder your automation efforts and slow your testing progress.

## A Solution

A great way to determine which language to go with is to answer one simple question: __Who will own the automated tests?__

The answer to this, and the discussion that unfolds from it, will help you more effectively choose a programming language for test automation.

## Example

If you're a tester (or a team of testers) and you will be building and maintaining the test automation, then it's best to consider what languages you (and your team) already have experience with, or are interested in gaining, rather than what the application you're testing is built in. Have a discussion with your team to see what interests them.

For example, there's not much advantage in writing your test automation in Java if your team has no previous development experience and will be the ones owning it. Instead, try to choose a language that is more approachable -- e.g. a scripting language like Ruby or Python. But if you're a developer that is working on the application and just looking to add automated acceptance testing to the mix then it makes sense to continue with the same language.

As your suite of tests grow you will find the need to add functionality to make things easier to use, run faster, offer better reporting, etc. When this happens you will effectively be doing two jobs -- building a test harness (a.k.a. a Selenium framework) AND writing automated tests.

As you're considering which language to go with, consider what open source frameworks already exist for the languages you're considering. Going with one that's already built will save you a lot of time and give you a host of functionality out of the box that you would otherwise have to build and maintain yourself -- and it's FREE.

## Summary

Choosing a programming language for automated testing is not a decision that should be taken lightly. If you're just starting out (or looking to port your tests) then considering and discussing this will help position you for greater success.

For a second and third opinion on this topic you can read Adam Goucher and Joe Colantonio's takes [here](https://saucelabs.com/resources/blog/stop-being-a-language-snob-debunking-the-but-our-application-is-written-in-x-myth-guest-post)and [here](http://www.joecolantonio.com/2015/05/31/selenium-what-programming-language-you-should-learn-to-get-into-test-automation/).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
