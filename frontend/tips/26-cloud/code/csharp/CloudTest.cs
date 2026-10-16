using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Remote;

namespace csharp
{
    [TestClass]
    public class CloudTest
    {
        private const string SauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

        IWebDriver _driver;

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
                ["name"] = "Elemental Selenium - Tip 26 - C#"
            });
            _driver = new RemoteWebDriver(new Uri(SauceUrl), options);
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void Title()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            StringAssert.Contains(_driver.Title, "The Internet");
        }
    }
}
