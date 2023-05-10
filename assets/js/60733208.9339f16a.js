"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"5: Select From A Dropdown",id:"5-select-from-a-dropdown-javascript",contentUrl:"docs/select-from-a-dropdown/5-select-from-a-dropdown-javascript",sidebar_label:"Javascript",text:"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might seem straightforward just grab the list by its element and select an item within it, based on the text you want there's a bit more skill to it.",number:5,hide_table_of_contents:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["dropdown","forms"],level:1,category:["fundamentals"],language:"javascript"},i="How to Select from a Dropdown List",l={unversionedId:"select-from-a-dropdown/5-select-from-a-dropdown-javascript",id:"select-from-a-dropdown/5-select-from-a-dropdown-javascript",title:"5: Select From A Dropdown",description:"Intro",source:"@site/docs/5-select-from-a-dropdown/javascript.md",sourceDirName:"5-select-from-a-dropdown",slug:"/select-from-a-dropdown/5-select-from-a-dropdown-javascript",permalink:"/elemental-next/docs/select-from-a-dropdown/5-select-from-a-dropdown-javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-select-from-a-dropdown/javascript.md",tags:[{label:"dropdown",permalink:"/elemental-next/docs/tags/dropdown"},{label:"forms",permalink:"/elemental-next/docs/tags/forms"}],version:"current",frontMatter:{title:"5: Select From A Dropdown",id:"5-select-from-a-dropdown-javascript",contentUrl:"docs/select-from-a-dropdown/5-select-from-a-dropdown-javascript",sidebar_label:"Javascript",text:"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might seem straightforward just grab the list by its element and select an item within it, based on the text you want there's a bit more skill to it.",number:5,hide_table_of_contents:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["dropdown","forms"],level:1,category:["fundamentals"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/select-from-a-dropdown/5-select-from-a-dropdown-java"},next:{title:"Python",permalink:"/elemental-next/docs/select-from-a-dropdown/5-select-from-a-dropdown-python"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-select-from-a-dropdown-list"},"How to Select from a Dropdown List"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might ",(0,r.kt)("em",{parentName:"p"},"seem")," straightforward -- just grab the list by its element and select an item within it, based on the text you want -- there's a bit more skill to it."),(0,r.kt)("p",null,"Let's take a look at a couple of different approaches."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First let's pull in our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: spec/dropdown.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("Dropdown", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Now lets' wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: spec/dropdown.spec.js\n// ...\n  it("select the hard way", async function() {\n    await driver.get("http://the-internet.herokuapp.com/dropdown");\n    const options = await driver.findElements(By.css("#dropdown option"));\n    let selection;\n    for (const option in options) {\n      if ((await options[option].getText()) === "Option 1") {\n        await options[option].click();\n        break;\n      }\n    }\n    for (const option in options) {\n      if (await options[option].isSelected()) {\n        selection = await options[option].getText();\n        break;\n      }\n    }\n    assert(selection === "Option 1");\n  });\n// ...\n')),(0,r.kt)("p",null,"After visiting ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the example application")," we find the dropdown list by its ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each ",(0,r.kt)("inlineCode",{parentName:"p"},"option"),") with ",(0,r.kt)("inlineCode",{parentName:"p"},"findElements"),"."),(0,r.kt)("p",null,"Grabbing all of the options returns a collection that we iterate over and when the text matches what we want it will click on it."),(0,r.kt)("p",null,"We finish the test by performing a check to see that our selection was made correctly. This is done by looping over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and then making an assertion against it."),(0,r.kt)("p",null,"While this works, there is a more accessible way to do this."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: spec/dropdown.spec.js\n// ...\n  it("select the simpler way", async function() {\n    await driver.get("http://the-internet.herokuapp.com/dropdown");\n    await driver\n      .findElement(\n        By.xpath("//*[@id=\'dropdown\']/option[contains(text(),\'Option 1\')]")\n      )\n      .click();\n    const selection = await driver\n      .findElement(By.css(\'#dropdown option[selected="selected"]\'))\n      .getText();\n    assert(selection === "Option 1");\n  });\n});\n')),(0,r.kt)("p",null,"Similar to the first example, we are selecting a dropdown list option by its text. Instead of first finding the dropdown list, we will employ a more robust locator (e.g., XPath) to find an element within the dropdown list that contains our target text -- and click it."),(0,r.kt)("p",null,"We then determine what has been selected in the dropdown list by using one more powerful locator (e.g., a CSS selector). This time, looking to see which option has the ",(0,r.kt)("inlineCode",{parentName:"p"},"selected")," attribute, and grabbing its text. We use this found text to assert that the correct item was chosen."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If you save this file with either of these examples and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the example application"),(0,r.kt)("li",{parentName:"ul"},"Find the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Select the requested item from the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Assert that the selected option is the one you expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this tip, we've gone over using Selenium to select from a drop down using the drop down list, or XPath to find an element within the dropdown list."),(0,r.kt)("p",null,"Hopefully this will help you when selecting items from a dropdown list."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About the Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);