---
title: "How To Download a File"
slug: "2-download-a-file"
number: 2
publish_date: 2016-06-11
tags:
  - "files"
  - "downloading"
  - "file download"
level: 2
category: "testing"
---

## The Problem

Just like with uploading files we hit the same issue with downloading them. A dialog box just out of Selenium's reach.

## A Solution

With some additional configuration when setting up Selenium we can easily side-step the dialog box. This is done by instructing the browser to download files to a specific location without being prompted.

After the file is downloaded we can perform some simple checks to make sure the file is what we expect.

Let's dig in with an example.

## An Example

Let's start off by declaring our requisite classes for our testing framework (e.g., `using NUnit.Framework`), driving the browser with Selenium (e.g., `using OpenQA.Selenium`, etc.), and leveraging common C# functions (e.g., `using System.IO`, etc.).

```csharp
// filename: FileDownload.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.IO;
using System.Threading;
// ...
```

Now to create a class and add our test's setup.

```csharp
// filename: FileDownload.cs
public class FileDownload
{
    IWebDriver Driver;
    string FolderPath;

    [SetUp]
    public void SetUp()
    {
        FolderPath = @"C:\Temp\" + System.Guid.NewGuid().ToString();
        Directory.CreateDirectory(FolderPath);

        FirefoxProfile Profile = new FirefoxProfile();
        profile.SetPreference("browser.download.dir", FolderPath);
        profile.SetPreference("browser.download.folderList", 2);
        profile.SetPreference("browser.helperApps.neverAsk.saveToDisk",
                              "image/jpeg, application/pdf, application/octet-stream");
        profile.SetPreference("pdfjs.disabled", true);
        Driver = new FirefoxDriver(Profile);
    }
// ...
```

Our `SetUp()` method is where the magic is happening in this example. In it we're creating a uniquely named temp directory (e.g., `System.Guid.NewGuid().ToString();`), configuring a browser profile object (for Firefox in this case), and plying it with the necessary configuration parameters to make it automatically download the file where we want (e.g., in the newly created temp directory).

Here's a breakdown of each of the browser preferences being set:

+ `browser.download.dir` accepts a string. This is how we set the custom download path. It needs to be an absolute path.
+ `browser.download.folderList` takes a number. It tells Firefox which download directory to use. `2` tells it to use a custom download path, wheras `1` would use the browser's default path, and `0` would place them on the Desktop.
+ `browser.helperApps.neverAsk.saveToDisk` tells Firefox when not to prompt for a file download. It accepts a string of [the file's MIME type](http://en.wikipedia.org/wiki/Internet_media_type). If you want to specify more than one, you do it with a comma-separated string (which we've done).
+ `pdfjs.disabled` is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.

This profile object is then passed into our instance of Selenium (e.g., `Driver = new FirefoxDriver(Profile);`).

Now let's take care of our test's teardown.

```csharp
// filename: FileDownload.cs
// ...
    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
        Directory.Delete(FolderPath, true);
    }
// ...
```

In `TearDown()` we close the browser instance and then clean up the temp directory by deleting it. Specifying `true` as a second parameter for `Directory.Delete()` will recursively delete the files in the folder before deleting it.

Now to wire up our test.

```csharp
// filename: FileDownload.cs
// ...
    [Test]
    public void DownloadFileToDisk()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/download");
        Driver.FindElement(By.CssSelector(".example a")).Click();
        Thread.Sleep(2000);

        DirectoryInfo DownloadFolder = new DirectoryInfo(FolderPath);
        Assert.IsTrue(DownloadFolder.GetFiles().Length > 0, "File not downloaded");
        foreach(FileInfo file in DownloadFolder.GetFiles())
        {
            Assert.IsTrue(file.Length > 0, "File empty");
        }
    }
}
```

After visiting the page we find the first download link and click it. The click triggers an automatic download to the temp directory created in `SetUp()`. We need to wait for the download to finish, so we add a brief sleep (e.g., `Thread.sleep(2000);`). After the file downloads, we perform some rudimentary checks to make sure the unique temp directory isn't empty and then check the file (or files) to see that they aren't empty either.

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\FileDownload.sln` from the command-line) here is will happen:

+ Create a uniquely named temp directory in the present working directory
+ Open the browser
+ Visit the page
+ Find and click the first download link on the page
+ Automatically download the file to the temp directory without prompting
+ Check that the temp directory is not empty
+ Check that the downloaded file is not empty
+ Close the browser
+ Delete the temp directory

## Outro

A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is not sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it [here](http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/). In a future tip I'll cover a more reliable, faster, and scalable browser agnostic approach to downloading files. Stay tuned.

Thanks to Jonathan Taylor for contributing the initial C# code for this tip!

Happy Testing!
