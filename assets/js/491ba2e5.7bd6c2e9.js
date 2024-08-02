"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[15184,95931],{95931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(74848),r=n(28453);const a={},o=void 0,i={id:"how-to-work-with-tables/_ruby",title:"_ruby",description:"Example 1",source:"@site/tips/25-how-to-work-with-tables/_ruby.mdx",sourceDirName:"25-how-to-work-with-tables",slug:"/how-to-work-with-tables/_ruby",permalink:"/tips/how-to-work-with-tables/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/25-how-to-work-with-tables/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/how-to-work-with-tables/_python"},next:{title:"How To Work With Tables",permalink:"/tips/25-how-to-work-with-tables"}},l={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["NOTE: You can see the application under test ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/tables",children:"here"}),". It's an example from ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"}),". In the example there are 2 tables. We will start with the first table and then work with the second."]})}),"\n",(0,s.jsxs)(t.p,{children:["We kick things off by requiring our dependent libraries (",(0,s.jsx)(t.code,{children:"selenium-webriver"})," to drive the browser and ",(0,s.jsx)(t.code,{children:"rspec/expectations"})," and its matchers to handle our assertions) and wiring up some ",(0,s.jsx)(t.code,{children:"setup"}),", ",(0,s.jsx)(t.code,{children:"teardown"}),", and ",(0,s.jsx)(t.code,{children:"run"})," methods to handle our test configuration."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# filename: table_sort.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here is the markup from the first table example we're working with. Note that it does not have any ",(0,s.jsx)(t.code,{children:"id"})," or ",(0,s.jsx)(t.code,{children:"class"})," attributes."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<table id=\"table1\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span>Last Name</span></th>\n        <th><span>First Name</span></th>\n        <th><span>Email</span></th>\n        <th><span>Due</span></th>\n        <th><span>Web Site</span></th>\n        <th><span>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Smith</td>\n        <td>John</td>\n        <td>jsmith@gmail.com</td>\n        <td>$50.00</td>\n        <td>http://www.jsmith.com</td>\n        <td>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["There are 6 columns (",(0,s.jsx)(t.code,{children:"Last Name"}),", ",(0,s.jsx)(t.code,{children:"First Name"}),", ",(0,s.jsx)(t.code,{children:"Email"}),", ",(0,s.jsx)(t.code,{children:"Due"}),", ",(0,s.jsx)(t.code,{children:"Web Site"}),", and ",(0,s.jsx)(t.code,{children:"Action"}),"). Each one is sortable by clicking on the column header. The first click will sort them in ascending order, the second click in descending order."]}),"\n",(0,s.jsxs)(t.p,{children:["There is a small sampling of data in the table to work with (4 rows worth), so we should be able to sort the data, grab it, and confirm that it sorted correctly. So let's do that in our first test with the ",(0,s.jsx)(t.code,{children:"Due"})," column using a CSS Pseudo Class."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n\n  dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort\nend\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After loading the page we find and click the column heading that we want with a CSS Pseudo-class (e.g. ",(0,s.jsx)(t.code,{children:"#table1 thead tr th:nth-of-type(4)"}),"). This locator targets the 4th ",(0,s.jsx)(t.code,{children:"<th>"})," element in the table heading section (e.g., ",(0,s.jsx)(t.code,{children:"<thead>"}),") (which is the ",(0,s.jsx)(t.code,{children:"Due"})," column heading)."]}),"\n",(0,s.jsxs)(t.p,{children:["We then use another pseudo-class to find all ",(0,s.jsx)(t.code,{children:"<td>"})," elements within the ",(0,s.jsx)(t.code,{children:"Due"})," column by looking for the 4th ",(0,s.jsx)(t.code,{children:"<td>"})," of each row in the table body. Once we have them we grab each of their text values, clean them up (",(0,s.jsx)(t.code,{children:".delete($)"}),"), convert them to a number (",(0,s.jsx)(t.code,{children:".to_f"}),"), and store them all in a collection called ",(0,s.jsx)(t.code,{children:"due_values"}),". We then compare this collection to a sorted version of itself to see if they match. If they do, then the ",(0,s.jsx)(t.code,{children:"Due"})," column was sorted in ascending order and the test will pass."]}),"\n",(0,s.jsxs)(t.p,{children:["If we wanted to test for descending order, we would need to click the ",(0,s.jsx)(t.code,{children:"Due"})," heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n\n  dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort.reverse\nend\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the ",(0,s.jsx)(t.code,{children:"Email"})," column."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(3)').click\n\n  emails = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(3)')\n  email_values = emails.map { |email| email.text }\n\n  expect(email_values).to eql email_values.sort\nend\n"})}),"\n",(0,s.jsx)(t.p,{children:"The mechanism for this is the same except that we don't need to clean the text up or convert it before performing our assertion."}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"But what about older browsers?"}),"\n",(0,s.jsxs)(t.p,{children:["If we run these against an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating ",(0,s.jsx)(t.code,{children:"Unable to find element"}),". This is because older browsers don't support CSS Pseudo-classes."]}),"\n",(0,s.jsxs)(t.p,{children:["You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on ",(0,s.jsx)(t.strong,{children:"current browsers"})," and submit a request to your front-end developers to update the table markup with some semantic ",(0,s.jsx)(t.code,{children:"class"})," attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly."]}),"\n",(0,s.jsxs)(t.p,{children:["Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second example of ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/tables",children:"our application under test"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<table id=\"table2\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span class='last-name'>Last Name</span></th>\n        <th><span class='first-name'>First Name</span></th>\n        <th><span class='email'>Email</span></th>\n        <th><span class='dues'>Due</span></th>\n        <th><span class='web-site'>Web Site</span></th>\n        <th><span class='action'>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class='last-name'>Smith</td>\n        <td class='first-name'>John</td>\n        <td class='email'>jsmith@gmail.com</td>\n        <td class='dues'>$50.00</td>\n        <td class='web-site'>http://www.jsmith.com</td>\n        <td class='action'>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With these selectors our sorting tests become a lot simpler and more expressive. Let's take our previous ",(0,s.jsx)(t.code,{children:"Due"})," ascending test and update it to demonstrate."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# ...\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table2 thead .dues').click\n\n  dues = @driver.find_elements(css: '#table2 tbody .dues')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort\nend\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Not only will these selectors work in current ",(0,s.jsx)(t.em,{children:"and"})," older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order."]}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["If you save this file and run it (e.g., ",(0,s.jsx)(t.code,{children:"ruby table_sort.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the browser"}),"\n",(0,s.jsx)(t.li,{children:"Load the page"}),"\n",(0,s.jsx)(t.li,{children:"Click the column heading"}),"\n",(0,s.jsx)(t.li,{children:"Grab the values for that column"}),"\n",(0,s.jsx)(t.li,{children:"Assert that the columns are sorted in the correct order (ascending or descending)"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests; enabling a bit of CSS gymnastics assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out ",(0,s.jsx)(t.a,{href:"/docs/what-to-test/18-what-to-test",children:"tip 18"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For more info on CSS Pseudo-classes see ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/resources/selenium/css-selectors",children:"this write-up by Sauce Labs"}),", and maybe ",(0,s.jsx)(t.a,{href:"http://www.w3.org/TR/css3-selectors/#structural-pseudos",children:"the W3C spec CSS3"})," if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up ",(0,s.jsx)(t.a,{href:"http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);