"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[96e3,86836],{86836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),r=n(28453);const s={},a=void 0,o={id:"opt-out-of-ab-tests/_java",title:"_java",description:"Example",source:"@site/tips/12-opt-out-of-ab-tests/_java.mdx",sourceDirName:"12-opt-out-of-ab-tests",slug:"/opt-out-of-ab-tests/_java",permalink:"/tips/opt-out-of-ab-tests/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/12-opt-out-of-ab-tests/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/opt-out-of-ab-tests/_csharp"},next:{title:"_javascript",permalink:"/tips/opt-out-of-ab-tests/_javascript"}},h={},l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Our example page is from ",(0,i.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})," and can be seen ",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/abtest",children:"here"}),". There are three different variants of the page that are available, each with different heading text:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Control: ",(0,i.jsx)(t.code,{children:"A/B Test Control"})]}),"\n",(0,i.jsxs)(t.li,{children:["Variation 1: ",(0,i.jsx)(t.code,{children:"A/B Test Variation 1"})]}),"\n",(0,i.jsxs)(t.li,{children:["Opt-out: ",(0,i.jsx)(t.code,{children:"No A/B Test"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Let's start by importing our requisite classes (for annotations (e.g., ",(0,i.jsx)(t.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,i.jsx)(t.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,i.jsx)(t.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"// filename: ABTestOptOut.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.Cookie;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class ABTestOptOut {\n\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now let's wire up our first test to step through visiting the page and verifying that the text changes as we forge an opt-out cookie."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// filename: ABTestOptOut.java\n// ...\n    @Test\n    public void WithCookieAfterVisitingPage() {\n        driver.get("http://the-internet.herokuapp.com/abtest");\n        String headingText = driver.findElement(By.tagName("h3")).getText();\n        assertThat(headingText, startsWith("A/B Test"));\n        driver.manage().addCookie(new Cookie("optimizelyOptOut", "true"));\n        driver.navigate().refresh();\n        headingText = driver.findElement(By.cssSelector("h3")).getText();\n        assertThat(headingText, is("No A/B Test"));\n    }\n// ...\n'})}),"\n",(0,i.jsxs)(t.p,{children:["After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it starts with the text ",(0,i.jsx)(t.code,{children:'"A/B Test"'}),". After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."]}),"\n",(0,i.jsxs)(t.p,{children:["We could also load the opt-out cookie ",(0,i.jsx)(t.em,{children:"before"})," navigating to the page."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// filename: ABTestOptOut.java\n// ...\n    @Test\n    public void WithCookieBeforeVisitingPage() {\n        driver.get("http://the-internet.herokuapp.com");\n        driver.manage().addCookie(new Cookie("optimizelyOptOut", "true"));\n        driver.get("http://the-internet.herokuapp.com/abtest");\n        assertThat(driver.findElement(By.cssSelector("h3")).getText(), is("No A/B Test"));\n    }\n// ...\n'})}),"\n",(0,i.jsx)(t.p,{children:"Here we are navigating to the main page of the site first (to establish the host) and then adding the opt-out cookie. If we didn't visit the site first, then adding the cookie wouldn't have worked. Once added, we navigate to the example page and perform our checks just like before."}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, we can achieve the same thing without forging a cookie. Instead, we can append an opt-out query to the URL when visiting the page."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// filename: ABTestOptOut.java\n// ...\n    @Test\n    public void WithOptOutUrl() {\n        driver.get("http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");\n        driver.switchTo().alert().dismiss();\n\n        Thread.sleep(2000);\n        assertThat(driver.findElement(By.cssSelector("h3")).getText(), is("No A/B Test"));\n        Thread.sleep(2000);\n    }\n\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By appending ",(0,i.jsx)(t.code,{children:"?optimizely_opt_out=true"})," we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., ",(0,i.jsx)(t.code,{children:"driver.switchTo().alert().dismiss();"}),") before performing our check."]}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"mvn clean test"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Opt-out of the split tests (either by cookie or appended URL)"}),"\n",(0,i.jsx)(t.li,{children:"Visit the split testing page"}),"\n",(0,i.jsx)(t.li,{children:"Grab the header text"}),"\n",(0,i.jsx)(t.li,{children:"Confirm that the session is opted out of the split tests"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);