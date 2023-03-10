---
title: "CSharp"
id: "45-checkboxes-csharp"
slug: csharp/
number: 45
publish_date: 2019-08-09
last_update: 
  date: 2023-02-22
tags:
  - "checkboxes"
  - "attribute"
  - "selected"
level: 1
category: "testing"
language: csharp
---

# How To Test Checkboxes

## Intro

Checkboxes are an often used element in web applications but how do you work with them in your Selenium tests? 

## Use Case

Intuitively you may reach for a method that has the word 'checked' in it -- like `.checked` or `.is_checked` but this doesn't exist in Selenium. So how do you do it?

There are two ways to approach this -- by seeing if an element has a `checked` attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been _selected_.

Let's step through each approach to see their pros and cons.

## Example

For reference, here is the markup from [the page we will be testing against](http://the-internet.herokuapp.com/checkboxes) (an example from [the-internet](https://github.com/tourdedave/the-internet)).

==**`!! Code examples still need to be added & validated!!`**==

## Expected Behavior

==**`!! Expected behavior still need to be added & validated!!`**==

## Summary

Attribute lookups are generally meant for pulling information out of the page for review however in this case they lend themselves to seeing if a checkbox is checked. There is a method which was built for this use case that is more readable and has a predictable set of return values. `isSelected` should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it.

Happy Testing!

## About the Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
