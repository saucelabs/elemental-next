const Data = [
  {
    "title": "1: How To Upload A File",
    "id": "1-upload-a-file-ruby",
    "number": 1,
    "publish_date": "2019-08-09T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-27T00:00:00.000Z"
    },
    "tags": [
      "file",
      "upload",
      "file upload"
    ],
    "level": 1,
    "category": [
      "remote",
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/how-to-upload-a-file/1-upload-a-file-ruby",
    "text": "Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window."
  },
  {
    "title": "2: Download A File",
    "id": "2-download-a-file-ruby",
    "number": 2,
    "publish_date": "2015-07-27T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-08T00:00:00.000Z"
    },
    "tags": [
      "files",
      "downloading",
      "file download"
    ],
    "level": 2,
    "category": [
      "remote",
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/download-a-file/2-download-a-file-ruby",
    "text": "Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box."
  },
  {
    "title": "3: Work With Frames",
    "id": "3-work-with-frames-ruby",
    "number": 3,
    "publish_date": "2023-02-21T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "frames"
    ],
    "level": 1,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/work-with-frames/3-work-with-frames-ruby",
    "text": "In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames."
  },
  {
    "title": "4: Work With Multiple Windows",
    "id": "4-work-with-multiple-windows-ruby",
    "number": 4,
    "publish_date": "2015-08-21T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-27T00:00:00.000Z"
    },
    "tags": [
      "windows",
      "multiple windows",
      "new window"
    ],
    "level": 2,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/work-with-multiple-windows/4-work-with-multiple-windows-ruby",
    "text": "This tip will explain how to work with multiple windows in Selenium and switch between them. Occasionally you'll run into a link or action in the application you're testing that will open a new window."
  },
  {
    "title": "5: Select From A Dropdown",
    "id": "5-select-from-a-dropdown-ruby",
    "number": 5,
    "publish_date": "2015-07-06T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "dropdown",
      "forms"
    ],
    "level": 1,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/select-from-a-dropdown/5-select-from-a-dropdown-ruby",
    "text": "Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might seem straightforward just grab the list by its element and select an item within it, based on the text you want there's a bit more skill to it."
  },
  {
    "title": "7: Use A Page Object",
    "id": "7-use-a-page-object-ruby",
    "number": 7,
    "publish_date": "2013-07-09T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-08T00:00:00.000Z"
    },
    "tags": [
      "page object",
      "abstraction"
    ],
    "level": 2,
    "category": [
      "tools"
    ],
    "language": "ruby",
    "contentUrl": "docs/use-a-page-object/7-use-a-page-object-ruby",
    "text": "One of the biggest challenges with Selenium tests is that they can be brittle and challenging to maintain over time. This is largely due to the fact that things in the app you're testing change, breaking your tests."
  },
  {
    "title": "8: Download A File Revisited",
    "id": "8-download-a-file-revisited-ruby",
    "number": 8,
    "publish_date": "2015-08-20T00:00:00.000Z",
    "last_update": {
      "date": "03-08-2023"
    },
    "tags": [
      "files",
      "downloading"
    ],
    "level": 2,
    "category": [
      "remote"
    ],
    "language": "ruby",
    "contentUrl": "docs/download-a-file-revisited/8-download-a-file-revisited-ruby",
    "text": "In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."
  },
  {
    "title": "9: Use A Base Page Object",
    "id": "9-use-a-base-page-object-ruby",
    "number": 9,
    "publish_date": "2013-07-23T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-25T00:00:00.000Z"
    },
    "tags": [
      "page object",
      "abstraction"
    ],
    "level": 3,
    "category": [
      "tools"
    ],
    "language": "ruby",
    "contentUrl": "docs/use-a-base-page-object/9-use-a-base-page-object-ruby",
    "text": "In a previous tip, we went through creating a simple Page Object to capture the behavior of a page we were interacting with. While this was a good start, it leaves a lot of room for improvement. One of the biggest issues is that there are common actions we will likely need across multiple Page Objects and, with our current approach, we would end up with duplicate code."
  },
  {
    "title": "11: Build An Interactive Prompt",
    "id": "11-build-an-interactive-prompt-ruby",
    "number": 11,
    "publish_date": "2013-08-06T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-28T00:00:00.000Z"
    },
    "tags": [
      "repl",
      "debugging"
    ],
    "level": 2,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/build-an-interactive-prompt/11-build-an-interactive-prompt-ruby",
    "text": "Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion."
  },
  {
    "title": "12: Opt Out of AB Tests",
    "id": "12-opt-out-of-ab-tests-ruby",
    "number": 12,
    "publish_date": "2015-10-15T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-28T00:00:00.000Z"
    },
    "tags": [
      "ab tests",
      "optimizely",
      "opt out"
    ],
    "level": 2,
    "category": [
      "troubleshoting"
    ],
    "language": "ruby",
    "contentUrl": "docs/opt-out-of-ab-tests/12-opt-out-of-ab-tests-ruby",
    "text": "Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests."
  },
  {
    "title": "13: Work With Basic Auth",
    "id": "13-work-with-basic-auth-ruby",
    "number": 13,
    "publish_date": "2015-10-14T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "authentication"
    ],
    "level": 1,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/how-to-access-basic-auth/13-work-with-basic-auth-ruby",
    "text": "Sometimes you'll work with applications that are secured behind Basic HTTP Authentication. In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password rendering Selenium helpless."
  },
  {
    "title": "15: Download Secure Files",
    "id": "15-download-secure-files-ruby",
    "number": 15,
    "publish_date": "2015-08-20T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-27T00:00:00.000Z"
    },
    "tags": [
      "files",
      "downloading",
      "authentication"
    ],
    "level": 3,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/download-secure-files/15-download-secure-files-ruby",
    "text": "Previously, we've gone over how to test file downloads without a browser by leveraging Selenium Webdriver and an HTTP library in tandem. This approach is great for testing general file downloads, but what if the file you want to download is behind authentication?"
  },
  {
    "title": "16: Take Screenshot on Failure",
    "id": "16-take-screenshot-on-failure-ruby",
    "number": 16,
    "publish_date": "2015-07-08T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-28T00:00:00.000Z"
    },
    "tags": [
      "reporting",
      "screenshot"
    ],
    "level": 2,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/take-screenshot-on-failure/16-take-screenshot-on-failure-ruby",
    "text": "With browser tests it can often be challenging to track down the issue that caused a failure. By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future."
  },
  {
    "title": "17: Retrieve HTTP Status Codes",
    "id": "17-retrieve-http-status-codes-ruby",
    "number": 17,
    "publish_date": "2015-10-15T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "test http status",
      "retrieve http status",
      "http status codes",
      "proxy",
      "proxy server",
      "browsermob proxy"
    ],
    "level": 3,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/retrieve-http-status-codes/",
    "text": "There are times when you are testing a page (or numerous pages) and you want to verify that it responded correctly. A great way to handle this is by checking the HTTP Status Code that the browser received. However this functionality is not available in Selenium WebDriver."
  },
  {
    "title": "19: Data Driven Testing",
    "id": "19-data-driven-testing-ruby",
    "number": 19,
    "publish_date": "2015-07-14T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-28T00:00:00.000Z"
    },
    "tags": [
      "data driven testing",
      "csv",
      "authentication"
    ],
    "level": 2,
    "category": [
      "remote"
    ],
    "language": "ruby",
    "contentUrl": "docs/data-driven-testing/19-data-driven-testing-ruby",
    "text": "There are times when you run across functionality you want to test repeatedly with various inputs to see how the system behaves. We're going to go over a way to do this that will take some of the burden out of the process."
  },
  {
    "title": "22: Locator Strategy",
    "id": "22-locator-strategy-ruby",
    "number": 22,
    "publish_date": "2013-10-22T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "locators",
      "locator strategy",
      "css selectors"
    ],
    "level": 1,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/locator-strategy/22-locator-strategy-ruby",
    "text": "In web design CSS (Cascading Style Sheets) is used to apply styles to the markup (HTML) on a page. CSS is able to do this by declaring which bits of the the markup it wants to interact with through the use of selectors."
  },
  {
    "title": "23: Dynamic Pages",
    "id": "23-dynamic-pages-ruby",
    "number": 23,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-28T00:00:00.000Z"
    },
    "tags": [
      "dynamic pages",
      "ajax",
      "javascript",
      "waiting",
      "explicit waits"
    ],
    "level": 2,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/dynamic-pages/23-dynamic-pages-ruby",
    "text": "Let's say you want to test some functionality of a web application but it loads things dynamically. You might think about using a hard-coded sleep (that you constantly tweak due to test failures) or you use a blanket timeout that you likely bump up to address test instabilities as well."
  },
  {
    "title": "24: REST APIs",
    "id": "24-rest-apis-ruby",
    "number": 24,
    "publish_date": "2013-11-5",
    "last_update": {
      "date": "2023-03-09T00:00:00.000Z"
    },
    "tags": [
      "REST APIs",
      "test setup",
      "guest post"
    ],
    "level": 2,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/rest-apis/24-rest-apis-ruby",
    "text": "When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail."
  },
  {
    "title": "25: How To Work With Tables",
    "id": "25-tables-ruby",
    "number": 25,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-09T00:00:00.000Z"
    },
    "tags": [
      "tables",
      "sorting",
      "css selectors",
      "css pseudo classes"
    ],
    "level": 2,
    "category": [
      "troubleshooting",
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/how-to-work-with-tables/25-tables-ruby",
    "text": "Odds are at some point you've come across the use of tables in a web application to display data or information to a user, giving them the option to sort and manipulate it. Depending on your application it can be quite common and something you will want to write an automated test for."
  },
  {
    "title": "26: Cloud",
    "id": "26-cloud-ruby",
    "number": 26,
    "publish_date": "2015-09-15T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-27T00:00:00.000Z"
    },
    "tags": [
      "sauce labs",
      "test infrastructure",
      "to the cloud",
      "cloud",
      "someone elses grid"
    ],
    "level": 1,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/cloud/26-cloud-ruby",
    "text": "In order to test features in a previous version of Chrome, you would need to run a virtual machine (VM) on your computer with a legit version of Windows installed on the VM."
  },
  {
    "title": "29: Chrome Driver",
    "id": "29-chrome-driver-ruby",
    "number": 29,
    "publish_date": "2015-08-25T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
    },
    "tags": [
      "drivers",
      "chromedriver",
      "chrome",
      "different browsers"
    ],
    "level": 2,
    "category": [
      "fundamentals",
      "remote"
    ],
    "language": "ruby",
    "contentUrl": "docs/chrome-driver/29-chrome-driver-ruby",
    "text": "It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started."
  },
  {
    "title": "39: How to Test HTML5 Drag and Drop",
    "id": "39-drag-and-drop-ruby",
    "number": 39,
    "publish_date": "2014-02-25T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-02T00:00:00.000Z"
    },
    "tags": [
      "drag and drop",
      "DnD",
      "javascript",
      "bug"
    ],
    "level": 2,
    "category": [
      "remote"
    ],
    "language": "ruby",
    "contentUrl": "docs/drag-and-drop/39-drag-and-drop-ruby",
    "text": "Exercising a page's drag-and-drop functionality used to be simple with Selenium's Action Builder, but sadly, it won't work with HTML5 drag and drop."
  },
  {
    "title": "40: Disabled Element",
    "id": "40-disabled-element-ruby",
    "number": 40,
    "publish_date": "2015-07-06T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-02T00:00:00.000Z"
    },
    "tags": [
      "dropdown list",
      "dropdown lists",
      "disabled element"
    ],
    "level": 2,
    "category": [
      "remote",
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/disabled-element/40-disabled-element-ruby",
    "text": "On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain."
  },
  {
    "title": "45: How To Test Checkboxes",
    "id": "45-checkboxes-ruby",
    "number": 45,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "checkboxes",
      "attribute",
      "selected"
    ],
    "level": 1,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/how-to-test-checkboxes/45-checkboxes-ruby",
    "text": "Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests."
  },
  {
    "title": "47: Implicit vs Explicit Waits",
    "id": "47-waiting-ruby",
    "number": 47,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
    },
    "tags": [
      "waiting",
      "dynamic pages",
      "explicit waits",
      "implicit waits"
    ],
    "level": 2,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/waiting/47-waiting-ruby",
    "text": "In order to make our Selenium tests resilient, we need to make them wait for certain elements to load. Elements that we want to interact with. This is especially true with JavaScript heavy pages."
  },
  {
    "title": "48: Load Testing",
    "id": "48-load-testing-ruby",
    "number": 48,
    "publish_date": "2014-04-30T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "load testing"
    ],
    "level": 3,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/load-testing/48-load-testing-ruby",
    "text": "How do you do load testing in Selenium? While there are plenty of resources citing that while it _can_ be done, there are better tools for the job. Tools like JMeter are often recommended, but they can be intimidating and challenging to get started."
  },
  {
    "title": "49: How to Do Performance Testing",
    "id": "49-performance-testing-ruby",
    "number": 49,
    "publish_date": "2014-05-06T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "performance testing",
      "proxy",
      "browsermob proxy",
      "yslow"
    ],
    "level": 3,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/performance-testing/49-performance-testing-ruby",
    "text": "Odds are pretty good that your production application has some kind of performance monitoring in place (e.g., New Relic). This goes a long way towards identifying when something detrimental has been released into the wild."
  },
  {
    "title": "50: How To Work With Hovers",
    "id": "50-hovers-ruby",
    "number": 50,
    "publish_date": "2015-07-01T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "hover",
      "hovers",
      "action builder"
    ],
    "level": 1,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/how-to-work-with-hovers/50-hovers-ruby",
    "text": "If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."
  },
  {
    "title": "51: How To Work With JavaScript Alerts",
    "id": "51-javascript-alerts-ruby",
    "number": 51,
    "publish_date": "2019-08-09T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "javascript",
      "javascript alerts",
      "javascript popups",
      "javascript dialogs"
    ],
    "level": 1,
    "category": [
      "fundamentals",
      "tools"
    ],
    "language": "ruby",
    "contentUrl": "docs/how-to-work-with-javascript-alerts/51-javascript-alerts-ruby",
    "text": "Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach."
  },
  {
    "title": "52: How To Use Selenium Grid",
    "id": "52-how-to-use-selenium-grid-ruby",
    "number": 52,
    "publish_date": "2015-08-25T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "grid",
      "selenium grid",
      "cross browser",
    ],
    "level": 2,
    "category": [
      "tools"
    ],
    "language": "ruby",
    "contentUrl": "docs/grid/52-how-to-use-selenium-grid-ruby",
    "text": "With Selenium Grid you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with."
  },  
  {
    "title": "53: Growl",
    "id": "53-growl-ruby",
    "number": 53,
    "publish_date": "2016-11-22T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-25T00:00:00.000Z"
    },
    "tags": [
      "jquery",
      "growl",
      "growl notifications",
      "jquery growl"
    ],
    "level": 2,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/growl/53-growl-ruby",
    "text": "Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece all for the sake of trying to track down a transient issue."
  },
  {
    "title": "55: Wrapper",
    "id": "55-wrapper-ruby",
    "number": 55,
    "publish_date": "2014-06-17T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-06T00:00:00.000Z"
    },
    "tags": [
      "wrapper",
      "growl",
      "growl notifications"
    ],
    "level": 2,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/wrapper/55-wrapper-ruby",
    "text": "There may come a time where you want to access Selenium logs in real time. Although there is a way to do this where you have to explicitly request the logs after each test action, what if we wanted information for every test action?"
  },
  {
    "title": "57: Junit XML",
    "id": "57-junit-xml-ruby",
    "number": 57,
    "publish_date": "2015-07-14T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "xml",
      "junit xml",
      "ci",
      "continuous integration",
      "reporting"
    ],
    "level": 1,
    "category": [
      "tools"
    ],
    "language": "ruby",
    "contentUrl": "docs/junit-xml/57-junit-xml-ruby",
    "text": "If you want your Selenium tests to automatically run and report failures to you and your team, you'll want to wire them up to a Continuous Integration server."
  },
  {
    "title": "58: Tagging",
    "id": "58-tagging-ruby",
    "number": 58,
    "publish_date": "2014-07-09T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "tagging",
      "tags",
      "annotations",
      "test packs"
    ],
    "level": 1,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/tagging/58-tagging-ruby",
    "text": "As your test suite grows you'll likely employ some kind of folder structure to help make sense of everything -- grouping similar tests together. But what do you do when you want to run a set of tests that span across your organizational structure? Especially when your organizational structure isn't set in stone?"
  },
  {
    "title": "60: List Tags",
    "id": "60-list-tags-ruby",
    "number": 60,
    "publish_date": "2014-07-22T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-25T00:00:00.000Z"
    },
    "tags": [
      "tagging",
      "tags",
      "annotations",
      "test_packs"
    ],
    "level": 3,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/list-tags/60-list-tags-ruby",
    "text": "Tagging is a powerful tool for targeted test execution, as well as a lightweight form of documentation. But what happens when you want to see a summary of the tags you're using across all of your tests? Unfortunately, most solution don't offer this kind of functionality out of the box, leaving you to manually sift through your tests to get a sense of the different tags you're using."
  },
  {
    "title": "61: How To Press Keyboard Keys",
    "id": "61-keyboard-keys-ruby",
    "number": 61,
    "publish_date": "2015-10-12T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "keyboard",
      "keys",
      "key presses",
      "tab",
      "enter"
    ],
    "level": 1,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/how-to-press-keyboard-keys/61-keyboard-keys-ruby",
    "text": "On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?"
  },
  {
    "title": "63: Right Click",
    "id": "63-right-click-ruby",
    "number": 63,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-06T00:00:00.000Z"
    },
    "tags": [
      "right click",
      "right click",
      "context menu",
      "action builder",
      "context click"
    ],
    "level": 2,
    "category": [
      "fundamentals"
    ],
    "language": "ruby",
    "contentUrl": "docs/right-click/63-right-click-ruby",
    "text": "Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?"
  },
  {
    "title": "64: Limit Bandwidth",
    "id": "64-limit-bandwidth-ruby",
    "number": 64,
    "publish_date": "2015-10-16T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "browsermob proxy"
    ],
    "level": 3,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/limit-bandwidth/64-limit-bandwidth-ruby",
    "text": "With Selenium you have the luxury of cross browser testing. But what happens when you also need to test how your application behaves on a _slow_ connection?"
  },
  {
    "title": "65: Highlight Elements",
    "id": "65-highlight-elements-ruby",
    "number": 65,
    "publish_date": "2014-09-11T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-06T00:00:00.000Z"
    },
    "tags": [
      "guest post",
      "highlight",
      "javascript",
      "locators"
    ],
    "level": 2,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/highlight-elements/65-highlight-elements-ruby",
    "text": "It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?"
  },
  {
    "title": "66: Blacklist",
    "id": "66-blacklist-ruby",
    "number": 66,
    "publish_date": "2015-10-20T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "browsermob proxy",
      "proxy"
    ],
    "level": 3,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/blacklist/66-blacklist-ruby",
    "text": "There are plenty of external resources that get loaded onto a page that aren't directly relevant to the functionality you're testing (e.g., Facebook widgets, Analytics, JavaScript snippets, etc.). And these external resources have the potential to negatively impact your test runs due to slow load times."
  },
  {
    "title": "67: Broken Images",
    "id": "67-broken-images-ruby",
    "number": 67,
    "publish_date": "2015-10-20T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "broken image",
      "broken images",
      "proxy",
      "browsermob proxy",
      "http library",
      "javascript"
    ],
    "level": 3,
    "category": [
      "troubleshooting"
    ],
    "language": "ruby",
    "contentUrl": "docs/broken-images/67-broken-images-ruby",
    "text": "Selenium is built to mimic human action (e.g., clicking, typing, dragging, dropping, etc.). So how do you use it to test for broken images?"
  },
  {
    "title": "68: Load Testing Revisited",
    "id": "68-load-testing-revisited-ruby",
    "number": 68,
    "publish_date": "2014-10-08T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "jmeter",
      "load testing"
    ],
    "level": 3,
    "category": [
      "tools"
    ],
    "language": "ruby",
    "contentUrl": "docs/load-testing-revisited/68-load-testing-revisited-ruby",
    "text": "In [a previous tip](http://elementalselenium.com/tips/48-load-testing) I demonstrated a way to accomplish a simple load test with a Selenium script and an HTTP library. While it works, it's only useful for rudimentary test cases. For more involved test cases and more powerful load generation, we're going to need something stronger."
  },
  {
    "title": "69: Safari",
    "id": "69-safari-ruby",
    "number": 69,
    "publish_date": "2015-08-25T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-13T00:00:00.000Z"
    },
    "tags": [
      "safari",
      "drivers",
      "safaridriver",
      "different browsers"
    ],
    "level": 1,
    "category": [
      "tools"
    ],
    "language": "ruby",
    "contentUrl": "docs/safari/69-safari-ruby",
    "text": "Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension."
  },
  {
    "title": "72: Headless Chrome",
    "id": "72-headless-chrome-ruby",
    "number": 72,
    "publish_date": "2017-09-25T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-06T00:00:00.000Z"
    },
    "tags": [
      "headless",
      "chrome"
    ],
    "level": 2,
    "category": [
      "remote"
    ],
    "language": "ruby",
    "contentUrl": "docs/headless-chrome/72-headless-chrome-ruby",
    "text": "If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in."
  },
  {
    "title": "73: Open New Window",
    "id": "73-open-new-window-ruby",
    "number": 73,
    "publish_date": "2023-02-17T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-21T00:00:00.000Z"
    },
    "tags": [
      "new window",
      "new tab",
      "selenium 4",
      "no keystrokes needed"
    ],
    "level": 1,
    "category": [
      "testing"
    ],
    "language": "ruby",
    "contentUrl": "docs/open-new-window/73-open-new-window-ruby",
    "text": "Nearly everyone, at some point during their normal flow of work on the computer, has had to open a new window or tab. In fact, many of us often end up with several tabs open. It makes sense that this should be tested using Selenium."
  }
];

export default Data;
