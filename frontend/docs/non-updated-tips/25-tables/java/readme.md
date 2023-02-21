---
title: "How To Work With HTML Data Tables"
slug: "25-tables"
number: 25
publish_date: 2015-11-11
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

You can easily traverse a table through the use of [CSS Pseudo-classes](http://www.w3schools.com/css/css_pseudo_classes.asp).

But keep in mind that if you care about older browsers (e.g., Internet Explorer 8, et al), then this approach won't work on them. In those cases your best bet is to find a workable solution for the short term and get a front-end developer to update the table with helpful attributes.

## A quick primer on Tables and CSS Pseudo-classes

Understanding the broad strokes of an HTML table's structure goes a long way in writing effective automation against it. So here's a quick primer.

A table has...

+ a header (e.g. `<thead>`)
+ a body (e.g. `<tbody>`).
+ rows (e.g. `<tr>`) -- horizontal slats of data
+ columns -- vertical slats of data

Columns are made up of cells which are...

+ a header (e.g., `<th>`)
+ one or more standard cells (e.g., `<td>` -- which is short for __table data__)

CSS Pseudo-classes work by walking through the structure of an object and targeting a specific part of it based on a relative number (e.g. the __third__ `<td>` cell from a row in the table body). This works well with tables since we can grab all instances of a target (e.g. the third `<td>` cell from each `<tr>` in the table body) and use it in our test -- which would give us all of the data for the third column.

Let's step through some examples for a common set of table functionality like sorting columns in ascending and descending order.

## An Example

__NOTE: You can see the application under test [here](http://the-internet.herokuapp.com/tables). It's an example from [the-internet](https://github.com/tourdedave/the-internet). In the example there are 2 tables. We will start with the first table and then work with the second.__

Let's start by importing our requisite classes (for annotations (e.g., `org.junit.After`, etc.), driving the browser with Selenium (e.g., `org.openqa.selenium.WebDriver`, etc.), and matchers for our assertions (e.g., `org.hamcrest.CoreMatchers`, etc.)) and start our class with some setup and teardown methods.

```java
// filename: Tables.java
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.LinkedList;
import java.util.List;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.number.OrderingComparison.lessThan;
import static org.hamcrest.number.OrderingComparison.lessThanOrEqualTo;
import static org.hamcrest.number.OrderingComparison.greaterThanOrEqualTo;

public class Tables {
    WebDriver driver;

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();

    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }
// ...
```

Here is the markup from the first table we're working with. Note that it does not have any `id` or `class` attributes.

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

There are 6 columns (`Last Name`, `First Name`, `Email`, `Due`, `Web Site`, and `Action`). Each one is sortable by clicking on the column header. The first click will sort them in ascending order, the second click in descending order.

There is a small sampling of data in the table to work with (4 rows worth), so we should be able to sort the data, grab it, and confirm that it sorted correctly. So let's do that in our first test with the `Due` column using a CSS Pseudo-class.

```java
// filename: Tables.java
// ...
    @Test
    public void withoutHelpfulMarkupDuesAscending() {
    {
        driver.get("http://the-internet.herokuapp.com/tables");
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();

        List<WebElement> dues = driver.findElements(By.cssSelector("#table1 tbody tr td:nth-of-type(4)"));
        List<Double> dueValues = new LinkedList<Double>();
        for(WebElement element : dues){
            dueValues.add(Double.parseDouble(element.getText().replace("$", "")));
        }

        for(int counter = 0; counter < dueValues.size() - 1; counter++){
            assertThat(dueValues.get(counter), is(lessThanOrEqualTo(dueValues.get(counter + 1))));
        }
    }
// ...
```

After visiting the page we find and click the column heading that we want with a CSS Pseudo-class (e.g. `#table1 thead tr th:nth-of-type(4)`). This locator targets the 4th `<th>` element in the table heading section (e.g., `<thead>`) (which is the `Due` column heading).

We use another pseudo-class to find all `<td>` elements within the `Due` column by looking for the 4th `<td>` of each row in the table body. Once we have them we grab each of their text values, clean them up by removing the `$`, convert them to a number (e.g., `Double`), and store them all in a collection called `dueValues`. We then iterate through the collection and compare values that are next to each other to see if they're sorted correctly.

If we wanted to test for descending order, we would need to click the `Due` heading twice after loading the page. Other than that the code is identical except for the assertion which is checking that the adjacent value is `greaterThanOrEqual`.

```java
// filename: Tables.java
// ...
    @Test
    public void withoutHelpfulMarkupDuesDescending() {
        driver.get("http://the-internet.herokuapp.com/tables");

        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();
        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();

        List<WebElement> dues = driver.findElements(By.cssSelector("#table1 tbody tr td:nth-of-type(4)"));
        List<Double> dueValues = new LinkedList<Double>();
        for (WebElement element : dues) {
            dueValues.add(Double.parseDouble(element.getText().replace("$", "")));
        }

        for (int counter = 0; counter < dueValues.size() - 1; counter++) {
            assertThat(dueValues.get(counter), is(greaterThanOrEqualTo(dueValues.get(counter + 1))));
        }
    }
// ...
```

We can easily use this locator strategy to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the `Email` column.

```java
// filename: Tables.java
// ...
    @Test
    public void withoutHelpfulMarkupEmailAscending() {
        driver.get("http://the-internet.herokuapp.com/tables");

        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(3)")).click();

        List<WebElement> emails = driver.findElements(By.cssSelector("#table1 tbody tr td:nth-of-type(3)"));
        for(int counter = 0; counter < emails.size() -1; counter++){
            assertThat(
                    emails.get(counter).getText().compareTo(emails.get(counter + 1).getText()),
                    is(lessThan(0)));
        }
    }
// ...
```

The mechanism for this is the same except that we don't need to clean the text up or convert it before performing our assertion. And our assertion is using `compareTo` which returns a number based on the result. A negative number means that it's ascending, a positive number descending, and a `0` means the two values are equal.

## But What About Older Browsers?

Now we have some working tests that will load the page and check sorting for a couple of columns in both ascending and descending order. Great! But if we run these again an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating `Unable to find element`. This is because older browsers don't support CSS Pseudo-classes.

You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on __current browsers__ and submit a request to your front-end developers to update the table's markup with some semantic `class` attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly.

Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second table on [the example page](http://the-internet.herokuapp.com/tables).

```html
<table id="table2" class="tablesorter">
    <thead>
      <tr>
        <th><span class='last-name'>Last Name</span></th>
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

With these well-placed, descriptive class attributes our sorting tests become _a lot_ simpler and more expressive. Let's revisit sorting the `Due` column in ascending order in a new test.

```java
// filename: Tables.java
// ...
    @Test
    public void withHelpfulMarkup()
    {
        driver.get("http://the-internet.herokuapp.com/tables");
        driver.findElement(By.cssSelector("#table2 thead .dues")).click();
        List<WebElement> dues = driver.findElements(By.cssSelector("#table2 tbody .dues"));
        List<Double> dueValues = new LinkedList<Double>();
        for(WebElement element : dues){
            dueValues.add(Double.parseDouble(element.getText().replace("$", "")));
        }
        for(int counter = 0; counter < dueValues.size() - 1; counter++){
            assertThat(dueValues.get(counter), is(lessThanOrEqualTo(dueValues.get(counter + 1))));
        }
    }
}
```

Not only will these selectors work in current _and_ older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order.

## Expected Behavior

When you save this file and run it (e.g., `mvn clean test` from the command-line) here is what will happen:

+ Open the browser
+ Load the page
+ Click the column heading
+ Grab the values for the column
+ Assert that the column values are sorted in the correct order (ascending or descending)
+ Close the browser

## Outro

CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests; enabling a bit of CSS gymnastics assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out [tip 18](/tips/18-what-to-test).

For more info on CSS Pseudo-classes see [this write-up by Sauce Labs](https://saucelabs.com/resources/selenium/css-selectors), and maybe [the W3C spec CSS3](http://www.w3.org/TR/css3-selectors/#structural-pseudos) if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up [here](http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery).

Happy Testing!
