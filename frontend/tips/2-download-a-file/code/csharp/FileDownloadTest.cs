using System;
using System.IO;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class FileDownloadTest
    {
        IWebDriver _driver;
        string _folderPath;

        [TestInitialize]
        public void SetUp()
        {
            _folderPath = System.Environment.CurrentDirectory + $"/../../../{System.Guid.NewGuid().ToString()}";
            Directory.CreateDirectory(_folderPath);
            FirefoxOptions Options = new FirefoxOptions();
            Options.SetPreference("browser.download.dir", _folderPath);
            Options.SetPreference("browser.download.folderList", 2);
            Options.SetPreference("browser.helperApps.neverAsk.saveToDisk",
                                  "image/jpeg, application/pdf, application/octet-stream");
            Options.SetPreference("pdfjs.disabled", true);
            _driver = new FirefoxDriver(Options);
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver.Quit();
            Directory.Delete(_folderPath, true);
        }

        [TestMethod]
        public void DownloadFileToDisk()
        {
            _driver.Url = "https://the-internet.herokuapp.com/download";
            _driver.FindElement(By.CssSelector(".example a")).Click();

            // Waiting up to 5 seconds for the file to be downloaded
            WebDriverWait wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(5));
            wait.Until(driver =>
            {
                DirectoryInfo downloadFolder = new DirectoryInfo(_folderPath);
                return downloadFolder.GetFiles().Length > 0;
            });
            DirectoryInfo DownloadFolder = new DirectoryInfo(_folderPath);
            Assert.IsTrue(DownloadFolder.GetFiles().Length > 0, "File not downloaded");
            foreach(FileInfo file in DownloadFolder.GetFiles())
            {
                Assert.IsTrue(file.Length > 0, "File empty");
            }
        }
    }
}