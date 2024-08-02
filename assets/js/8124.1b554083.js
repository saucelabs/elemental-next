"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[8124],{8124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453);const r={},a=void 0,l={id:"disabled-element/_java",title:"_java",description:"Example",source:"@site/tips/40-disabled-element/_java.mdx",sourceDirName:"40-disabled-element",slug:"/disabled-element/_java",permalink:"/tips/disabled-element/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/40-disabled-element/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/disabled-element/_csharp"},next:{title:"_javascript",permalink:"/tips/disabled-element/_javascript"}},o={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["For this example we will use ",(0,i.jsx)(t.a,{href:"http://github.com/saucelabs/the-internet",children:"the dropdown list"})," from ",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/dropdown",children:"the-internet"}),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's start by importing our requisite classes (for annotations (e.g., ",(0,i.jsx)(t.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,i.jsx)(t.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,i.jsx)(t.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"// filename: DisabledElements.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.support.ui.Select;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class DisabledElements {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now to wire up our test."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// filename: DisabledElements.java\n// ...\n    @Test\n    public void test() {\n        driver.get("http://the-internet.herokuapp.com/dropdown");\n        Select dropdown = new Select(driver.findElement(By.id("dropdown")));\n        assertThat(dropdown.getOptions().get(0).isEnabled(), is(false));\n    }\n\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["After visiting the page we find the dropdown list with the ",(0,i.jsx)(t.code,{children:"Select"})," function and store it in a variable. We then put it to use in our assertion, scoping to the first value (",(0,i.jsx)(t.code,{children:"dropdown.getOptions().get(0)"}),") to check if it's enabled (e.g., ",(0,i.jsx)(t.code,{children:".isEnabled()"}),"). This will return a boolean result. If the element is disabled (e.g., not selectable) then Selenium will return ",(0,i.jsx)(t.code,{children:"false"}),". So that's what we use in our assertion (e.g., ",(0,i.jsx)(t.code,{children:"is(false)"}),")."]}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"mvn clean test"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open a browser"}),"\n",(0,i.jsx)(t.li,{children:"Visit the page"}),"\n",(0,i.jsx)(t.li,{children:"Grab the dropdown list"}),"\n",(0,i.jsx)(t.li,{children:"Assert that the target element is not enabled"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);