using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Remote;

namespace csharp
{
    [TestClass]
    public class MultipleBrowsersParallelTest
    {
        private const string SauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

        IWebDriver _driver;

        private void SetUp(string browser)
        {
            var username = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
            var accessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");
            if (username == null || accessKey == null)
            {
                Assert.Inconclusive("Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
            }

            DriverOptions options = browser switch
            {
                "chrome" => new ChromeOptions(),
                "firefox" => new FirefoxOptions(),
                "edge" => new EdgeOptions(),
                _ => throw new ArgumentException($"Unknown browser: {browser}")
            };
            options.BrowserVersion = "latest";
            options.PlatformName = "Windows 11";
            options.AddAdditionalOption("sauce:options", new Dictionary<string, object>
            {
                ["username"] = username,
                ["accessKey"] = accessKey,
                ["name"] = $"Elemental Selenium - Tip 42 - C# - {browser}"
            });
            _driver = new RemoteWebDriver(new Uri(SauceUrl), options);
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        [DataRow("chrome")]
        [DataRow("firefox")]
        [DataRow("edge")]
        public void Title(string browser)
        {
            SetUp(browser);
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            Assert.AreEqual("The Internet", _driver.Title);
        }
    }
}
