"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[43722,12373],{12373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(74848),r=n(28453);const a={},o=void 0,i={id:"how-to-work-with-tables/_python",title:"_python",description:"Example 1",source:"@site/tips/25-how-to-work-with-tables/_python.mdx",sourceDirName:"25-how-to-work-with-tables",slug:"/how-to-work-with-tables/_python",permalink:"/tips/how-to-work-with-tables/_python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/25-how-to-work-with-tables/_python.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_javascript",permalink:"/tips/how-to-work-with-tables/_javascript"},next:{title:"_ruby",permalink:"/tips/how-to-work-with-tables/_ruby"}},l={},d=[{value:"Example 1",id:"example-1",level:2},{value:"But What About Older Browsers?",id:"but-what-about-older-browsers",level:3},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["NOTE: You can see the application under test ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/tables",children:"here"}),". It's an example from ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"}),". In the example there are 2 tables. We will start with the first table and then work with the second."]})}),"\n",(0,s.jsxs)(t.p,{children:["We kick things off by pulling in our requisite libraries (",(0,s.jsx)(t.code,{children:"import unittest"})," for our test framework and ",(0,s.jsx)(t.code,{children:"from selenium import webdriver"})," to drive the browser), declare our test class, and wire up some test ",(0,s.jsx)(t.code,{children:"setUp"})," and ",(0,s.jsx)(t.code,{children:"tearDown"})," methods."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: tables.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\n\nclass Tables(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here is the markup from the first table example we're working with. Note that it does not have any ",(0,s.jsx)(t.code,{children:"id"})," or ",(0,s.jsx)(t.code,{children:"class"})," attributes."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<table id=\"table1\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span>Last Name</span></th>\n        <th><span>First Name</span></th>\n        <th><span>Email</span></th>\n        <th><span>Due</span></th>\n        <th><span>Web Site</span></th>\n        <th><span>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Smith</td>\n        <td>John</td>\n        <td>jsmith@gmail.com</td>\n        <td>$50.00</td>\n        <td>http://www.jsmith.com</td>\n        <td>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["There are 6 columns (",(0,s.jsx)(t.code,{children:"Last Name"}),", ",(0,s.jsx)(t.code,{children:"First Name"}),", ",(0,s.jsx)(t.code,{children:"Email"}),", ",(0,s.jsx)(t.code,{children:"Due"}),", ",(0,s.jsx)(t.code,{children:"Web Site"}),", and ",(0,s.jsx)(t.code,{children:"Action"}),"). Each one is sortable by clicking on the column header. The first click should sort them in ascending order, the second click in descending order."]}),"\n",(0,s.jsxs)(t.p,{children:["There is a small sampling of data in the table to work with (4 rows worth). So we should be able to sort the data, grab it, and confirm that it sorted correctly. So lets do that in our first test with the ",(0,s.jsx)(t.code,{children:"Due"})," column using a CSS Pseudo Class."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: tables.py\n# ...\n  def test_sort_number_column_in_ascending_order_with_limited_locators(self):\n      driver = self.driver\n      driver.get('http://the-internet.herokuapp.com/tables')\n      WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR,'#table1 thead tr th:nth-child(4)'))).click()\n      due_column = driver.find_elements(By.CSS_SELECTOR,'#table1 tbody tr td:nth-child(4)')\n      dues = [float(due.text.replace('$','')) for due in due_column]\n      assert dues == sorted(dues)\n\n# ...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After loading the page we find and click the column heading that we want with a CSS Pseudo-class (e.g. ",(0,s.jsx)(t.code,{children:"#table1 thead tr th:nth-child(4)"}),"). This locator targets the 4th ",(0,s.jsx)(t.code,{children:"<th>"})," element in the table heading section (e.g., ",(0,s.jsx)(t.code,{children:"<thead>"}),") (which is the ",(0,s.jsx)(t.code,{children:"Due"})," column heading)."]}),"\n",(0,s.jsxs)(t.p,{children:["We then use another pseudo-class to find all ",(0,s.jsx)(t.code,{children:"<td>"})," elements within the ",(0,s.jsx)(t.code,{children:"Due"})," column by looking for the 4th ",(0,s.jsx)(t.code,{children:"<td>"})," of each row in the table body. Once we have them we grab each of their text values, clean them up (",(0,s.jsx)(t.code,{children:".replace('$','')"}),"), convert them to a number (",(0,s.jsx)(t.code,{children:"flat()"}),"), and store them all in a list called ",(0,s.jsx)(t.code,{children:"dues"}),". We then compare this collection to a sorted version of itself to see if they match. If they do, then the ",(0,s.jsx)(t.code,{children:"Due"})," column was sorted in ascending order and the test will pass."]}),"\n",(0,s.jsxs)(t.p,{children:["If we wanted to test for descending order, we would need to click the ",(0,s.jsx)(t.code,{children:"Due"})," heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: tables.py\n# ...\n    def test_sort_number_column_in_descending_order_with_limited_locators(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/tables')\n        WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR,'#table1 thead tr th:nth-child(4)'))).click()\n        WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR,'#table1 thead tr th:nth-child(4)'))).click()\n        due_column = driver.find_elements(By.CSS_SELECTOR,'#table1 tbody tr td:nth-child(4)')\n        dues = [float(due.text.replace('$','')) for due in due_column]\n        assert dues == sorted(dues, reverse=True)\n\n# ...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the ",(0,s.jsx)(t.code,{children:"Email"})," column."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: tables.py\n# ...\n    def test_sort_text_column_in_ascending_order_with_limited_locators(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/tables')\n        WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR,'#table1 thead tr th:nth-of-type(3)'))).click()\n        email_column = driver.find_elements(By.CSS_SELECTOR,'#table1 tbody tr td:nth-of-type(3)')\n        emails = [email.text for email in email_column]\n        assert emails == sorted(emails)\n\n# ...\n"})}),"\n",(0,s.jsx)(t.p,{children:"The mechanism for this is the same as before, except that we don't need to clean the text up or convert it before performing our assertion."}),"\n",(0,s.jsx)(t.h3,{id:"but-what-about-older-browsers",children:"But What About Older Browsers?"}),"\n",(0,s.jsxs)(t.p,{children:["Now we have some working tests that will load the page and check sorting for a couple of columns in both ascending and descending order. Great! But if we run these again an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating ",(0,s.jsx)(t.code,{children:"Unable to find element"}),". This is because older browsers don't support CSS Pseudo-classes."]}),"\n",(0,s.jsxs)(t.p,{children:["You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on ",(0,s.jsx)(t.strong,{children:"current browsers"})," and submit a request to your front-end developers to update the table markup with some semantic ",(0,s.jsx)(t.code,{children:"class"})," attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly."]}),"\n",(0,s.jsxs)(t.p,{children:["Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second table on ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/tables",children:"our application under test"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<table id=\"table2\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span class='last-name'>Last Name</span></th>\n        <th><span class='first-name'>First Name</span></th>\n        <th><span class='email'>Email</span></th>\n        <th><span class='dues'>Due</span></th>\n        <th><span class='web-site'>Web Site</span></th>\n        <th><span class='action'>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class='last-name'>Smith</td>\n        <td class='first-name'>John</td>\n        <td class='email'>jsmith@gmail.com</td>\n        <td class='dues'>$50.00</td>\n        <td class='web-site'>http://www.jsmith.com</td>\n        <td class='action'>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With these new attributes the locators in our sorting tests become a lot simpler and more expressive. Let's write a new ",(0,s.jsx)(t.code,{children:"Due"})," ascending order test to demonstrate."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# filename: tables.py\n# ...\n    def test_sort_number_column_in_ascending_order_with_helpful_locators(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/tables')\n        WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR,'#table2 thead .dues'))).click()\n        due_column = driver.find_elements(By.CSS_SELECTOR,'#table2 tbody .dues')\n        dues = [float(due.text.replace('$','')) for due in due_column]\n        assert dues == sorted(dues)\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Not only will these selectors work in current ",(0,s.jsx)(t.em,{children:"and"})," older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order."]}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,s.jsx)(t.code,{children:"python tables.py"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Browser opens"}),"\n",(0,s.jsx)(t.li,{children:"Load the page"}),"\n",(0,s.jsx)(t.li,{children:"Click the column heading"}),"\n",(0,s.jsx)(t.li,{children:"Grab the values for the target column"}),"\n",(0,s.jsx)(t.li,{children:"Assert that the column is sorted in the correct order (ascending or descending depending on the test)"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests. They enable a bit of CSS gymnastics but that's only assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out ",(0,s.jsx)(t.a,{href:"/docs/what-to-test/18-what-to-test",children:"tip 18"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For more info on CSS Pseudo-classes see ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/resources/selenium/css-selectors",children:"this write-up by Sauce Labs"}),", and maybe ",(0,s.jsx)(t.a,{href:"http://www.w3.org/TR/css3-selectors/#structural-pseudos",children:"the W3C spec for CSS3"})," if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up ",(0,s.jsx)(t.a,{href:"http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);