"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[39143,65599],{65599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(74848),i=t(28453);const s={},o=void 0,a={id:"build-an-interactive-prompt/_ruby",title:"_ruby",description:"Example",source:"@site/tips/11-build-an-interactive-prompt/_ruby.mdx",sourceDirName:"11-build-an-interactive-prompt",slug:"/build-an-interactive-prompt/_ruby",permalink:"/tips/build-an-interactive-prompt/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/11-build-an-interactive-prompt/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Retry Test Actions",permalink:"/tips/10-retry-test-actions"},next:{title:"Build An Interactive Prompt",permalink:"/tips/11-build-an-interactive-prompt"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"In the first half of our example we include our libraries and our usual setup, teardown, and run actions."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"require 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the run action we define our loop and its behavior, creating the interactive prompt we want."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"run do\n  loop do\n    print '>> '\n    input = gets.chomp\n    if input == 'q'\n      puts 'Quitting...'\n      @driver.quit\n      exit 0\n    end\n    begin\n      eval input\n    rescue Exception => e\n      puts e.message\n    end\n  end\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"print"})," command is used instead of ",(0,r.jsx)(n.code,{children:"puts"})," because we want ",(0,r.jsx)(n.code,{children:">> "})," to appear on the same line as the input that we are issuing. This gives us the look and feel of a prompt. And we use ",(0,r.jsx)(n.code,{children:"gets.chomp"})," to take in input. ",(0,r.jsx)(n.code,{children:"gets"})," is responsible for receiving the input. And ",(0,r.jsx)(n.code,{children:"chomp"})," removes the carriage return character (e.g. '\\n') from the input."]}),"\n",(0,r.jsxs)(n.p,{children:["Before executing the input we perform a check to see if the letter ",(0,r.jsx)(n.strong,{children:"q"})," is issued. If so, the script will post a message to the terminal, close the browser, and exit the prompt."]}),"\n",(0,r.jsxs)(n.p,{children:["We then execute the input provided with ",(0,r.jsx)(n.code,{children:"eval"})," and rescue exceptions, posting their message to the terminal when they occur."]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example command you may issue to start: ",(0,r.jsx)(n.code,{children:"@driver.get 'https://www.google.com'"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Firefox loads"}),"\n",(0,r.jsx)(n.li,{children:"An interactive prompt is presented"}),"\n",(0,r.jsx)(n.li,{children:"Issue a Selenium command and see it execute in the browser"}),"\n",(0,r.jsx)(n.li,{children:"Issue a command that it does not recognize (or that errors), and see a message stating the issue in the prompt"}),"\n",(0,r.jsxs)(n.li,{children:["Issue ",(0,r.jsx)(n.strong,{children:"q"}),", the browser will close and the prompt will terminate"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Hopefully this REPL will help save you some time and frustration -- making it easier to write and debug your tests."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);