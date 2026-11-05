using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Chrome;

namespace csharp
{
    [TestClass]
    public class ChromeTest
    {
        ChromeDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            // Selenium Manager finds Chrome and the matching ChromeDriver, and downloads them when they are missing
            _driver = new ChromeDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void PageLoaded()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            Assert.AreEqual("The Internet", _driver.Title);
            var chrome = (Dictionary<string, object>)_driver.Capabilities.GetCapability("chrome");
            Console.WriteLine($"Chrome {_driver.Capabilities.GetCapability("browserVersion")}, " +
                $"ChromeDriver {chrome["chromedriverVersion"].ToString().Split(' ')[0]}");
        }
    }
}
