"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[71755,56639],{56639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={},a=void 0,o={id:"right-click/_java",title:"_java",description:"Example",source:"@site/tips/63-right-click/_java.mdx",sourceDirName:"63-right-click",slug:"/right-click/_java",permalink:"/tips/right-click/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/63-right-click/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/right-click/_csharp"},next:{title:"_javascript",permalink:"/tips/right-click/_javascript"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Let's start by importing our requisite classes (for annotations (e.g., ",(0,r.jsx)(t.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,r.jsx)(t.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,r.jsx)(t.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// filename: RightClick.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.*;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.interactions.Actions;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class RightClick {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now we're ready to write our test."}),"\n",(0,r.jsxs)(t.p,{children:["Let's use an example from ",(0,r.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will render a custom context menu when we right-click on a specific area of the page (",(0,r.jsx)(t.a,{href:"http://the-internet.herokuapp.com/context_menu",children:"link"}),").\nClicking the context menu item will trigger a JavaScript alert which will say ",(0,r.jsx)(t.code,{children:"You selected a context menu"}),". We'll grab this text and use it to assert that the menu was actually triggered."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// filename: RightClick.java\n// ...\n    @Test\n    public void rightClickTest() throws InterruptedException {\n        driver.get("http://the-internet.herokuapp.com/context_menu");\n        WebElement menu = driver.findElement(By.id("hot-spot"));\n        Actions action = new Actions(driver);\n        action.contextClick(menu)\n                .sendKeys(Keys.ARROW_DOWN)\n                .sendKeys(Keys.ARROW_DOWN)\n                .sendKeys(Keys.ARROW_DOWN)\n                .sendKeys(Keys.ENTER)\n                .perform();\n        Alert alert = driver.switchTo().alert();\n        assertThat(alert.getText(), is(equalTo("You selected a context menu")));\n    }\n\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,r.jsx)(t.code,{children:"mvn clean test"})," from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser"}),"\n",(0,r.jsx)(t.li,{children:"Visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Find and right-click the area of the page that renders a custom context menu"}),"\n",(0,r.jsx)(t.li,{children:"Navigate to the context menu option with keyboard keys"}),"\n",(0,r.jsx)(t.li,{children:"JavaScript alert appears"}),"\n",(0,r.jsx)(t.li,{children:"Grab the text of the JavaScript alert"}),"\n",(0,r.jsx)(t.li,{children:"Assert that the text from the alert is what we expect"}),"\n",(0,r.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["To learn more about context menus, you can read ",(0,r.jsx)(t.a,{href:"http://blog.teamtreehouse.com/building-html5-context-menus",children:"this write-up from the Tree House blog"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/RomanIsko",children:"Roman Isko"})," for contributing the initial Java code for this tip."]}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);