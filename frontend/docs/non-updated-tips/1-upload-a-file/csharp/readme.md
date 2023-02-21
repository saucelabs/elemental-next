---
title: "How To Upload a File"
slug: "1-upload-a-file"
number: 1
publish_date: 2016-06-11
tags:
  - "file"
  - "upload"
  - "file upload"
level: 1
category: "testing"
---

## The Problem

Uploading a file is a common piece of functionality found on the web. But when trying to automate it you get prompted with a with a dialog box that is just out of reach for Selenium.

In these cases people often look to a third-party tool to manipulate this window (e.g., [AutoIt](http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/)). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations.

## A Solution

A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) _into_ the form and then submit the form.

Let's step through an example.

## An Example

__NOTE: We are using [a file upload example](http://the-internet.herokuapp.com/upload) found on [the-internet](https://github.com/tourdedave/the-internet).__

First let's pull in our requisite classes for our testing framework (e.g., `using NUnit.Framework;`), driving the browser with Selenium (e.g., `using OpenQA.Selenium;`), and launching an instance of Firefox (e.g., `using OpenQA.Selenium.Firefox;`).

```csharp
// filename: FileUpload.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
// ...
```

Now to create a class and take care of the test's setup and teardown.

```csharp
// filename: FileUpload.cs
// ...
public class FileUpload
{
    IWebDriver Driver;

    [SetUp]
    public void SetUp()
    {
        Driver = new FirefoxDriver();
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }
// ...
```

After specifying the class (e.g., `public class FileUpload`) we create a field variable (e.g., `IWebDriver Driver;`) to store our Selenium instance for reuse throughout the class. We then create a `SetUp()` method with a `[SetUp]` attribute so it runs before our test. In this method we are creating an instance of Selenium with Firefox (e.g., `Driver = new FirefoxDriver();`).

After our test executes, the `TearDown()` method will run thanks to the `[TearDown]` attribute. This calls `Driver.Quit();` which will close the browser instance.

Now to wire up our test.

```csharp
// filename: FileUpload.cs
// ...
    [Test]
    public void UploadFileFromDisk()
    {
        string File = "SomeFile.txt";
        string FilePath = @"C:\Temp\" + File;

        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/upload");
        Driver.FindElement(By.Id("file-upload")).SendKeys(FilePath);
        Driver.FindElement(By.Id("file-submit")).Click();

        IWebElement FileUploaded = Driver.FindElement(By.Id("uploaded-files"));
        Assert.IsTrue(FileUploaded.Text == File, "The File Did Not Upload Correctly");
    }
}
```

We create an `UploadFileFromDisk()` method and add a `[Test]` attribute so it is run as a test. In it we leverage a file from local disk by specifying the file (e.g., `SomeFile.txt`) and its path (e.g., currently set to `C:\Temp\`, adapt as needed to suit your needs).

__NOTE: The value for `FilePath` starts with a `@` symbol. This denotes that what follows after it is a string literal. If we didn't have it, we would need to escape our backslashes (e.g, `"C:\\Temp\\").__

Next we visit the page with the upload form, input the string value of `FilePath` (e.g., the full path to the file plus the filename with its extension), and submit the form. After the file is uploaded to the page it will display the filename it just processed. We use this text to perform our assertion (making sure the uploaded file is what we expect).

## Expected Behavior

When we save this file and run it (e.g., `nunit3-console.exe .\FileUpload.sln` from the command-line) here is what will happen:

+ Open the browser
+ Visit the upload form page
+ Inject the file path into the form and submit it
+ Page displays the uploaded filename
+ Grab the text from the page and assert it's what we expect
+ Close the browser

## Outro

This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at [`IAllowsFileDetection`](http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_IAllowsFileDetection.htm).

Thanks to Jonathan Taylor for contributing the initial C# code for this tip!

Happy Testing!
