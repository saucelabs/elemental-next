---
title: 'An Introduction to Web Consistency Testing'
slug: '62-web-consistency-testing'
number: 62
publish_date: 2014-08-12
tags:
  - 'web consistency testing'
  - 'guest post'
level: 2
category: 'strategy'
---

**NOTE: This post is out-dated. For more current information be sure to check out the getting started with automated visual testing article I published on the Applitools Eyes Blog ([link](http://testautomation.applitools.com/post/105435804567/how-to-do-visual-testing-with-selenium?utm_medium=web&utm_campaign=tip&utm_source=elemental-selenium)).**
**NOTE: This is a guest post from Kevin Menard. He's the maintainer of Selenium Grid, a co-founder of a Selenium-based automated visual testing platform ([Mogotest](https://mogotest.com/)), and the father of Web Consistency Testing. You can find him at [@nirvdrum on Twitter](https://twitter.com/nirvdrum) and on [the Selenium IRC Chat channel](http://elementalselenium.com/tips/20-irc-chat) (as `nirvdrum`). But what is Web Consistency Testing exactly and why is it important? Enter Kevin.**

Most of our testing is verification testing, whether it be for the Web or for another problem domain. If I click a button to submit a form, does it POST the data to the server? Do I get back the correct HTTP status code? Does my database update with the correct values?

Unit, functional, and integration testing almost exclusively fall into the category of verification testing. While there is immense value there, it's a local maximum. And as with most local maxima, we as an industry have been stuck there for a while. We find better ways to test server interactions or a new language for integration testing. But, we haven't solved any new problems.

Verification testing helps ensure things work, within our specified constraints. Ostensibly those have been chosen to match how customers will interact with the site or application. But, it's not enough to just test data and its manipulation. Nowadays usability, design, and the overall user experience are what separate the winners from the losers. As customers and potential customers alike access web properties on a growing number of devices, while simultaneously demanding a higher quality Web, we need to expand our definition of testing to better match a user's expectations.

The first interaction most users will have with a site is visual <sup><a href="#footnote_1">1</a></sup>. However, many of us perform no visual testing of any sort. Others rely on an error-prone, expensive manual QA process. And a small number have attempted automated testing through image comparisons with varying levels of success. Why have we ignored testing what is arguably the most important part of the Web experience?

As I researched this topic, the most frequent answer I've heard is that how a page looks is related to style and we can't test style. While to a certain degree that's true, a web browser has a structured representation of a site called the DOM. The DOM contains a materialized view of any transformations performed by CSS or JavaScript and it's represented as a tree, which means traversing and comparing two DOMs is a fairly straightforward process.

Accepting that there's a technical solution to the problem, visual testing has still been prohibitively expensive for many. Maintaining a cluster of browsers in a lab meant a lot of software licenses and hardware had to be purchased, along with a salary to maintain those machines. Fortunately, cloud computing is changing that landscape. Not only can machines be acquired with necessary licenses for much cheaper, but by enabling Testing as a Service (TaaS) applications, the maintenance and computation costs can be distributed across many customers, further driving the price of such services down.

And finally, previous attempts at visual testing were mostly based upon image comparisons. These tests required pixel-perfect results and could only highlight a region that rendered incorrectly. While certainly better than nothing, analyzing those results and determining where the error lay was another laborious process, so many avoided it.

Web Consistency Testing is a new approach to automated visual testing of web sites & applications. It places emphasis on the user, answering the simple question: does this page look right? Rather than get bogged down with pixel-perfect renders<sup><a href="#footnote_2">2</a></sup>, it adapts to the browser and device it's being tested in and tests for a consistent user experience in that configuration. By focusing on issues that actually affect users rather than minute differences detected by computers, we can reduce the cost of testing and free up designers & developers to work on things that truly matter.

Web Consistency Testing is an automated visual comparison between two renderings of a site. Those renderings can span many dimensions, with the most obvious example being cross-browser. But the same process can be used to catch visual regressions, cross-locale problems, and differences in rendering due to bandwidth constraints over a time interval (e.g., to test slow mobile devices).

Any detected differences within a configurable tolerance threshold are reported back as CSS selectors for the elements in error, along with associated context about the error such as the element's position on the page, dimensions, opacity, and classification of error. Rather than provide a simple pass/fail mechanism, we want to provide scoped information that will allow a web developer to isolate the problem and fix it quickly.

Additionally, visual issues tend to have cascading effects. E.g., if a DIV is off by 200px along the y-axis, it's almost certainly going to push all elements that follow it down by 200px. Reporting each of those other elements as a problem is a red herring, as fixing the root problem will likely fix all the cascading problems as well. With Web Consistency Testing, we normalize each error as it's detected so we can continue testing the rest of the page as if no problem occurred. This allows us to surface only root issues and eliminate false negatives.

And perhaps the best part about Web Consistency Testing is that it avoids a common problem with front-end tests in general: they become obsolete whenever a major structural change is made. Since the input to a Web Consistency Test is the "reference" copy of a site, the tests are always up-to-date and adapt along with the site. Even better - they don't require any test code authoring so anyone in an organization can set up a test. Just configure some URLs to test and indicate what the "reference" copy is and you're good to go. When testing is easier to perform, it's easier to adopt, and we can help foster a culture of testing in an organization.

Web Consistency Testing is still in its infancy. I've been studying and refining these approaches over the past 4 years and have put them into practice in an enterprise-grade implementation called [Mogotest](https://mogotest.com/). I really think the industry is in a testing rut and we have the opportunity to push forward in a better direction. I doubt Web Consistency Testing is going to be the end game, but so far the results have been phenomenal. By questioning the traditional forms of web testing I have been able to achieve things I never thought possible.

If you're interested in learning more, please check out [http://webconsistencytesting.com/](http://webconsistencytesting.com/). I've been collecting materials over there and there's a discussion group where I try to answer questions. While I do have a commercial interest in this, my intention is to develop these ideas publicly and move the state of web testing forward as a community. I'm a long-time open source contributor and will gladly help anyone looking to build out their own toolchain.

<div class="footnote" id="footnote_1" style="font-size: smaller;">1 My apologies for those with visual impairments - accessibility testing is also a very important and overlooked facet.</div>
<br></br>
<div class="footnote" id="footnote_2" style="font-size: smaller;">2 Although you could tune it for pixel-perfect if that's a requirement for your site or application.</div>
<br></br>
