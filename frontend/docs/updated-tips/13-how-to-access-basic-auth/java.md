---
title: 'How To Access Basic Auth'
slug: '13-how-to-access-basic-auth/java.md'
number: 13
publish_date: 2023-02-17

tags:
  - "authentication"
level: 1
category: "testing"
language: java
---

# How To Access Basic Auth

## Intro

In this guide, you will learn how to pass credentials to a site when requesting a page that is secured behind Basic HTTP Authentication.

## Use Case

Sometimes you'll work with applications that are secured behind [Basic HTTP Authentication](http://en.wikipedia.org/wiki/Basic_access_authentication) (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page. Otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless.

Before Selenium 2 we were able to accomplish this by injecting credentials into a custom header, but now a popular way to do it is using something like [BrowserMob Proxy](http://bmp.lightbody.net/). Some people are also solving this issue with browser specific configurations but those methods feel a little heavy and complicated.

Instead, let's use a more straightforward approach that is browser agnostic and quick to setup.

## A Solution

By specifying the username and password _in the URL_ when visiting a page with Selenium, we can side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages.

Let's take a look at an example.

## Example(s)
==**`!! Code examples still need to be added & validated!!`**==

<!-- Show your example solution in any of the following : paragraphs, a bulleted list, ordered and unordered lists and include images, code snippets -->

## Expected Behavior
==**`!! Expected behavior still need to be added & validated!!`**==

<!-- Write your expected behavior of the solutions provided as 1-2 paragraphs, a bulleted list or a combination of both -->

## Summary

Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
