---
title: "18: How To Figure Out What to Update"
id: "18-what-to-test"
contentUrl: "docs/how-to-figure-out-what-to-update/18-what-to-test"
sidebar_label: Ruby
text: "There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?"
number: 18
publish_date: 2015-10-13
last_update:
  date: 2023-02-22
tags:
  - "test strategy"
level: 1
category:
  - "fundamentals"
language: all
---

# How to Figure Out What to Test

## Intro

There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?

## A Solution

A great way to increase your chances of automated web testing success is to map out a testing strategy. The best way to do this is to answer these four questions:

1. How does your business make money?
2. How do your users use your application?
3. What browsers are your users using?
4. What things have broken in the application before?

**NOTE: for organizations that don't deal _directly_ in dollars and cents (e.g. non-profits, federal agencies, etc.) you should focus on how the application generates value for the end user.**

After answering these questions you'll have a better understanding of the critical functionality and relevant browsers for the application you're testing. This will help you focus your test automation efforts on the things that matter most.

You'll want to keep track of these items somehow -- the recommended approach is to use a prioritized backlog.

## What To Do With The Answers

### Question 1 - Money/Value

Every company's application makes money (or generates value) through a core set of functionality -- a.k.a. a 'funnel'. Your answers to this question will help you determine what functionality makes up the funnel. This will be your highest priority for test automation.

### Question 2 - Usage Data

There can be a big difference between how you think your application is used and how your users actually use it. Odds are your application offers a robust set of functionality that grows well beyond the core functionality of the funnel.

Your answers to this question will help you determine what features are highly used and lightly used. Add the highly used items onto your automation backlog based on order of use below the answers to question 1.

### Question 3 - Browsers

Now that you know what functionality is business critical and widely adopted by your users, you need to determine what browsers to focus your automated web testing efforts on. Your usage data will tell you this as well. It will help you determine which browsers you can reasonably avoid testing in (e.g. based on non-existent or low usage numbers).

Note the top 2 browsers (or 3 depending on your numbers), but focus on the top 1 for now. This is the browser you will start writing your automated tests in.

### Question 4 - Risky Bits

To round out the strategy it is best to think about what things have broken in the application before. You might be able to glean some of this information from a defect tracker but the best information is often in the minds of your colleagues. Ask around and see what they say.

What you come up with will likely read like a laundry list of browser specific issues or functionality that has been flaky or forgotten about in the past. Be sure to check this list against your automation backlog. If you've come across something that's not already in the backlog, add it and put it at the bottom. If it is there, make a note in the backlog item that this has been an issue in the past. If the issue has happened numerous times and has the potential to occur again, move the item up in the backlog priority.

If issues keep cropping up that are related to a specific browser, compare this browser to your short list from question #3. If it's a browser that's not in your list but it's a small pocket of high value users, track it on the backlog but put it at the bottom.

## Now You Are Ready

Having answered these questions you should now have a prioritized backlog of critical functionality that's backed up by usage data, a short list of browsers to focus on, and an understanding of the risky parts of your application. With it you can make sure you are on the right track with your test automation (regardless if you're just getting started with test automation or already have a mature test automation practice).

## Summary

Hopefully this strategy will help you focus your testing efforts, avoid wasting time, and increase your confidence in the approach you are taking.

This strategy works best for applications with existing functionality and does not speak directly to testing new functionality that's being actively developed. That's not to say that the two couldn't co-exist. It largely depends on your available resources and pace of development but in order to reach high quality at speed, you first have to go slow.

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
