const Data = [
  {
    "title": "How To Upload A File",
    "id": "1-upload-a-file",
    "number": 1,
    "publish_date": "2015-07-19T00:00:00.000Z",
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
    "contentUrl": "tips/how-to-upload-a-file/1-upload-a-file",
    "text": "Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window."
  },
  {
    "title": "How To Download a File",
    "id": "2-download-a-file",
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
    "contentUrl": "tips/download-a-file/2-download-a-file",
    "text": "Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box."
  },
  {
    "title": "Work With Frames",
    "id": "3-work-with-frames",
    "number": 3,
    "publish_date": "2015-08-25T00:00:00.000Z",
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
    "contentUrl": "tips/work-with-frames/3-work-with-frames",
    "text": "In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames."
  },
  {
    "title": "Work With Multiple Windows",
    "id": "4-work-with-multiple-windows",
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
    "contentUrl": "tips/work-with-multiple-windows/4-work-with-multiple-windows",
    "text": "This tip will explain how to work with multiple windows in Selenium and switch between them. Occasionally you'll run into a link or action in the application you're testing that will open a new window."
  },
  {
    "title": "Select From A Dropdown",
    "id": "5-select-from-a-dropdown",
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
    "contentUrl": "tips/select-from-a-dropdown/5-select-from-a-dropdown",
    "text": "Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might seem straightforward just grab the list by its element and select an item within it, based on the text you want there's a bit more skill to it."
  },
  {
    "title": "Use A Page Object",
    "id": "7-use-a-page-object",
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
    "contentUrl": "tips/use-a-page-object/7-use-a-page-object",
    "text": "One of the biggest challenges with Selenium tests is that they can be brittle and challenging to maintain over time. This is largely due to the fact that things in the app you're testing change, breaking your tests."
  },
  {
    "title": "Download A File Revisited",
    "id": "8-download-a-file-revisited",
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
    "contentUrl": "tips/download-a-file-revisited/8-download-a-file-revisited",
    "text": "In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."
  },
  {
    "title": "Use A Base Page Object",
    "id": "9-use-a-base-page-object",
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
    "contentUrl": "tips/use-a-base-page-object/9-use-a-base-page-object",
    "text": "In a previous tip, we went through creating a simple Page Object to capture the behavior of a page we were interacting with. While this was a good start, it leaves a lot of room for improvement. One of the biggest issues is that there are common actions we will likely need across multiple Page Objects and, with our current approach, we would end up with duplicate code."
  },
  {
    "title": "Retry Test Actions",
    "id": "10-retry-test-actions",
    "number": 10,
    "publish_date": "2013-07-30T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-27T00:00:00.000Z"
    },
    "tags": [
      "reliability"
    ],
    "level": 2,
    "category": [
      "troubleshooting"
    ],
    "contentUrl": "tips/retry-test-actions/10-retry-test-actions",
    "text": "We all write tests with the best intention of having them pass and, when they fail, to reveal legitimate issues in the application we're testing. But that's not always easy to accomplish. Especially when your application is dependent upon third-party service providers (e.g. payment providers, social networks, etc)."
  },
  {
    "title": "Build An Interactive Prompt",
    "id": "11-build-an-interactive-prompt",
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
    "contentUrl": "tips/build-an-interactive-prompt/11-build-an-interactive-prompt",
    "text": "Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion."
  },
  {
    "title": "Opt Out of AB Tests",
    "id": "12-opt-out-of-ab-tests",
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
      "troubleshooting"
    ],
    "contentUrl": "tips/opt-out-of-ab-tests/12-opt-out-of-ab-tests",
    "text": "Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests."
  },
  {
    "title": "Work With Basic Auth",
    "id": "13-work-with-basic-auth",
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
    "contentUrl": "tips/how-to-access-basic-auth/13-work-with-basic-auth",
    "text": "Sometimes you'll work with applications that are secured behind Basic HTTP Authentication. In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password rendering Selenium helpless."
  },
  {
    "title": "Interactive Prompts Revisited",
    "id": "14-interactive-prompts-revisited",
    "number": 14,
    "publish_date": "2013-08-27T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "repl",
      "pry",
      "debugging",
      "guest post"
    ],
    "level": 3,
    "category": [
      "troubleshooting"
    ],
    "contentUrl": "tips/interactive-prompts-revisited/14-interactive-prompts-revisited",
    "text": "In a previous tip we covered how a REPL can help you determine what code to write in your scripts by testing locators and actions through an interactive prompt. This is great for simple tasks, but its starts to falter when debugging more complex scripts."
  },
  {
    "title": "Download Secure Files",
    "id": "15-download-secure-files",
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
    "contentUrl": "tips/download-secure-files/15-download-secure-files",
    "text": "Previously, we've gone over how to test file downloads without a browser by leveraging Selenium Webdriver and an HTTP library in tandem. This approach is great for testing general file downloads, but what if the file you want to download is behind authentication?"
  },
  {
    "title": "Take Screenshot on Failure",
    "id": "16-take-screenshot-on-failure",
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
    "contentUrl": "tips/take-screenshot-on-failure/16-take-screenshot-on-failure",
    "text": "With browser tests it can often be challenging to track down the issue that caused a failure. By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future."
  },
  {
    "title": "Retrieve HTTP Status Codes",
    "id": "17-retrieve-http-status-codes",
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
    "contentUrl": "tips/retrieve-http-status-codes/17-retrieve-http-status-codes",
    "text": "There are times when you are testing a page (or numerous pages) and you want to verify that it responded correctly. A great way to handle this is by checking the HTTP Status Code that the browser received. However this functionality is not available in Selenium WebDriver."
  },
  {
    "title": "How To Figure Out What to Test",
    "id": "18-what-to-test",
    "number": 18,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "test strategy"
    ],
    "level": 1,
    "category": [
      "fundamentals"
    ],
    "contentUrl": "tips/how-to-figure-out-what-to-test/18-what-to-test",
    "text": "There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?"
  },
  {
    "title": "Data Driven Testing",
    "id": "19-data-driven-testing",
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
    "contentUrl": "tips/data-driven-testing/19-data-driven-testing",
    "text": "There are times when you run across functionality you want to test repeatedly with various inputs to see how the system behaves. We're going to go over a way to do this that will take some of the burden out of the process."
  },
  {
    "title": "How To Pick a Programming Language",
    "id": "21-choosing-a-language",
    "number": 21,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "programming language",
      "frameworks"
    ],
    "level": 1,
    "category": [
      "resources"
    ],
    "contentUrl": "tips/adding-a-language/21-choosing-a-language",
    "text": "In order to work well with Selenium you need to choose a programming language to write your acceptance tests in. This guide will help you determine which language to choose for testing."
  },
  {
    "title": "Locator Strategy",
    "id": "22-locator-strategy",
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
    "contentUrl": "tips/locator-strategy/22-locator-strategy",
    "text": "In web design CSS (Cascading Style Sheets) is used to apply styles to the markup (HTML) on a page. CSS is able to do this by declaring which bits of the the markup it wants to interact with through the use of selectors."
  },
  {
    "title": "Dynamic Pages",
    "id": "23-dynamic-pages",
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
    "contentUrl": "tips/dynamic-pages/23-dynamic-pages",
    "text": "Let's say you want to test some functionality of a web application but it loads things dynamically. You might think about using a hard-coded sleep (that you constantly tweak due to test failures) or you use a blanket timeout that you likely bump up to address test instabilities as well."
  },
  {
    "title": "REST APIs",
    "id": "24-rest-apis",
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
    "contentUrl": "tips/rest-apis/24-rest-apis",
    "text": "When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail."
  },
  {
    "title": "How To Work With Tables",
    "id": "25-tables",
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
    "contentUrl": "tips/how-to-work-with-tables/25-tables",
    "text": "Odds are at some point you've come across the use of tables in a web application to display data or information to a user, giving them the option to sort and manipulate it. Depending on your application it can be quite common and something you will want to write an automated test for."
  },
  {
    "title": "Cloud",
    "id": "26-cloud",
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
    "contentUrl": "tips/cloud/26-cloud",
    "text": "In order to test features in a previous version of Chrome, you would need to run a virtual machine (VM) on your computer with a legit version of Windows installed on the VM."
  },
  {
    "title": "How To Speed Up Your Tests with Parallelization",
    "id": "27-parallel",
    "number": 27,
    "publish_date": "2013-11-26T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-27T00:00:00.000Z"
    },
    "tags": [
      "parallelization",
      "good test writing",
    ],
    "level": 2,
    "category": [
      "remote"
    ],
    "contentUrl": "tips/parallel/27-parallel",
    "text": "Compared to Unit and Integration Tests, Selenium is slow. A single test can easily take minutes to run. And when you have a lot of them, it can quickly compound your suite to take hours to complete (just for a single browser) -- hampering your ability to get fast feedback."
  },
  {
    "title": "How to Upgrade from Selenium RC to WebDriver",
    "id": "28-upgrading-from-rc",
    "number": 28,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15sT00:00:00.000Z"
    },
    "tags": [
      "selenium rc",
      "upgrading"
    ],
    "level": 2,
    "category": [
      "fundamentals"
    ],
    "contentUrl": "tips/upgrading-from-rc/28-upgrading-from-rc",
    "text": "As the Selenium project continues to evolve, Selenium RC is moving closer to end-of-life. This is especially true with the upcoming release of Selenium 3 where minimal support will be offered for RC."
  },
  {
    "title": "ChromeDriver",
    "id": "29-chrome-driver",
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
    "contentUrl": "tips/chrome-driver/29-chrome-driver",
    "text": "It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started."
  },
  {
    "title": "How to Test Your Mobile App",
    "id": "30-mobile",
    "number": 30,
    "publish_date": "2013-12-17T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
    },
    "tags": [
      "mobile testing",
      "mobile",
      "appium",
      "sauce labs"
    ],
    "level": 2,
    "category": [
      "remote"
    ],
    "contentUrl": "tips/mobile/30-mobile",
    "text": "Mobile is kind of a big deal. And if you haven't needed to test a mobile app yet, it's only a matter of time. But where do you start? And how do you do it in a way that is complimentary to your existing automation and experience?"
  },
  {
    "title": "Accessing Previous Tips Archive",
    "id": "31-archives",
    "number": 31,
    "publish_date": "2014-12-23T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-27T00:00:00.000Z"
    },
    "tags": [
      "archives"
    ],
    "level": 1,
    "category": [
      "resources"
    ],
    "contentUrl": "tips/archives/31-archives",
    "text": "Let me guess you subscribed to a free, weekly Selenium tip newsletter and aren't sure of how to access previously written tips or are unaware that this is even a possibility."
  },
  {
    "title": "CSS vs. Xpath",
    "id": "32-css-vs-xpath",
    "number": 32,
    "publish_date": "2014-01-07T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
    },
    "tags": [
      "selectors",
      "xpath",
      "css",
      "css selectors",
      "locators",
      "locator strategy"
    ],
    "level": 2,
    "category": [
      "resources"
    ],
    "contentUrl": "tips/css-vs-xpath/32-css-vs-xpath",
    "text": "One of the most heated and subjective conversations in the Selenium community is which locator strategy is better, often circling around two -- XPath and CSS."
  },
  {
    "title": "CSS vs. Xpath 2",
    "id": "33-css-vs-xpath-2",
    "number": 33,
    "publish_date": "2014-01-14T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
    },
    "tags": [
      "selectors",
      "xpath",
      "css",
      "css selectors",
      "locators",
      "locator strategy"
    ],
    "level": 2,
    "category": [
      "resources"
    ],
    "contentUrl": "tips/css-vs-xpath-2/33-css-vs-xpath-2",
    "text": "To get a real taste of what the performance difference is between CSS and XPath, we will need to dig deeper. We'll do that by running everything from a local machine while using a performance benchmarking utility."
  },
  {
    "title": "CSS vs. XPath 3",
    "id": "34-css-vs-xpath-3",
    "number": 34,
    "publish_date": "2014-01-21T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
    },
    "tags": [
      "selectors",
      "xpath",
      "css",
      "css selectors",
      "locators",
      "locator strategy"
    ],
    "level": 2,
    "category": [
      "resources"
    ],
    "contentUrl": "tips/css-vs-xpath-3/34-css-vs-xpath-3",
    "text": "In the last tip I provided benchmarks that showed XPath and CSS performance across various browsers. Since then I've received feedback on some things that my test was missing -- most notably more browser coverage and testing against a larger and deeper page."
  },
  {
    "title": "Selenium Resources",
    "id": "36-available-resources",
    "number": 36,
    "publish_date": "2015-10-13T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-22T00:00:00.000Z"
    },
    "tags": [
      "videos",
      "talks",
      "books",
      "chat",
      "forums",
      "meetups",
      "conferences",
      "mailing lists",
      "resources",
      "all the things"
    ],
    "level": 1,
    "category": [
      "resources"
    ],
    "contentUrl": "tips/available-resources/36-available-resources",
    "text": "This is the official Selenium documentation site. There is a lot of helpful information here. Use the sidebar menu on the left to navigate."
  },
  {
    "title": "How to Run Your Tests Headless with Xvfb",
    "id": "38-headless",
    "number": 38,
    "publish_date": "2015-10-14T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-24T00:00:00.000Z"
    },
    "tags": [
      "headless",
      "xvfb"
    ],
    "level": 2,
    "category": [
      "tools"
    ],
    "contentUrl": "tips/headless/38-headless",
    "text": "If you want to run your tests headless on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in."
  },
  {
    "title": "How to Test HTML5 Drag and Drop",
    "id": "39-drag-and-drop",
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
    "contentUrl": "tips/drag-and-drop/39-drag-and-drop",
    "text": "Exercising a page's drag-and-drop functionality used to be simple with Selenium's Action Builder, but sadly, it won't work with HTML5 drag and drop."
  },
  {
    "title": "Disabled Element",
    "id": "40-disabled-element",
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
    "contentUrl": "tips/disabled-element/40-disabled-element",
    "text": "On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain."
  },
  {
    "title": "How to Run a Test on Multiple Browsers",
    "id": "41-one-test-multiple-browsers",
    "number": 41,
    "publish_date": "2014-03-11T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-20T00:00:00.000Z"
    },
    "tags": [
      "multiple browsers",
      "cloud",
      "sauce labs"
    ],
    "level": 2,
    "category": [
      "fundamentals"
    ],
    "contentUrl": "tips/one-test-multiple-browsers/41-one-test-multiple-browsers",
    "text": "You'll occasionally have something that you want to test across multiple browsers. It would be nice to run your test once and have it execute against all of the browsers you care about. Unfortunately this functionality doesn't come out of the box with most testing frameworks."
  },
  {
    "title": "How to Run a Test on Multiple Browsers, In Parallel",
    "id": "42-one-test-multiple-browsers-parallel",
    "number": 42,
    "publish_date": "2014-03-18T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-20T00:00:00.000Z"
    },
    "tags": [
      "multiple browsers",
      "cloud",
      "sauce labs",
      "multiple browsers"
    ],
    "level": 2,
    "category": [
      "fundamentals"
    ],
    "contentUrl": "tips/one-test-multiple-browsers-parallel/42-one-test-multiple-browsers-parallel",
    "text": "In the previous tip I covered how to run a single test against multiple browsers. While this could come in handy, it is still a bit lacking."
  },
  {
    "title": "How to Test Forgot Password",
    "id": "43-forgot-password",
    "number": 43,
    "publish_date": "2015-10-15T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-20T00:00:00.000Z"
    },
    "tags": [
      "forgot password",
      "email"
    ],
    "level": 2,
    "category": [
      "fundamentals"
    ],
    "contentUrl": "tips/forgot-password/43-forgot-password",
    "text": "Testing e-mail can be a tricky process. Especially when dealing with things like forgot password. A lot of times this is something that gets checked manually. Or worse, it gets overlooked and ends up broken in production."
  },
  {
    "title": "How To Handle Exceptions",
    "id": "44-exception-handling",
    "number": 44,
    "publish_date": "2015-07-01T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
    },
    "tags": [
      "exceptions",
      "exception handling",
      "errors",
      "error handling",
      "no such element error",
      "stale element reference error"
    ],
    "level": 2,
    "category": [
      "troubleshooting"
    ],
    "contentUrl": "tips/exception-handling/44-exception-handling",
    "text": "It doesn't take long when using Selenium before you run into errors from Selenium that may seem inexplicable . They can be a bit of a shock if you're not sure what they are, how to handle them, or where to find documentation on how to address them."
  },
  {
    "title": "How To Test Checkboxes",
    "id": "45-checkboxes",
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
    "contentUrl": "tips/how-to-test-checkboxes/45-checkboxes",
    "text": "Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests."
  },
  {
    "title": "Implicit vs Explicit Waits",
    "id": "47-waiting",
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
    "contentUrl": "tips/waiting/47-waiting",
    "text": "In order to make our Selenium tests resilient, we need to make them wait for certain elements to load. Elements that we want to interact with. This is especially true with JavaScript heavy pages."
  },
  {
    "title": "Load Testing",
    "id": "48-load-testing",
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
    "contentUrl": "tips/load-testing/48-load-testing",
    "text": "How do you do load testing in Selenium? While there are plenty of resources citing that while it _can_ be done, there are better tools for the job. Tools like JMeter are often recommended, but they can be intimidating and challenging to get started."
  },
  {
    "title": "How to Do Performance Testing",
    "id": "49-performance-testing",
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
    "contentUrl": "tips/performance-testing/49-performance-testing",
    "text": "Odds are pretty good that your production application has some kind of performance monitoring in place (e.g., New Relic). This goes a long way towards identifying when something detrimental has been released into the wild."
  },
  {
    "title": "How To Work With Hovers",
    "id": "50-hovers",
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
    "contentUrl": "tips/how-to-work-with-hovers/50-hovers",
    "text": "If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."
  },
  {
    "title": "How To Work With JavaScript Alerts",
    "id": "51-javascript-alerts",
    "number": 51,
    "publish_date": "2015-07-01T00:00:00.000Z",
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
    "contentUrl": "tips/how-to-work-with-javascript-alerts/51-javascript-alerts",
    "text": "Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach."
  },
  {
    "title": "How To Use Selenium Grid",
    "id": "52-how-to-use-selenium-grid",
    "number": 52,
    "publish_date": "2015-08-25T00:00:00.000Z",
    "last_update": {
      "date": "2023-02-24T00:00:00.000Z"
    },
    "tags": [
      "grid",
      "selenium grid",
      "cross browser"
    ],
    "level": 2,
    "category": [
      "tools"
    ],
    "contentUrl": "tips/grid/52-how-to-use-selenium-grid",
    "text": "With Selenium Grid you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with."
  },
  {
    "title": "Growl",
    "id": "53-growl",
    "number": 53,
    "publish_date": "2014-06-03T00:00:00.000Z",
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
    "contentUrl": "tips/growl/53-growl",
    "text": "Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece all for the sake of trying to track down a transient issue."
  },
  {
    "title": "How to Access Selenium Logs in Real-Time",
    "id": "54-logging",
    "number": 54,
    "publish_date": "2014-06-10T00:00:00.000Z",
    "last_update": {
      "date": "2014-06-10T00:00:00.000Z"
    },
    "tags": [
      "logging",
      "logs",
      "growl",
      "growl notifications",
    ],
    "level": 3,
    "category": [
      "troubleshooting"
    ],
    "contentUrl": "tips/logging/54-logging",
    "text": "Logging is a deep rabbit hole to fall down in Selenium. The documentation isn't complete and the approach for each of the browser and language bindings is inconsistent and hard to find examples for."
  },
  {
    "title": "Wrapper",
    "id": "55-wrapper",
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
    "contentUrl": "tips/wrapper/55-wrapper",
    "text": "There may come a time where you want to access Selenium logs in real time. Although there is a way to do this where you have to explicitly request the logs after each test action, what if we wanted information for every test action?"
  },
  {
    "title": "How to Automatically Retry Failed Tests",
    "id": "56-retry-failed-tests",
    "number": 56,
    "publish_date": "2014-06-24T00:00:00.000Z",
    "last_update": {
      "date": "2023-04-06T00:00:00.000Z"
    },
    "tags": [
      "retry",
      "failure retry",
      "reliability"
    ],
    "level": 3,
    "category": [
      "troubleshooting"
    ],
    "contentUrl": "tips/retry-failed-tests/56-retry-failed-tests",
    "text": "You want reliable tests. But no matter how hard you try, you're going to run into intermittent test failures. These can be frustrating time wasters that distract you and your team and begin to erode the trust placed in the automated tests."
  },
  {
    "title": "Junit XML",
    "id": "57-junit-xml",
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
    "contentUrl": "tips/junit-xml/57-junit-xml",
    "text": "If you want your Selenium tests to automatically run and report failures to you and your team, you'll want to wire them up to a Continuous Integration server."
  },
  {
    "title": "Tagging",
    "id": "58-tagging",
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
    "contentUrl": "tips/tagging/58-tagging",
    "text": "As your test suite grows you'll likely employ some kind of folder structure to help make sense of everything -- grouping similar tests together. But what do you do when you want to run a set of tests that span across your organizational structure? Especially when your organizational structure isn't set in stone?"
  },
  {
    "title": "List Tags",
    "id": "60-list-tags",
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
    "contentUrl": "tips/list-tags/60-list-tags",
    "text": "Tagging is a powerful tool for targeted test execution, as well as a lightweight form of documentation. But what happens when you want to see a summary of the tags you're using across all of your tests? Unfortunately, most solution don't offer this kind of functionality out of the box, leaving you to manually sift through your tests to get a sense of the different tags you're using."
  },
  {
    "title": "How To Press Keyboard Keys",
    "id": "61-keyboard-keys",
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
    "contentUrl": "tips/how-to-press-keyboard-keys/61-keyboard-keys",
    "text": "On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?"
  },
  {
    "title": "Right Click",
    "id": "63-right-click",
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
    "contentUrl": "tips/right-click/63-right-click",
    "text": "Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?"
  },
  {
    "title": "Limit Bandwidth",
    "id": "64-limit-bandwidth",
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
    "contentUrl": "tips/limit-bandwidth/64-limit-bandwidth",
    "text": "With Selenium you have the luxury of cross browser testing. But what happens when you also need to test how your application behaves on a _slow_ connection?"
  },
  {
    "title": "Highlight Elements",
    "id": "65-highlight-elements",
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
    "contentUrl": "tips/highlight-elements/65-highlight-elements",
    "text": "It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?"
  },
  {
    "title": "Blacklist",
    "id": "66-blacklist",
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
    "contentUrl": "tips/blacklist/66-blacklist",
    "text": "There are plenty of external resources that get loaded onto a page that aren't directly relevant to the functionality you're testing (e.g., Facebook widgets, Analytics, JavaScript snippets, etc.). And these external resources have the potential to negatively impact your test runs due to slow load times."
  },
  {
    "title": "Broken Images",
    "id": "67-broken-images",
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
    "contentUrl": "tips/broken-images/67-broken-images",
    "text": "Selenium is built to mimic human action (e.g., clicking, typing, dragging, dropping, etc.). So how do you use it to test for broken images?"
  },
  {
    "title": "Load Testing Revisited",
    "id": "68-load-testing-revisited",
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
    "contentUrl": "tips/load-testing-revisited/68-load-testing-revisited",
    "text": "In [a previous tip](http://elementalselenium.com/tips/48-load-testing) I demonstrated a way to accomplish a simple load test with a Selenium script and an HTTP library. While it works, it's only useful for rudimentary test cases. For more involved test cases and more powerful load generation, we're going to need something stronger."
  },
  {
    "title": "SafariDriver",
    "id": "69-safari-driver",
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
    "contentUrl": "tips/safari/69-safari-driver",
    "text": "Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension."
  },
  {
    "title": "The Mobile Testing Pyramid",
    "id": "71-mobile-testing-pyramid",
    "number": 71,
    "publish_date": "2017-08-10T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
    },
    "tags": [
      "mobile",
      "pyramid"
    ],
    "level": 2,
    "category": [
      "resources"
    ],
    "language": "all",
    "contentUrl": "tips/mobile-testing-pyramid/71-mobile-testing-pyramid",
    "text": "There are loads of trade-offs when it comes to mobile testing. But by learning to use all layers of the mobile testing pyramid to your advantage you can gain the fast feedback that is required in modern CI/CD environments."
  },
  {
    "title": "How To Run Your Tests Headlessly with Chrome",
    "id": "72-headless-chrome",
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
    "contentUrl": "tips/headless-chrome/72-headless-chrome",
    "text": "If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in."
  },
  {
    "title": "Open a New Window or Tab",
    "id": "73-open-new-window",
    "number": 73,
    "publish_date": "2023-02-17T00:00:00.000Z",
    "last_update": {
      "date": "2023-03-15T00:00:00.000Z"
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
    "contentUrl": "tips/open-new-window/73-open-new-window",
    "text": "Nearly everyone, at some point during their normal flow of work on the computer, has had to open a new window or tab. In fact, many of us often end up with several tabs open. It makes sense that this should be tested using Selenium."
  }
];

export default Data;
