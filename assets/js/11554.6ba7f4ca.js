"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[11554],{11554:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(74848),a=i(28453);const s={},r=void 0,o={id:"mobile/_ruby",title:"_ruby",description:"A brief primer on Native App Testing In Sauce Labs",source:"@site/tips/30-mobile/_ruby.mdx",sourceDirName:"30-mobile",slug:"/mobile/_ruby",permalink:"/tips/mobile/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/30-mobile/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172260049e4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ChromeDriver",permalink:"/tips/29-chrome-driver"},next:{title:"Mobile",permalink:"/tips/30-mobile"}},d={},l=[{value:"A brief primer on Native App Testing In Sauce Labs",id:"a-brief-primer-on-native-app-testing-in-sauce-labs",level:2},{value:"An iPhone Example",id:"an-iphone-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"An Android Example",id:"an-android-example",level:2},{value:"Expected Behavior",id:"expected-behavior-1",level:2},{value:"Other Helpful Tidbits",id:"other-helpful-tidbits",level:2},{value:"Inspecting Elements",id:"inspecting-elements",level:3},{value:"Mobile Web Apps",id:"mobile-web-apps",level:3},{value:"Hybrid Apps",id:"hybrid-apps",level:3},{value:"Location Services",id:"location-services",level:3},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"a-brief-primer-on-native-app-testing-in-sauce-labs",children:"A brief primer on Native App Testing In Sauce Labs"}),"\n",(0,t.jsx)(n.p,{children:"In order to test your app in Sauce Labs you will need to zip it up and serve it somehow. Here are some options on how to do that:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"make it publicly available (e.g. an asset in a GitHub release)"}),"\n",(0,t.jsxs)(n.li,{children:["use ",(0,t.jsx)(n.a,{href:"https://docs.saucelabs.com/mobile-apps/app-storage/",children:"Sauce Labs temporary storage"})]}),"\n",(0,t.jsxs)(n.li,{children:["use ",(0,t.jsx)(n.a,{href:"https://docs.saucelabs.com/secure-connections/sauce-connect-5/",children:"Sauce Connect"})," and grab it from a machine behind your firewall"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once you have that you just need to set your test's desired capabilities accordingly. You can see a list of\noptions ",(0,t.jsx)(n.a,{href:"https://docs.saucelabs.com/dev/test-configuration-options/#mobile-appium-capabilities",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"an-iphone-example",children:"An iPhone Example"}),"\n",(0,t.jsx)(n.p,{children:"In this example we will be testing an application that has a form that takes 2 numbers, adds them together, and displays the result."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["NOTE: Contrary to the Appium philosophy of not needing to recompile your app, there is one SMALL tweak you'll need\nto make before your app is ready for Sauce (if you care about testing against an iPhone). It's to make sure that\nthe correct simulator gets loaded. Instructions available ",(0,t.jsx)(n.a,{href:"https://docs.saucelabs.com/mobile-apps/automated-testing/app-files/",children:"here"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["We kick off our iPhone example by requiring our dependent libraries (",(0,t.jsx)(n.code,{children:"selenium-webdriver"})," to drive the browser,\nand ",(0,t.jsx)(n.code,{children:"rspec-expectations"})," for handling assertions). After that, we wire up our setup, teardown, and run methods."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"require 'selenium-webdriver'\nrequire 'rspec-expectations'\n\ndef setup\n  caps = {\n    'platform'            => 'Mac 10.8',\n    'version'             => '6.1',\n    'device'              => 'iPhone Simulator',\n    'app'                 => 'https://appium.s3.amazonaws.com/TestApp6.0.app.zip',\n    'name'                => 'Ruby/iPhone Example for Appium'\n  }\n\n  @driver = Selenium::WebDriver.for(\n    :remote,\n    :url => \"https://SAUCE_USERNAME:SAUCE_API_KEY@ondemand.saucelabs.com/wd/hub\",\n    :desired_capabilities => caps)\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that in ",(0,t.jsx)(n.code,{children:"setup"})," we configure our capabilities by setting them to a hash and storing them in a variable called\n",(0,t.jsx)(n.code,{children:"caps"}),". In it, we are specifying the platform we would like (",(0,t.jsx)(n.code,{children:"Mac 10.8"}),"), the iOS version (",(0,t.jsx)(n.code,{children:"6.1"}),"), the device\n(",(0,t.jsx)(n.code,{children:"iPhone Simulator"}),"), and the app we would like to load (zipped up and served from AWS)."]}),"\n",(0,t.jsxs)(n.p,{children:["We then instantiate Selenium Remote in a ",(0,t.jsx)(n.code,{children:"@driver"})," object; pointing it at Sauce Labs, and passing in our desired\ncapabilities."]}),"\n",(0,t.jsx)(n.p,{children:"And in our test we wire up interaction with the app using familiar Selenium WebDriver API actions and an assertion."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"run do\n    values = [rand(10), rand(10)]\n    expected_sum = values.reduce(&:+)\n\n    elements = @driver.find_elements(:tag_name, 'textField')\n    elements.each_with_index do |element, index|\n      element.send_keys values[index]\n    end\n\n    @driver.find_element(:tag_name, 'button').click\n    @driver.find_element(:tag_name, 'staticText').text.should == expected_sum.to_s\nend\n"})}),"\n",(0,t.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open a job with Sauce Labs"}),"\n",(0,t.jsx)(n.li,{children:"Load an iPhone simulator on a Mac"}),"\n",(0,t.jsx)(n.li,{children:"Load the test app"}),"\n",(0,t.jsx)(n.li,{children:"Input two random numbers"}),"\n",(0,t.jsx)(n.li,{children:"Sum them together"}),"\n",(0,t.jsx)(n.li,{children:"Assert that they are correctly added together"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["NOTE: You can see the test result complete with video ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/tests/6736add27ae544409e7ae918ff74ae8d",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"an-android-example",children:"An Android Example"}),"\n",(0,t.jsx)(n.p,{children:"In this example we will be testing a simple note-taking app."}),"\n",(0,t.jsxs)(n.p,{children:["We kick off our Android example by requiring our dependent libraries (",(0,t.jsx)(n.code,{children:"selenium-webdriver"})," to drive the browser,\nand ",(0,t.jsx)(n.code,{children:"rspec-expectations"})," for handling assertions). After that, we wire up our setup, teardown, and run methods."]}),"\n",(0,t.jsxs)(n.p,{children:["==",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"!! Code snippet needs validation !!"})}),"=="]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"require 'selenium-webdriver'\nrequire 'rspec-expectations'\n\ndef setup\n  caps = {\n    'platform'            => 'Linux',\n    'version'             => '4.2',\n    'device'              => 'Android',\n    'app'                 => 'https://appium.s3.amazonaws.com/NotesList.apk',\n    'app-package'         => 'com.example.android.notepad',\n    'app-activity'        => '.NotesList',\n    'name'                => 'Ruby/Android Example for Appium'\n  }\n\n  @driver = Selenium::WebDriver.for(\n    :remote,\n    :url => \"http://SAUCE_USERNAME:SAUCE_API_KEY@ondemand.saucelabs.com:80/wd/hub\",\n    :desired_capabilities => caps)\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"setup"}),", we configure our capabilities by setting them to a hash and storing them in a variable called ",(0,t.jsx)(n.code,{children:"caps"}),". In\nit we are specifying the platform (",(0,t.jsx)(n.code,{children:"Linux"}),"), the Android version (",(0,t.jsx)(n.code,{children:"4.2"}),"), the device (",(0,t.jsx)(n.code,{children:"Android"}),"), and where to find\nthe app (zipped and served from AWS). We then instantiate Selenium Remote in a ",(0,t.jsx)(n.code,{children:"@driver"})," object; pointing it at Sauce\nLabs, and passing in our desired capabilities."]}),"\n",(0,t.jsxs)(n.p,{children:["The additional bits of info we need to provide in ",(0,t.jsx)(n.code,{children:"caps"})," (versus in our iPhone example) are ",(0,t.jsx)(n.code,{children:"app-package"})," and\n",(0,t.jsx)(n.code,{children:"app-activity"}),". ",(0,t.jsx)(n.code,{children:"app-package"})," being the package name of your app, and ",(0,t.jsx)(n.code,{children:"app-activity"})," being the name of the activity\nyou would like to start. ",(0,t.jsx)(n.code,{children:"app-activity"})," gets appended to ",(0,t.jsx)(n.code,{children:"app-package"})," and is used at Sauce run time to launch your\napp (e.g. ",(0,t.jsx)(n.code,{children:"com.example.android.notepad.NotesList"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"And in our test we wire up interaction with the app using familiar Selenium WebDriver API actions and an assertion."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.find_element(:name, 'New note').click\n  @driver.find_element(:tag_name, 'textfield').send_keys 'This is a new note, from Ruby'\n  @driver.find_element(:name, 'Save').click\n\n  notes = @driver.find_elements(:tag_name, 'text')\n  notes[2].text.should == 'This is a new note, from Ruby'\nend\n"})}),"\n",(0,t.jsx)(n.h2,{id:"expected-behavior-1",children:"Expected Behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open a job with Sauce Labs"}),"\n",(0,t.jsx)(n.li,{children:"Load an Android simulator on a Linux machine"}),"\n",(0,t.jsx)(n.li,{children:"Load the test app"}),"\n",(0,t.jsx)(n.li,{children:"Create a new note"}),"\n",(0,t.jsx)(n.li,{children:"Fill in the new note"}),"\n",(0,t.jsx)(n.li,{children:"Grab the note text and assert that it's what we inputted"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["NOTE: You can see the test result complete with video ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/tests/e0dbb98af23540d8b43f0806d743fbd8",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"other-helpful-tidbits",children:"Other Helpful Tidbits"}),"\n",(0,t.jsx)(n.h3,{id:"inspecting-elements",children:"Inspecting Elements"}),"\n",(0,t.jsxs)(n.p,{children:["In order to easily inspect and identify the elements in your app, you can use Appium's Inspector which comes\nin ",(0,t.jsx)(n.a,{href:"https://github.com/appium/appium-dot-app",children:"appium-dot-app"})," and requires you to set up Appium locally."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["NOTE: You can see a demo of it in action with an iOS app ",(0,t.jsx)(n.a,{href:"http://www.youtube.com/watch?v=Hv9A9WfYF4g",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"mobile-web-apps",children:"Mobile Web Apps"}),"\n",(0,t.jsxs)(n.p,{children:["If instead you have a mobile web app, you can launch mobile Safari by switching out the URL in ",(0,t.jsx)(n.code,{children:"app"})," with ",(0,t.jsx)(n.code,{children:"safari"}),",\nlike so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:"  caps = {\n    'platform'            => 'Mac 10.8',\n    'version'             => '6.1',\n    'device'              => 'iPhone Simulator',\n    'app'                 => 'safari',\n    'name'                => 'Ruby/iPhone Example for Appium',\n  }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["But it's worth noting that Sauce Labs does not currently support the ability launch a mobile browser on\nAndroid (e.g. ",(0,t.jsx)(n.code,{children:"chrome"}),"). This functionality is, however, available when running Appium locally\n(as documented ",(0,t.jsx)(n.a,{href:"https://github.com/appium/appium/blob/master/docs/mobile-web.md#mobile-chrome-on-emulator-or-real-device",children:"here"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"hybrid-apps",children:"Hybrid Apps"}),"\n",(0,t.jsxs)(n.p,{children:["If you have a hybrid mobile app (e.g. an app with a native container that leverages the built in browser engine),\nthen you should be good to go both locally and in Sauce. For details, go ",(0,t.jsx)(n.a,{href:"https://github.com/appium/appium/blob/master/docs/hybrid.md",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"location-services",children:"Location Services"}),"\n",(0,t.jsx)(n.p,{children:"If you have an iOS app that deals with geolocation, then working with the Location Services dialog can be a little tricky."}),"\n",(0,t.jsxs)(n.p,{children:["You can either do a blanket dismiss (which requires some elbow grease -- see\n",(0,t.jsx)(n.a,{href:"https://groups.google.com/d/msg/appium-discuss/k5gbfVFRPsE/cCkje7tczQcJ",children:"this Appium Google Groups thread"})," for details),\nor capture and dismiss the dialog as it appears (using functionality found in a library like ",(0,t.jsx)(n.a,{href:"https://github.com/appium/ruby_lib/blob/master/docs/ios_docs.md#alert_click-ios",children:"ruby_lib"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["And in Sauce Labs, Location Services is disabled by default on iOS 6.1, but enabled by default on iOS 7.1. This is\nnot configurable, but may be in the future through desired capabilities\n(there's [an active thread about this on Sauce's support site](",(0,t.jsx)(n.a,{href:"http://support.saucelabs.com/entries/25117411-Location-services-enabled-by-default-on-iOS-devices",children:"http://support.saucelabs.com/entries/25117411-Location-services-enabled-by-default-on-iOS-devices"}),", feel free to chime in!)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["NOTE: Sauce Labs now supports Location Services (as noted in ",(0,t.jsx)(n.a,{href:"http://support.saucelabs.com/entries/25117411#view-post-21941225",children:"this recent support thread comment"}),"). You can set it in your desired capabilities with ",(0,t.jsx)(n.code,{children:"locationServicesEnabled"})," and a ",(0,t.jsx)(n.code,{children:"true"})," or ",(0,t.jsx)(n.code,{children:"false"})," value."]})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["Hopefully this tip has helped give you enough to get started with mobile testing. In order to take full advantage of\nwhat Appium has to offer, getting it set up locally is key. I encourage you to check out the installation docs\n(available for ",(0,t.jsx)(n.a,{href:"https://github.com/appium/appium/blob/master/docs/running-on-osx.md",children:"OS X"}),",\n",(0,t.jsx)(n.a,{href:"https://github.com/appium/appium/blob/master/docs/running-on-linux.md",children:"Linux"}),",\nand ",(0,t.jsx)(n.a,{href:"https://github.com/appium/appium/blob/master/docs/running-on-windows.md",children:"Windows"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["And if you're curious about other mobile automation frameworks, Alister Scott\nhas ",(0,t.jsx)(n.a,{href:"http://watirmelon.com/2013/11/04/the-current-state-of-ios-automated-functional-testing/",children:"a good breakdown of them"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Happy Testing!"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);