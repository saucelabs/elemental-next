"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"51: How To Work With JavaScript Alerts",id:"51-javascript-alerts-python",contentUrl:"docs/how-to-work-with-javascript-alerts/51-javascript-alerts-python",sidebar_label:"Python",text:"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.",number:51,hide_table_of_contents:!0,publish_date:new Date("2016-11-19T00:00:00.000Z"),last_update:{date:new Date("2023-03-03T00:00:00.000Z")},tags:["javascript","javascript alerts","javascript popups","javascript dialogs"],level:1,category:["fundamentals","tools"],language:"python"},o="How to Work with JavaScript Alerts",l={unversionedId:"how-to-work-with-javascript-alerts/51-javascript-alerts-python",id:"how-to-work-with-javascript-alerts/51-javascript-alerts-python",title:"51: How To Work With JavaScript Alerts",description:"Intro",source:"@site/docs/51-how-to-work-with-javascript-alerts/python.md",sourceDirName:"51-how-to-work-with-javascript-alerts",slug:"/how-to-work-with-javascript-alerts/51-javascript-alerts-python",permalink:"/elemental-next/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/51-how-to-work-with-javascript-alerts/python.md",tags:[{label:"javascript",permalink:"/elemental-next/docs/tags/javascript"},{label:"javascript alerts",permalink:"/elemental-next/docs/tags/javascript-alerts"},{label:"javascript popups",permalink:"/elemental-next/docs/tags/javascript-popups"},{label:"javascript dialogs",permalink:"/elemental-next/docs/tags/javascript-dialogs"}],version:"current",lastUpdatedBy:"Rajene Harris",lastUpdatedAt:1677801600,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"51: How To Work With JavaScript Alerts",id:"51-javascript-alerts-python",contentUrl:"docs/how-to-work-with-javascript-alerts/51-javascript-alerts-python",sidebar_label:"Python",text:"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.",number:51,hide_table_of_contents:!0,publish_date:"2016-11-19T00:00:00.000Z",last_update:{date:"2023-03-03T00:00:00.000Z"},tags:["javascript","javascript alerts","javascript popups","javascript dialogs"],level:1,category:["fundamentals","tools"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-javascript"},next:{title:"Ruby",permalink:"/elemental-next/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-ruby"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-work-with-javascript-alerts"},"How to Work with JavaScript Alerts"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes."),(0,r.kt)("p",null,"A popular use case for alerts is in the case of error prevention for password restrictions."),(0,r.kt)("p",null,"If your application triggers any JavaScript pop-ups (a.k.a. alerts, dialogs, etc.) then you need to know how to handle them in your Selenium tests."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Our example application is available ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/javascript_alerts"},"here")," on ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel"),")."),(0,r.kt)("p",null,"First, we'll include our requisite libraries, declare the test class, and wire up some simple ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: javascript_alerts.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass JavaScriptAlerts(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n")),(0,r.kt)("p",null,"Now let's write our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: javascript_alerts.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/javascript_alerts')\n        driver.find_element(By.CSS_SELECTOR, \"ul > li:nth-child(1) > button\").click()\n        popup = driver.switch_to.alert\n        popup.accept()\n        result = driver.find_element(By.ID, 'result').text\n        assert result == 'You successfully clicked an alert'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,r.kt)("p",null,"A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find all of the buttons on the page using ",(0,r.kt)("inlineCode",{parentName:"p"},"find_elements")," and click on the second one. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"find_elements")," returns a list of all found elements, we can assume that the first item can be selected using ",(0,r.kt)("inlineCode",{parentName:"p"},"[0]")," (since lists in Python start counting at ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"). So the second item would be ",(0,r.kt)("inlineCode",{parentName:"p"},"[1]"),"."),(0,r.kt)("p",null,"After click the button to trigger the JavaScript Alert we use Selenium's ",(0,r.kt)("inlineCode",{parentName:"p"},"switch_to.alert")," method to focus on the JavaScript pop-up and use ",(0,r.kt)("inlineCode",{parentName:"p"},".accept()")," to click ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok"),". If we wanted to click ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel")," we would have used ",(0,r.kt)("inlineCode",{parentName:"p"},".dismiss()"),"."),(0,r.kt)("p",null,"After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words ",(0,r.kt)("inlineCode",{parentName:"p"},"You clicked: Ok")," are displayed on the page."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"python javascript_alerts.py")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Load the page"),(0,r.kt)("li",{parentName:"ul"},"Click the second button on the page"),(0,r.kt)("li",{parentName:"ul"},"JavaScript Confirmation Alert appears"),(0,r.kt)("li",{parentName:"ul"},"Accept the JavaScript Confirmation Alert"),(0,r.kt)("li",{parentName:"ul"},"Assert that the result on the page is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's ",(0,r.kt)("inlineCode",{parentName:"p"},"switchTo().alert()"),". After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);