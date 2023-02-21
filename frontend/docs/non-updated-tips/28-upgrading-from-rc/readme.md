---
title: "How To Upgrade From Selenium RC to WebDriver"
slug: "28-upgrading-from-rc"
number: 28
publish_date: 2015-10-13
tags:
  - "selenium rc"
  - "upgrading"
level: 2
category: "upgrading"
---

## The Problem

As the Selenium project continues to evolve, Selenium RC is moving closer to end-of-life. This is especially true with the upcoming release of Selenium 3 where minimal support will be offered for RC (details of which you can learn more about from [a Selenium Hangout with Simon Stewart](http://seleniumhq.wordpress.com/2013/10/09/selenium-hangout-2-recap/)).

But how do you approach an upgrade like this? Especially if you have an enormous amount of Selenium RC tests that you rely on?

## A Solution

Take Jason Leyba's advice. He works at Google and oversaw the transition of their tests from Selenium RC to WebDriver. And he posits that it can be done by following 4 simple steps:  

+ Clean up your tests  
+ Swap in WebDriver-backed Selenium  
+ Use WebDriver for all new features  
+ Replace RC usage as tests break  

To give you some context, Google's Selenium tests spawn something on the order of _3 million unique browser sessions per day_. And they were able to make this transition happen with minimal disruption. If they were able to make this happen at such a scale, then hopefully this serves as inspiration for you to do the same at your organization.

__NOTE: Jason discussed this in detail in [his keynote talk at Selenium Conf 2013 in Boston](http://www.youtube.com/watch?v=cSLmfegT36A). His talking points and code examples are recapped below. You can watch his full talk [here](http://www.youtube.com/watch?v=cSLmfegT36A).__

## 4 Simple Steps

### 1. Clean Up Your Tests

> "Turns out that tests that are easy to maintain are tests that are easy to migrate." -- Jason Leyba

The best thing you can do to keep your tests clean is to practice good abstractions. In the simplest form this means not referencing Selenium commands directly in your tests -- pulling these out into something akin to page objects instead.

__NOTE: You can read more about how to accomplish this in [tip 9](/tips/9-use-a-base-page-object).__

### 2. Swap in WebDriver-backed Selenium

With WebDriver-backed Selenium you get two driver instances to use in your tests -- one for Selenium RC and another for WebDriver. This enables you to keep your Selenium RC tests running while simultaneously building out WebDriver functionality as you transition things over.

You can see an example of what this looks like [here](https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings#webdriver-backed-selenium).

### 3. & 4. Improve Things Incrementally

For every new feature you write tests for, use WebDriver. And as your Selenium RC tests break go back and replace the broken bits with WebDriver.

Chip away at this over time and you'll eventually be upgraded.

## Common Pitfalls

There are a handful of pitfalls to be aware of when stepping through this upgrade.

### Alert Handling

WebDriver handles JavaScript alerts in a fundamentally different and incompatible way between Selenium RC and WebDriver that won't work in WebDriver-backed Selenium.

The best way to address this is to port your alert handling from Selenium RC to WebDriver -- which is pretty straightforward and should be easy to accomplish assuming you have things well abstracted (re: Step #1 above).

Here is an example of the difference:

```java
// Selenium RC
selenium.chooseCancelOnNextConfirmation();
selenium.click("id=foo");

// WebDriver
webdriver.findElement(By.id("foo")).click();
webdriver.switchTo().alert().dismiss();
```

### Waiting For The Page To Load

There's no need to explicitly wait for the page to load anymore since WebDriver can implicitly do this for us.

Here's an example:

```java
// Selenium RC
selenium.open("http://www.google.com");
selenium.waitForPageToLoad();
selenium.typeKeys("name=q", "bears");

// WebDriver
selenium.open("http://www.google.com");
selenium.typeKeys("name=q", "bears");
```

If you run into timing issues with this newer approach, consider adding an explicit wait for the element you want to interact with.

__NOTE: For more insight into implicit and explicit waits, check out [tip 47](/tips/47-waiting).__

### Getting Text From The Page

It's an expensive operation (and overkill) to get __ALL__ of the text from the page to make a verification. And it takes longer to execute this in WebDriver.

A better approach is to find the element that has the text you want and check it's text instead. Alternatively, if you want to search the entire page, it's better to get the page's _source_ and parse that.

```java
// Slow and unnecessary
String text = selenium.getBodyText();
assertTrue(text.contains("hello"));

// Targeted and fast
WebElement body = webdriver.findElement(By.tagName("body"));
String text = body.getText();
assertTrue(text.contains("hello"));
```

### Be careful with JavaScript

WebDriver-backed Selenium is not built for performance. It's meant to be a transitional tool. So things will run slower in it. The worst offender being when you issue JavaScript commands directly to the Selenium Core API. So do your best to avoid things like this.

```java
selenium.getEval(
     "selenium.isElementPresent('id=foo') && " +
     "selenium.isVisible('id=foo')");
```

### Inertia

It's worth noting that the hardest part of Google's transition wasn't technical. Teams were really slow to adopt WebDriver -- even when the tools were readily available, well documented, and easy to use. Jason and his team were able to persevere and succeed through various means (e.g carrot, stick, elbow grease, etc.), but this really slowed their progress.

If you find yourself in a similar situation at your organization, it's worth giving [Jason's talk](http://www.youtube.com/watch?v=cSLmfegT36A) a watch for inspiration.


## Outro

If you're faced with a similar upgrade in your future hopefully this tip has helped prepare you for what lies ahead.

Happy Testing!
