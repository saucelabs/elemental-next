---
title: "How To Work With HTML Data Tables"
slug: "25-tables"
number: 25
publish_date: 2015-10-13
tags:
  - "tables"
  - "sorting"
  - "css selectors"
  - "css pseudo-classes"
level: 2
category: "testing"
---

## The Problem

Odds are at some point you've come across the use of tables in a web application to display data or information to a user, giving them the option to sort and manipulate it. Depending on your application it can be quite common and something you will want to write an automated test for.

But when the table has no helpful, semantic markup (e.g. easy to use `id` or `class` attributes) it quickly becomes more difficult to work with and write tests against it. And if you're able to pull something together, it will likely not work against older browsers.

## A Solution

You can easily traverse a table through the use of [CSS pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes).

But keep in mind that if you care about older browsers (e.g., Internet Explorer, et al), then this approach won't work on them. In those cases your best bet is to find a workable solution for the short term and get a front-end developer to update the table with helpful attributes.

## A quick primer on Tables and CSS pseudo-classes

Understanding the broad strokes of an HTML table's structure goes a long way in writing effective automation against it. So here's a quick primer.

A table has...

+ a header (e.g. `<thead>`)
+ a body (e.g. `<tbody>`).
+ rows (e.g. `<tr>`) -- horizontal slats of data
+ columns -- vertical slats of data

Columns are made up of cells which are...

+ a header (e.g., `<th>`)
+ one or more standard cells (e.g., `<td>` -- which is short for __table data__)

CSS pseudo-classes work by walking through the structure of an object and targeting a specific part of it based on a relative number (e.g. the __third__ `<td>` cell from a row in the table body). This works well with tables since we can grab all instances of a target (e.g. the third `<td>` cell from each `<tr>` in the table body) and use it in our test -- which would give us all of the data for the third column.

Let's step through some examples for a common set of table functionality like sorting columns in ascending and descending order.

## An Example

__NOTE: You can see the application under test [here](http://the-internet.herokuapp.com/tables). It's an example from [the-internet](https://github.com/tourdedave/the-internet). In the example there are 2 tables. We will start with the first table and then work with the second.__

We kick things off by pulling in our requisite libraries, declare our test class, and wire up some test setup and teardown methods.

```javascript
// filename: test/tables.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Tables", function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Here is the markup from the first table example we're working with. Note that it does not have any `id` or `class` attributes.

```html
<table id="table1" class="tablesorter">
    <thead>
      <tr>
        <th><span>Last Name</span></th>
        <th><span>First Name</span></th>
        <th><span>Email</span></th>
        <th><span>Due</span></th>
        <th><span>Web Site</span></th>
        <th><span>Action</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Smith</td>
        <td>John</td>
        <td>jsmith@gmail.com</td>
        <td>$50.00</td>
        <td>http://www.jsmith.com</td>
        <td>
          <a href='#edit'>edit</a>
          <a href='#delete'>delete</a>
        </td>
      </tr>
```

There are 6 columns (`Last Name`, `First Name`, `Email`, `Due`, `Web Site`, and `Action`). Each one is sortable by clicking on the column header. The first click should sort them in ascending order, the second click in descending order.

There is a small sampling of data in the table to work with (4 rows worth). So we should be able to sort the data, grab it, and confirm that it sorted correctly. So lets do that in our first test with the `Due` column using a CSS pseudo Class.

```javascript
// filename: test/tables.spec.js
// ...
  it("should sort number column in ascending order", async function() {
    await driver.get("http://the-internet.herokuapp.com/tables");
    await driver
      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))
      .click();
    const due_column = await driver.findElements(
      By.css("#table1 tbody tr td:nth-of-type(4)")
    );
    let dues = [];
    for (const entry in due_column) {
      const text = await due_column[entry].getText();
      dues.push(Number(text.replace("$", "")));
    }
    assert(dues === dues.sort());
  });
// ...
```

After loading the page we find and click the column heading that we want with a CSS pseudo-class (e.g. `#table1 thead tr th:nth-of-type(4)`). This locator targets the 4th `<th>` element in the table heading section (e.g., `<thead>`) (which is the `Due` column heading).

We then use another pseudo-class to find all `<td>` elements within the `Due` column by looking for the 4th `<td>` of each row in the table body. Once we have them we grab each of their text values, clean them up (`.replace('$','')`), convert them to a number (`Number()`), and store them all in a array called `dues`. We then compare this collection to a sorted version of itself to see if they match. If they do, then the `Due` column was sorted in ascending order and the test will pass.

If we wanted to test for descending order, we would need to click the `Due` heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order.

```javascript
// filename: test/tables.spec.js
// ...
  it("should sort number column in descending order", async function() {
    await driver.get("http://the-internet.herokuapp.com/tables");
    await driver
      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))
      .click();
    await driver
      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))
      .click();
    const due_column = await driver.findElements(
      By.css("#table1 tbody tr td:nth-of-type(4)")
    );
    let dues = [];
    for (const entry in due_column) {
      const text = await due_column[entry].getText();
      dues.push(Number(text.replace("$", "")));
    }
    assert(dues === dues.sort().reverse());
  });
// ...
```

We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the `Email` column.

```javascript
// filename: test/tables.spec.js
// ...
  it("should sort text column in ascending", async function() {
    await driver.get("http://the-internet.herokuapp.com/tables");
    await driver
      .findElement(By.css("#table1 thead tr th:nth-of-type(3)"))
      .click();
    const email_column = await driver.findElements(
      By.css("#table1 tbody tr td:nth-of-type(3)")
    );
    let emails = [];
    for (const entry in email_column) {
      emails.push(await email_column[entry].getText());
    }
    assert(emails === emails.sort());
  });
// ...
```

The mechanism for this is the same as before, except that we don't need to clean the text up or convert it before performing our assertion.

## But What About Better Locators?

Here is what the markup of our original table would look like with some helpful attributes added in. It's also the markup from the second table on [our application under test](http://the-internet.herokuapp.com/tables).

```html
<table id="table2" class="tablesorter">
    <thead>
      <tr> <th><span class='last-name'>Last Name</span></th>
        <th><span class='first-name'>First Name</span></th>
        <th><span class='email'>Email</span></th>
        <th><span class='dues'>Due</span></th>
        <th><span class='web-site'>Web Site</span></th>
        <th><span class='action'>Action</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class='last-name'>Smith</td>
        <td class='first-name'>John</td>
        <td class='email'>jsmith@gmail.com</td>
        <td class='dues'>$50.00</td>
        <td class='web-site'>http://www.jsmith.com</td>
        <td class='action'>
          <a href='#edit'>edit</a>
          <a href='#delete'>delete</a>
        </td>
      </tr>
```

With these new attributes the locators in our sorting tests become a lot simpler and more expressive. Let's write a new `Due` ascending order test to demonstrate.

```javascript
// filename: test/tables.spec.js
// ...
  it("sort number column in ascending order with helpful locators", async function() {
    await driver.get("http://the-internet.herokuapp.com/tables");
    driver.findElement(By.css("#table2 thead .dues")).click();
    const due_column = await driver.findElements(By.css("#table2 tbody .dues"));
    let dues = [];
    for (const entry in due_column) {
      const text = await due_column[entry].getText();
      dues.push(Number(text.replace("$", "")));
    }
    assert(dues === dues.sort());
  });
});
```

Not only will these selectors work in current _and_ legacy browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen:

+ Browser opens
+ Load the page
+ Click the column heading
+ Grab the values for the target column
+ Assert that the column is sorted in the correct order (ascending or descending depending on the test)
+ Close the browser

## Outro

Oftentimes you'll need to automate something which is lacking in reliable, semantic locators, but with CSS pseudo-classes you can cover a lot of ground in your tests by enabling a bit of CSS gymnastics.

But you can greatly simplify test automation efforts by adding some helpful attributes to key elements in the application under test.

Happy Testing!
