const Data = [
    { 
        id: "1-upload-a-file-ruby", 
        headline: "1: How to Upload a File", 
        text: "Uploading a file is a common piece of functionality found on the web. But when trying to automate it you get prompted with a with a dialog box...", 
        difficulty: "Beginner", 
        category: ["fundamentals", "remote"],
        contentUrl: "http://localhost:3000/docs/updated-tips/how-to-upload-a-file/ruby/",
        tags: ["files", "upload", "file_upload"]
    },
    { 
        id: "2-download-a-file-ruby", 
        headline: "2: How to Download a File",
        text: "Just like with uploading files, we hit the same issue with downloading them. A dialogue box, just out of Selenium’s reach..." , 
        difficulty: "Intermediate", 
        category: ["fundamentals", "remote"],
        contentUrl: "http://localhost:3000/docs/updated-tips/download-a-file/ruby/",
        tags: ["files", "download", "file_download"]
    },
    { 
        id: "3-work-with-frames-ruby", 
        headline: "3: How to Work with Frames", 
        text: "On occasion you'll run into a relic of the front-end world -- frames. And when writing a test against them, you can easily get tripped up...", 
        difficulty: "Beginner", 
        category: ["fundamentals"],
        contentUrl: "http://localhost:3000/docs/updated-tips/work-with-frames/ruby/",
        tags: ["frames"]
    },
    { 
        id: "4-work-with-multiple-windows-ruby", 
        headline: "4: How to Work with Multiple Windows", 
        text: "Occasionally you'll run into a link or action in the application you're testing that will open a new window. To make it work, you’ll need to switch between them...", 
        difficulty: "Intermediate",
        category: ["remote"],
        contentUrl: "http://localhost:3000/docs/updated-tips/work-with-multiple-windows/ruby/",
        tags: ["windows", "multiple_windows", "new_window"]
    },
    { 
        id: "5-select-from-a-dropdown-ruby", 
        headline: "5: How to Select from a Dropdown List", 
        text: "Selecting from a dropdown list seems like one of those simple things. However, there is a bit more finesse to it." , 
        difficulty: "Beginner", 
        category: ["fundamentals"],
        contentUrl: "http://localhost:3000/docs/updated-tips/select-from-a-dropdown/ruby/",
        tags: ["dropwdown", "forms"]
    },
    { 
        id: "6-export-from-selenium-ide-ruby",
        headline: "6: How to Export Tests from Selenium IDE", 
        text: "One of the biggest challenges with Selenium tests is that they can be brittle and challenging to maintain over time. This is largely due to the fact that things in the app you're testing change, breaking your tests.", 
        difficulty: "Beginner",
        category: ["tools"],
        contentUrl: "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tags: ["selenium_ide","exporting"]
    },
    { 
        id: "7-use-a-page-object-ruby", 
        headline: "7: Using a Page Object", text: "Just like with uploading files, we hit the same issue with downloading them. A dialogue box, just out of Selenium’s reach..." ,
        difficulty: "Intermediate", 
        category: ["tools"],
        contentUrl: "http://localhost:3000/docs/updated-tips/use-a-page-object/ruby/",
        tags: ["page_object", "abstraction"]
    },
    { 
        id: "8-download-a-file-revisited-ruby", 
        headline: "8: How to Download a File Without a Browser", 
        text: "Previously we looked at how to download files with Selenium by configuring the browser to download them locally. While this works, it requires a custom configuration that is inconsistent browser to browser" , 
        difficulty: "Intermediate",
        category: ["remote"],
        contentUrl: "http://localhost:3000/docs/updated-tips/download-a-file-revisited/ruby/",
        tags:["files","downloading"]
    },
    { 
        id: "10-retry-test-actions-ruby", 
        headline: "10: Retrying Test Actions", 
        text: "Selecting from a dropdown list seems like one of those simple things. However, there is a bit more finesse to it", 
        difficulty: "Intermediate", 
        category: ["troubleshooting"],
        contentUrl: "http://localhost:3000/docs/updated-tips/retry-test-actions-ruby/ruby/",
        tags: ["reliability"]
    }
]

export default Data;

