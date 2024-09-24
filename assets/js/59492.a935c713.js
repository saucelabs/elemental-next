"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[59492],{59492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=n(74848),r=n(28453);const s={},a=void 0,l={id:"highlight-elements/_java",title:"_java",description:"Example",source:"@site/tips/65-highlight-elements/_java.mdx",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/_java",permalink:"/tips/highlight-elements/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/65-highlight-elements/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172716874e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/highlight-elements/_csharp"},next:{title:"_javascript",permalink:"/tips/highlight-elements/_javascript"}},o={},h=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["First let's import our requisite classes (for annotations (e.g., ",(0,i.jsx)(t.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,i.jsx)(t.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,i.jsx)(t.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"// filename: HighlightElement.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.JavascriptExecutor;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.firefox.FirefoxDriver;\n\npublic class HighlightElement {\n    WebDriver driver;\n    JavascriptExecutor js;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n        js = (JavascriptExecutor) driver;\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now let's create a ",(0,i.jsx)(t.code,{children:"highlightElement"})," helper method that will accept a Selenium WebDriver ",(0,i.jsx)(t.code,{children:"element"})," and a time to wait (e.g., ",(0,i.jsx)(t.code,{children:"duration"}),") as arguments."]}),"\n",(0,i.jsx)(t.p,{children:"By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a sensible default (e.g., 3 seconds)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// filename: HighlightElement.java\n// ...\n    private void highlightElement(WebElement element, int duration) throws InterruptedException {\n        String original_style = element.getAttribute("style");\n\n        js.executeScript(\n                "arguments[0].setAttribute(arguments[1], arguments[2])",\n                element,\n                "style",\n                "border: 2px solid red; border-style: dashed;");\n\n        if (duration > 0) {\n            Thread.sleep(duration * 1000);\n            js.executeScript(\n                    "arguments[0].setAttribute(arguments[1], arguments[2])",\n                    element,\n                    "style",\n                    original_style);\n        }\n    }\n'})}),"\n",(0,i.jsx)(t.p,{children:"There are three things going on here."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We store the style of the element, so we can revert it back when we're done"}),"\n",(0,i.jsx)(t.li,{children:"We change the style of the element, so it visually stands out (e.g., a red dashed border)"}),"\n",(0,i.jsx)(t.li,{children:"We revert the style of the element back after 3 seconds (or longer if specified)"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We're accomplishing the style change through JavaScript's ",(0,i.jsx)(t.code,{children:"setAttribute"})," function. And we're executing it with Selenium's ",(0,i.jsx)(t.code,{children:"executeScript"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["To use this in our test is simple, we just need to find an element and then pass it to ",(0,i.jsx)(t.code,{children:"highlightElement"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// filename: HighlightElement.java\n// ...\n    @Test\n    public void highlightElementTest() throws InterruptedException {\n        driver.get("http://the-internet.herokuapp.com/large");\n        WebElement element = driver.findElement(By.id("sibling-2.3"));\n        highlightElement(element, 3);\n    }\n\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["When you save this file and run it (e.g., ",(0,i.jsx)(t.code,{children:"mvn clean test"})," from the command-line) here is what will happen."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Load the page"}),"\n",(0,i.jsx)(t.li,{children:"Find the element to highlight"}),"\n",(0,i.jsx)(t.li,{children:"Change the styling of the element, so it has a red dashed-line border"}),"\n",(0,i.jsx)(t.li,{children:"Wait 3 seconds"}),"\n",(0,i.jsx)(t.li,{children:"Revert the styling of the element back (removing the red border)"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger."}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, you could verify your locators by using a browser plugin like FireFinder."}),"\n",(0,i.jsxs)(t.p,{children:["Thanks to ",(0,i.jsx)(t.a,{href:"https://github.com/RomanIsko",children:"Roman Isko"})," for contributing the initial Java code for this tip."]}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,i.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,i.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,i.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:n(59278).A+"#author-img",title:"a title",width:"280",height:"280"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},59278:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"}}]);