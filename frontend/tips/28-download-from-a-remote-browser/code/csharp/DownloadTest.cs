using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class DownloadTest
    {
        private const string SauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

        RemoteWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            var username = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
            var accessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");
            if (username == null || accessKey == null)
            {
                Assert.Inconclusive("Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
            }

            var options = new ChromeOptions
            {
                BrowserVersion = "latest",
                PlatformName = "Windows 11",
                // Asks Sauce Labs to keep the files the browser downloads, so we can fetch them
                EnableDownloads = true
            };
            options.AddAdditionalOption("sauce:options", new Dictionary<string, object>
            {
                ["username"] = username,
                ["accessKey"] = accessKey,
                ["name"] = "Elemental Selenium - Tip 28 - C#"
            });
            _driver = new RemoteWebDriver(new Uri(SauceUrl), options);
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void DownloadFile()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/download");
            var link = _driver.FindElement(By.CssSelector(".example a"));
            var fileName = link.Text;
            link.Click();

            // The file is downloaded on the remote machine, so we ask for the list of files
            new WebDriverWait(_driver, TimeSpan.FromSeconds(10))
                .Until(d => _driver.GetDownloadableFiles().Contains(fileName));

            // Copies the file from the remote machine to a folder on this machine
            var targetDir = Directory.CreateTempSubdirectory().FullName;
            try
            {
                _driver.DownloadFile(fileName, targetDir);
                Assert.IsTrue(new FileInfo(Path.Combine(targetDir, fileName)).Length > 0);
            }
            finally
            {
                Directory.Delete(targetDir, true);
            }
        }
    }
}
