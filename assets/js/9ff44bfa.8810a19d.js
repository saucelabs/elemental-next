"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[74689,39275],{39275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(74848),s=n(28453);const i={},a=void 0,o={id:"how-to-press-keyboard-keys/_java",title:"_java",description:"Example",source:"@site/tips/61-how-to-press-keyboard-keys/_java.mdx",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/_java",permalink:"/tips/how-to-press-keyboard-keys/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/61-how-to-press-keyboard-keys/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727981519e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/how-to-press-keyboard-keys/_csharp"},next:{title:"_javascript",permalink:"/tips/how-to-press-keyboard-keys/_javascript"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["First let's import our requisite classes (for annotations (e.g., ",(0,r.jsx)(t.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,r.jsx)(t.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,r.jsx)(t.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// filename: KeyboardKeys.java\n\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.interactions.Actions;\nimport org.openqa.selenium.Keys;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.junit.Assert.assertThat;\n\npublic class KeyboardKeys {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now we can wire up our test."}),"\n",(0,r.jsxs)(t.p,{children:["Let's use an example from ",(0,r.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will display what key has been pressed (",(0,r.jsx)(t.a,{href:"http://the-internet.herokuapp.com/key_presses",children:"link"}),"). We'll use the result text that gets displayed to perform our assertion."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// filename: KeyboardKeys.java\n// ...\n    @Test\n    public void uploadFile() throws Exception {\n        driver.get("http://the-internet.herokuapp.com/key_presses");\n        driver.findElement(By.id("target")).sendKeys(Keys.SPACE);\n        assertThat(driver.findElement(By.id("result")).getText(), is("You entered: SPACE"));\n// ...\n'})}),"\n",(0,r.jsxs)(t.p,{children:["After visiting the page we find an element that's visible (e.g., the one that contains the example on the page) and send the space key to it (e.g., ",(0,r.jsx)(t.code,{children:"builder.sendKeys(Keys.SPACE).build().perform()"}),"). Then we grab the resulting text (e.g., ",(0,r.jsx)(t.code,{children:'driver.findElement(By.id("result")).getText()'}),") and assert that it says what we expect (e.g., ",(0,r.jsx)(t.code,{children:'is("You entered: SPACE"));'}),")."]}),"\n",(0,r.jsx)(t.p,{children:"Alternatively, we can also issue a key press without finding the element first."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// filename: KeyboardKeys.java\n// ...\n        Actions builder = new Actions(driver);\n        builder.sendKeys(Keys.LEFT).build().perform();\n        assertThat(driver.findElement(By.id("result")).getText(), is("You entered: LEFT"));\n    }\n\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.p,{children:["When you save this file and run it (e.g. ",(0,r.jsx)(t.code,{children:"mvn clean test"})," from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser"}),"\n",(0,r.jsx)(t.li,{children:"Visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Find the element and send the space key to it"}),"\n",(0,r.jsx)(t.li,{children:"Find the result text on the page and check to that it's what we expect"}),"\n",(0,r.jsx)(t.li,{children:"Send the left arrow key to the element that's currently in focus"}),"\n",(0,r.jsx)(t.li,{children:"Find the result text on the page and check to that it's what we expect"}),"\n",(0,r.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. But if you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."}),"\n",(0,r.jsxs)(t.p,{children:["Thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/RomanIsko",children:"Roman Isko"})," for contributing the initial Java code for this ti."]}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);