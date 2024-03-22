"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[4316],{84316:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>r,toc:()=>a});var t=i(74848),o=i(28453);const r={},s=void 0,a=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"To open a new window, you call the driver you instantiated with a method that allows you to switch to a new window or tab."}),"\n",(0,t.jsxs)(n.p,{children:["After using the new window (or tab) method, use the ",(0,t.jsx)(n.code,{children:"driver.get"})," method to navigate to a website or URL. See the examples in the table of the previous section to see how this would be implemented."]}),"\n",(0,t.jsxs)(n.p,{children:["Now you can add any other actions or assertions you\u2019d like to do on the page. In the ",(0,t.jsx)(n.code,{children:"Java"})," example below, you can see how a test and multiple windows are created and handled:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// filename: new-window.java\n\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport junit.framework.TestCase;\nimport org.openqa.selenium.Point;\nimport org.openqa.selenium.WindowType;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\n\n\npublic class NewWindow {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n\n\n    @Test\n    public void multipleWindows() throws InterruptedException {\n        driver.get("http://the-internet.herokuapp.com/windows");\n        driver.switchTo().newWindow(WindowType.WINDOW);\n        driver.manage().window().setPosition(new Point(100, 400));\n        driver.get("https://the-internet.herokuapp.com/typos");\n\n        TestCase Assertions = null;\n        TestCase.assertEquals(2, driver.getWindowHandles().toArray().length);\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,t.jsxs)(n.p,{children:["If you run the ",(0,t.jsx)(n.code,{children:"Java"})," example referenced above (",(0,t.jsx)(n.code,{children:"new-window.java"}),"), this test will:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open Firefox browser"}),"\n",(0,t.jsx)(n.li,{children:"Navigate to the-internet website"}),"\n",(0,t.jsx)(n.li,{children:"Open a New Window and move it to a different position on the screen"}),"\n",(0,t.jsx)(n.li,{children:"Navigate to the Typos page on the-internet website"}),"\n",(0,t.jsx)(n.li,{children:"Check the number of windows open"}),"\n",(0,t.jsx)(n.li,{children:"Close all browsers"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"There are many possible use cases for this new way of opening and focusing on new browser tabs and windows across OS and browser combinations."}),"\n",(0,t.jsx)(n.p,{children:"From testing the way a user can interact with two windows side-by-side, to testing performance and behavior of multiple windows, this new command makes it simpler to test on multiple web pages."}),"\n",(0,t.jsx)(n.p,{children:"Happy Testing!"}),"\n",(0,t.jsx)(n.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,t.jsxs)(n.p,{children:["This tip is brought to you by ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/lindsayjowalker/",children:"Lindsay Walker"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Lindsay Walker profile picture",src:i(24133).A+"#author-img",title:"a title",width:"400",height:"400"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},24133:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/lindsay-walker-e2cc6e7662afad2a147118d16275c53a.jpeg"}}]);