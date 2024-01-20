"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[43296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,m=u["".concat(i,".").concat(c)]||u[c]||h[c]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-03-09T00:00:00.000Z")}},s=void 0,l={unversionedId:"how-to-work-with-tables/ruby",id:"how-to-work-with-tables/ruby",title:"ruby",description:"A Solution",source:"@site/tips/25-how-to-work-with-tables/ruby.md",sourceDirName:"25-how-to-work-with-tables",slug:"/how-to-work-with-tables/ruby",permalink:"/tips/how-to-work-with-tables/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/25-how-to-work-with-tables/ruby.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:167832e4,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-03-09T00:00:00.000Z"}}},i={},d=[{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"You can easily traverse a table through the use of ",(0,r.kt)("a",{parentName:"p",href:"http://www.w3schools.com/css/css_pseudo_classes.asp"},"CSS Pseudo-classes"),"."),(0,r.kt)("p",null,"But keep in mind that if you care about older browsers (e.g., Internet Explorer 8, et al), then this approach won't work on them. In those cases your best bet is to find a workable solution for the short term and get a front-end developer to update the table with helpful attributes."),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"a-quick-primer-on-tables-and-css-pseudo-classes"},(0,r.kt)("em",{parentName:"h3"},(0,r.kt)("strong",{parentName:"em"},"A quick primer on Tables and CSS Pseudo-classes"))),(0,r.kt)("p",{parentName:"blockquote"},"Understanding the broad strokes of an HTML table's structure goes a long way in writing effective automation against it. So here's a quick primer."),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"A table has:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"a header (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"<thead>"),")"),(0,r.kt)("li",{parentName:"ul"},"a body (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"<tbody>"),")."),(0,r.kt)("li",{parentName:"ul"},"rows (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"<tr>"),") -- horizontal slats of data"),(0,r.kt)("li",{parentName:"ul"},"columns -- vertical slats of data"))),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Columns are made up of cells, which are:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"a header (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"<th>"),")"),(0,r.kt)("li",{parentName:"ul"},"one or more standard cells (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"<td>")," -- which is short for ",(0,r.kt)("strong",{parentName:"li"},"table data"),")"))),(0,r.kt)("p",{parentName:"blockquote"},"CSS Pseudo-classes work by walking through the structure of an object and targeting a specific part of it based on a relative number (e.g. the ",(0,r.kt)("strong",{parentName:"p"},"third")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," cell from a row in the table body). This works well with tables since we can grab all instances of a target (e.g. the third ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," cell from each ",(0,r.kt)("inlineCode",{parentName:"p"},"<tr>")," in the table body) and use it in our test -- which would give us all of the data for the third column.")),(0,r.kt)("p",null,"Let's step through some examples for a common set of table functionality like sorting columns in ascending and descending order."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: You can see the application under test ",(0,r.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/tables"},"here"),". It's an example from ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),". In the example there are 2 tables. We will start with the first table and then work with the second.")),(0,r.kt)("p",null,"We kick things off by requiring our dependent libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"selenium-webriver")," to drive the browser and ",(0,r.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and its matchers to handle our assertions) and wiring up some ",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," methods to handle our test configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: table_sort.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"Here is the markup from the first table example we're working with. Note that it does not have any ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," attributes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"table1\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span>Last Name</span></th>\n        <th><span>First Name</span></th>\n        <th><span>Email</span></th>\n        <th><span>Due</span></th>\n        <th><span>Web Site</span></th>\n        <th><span>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Smith</td>\n        <td>John</td>\n        <td>jsmith@gmail.com</td>\n        <td>$50.00</td>\n        <td>http://www.jsmith.com</td>\n        <td>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n")),(0,r.kt)("p",null,"There are 6 columns (",(0,r.kt)("inlineCode",{parentName:"p"},"Last Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"First Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Due"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Site"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"). Each one is sortable by clicking on the column header. The first click will sort them in ascending order, the second click in descending order."),(0,r.kt)("p",null,"There is a small sampling of data in the table to work with (4 rows worth), so we should be able to sort the data, grab it, and confirm that it sorted correctly. So let's do that in our first test with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column using a CSS Pseudo Class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n\n  dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort\nend\n")),(0,r.kt)("p",null,"After loading the page we find and click the column heading that we want with a CSS Pseudo-class (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"#table1 thead tr th:nth-of-type(4)"),"). This locator targets the 4th ",(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," element in the table heading section (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"<thead>"),") (which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column heading)."),(0,r.kt)("p",null,"We then use another pseudo-class to find all ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," elements within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column by looking for the 4th ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," of each row in the table body. Once we have them we grab each of their text values, clean them up (",(0,r.kt)("inlineCode",{parentName:"p"},".delete($)"),"), convert them to a number (",(0,r.kt)("inlineCode",{parentName:"p"},".to_f"),"), and store them all in a collection called ",(0,r.kt)("inlineCode",{parentName:"p"},"due_values"),". We then compare this collection to a sorted version of itself to see if they match. If they do, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column was sorted in ascending order and the test will pass."),(0,r.kt)("p",null,"If we wanted to test for descending order, we would need to click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n\n  dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort.reverse\nend\n")),(0,r.kt)("p",null,"We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(3)').click\n\n  emails = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(3)')\n  email_values = emails.map { |email| email.text }\n\n  expect(email_values).to eql email_values.sort\nend\n")),(0,r.kt)("p",null,"The mechanism for this is the same except that we don't need to clean the text up or convert it before performing our assertion."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"But what about older browsers?"),(0,r.kt)("p",null,"If we run these against an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating ",(0,r.kt)("inlineCode",{parentName:"p"},"Unable to find element"),". This is because older browsers don't support CSS Pseudo-classes."),(0,r.kt)("p",null,"You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on ",(0,r.kt)("strong",{parentName:"p"},"current browsers")," and submit a request to your front-end developers to update the table markup with some semantic ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly."),(0,r.kt)("p",null,"Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second example of ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tables"},"our application under test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"table2\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span class='last-name'>Last Name</span></th>\n        <th><span class='first-name'>First Name</span></th>\n        <th><span class='email'>Email</span></th>\n        <th><span class='dues'>Due</span></th>\n        <th><span class='web-site'>Web Site</span></th>\n        <th><span class='action'>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class='last-name'>Smith</td>\n        <td class='first-name'>John</td>\n        <td class='email'>jsmith@gmail.com</td>\n        <td class='dues'>$50.00</td>\n        <td class='web-site'>http://www.jsmith.com</td>\n        <td class='action'>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n")),(0,r.kt)("p",null,"With these selectors our sorting tests become a lot simpler and more expressive. Let's take our previous ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," ascending test and update it to demonstrate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# ...\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table2 thead .dues').click\n\n  dues = @driver.find_elements(css: '#table2 tbody .dues')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort\nend\n")),(0,r.kt)("p",null,"Not only will these selectors work in current ",(0,r.kt)("em",{parentName:"p"},"and")," older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby table_sort.rb")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Load the page"),(0,r.kt)("li",{parentName:"ul"},"Click the column heading"),(0,r.kt)("li",{parentName:"ul"},"Grab the values for that column"),(0,r.kt)("li",{parentName:"ul"},"Assert that the columns are sorted in the correct order (ascending or descending)"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests; enabling a bit of CSS gymnastics assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/what-to-test/18-what-to-test"},"tip 18"),"."),(0,r.kt)("p",null,"For more info on CSS Pseudo-classes see ",(0,r.kt)("a",{parentName:"p",href:"https://saucelabs.com/resources/selenium/css-selectors"},"this write-up by Sauce Labs"),", and maybe ",(0,r.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/css3-selectors/#structural-pseudos"},"the W3C spec CSS3")," if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up ",(0,r.kt)("a",{parentName:"p",href:"http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery"},"here"),"."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);