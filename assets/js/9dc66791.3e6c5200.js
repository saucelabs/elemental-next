"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,c=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(c,i(i({ref:t},h),{},{components:r})):n.createElement(c,i({ref:t},h))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={title:"Work With Frames",id:"3-work-with-frames-python",contentUrl:"docs/work-with-frames/3-work-with-frames-python",sidebar_label:"Python",text:"In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames.",number:3,hide_table_of_contents:!0,publish_date:new Date("2016-11-14T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["frames"],level:1,category:["fundamentals"],language:"python"},i="How to Work with Frames",l={unversionedId:"work-with-frames/3-work-with-frames-python",id:"work-with-frames/3-work-with-frames-python",title:"Work With Frames",description:"Intro",source:"@site/docs/3-work-with-frames/python.mdx",sourceDirName:"3-work-with-frames",slug:"/work-with-frames/3-work-with-frames-python",permalink:"/elemental-next/docs/work-with-frames/3-work-with-frames-python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-work-with-frames/python.mdx",tags:[{label:"frames",permalink:"/elemental-next/docs/tags/frames"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"Work With Frames",id:"3-work-with-frames-python",contentUrl:"docs/work-with-frames/3-work-with-frames-python",sidebar_label:"Python",text:"In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames.",number:3,hide_table_of_contents:!0,publish_date:"2016-11-14T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["frames"],level:1,category:["fundamentals"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/elemental-next/docs/work-with-frames/3-work-with-frames-javascript"},next:{title:"Ruby",permalink:"/elemental-next/docs/work-with-frames/3-work-with-frames-ruby"}},s={},m=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],h={toc:m},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-work-with-frames"},"How to Work with Frames"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"In this tip, you'll learn how to work with frames and write tests against them."),(0,a.kt)("p",null,"On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's easy to make a mistake if we're not paying attention."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling Selenium to switch to that frame first. Then the rest of your test should be more straightforward."),(0,a.kt)("p",null,"Let's explore further with some examples."),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"We'll first need to pull in our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: frames.py\n\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\nclass Frames(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n")),(0,a.kt)("p",null,"Now onto our test. In it we'll step through ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/nested_frames"},"an example of nested frames")," which can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: frames.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/nested_frames')\n        driver.switch_to.frame('frame-top')\n        driver.switch_to.frame('frame-middle')\n        assert driver.find_element(By.ID,'content').text == \"MIDDLE\", \"content should be MIDDLE\"\n\n# ...\n")),(0,a.kt)("p",null,"With Selenium's ",(0,a.kt)("inlineCode",{parentName:"p"},".switch_to.frame")," method we can easily switch to the frame we want. It accepts either an ID or name attribute. But in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) ",(0,a.kt)("em",{parentName:"p"},"and then")," switch to the child frame (e.g., the middle frame)."),(0,a.kt)("p",null,"Once we've done that we're able to find the element we need, grab its text, and assert that it's what we expect."),(0,a.kt)("p",null,"While this example helps illustrate the point of frame switching, it's not very practical."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("p",null,"Here is a more likely example you'll run into -- working with a WYSIWYG Editor like ",(0,a.kt)("a",{parentName:"p",href:"http://www.tinymce.com/"},"TinyMCE"),". You can see the page we're testing ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tinymce"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: frames.py\n# ...\n    def test_example_2(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/tinymce')\n        driver.switch_to.frame('mce_0_ifr')\n        editor = driver.find_element(By.ID,'tinymce')\n        before_text = editor.text\n        editor.clear()\n        editor.send_keys('Hello World!')\n        after_text = editor.text\n        assert after_text != before_text, \"%s equals %s\" % (before_text, after_text)\n\n\nif __name__ == \"__main__\":\n    unittest.main()\n  assert driver.find_element(By.CSS_SELECTOR, 'h3').text != \"\", \"element should not be empty\"\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If we save the file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python frames.py")," from the command-line) here is what will happen:"),(0,a.kt)("u",null,"Example 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Switch to the nested frame"),(0,a.kt)("li",{parentName:"ul"},"Grab the text from the frame and assert that Selenium is in the correct place"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("u",null,"Example 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Switch to the frame that contains the TinyMCE editor"),(0,a.kt)("li",{parentName:"ul"},"Grab and clear the text in the editor"),(0,a.kt)("li",{parentName:"ul"},"Input and grab new text in the edtitor"),(0,a.kt)("li",{parentName:"ul"},"Assert that the original and new text entries don't match"),(0,a.kt)("li",{parentName:"ul"},"Switch to the top level of the page"),(0,a.kt)("li",{parentName:"ul"},"Grab the text from the top of the page and assert that it's not empty"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Now you're ready to handily defeat frames when they cross your path."),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/trabulmonkee"},"Mike Millgate")," for contributing the Python code for this tip, and to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Dude-X"},"Isaul Vargas")," & ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bittner"},"Peter Bittner")," for code reviewing!"),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About the Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(9417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}u.isMDXComponent=!0},9417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);