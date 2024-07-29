"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[90761,61751],{61751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=n(74848),i=n(28453);const c={},s=void 0,l={id:"right-click/_ruby",title:"_ruby",description:"Example",source:"@site/tips/63-right-click/_ruby.mdx",sourceDirName:"63-right-click",slug:"/right-click/_ruby",permalink:"/tips/right-click/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/63-right-click/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172223951e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_python",permalink:"/tips/right-click/_python"},next:{title:"Right Click",permalink:"/tips/63-right-click"}},a={},o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Let's start by pulling in the necessary libraries (",(0,r.jsx)(t.code,{children:"selenium-webdriver"})," to control the browser and ",(0,r.jsx)(t.code,{children:"rspec/expectations"})," & ",(0,r.jsx)(t.code,{children:"RSpec::Matchers"})," to perform an assertion) and wiring up some simple ",(0,r.jsx)(t.code,{children:"setup"}),", ",(0,r.jsx)(t.code,{children:"teardown"}),", and ",(0,r.jsx)(t.code,{children:"run"})," methods."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"# filename: right_click.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now we're ready to write our test."}),"\n",(0,r.jsxs)(t.p,{children:["Let's use an example from ",(0,r.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will render a custom context menu when we right-click on a specific area of the page (",(0,r.jsx)(t.a,{href:"http://the-internet.herokuapp.com/context_menu",children:"link"}),"). Clicking the context menu will trigger a JavaScript alert which will say ",(0,r.jsx)(t.code,{children:"You selected a context menu"}),". We'll grab this text and use it to assert that the menu was actually triggered."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/context_menu'\n  menu_area = @driver.find_element id: 'hot-spot'\n  @driver.action.context_click(menu_area).send_keys(\n    :arrow_down).send_keys(\n    :arrow_down).send_keys(\n    :arrow_down).send_keys(\n    :enter).perform\n  alert = @driver.switch_to.alert\n  expect(alert.text).to eq('You selected a context menu')\nend\n"})}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.p,{children:["If we save this file and run it (e.g., ",(0,r.jsx)(t.code,{children:"ruby right_click.rb"}),") from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser and visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Find and right-click the area which will render a custom context menu"}),"\n",(0,r.jsx)(t.li,{children:"Select the context menu option with keyboard keys"}),"\n",(0,r.jsx)(t.li,{children:"JavaScript alert appears"}),"\n",(0,r.jsx)(t.li,{children:"Grab the text of the JavaScript alert"}),"\n",(0,r.jsx)(t.li,{children:"Assert that the text from the alert is what we expect"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["To learn more about context menus, you can read ",(0,r.jsx)(t.a,{href:"http://blog.teamtreehouse.com/building-html5-context-menus",children:"this write-up from the Tree House blog"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);