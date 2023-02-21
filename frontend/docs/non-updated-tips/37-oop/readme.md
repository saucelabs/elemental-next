---
title: "How To Structure Your Test Code"
slug: "37-oop"
number: 37
publish_date: 2014-02-11
tags:
  - "java"
  - "oop"
  - "object oriented programming"
  - "oop testing"
  - "guest post"
level: 3
category: "design"
---

__NOTE: This is a guest post from a fellow test practitioner Josh Grant. You can find him on Twitter at [@joshin4colours](https://twitter.com/joshin4colours) and read his excellent testing blog [here](http://simplythetest.tumblr.com/).__

## The Problem

Writing automated tests is pretty easy. Writing good and maintainable tests is much, much tougher. This is especially true as test projects grow in size and complexity.

## A Solution

There are some approaches that can help structure tests in projects. I'm going to outline one such approach I've used with success. It has helped reduce test duplication and complexity while making tests easier to organize. It leans heavily on object-oriented programming (OOP) principles, which I think lend themselves pretty well to writing tests in a reasonably sized project.

## The Approach Explained

In this approach, there are essentially two guidelines:

+ One test case per class
+ Make smart use of inheritance

The first point is the important one. Since we're trying to use OOP ideas, we want to focus on the class level.

Think of each class as a test case, and focus it on a particular aspect (or component) of the system you're testing. This provides an easy way to add new test cases (simply create a new class) and modify and update existing tests (by removing/disabling test methods within a class). It can greatly help organize your test suites by allowing existing tests (e.g., individual methods) to be easily combined together. 

The second point is fairly straightforward. Inheritance is key feature of OOP, and thinking of tests as objects should be easy to grasp since tests should be well-defined.

Essentially, there are three levels of test classes:

+ a single base class (contains common aspects of all tests)
+ one or more intermediate test classes (contains common actions for related groups of tests)
+ actual test classes (where tests live and run)

Note the first two kinds of classes don't consist of tests; they're more for grouping common actions and behavior together.

Let's see an example.

## An Example

Suppose you're testing a forum app like [Reddit](http://www.reddit.com) and one of the main components under test is posting. A post is an initial entry with some comments and additional information. Let's say that some basic actions for working with posts are creating a post, deleting a post, and updating a post.

With that in mind, here is what our class structure would look like.

<img alt="diagram of the approach" src="/img/diagram.png" style="background-color:white;" />

Let's step through what it would look like in code.

### Base Class

Using our approach, our base test class would look something like this:

```java
class Test {

  protected setUpBeforeTestClass(){
    // initialize a browser driver, connect to servers
  }

  protected setUpBeforeTestMethod() {
    // initialize testPage
    // login to the app, if necessary
  }

  protected tearDownAfterTestMethod() {
    // logout of the app, if necessary
  }

  protected tearDownAfterTestClass() {
    // close connections, close browser as needed
  }
}
```

Here, some things should become clear. Each test class starts by opening a browser driver and ends with closing a browser driver. Also, each test method starts with logging in, and ends with logging out.

This approach offers us some flexibility. For instance, opening and closing the driver could be moved to occur for every test method. Some lines of code would just need to get moved from one place to another within this class.

__NOTE: If we were in the Java or C# world, this class would be an abstract class, since we don't ever want to run a base test with generic operators. This assures that this class would only ever be inherited from instead of used directly.__

### Intermediate Class(es)

Here's what an intermediate test class for posting would look like:

```java
class PostTest extends Test {

  protected setUpBeforeTestClass(){
    // no changes needed
    super.setUpBeforeTestClass();
  }

  protected setUpBeforeTestMethod() {
    // do the parent actions, then add some post-specific actions
    super.setUpBeforeTestMethod();
    testPage.goToPostPage();

  }

  protected tearDownAfterTestMethod() {
    // logout of the app, if necessary
  }

  protected tearDownAfterTestClass() {
    // close connections, close browser as needed
  }
}
```

Looking at the two guiding principles above, we make good use of inheritance since a PostTest class [is a](http://en.wikipedia.org/wiki/Is-a) Test class.

Notice that the only thing we've changed is setUpBeforeTestMethod, which now directs the browser to the posts page (e.g., `testPage.goToPostPage();`). Other methods could be overridden as well if needed, and other methods could be added here beyond setup and teardown methods. We could also include a page object here if needed. Also, if the language were so inclined, this class could be abstract.

Now, we can write some test classes to take advantage of our hard work. This is where we specify the actual tests that get run.

### Test Classes

Remember that there are three post operations we'd like to focus on: creating a post, deleting a post, and updating a post. These sound like good candidates for individual test classes, which will encapsulate each test case. 

Here's a test class for creating a post:

```java
class CreateNewPostTest extends PostTest {

  public testCreateValidNewPost(){
    // test is ready to go!
    testPage.createNewPost(postDetails);
    assert testPage.isPostPresent(postDetails);
  }

  public testCreateInvalidNewPost() {
    // test is ready to go!
    testPage.createNewPost(invalidPostDetails);
    assert !testPage.isPostPresent(invalidPostDetails);
  }

  // and so on
}
```

This class shows both of the guiding principles stated above. It neatly defines the test case of creating a new post, with variations (which can be added or subtracted). It also makes good use of inheritance, since a CreateNewPostTest is a PostTest. One other benefit: this class is short and simple! All of the messy details are abstracted away in the previous classes, so this class can focus on doing it's job.

Let's look at a delete test class now:

```java
class DeleteNewPostTest extends PostTest {

  public setUpBeforeTestMethod(){
    // create a post so we can delete it
    super.setUpBeforeTestMethod();
    testPage.createNewPost(postDetails);
  }

  public testDeleteNewPost(){
    // test is ready to go!
    testPage.deletePost(postDetails);
    assert !testPage.isPostPresent(postDetails);
  }

  // and so on
}
```

Here, we're able to modify the setup methods to create an object for deleting. This helps us isolate test methods to focus on a particular aspect of posts (deleting) without having to add unnecessary steps in the test itself. 

## Outro

Now, you may be thinking at this point, "This looks like a lot of work upfront", and you might be correct. For small test projects, this approach might be overkill. However, for projects that are not small, you can see some scaling advantages that OOP provides.

If more functionality is added to the app (moderating posts, closing posts), you can just add some more test classes since basic setup and teardown are done for you. As well, this approach helps isolate tests from one another so tests can be run independently. Lastly, this approach helps teams (beyond one or two people) break up tasks and responsibilities so large projects can be worked on efficiently.  

Go ahead, use OOP for writing tests.
