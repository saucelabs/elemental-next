using System;
using System.Diagnostics;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Chromium;

namespace csharp
{
    [TestClass]
    public class SlowNetworkTest
    {
        ChromeDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new ChromeDriver();
            // Every request waits half a second, downloads at 200 KB/s and uploads at 50 KB/s
            _driver.NetworkConditions = new ChromiumNetworkConditions
            {
                Latency = TimeSpan.FromMilliseconds(500),
                DownloadThroughput = 200 * 1024,
                UploadThroughput = 50 * 1024
            };
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void PageLoadsOnSlowNetwork()
        {
            var watch = Stopwatch.StartNew();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            var seconds = watch.Elapsed.TotalSeconds;
            Console.WriteLine($"The page loaded in {seconds:F1} seconds");

            Assert.AreEqual("Welcome to the-internet", _driver.FindElement(By.CssSelector(".heading")).Text);
            // On a fast connection, the page loads in 1 or 2 seconds
            Assert.IsTrue(seconds >= 3);
        }
    }
}
