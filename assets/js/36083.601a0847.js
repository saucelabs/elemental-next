"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[36083],{36083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var s=n(74848),r=n(28453);const a={},o=void 0,i={id:"how-to-work-with-tables/_java",title:"_java",description:"Example 1",source:"@site/tips/25-how-to-work-with-tables/_java.mdx",sourceDirName:"25-how-to-work-with-tables",slug:"/how-to-work-with-tables/_java",permalink:"/tips/how-to-work-with-tables/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/25-how-to-work-with-tables/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/how-to-work-with-tables/_csharp"},next:{title:"_javascript",permalink:"/tips/how-to-work-with-tables/_javascript"}},l={},h=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["NOTE: You can see the application under test ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/tables",children:"here"}),". It's an example from ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"}),". In the example there are 2 tables. We will start with the first table and then work with the second."]})}),"\n",(0,s.jsxs)(t.p,{children:["Let's start by importing our requisite classes (for annotations (e.g., ",(0,s.jsx)(t.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,s.jsx)(t.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,s.jsx)(t.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"// filename: Tables.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport java.util.LinkedList;\nimport java.util.List;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\nimport static org.hamcrest.number.OrderingComparison.lessThan;\nimport static org.hamcrest.number.OrderingComparison.lessThanOrEqualTo;\nimport static org.hamcrest.number.OrderingComparison.greaterThanOrEqualTo;\n\npublic class Tables {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here is the markup from the first table we're working with. Note that it does not have any ",(0,s.jsx)(t.code,{children:"id"})," or ",(0,s.jsx)(t.code,{children:"class"})," attributes."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<table id=\"table1\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span>Last Name</span></th>\n        <th><span>First Name</span></th>\n        <th><span>Email</span></th>\n        <th><span>Due</span></th>\n        <th><span>Web Site</span></th>\n        <th><span>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Smith</td>\n        <td>John</td>\n        <td>jsmith@gmail.com</td>\n        <td>$50.00</td>\n        <td>http://www.jsmith.com</td>\n        <td>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["There are 6 columns (",(0,s.jsx)(t.code,{children:"Last Name"}),", ",(0,s.jsx)(t.code,{children:"First Name"}),", ",(0,s.jsx)(t.code,{children:"Email"}),", ",(0,s.jsx)(t.code,{children:"Due"}),", ",(0,s.jsx)(t.code,{children:"Web Site"}),", and ",(0,s.jsx)(t.code,{children:"Action"}),"). Each one is sortable by clicking on the column header. The first click will sort them in ascending order, the second click in descending order."]}),"\n",(0,s.jsxs)(t.p,{children:["There is a small sampling of data in the table to work with (4 rows worth), so we should be able to sort the data, grab it, and confirm that it sorted correctly. So let's do that in our first test with the ",(0,s.jsx)(t.code,{children:"Due"})," column using a CSS Pseudo-class."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'// filename: Tables.java\n// ...\n    @Test\n    public void withoutHelpfulMarkupDuesAscending() {\n    {\n        driver.get("http://the-internet.herokuapp.com/tables");\n        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();\n\n        List<WebElement> dues = driver.findElements(By.cssSelector("#table1 tbody tr td:nth-of-type(4)"));\n        List<Double> dueValues = new LinkedList<Double>();\n        for(WebElement element : dues){\n            dueValues.add(Double.parseDouble(element.getText().replace("$", "")));\n        }\n\n        for(int counter = 0; counter < dueValues.size() - 1; counter++){\n            assertThat(dueValues.get(counter), is(lessThanOrEqualTo(dueValues.get(counter + 1))));\n        }\n    }\n// ...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["After visiting the page we find and click the column heading that we want with a CSS Pseudo-class (e.g. ",(0,s.jsx)(t.code,{children:"#table1 thead tr th:nth-of-type(4)"}),"). This locator targets the 4th ",(0,s.jsx)(t.code,{children:"<th>"})," element in the table heading section (e.g., ",(0,s.jsx)(t.code,{children:"<thead>"}),") (which is the ",(0,s.jsx)(t.code,{children:"Due"})," column heading)."]}),"\n",(0,s.jsxs)(t.p,{children:["We use another pseudo-class to find all ",(0,s.jsx)(t.code,{children:"<td>"})," elements within the ",(0,s.jsx)(t.code,{children:"Due"})," column by looking for the 4th ",(0,s.jsx)(t.code,{children:"<td>"})," of each row in the table body. Once we have them we grab each of their text values, clean them up by removing the ",(0,s.jsx)(t.code,{children:"$"}),", convert them to a number (e.g., ",(0,s.jsx)(t.code,{children:"Double"}),"), and store them all in a collection called ",(0,s.jsx)(t.code,{children:"dueValues"}),". We then iterate through the collection and compare values that are next to each other to see if they're sorted correctly."]}),"\n",(0,s.jsxs)(t.p,{children:["If we wanted to test for descending order, we would need to click the ",(0,s.jsx)(t.code,{children:"Due"})," heading twice after loading the page. Other than that the code is identical except for the assertion which is checking that the adjacent value is ",(0,s.jsx)(t.code,{children:"greaterThanOrEqual"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'// filename: Tables.java\n// ...\n    @Test\n    public void withoutHelpfulMarkupDuesDescending() {\n        driver.get("http://the-internet.herokuapp.com/tables");\n\n        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();\n        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(4)")).click();\n\n        List<WebElement> dues = driver.findElements(By.cssSelector("#table1 tbody tr td:nth-of-type(4)"));\n        List<Double> dueValues = new LinkedList<Double>();\n        for (WebElement element : dues) {\n            dueValues.add(Double.parseDouble(element.getText().replace("$", "")));\n        }\n\n        for (int counter = 0; counter < dueValues.size() - 1; counter++) {\n            assertThat(dueValues.get(counter), is(greaterThanOrEqualTo(dueValues.get(counter + 1))));\n        }\n    }\n// ...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We can easily use this locator strategy to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the ",(0,s.jsx)(t.code,{children:"Email"})," column."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'// filename: Tables.java\n// ...\n    @Test\n    public void withoutHelpfulMarkupEmailAscending() {\n        driver.get("http://the-internet.herokuapp.com/tables");\n\n        driver.findElement(By.cssSelector("#table1 thead tr th:nth-of-type(3)")).click();\n\n        List<WebElement> emails = driver.findElements(By.cssSelector("#table1 tbody tr td:nth-of-type(3)"));\n        for(int counter = 0; counter < emails.size() -1; counter++){\n            assertThat(\n                    emails.get(counter).getText().compareTo(emails.get(counter + 1).getText()),\n                    is(lessThan(0)));\n        }\n    }\n// ...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The mechanism for this is the same except that we don't need to clean the text up or convert it before performing our assertion. And our assertion is using ",(0,s.jsx)(t.code,{children:"compareTo"})," which returns a number based on the result. A negative number means that it's ascending, a positive number descending, and a ",(0,s.jsx)(t.code,{children:"0"})," means the two values are equal."]}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"But What About Older Browsers?"}),"\n",(0,s.jsxs)(t.p,{children:["Now we have some working tests that will load the page and check sorting for a couple of columns in both ascending and descending order. Great! But if we run these again an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating ",(0,s.jsx)(t.code,{children:"Unable to find element"}),". This is because older browsers don't support CSS Pseudo-classes."]}),"\n",(0,s.jsxs)(t.p,{children:["You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on ",(0,s.jsx)(t.strong,{children:"current browsers"})," and submit a request to your front-end developers to update the table's markup with some semantic ",(0,s.jsx)(t.code,{children:"class"})," attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly."]}),"\n",(0,s.jsxs)(t.p,{children:["Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second table on ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/tables",children:"the example page"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<table id=\"table2\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span class='last-name'>Last Name</span></th>\n        <th><span class='first-name'>First Name</span></th>\n        <th><span class='email'>Email</span></th>\n        <th><span class='dues'>Due</span></th>\n        <th><span class='web-site'>Web Site</span></th>\n        <th><span class='action'>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class='last-name'>Smith</td>\n        <td class='first-name'>John</td>\n        <td class='email'>jsmith@gmail.com</td>\n        <td class='dues'>$50.00</td>\n        <td class='web-site'>http://www.jsmith.com</td>\n        <td class='action'>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With these well-placed, descriptive class attributes our sorting tests become ",(0,s.jsx)(t.em,{children:"a lot"})," simpler and more expressive. Let's revisit sorting the ",(0,s.jsx)(t.code,{children:"Due"})," column in ascending order in a new test."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'// filename: Tables.java\n// ...\n    @Test\n    public void withHelpfulMarkup()\n    {\n        driver.get("http://the-internet.herokuapp.com/tables");\n        driver.findElement(By.cssSelector("#table2 thead .dues")).click();\n        List<WebElement> dues = driver.findElements(By.cssSelector("#table2 tbody .dues"));\n        List<Double> dueValues = new LinkedList<Double>();\n        for(WebElement element : dues){\n            dueValues.add(Double.parseDouble(element.getText().replace("$", "")));\n        }\n        for(int counter = 0; counter < dueValues.size() - 1; counter++){\n            assertThat(dueValues.get(counter), is(lessThanOrEqualTo(dueValues.get(counter + 1))));\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Not only will these selectors work in current ",(0,s.jsx)(t.em,{children:"and"})," older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order."]}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,s.jsx)(t.code,{children:"mvn clean test"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsx)(t.li,{children:"Load the page"}),"\n",(0,s.jsx)(t.li,{children:"Click the column heading"}),"\n",(0,s.jsx)(t.li,{children:"Grab the values for the column"}),"\n",(0,s.jsx)(t.li,{children:"Assert that the column values are sorted in the correct order (ascending or descending)"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests; enabling a bit of CSS gymnastics assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out ",(0,s.jsx)(t.a,{href:"/docs/what-to-test/18-what-to-test",children:"tip 18"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For more info on CSS Pseudo-classes see ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/resources/selenium/css-selectors",children:"this write-up by Sauce Labs"}),", and maybe ",(0,s.jsx)(t.a,{href:"http://www.w3.org/TR/css3-selectors/#structural-pseudos",children:"the W3C spec CSS3"})," if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up ",(0,s.jsx)(t.a,{href:"http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);