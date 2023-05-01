"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3345,5856],{4738:(e,t,a)=>{a.d(t,{Z:()=>o});const o=[{id:"1-upload-a-file-ruby",headline:"1: How to Upload a File",text:"Uploading a file is a common piece of functionality found on the web. But when trying to automate it you get prompted with a with a dialog box...",difficulty:"Beginner",category:["fundamentals","remote"],contentUrl:"docs/updated-tips/how-to-upload-a-file/1-upload-a-file-ruby",tags:["files","upload","file_upload"]},{id:"2-download-a-file-ruby",headline:"2: How to Download a File",text:"Just like with uploading files, we hit the same issue with downloading them. A dialogue box, just out of Selenium\u2019s reach...",difficulty:"Intermediate",category:["fundamentals","remote"],contentUrl:"http://localhost:3000/elemental-next/docs/updated-tips/download-a-file/ruby/",tags:["files","download","file_download"]},{id:"3-work-with-frames-ruby",headline:"3: How to Work with Frames",text:"On occasion you'll run into a relic of the front-end world -- frames. And when writing a test against them, you can easily get tripped up...",difficulty:"Beginner",category:["fundamentals"],contentUrl:"http://localhost:3000/elemental-next/docs/updated-tips/work-with-frames/ruby/",tags:["frames"]},{id:"4-work-with-multiple-windows-ruby",headline:"4: How to Work with Multiple Windows",text:"Occasionally you'll run into a link or action in the application you're testing that will open a new window. To make it work, you\u2019ll need to switch between them...",difficulty:"Intermediate",category:["remote"],contentUrl:"http://localhost:3000/elemental-next/docs/updated-tips/work-with-multiple-windows/ruby/",tags:["windows","multiple_windows","new_window"]},{id:"5-select-from-a-dropdown-ruby",headline:"5: How to Select from a Dropdown List",text:"Selecting from a dropdown list seems like one of those simple things. However, there is a bit more finesse to it.",difficulty:"Beginner",category:["fundamentals"],contentUrl:"http://localhost:3000/elemental-next/docs/updated-tips/select-from-a-dropdown/ruby/",tags:["dropwdown","forms"]},{id:"6-export-from-selenium-ide-ruby",headline:"6: How to Export Tests from Selenium IDE",text:"One of the biggest challenges with Selenium tests is that they can be brittle and challenging to maintain over time. This is largely due to the fact that things in the app you're testing change, breaking your tests.",difficulty:"Beginner",category:["tools"],contentUrl:"https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",tags:["selenium_ide","exporting"]},{id:"7-use-a-page-object-ruby",headline:"7: Using a Page Object",text:"Just like with uploading files, we hit the same issue with downloading them. A dialogue box, just out of Selenium\u2019s reach...",difficulty:"Intermediate",category:["tools"],contentUrl:"http://localhost:3000/elemental-next/docs/updated-tips/use-a-page-object/ruby/",tags:["page_object","abstraction"]},{id:"8-download-a-file-revisited-ruby",headline:"8: How to Download a File Without a Browser",text:"Previously we looked at how to download files with Selenium by configuring the browser to download them locally. While this works, it requires a custom configuration that is inconsistent browser to browser",difficulty:"Intermediate",category:["remote"],contentUrl:"http://localhost:3000/elemental-next/docs/updated-tips/download-a-file-revisited/ruby/",tags:["files","downloading"]},{id:"10-retry-test-actions-ruby",headline:"10: Retrying Test Actions",text:"Selecting from a dropdown list seems like one of those simple things. However, there is a bit more finesse to it",difficulty:"Intermediate",category:["troubleshooting"],contentUrl:"http://localhost:3000/elemental-next/docs/updated-tips/retry-test-actions-ruby/ruby/",tags:["reliability"]}]},9786:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var o=a(7294),l=a(4738);const i="dropdown_z0kt",n="dropdownTags_RWco",s="dropdownCat_D44P",r="filterText_Es4s",d="menu_Sv4P",c="drop_bIJm",m="content_U9Ii",u=e=>{let{filterItem:t,setTip:a,difficultyItems:u,tagItems:p,tagFilters:w,catItems:h,catFilters:f}=e;return o.createElement(o.Fragment,null,o.createElement("div",{className:r},"Filter by:"),o.createElement("div",{className:i},o.createElement("label",{htmlFor:"menu_arrow"}),o.createElement("button",{type:"checkbox",className:c,onClick:()=>{setItem(l.Z)}},"Difficulty"),o.createElement("div",{className:d},u?.map(((e,a)=>o.createElement("button",{className:m,onClick:()=>{t(e)},key:a},o.createElement("div",{className:"{dropdownStyles.drop}"},e)))))),o.createElement("div",{className:n},o.createElement("button",{className:c,onClick:()=>setItem(l.Z)},"Tags"),o.createElement("div",{className:d},p?.map(((e,t)=>o.createElement("button",{className:m,onClick:()=>w(e),key:t},o.createElement("div",{className:"{dropdownStyles.drop}"},e)))))),o.createElement("div",{className:s},o.createElement("button",{className:c,onClick:()=>setItem(l.Z)},"Categories"),o.createElement("div",{className:d},h?.map(((e,t)=>o.createElement("button",{className:m,onClick:()=>f(e),key:t},o.createElement("div",{className:"{dropdownStyles.drop}"},e)))))))}},6147:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var o=a(7294),l=a(7254),i=a(4738);const n="tips_xecn",s="heading_FJ4q",r="card_HAsV",d="text_Opb1",c=e=>{let{tip:t}=e;return o.createElement(o.Fragment,null,t.map((e=>o.createElement("div",{className:n,key:e.id},o.createElement("div",{className:r},o.createElement("div",{className:s},o.createElement("a",{href:e.contentUrl},e.headline)),o.createElement("div",{className:d},o.createElement("p",null," ",e.text," ")))))))},m="tipsheader_YNb5";var u=a(9786);const p=()=>{const[e,t]=(0,o.useState)(i.Z),a=[...new Set(i.Z.map((e=>e.difficulty)))];let n=i.Z.map((e=>e.tags));n=[...new Set(Array.prototype.concat(...n))];let s=i.Z.map((e=>e.category));s=[...new Set(Array.prototype.concat(...s))];return o.createElement(o.Fragment,null,o.createElement(l.Z,{title:"Elemental Selenium Archives",description:"Elemental Selenium Archives"},o.createElement("div",{className:m},"The Tips"),o.createElement(u.default,{filterItem:e=>{const a=i.Z.filter((t=>t.difficulty===e));t(a)},tagFilters:e=>{const a=i.Z.filter((t=>t.tags.includes(e)));t(a)},catFilters:e=>{const a=i.Z.filter((t=>t.category.includes(e)));t(a)},setTip:t,difficultyItems:a,tagItems:n,catItems:s}),o.createElement("div",null,o.createElement(c,{tip:e}))))}}}]);