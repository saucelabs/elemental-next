using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Remote;

namespace csharp
{
    [TestClass]
    public class UploadTest
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
                PlatformName = "Windows 11"
            };
            options.AddAdditionalOption("sauce:options", new Dictionary<string, object>
            {
                ["username"] = username,
                ["accessKey"] = accessKey,
                ["name"] = "Elemental Selenium - Tip 68 - C#"
            });
            _driver = new RemoteWebDriver(new Uri(SauceUrl), options);
            // Sends the files typed in a file input to the remote machine
            _driver.FileDetector = new LocalFileDetector();
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void UploadFile()
        {
            var filename = "some-file.txt";
            var file = Path.Combine(AppContext.BaseDirectory, filename);
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/upload");
            _driver.FindElement(By.Id("file-upload")).SendKeys(file);
            _driver.FindElement(By.Id("file-submit")).Click();
            Assert.AreEqual(filename, _driver.FindElement(By.Id("uploaded-files")).Text);
        }
    }
}
