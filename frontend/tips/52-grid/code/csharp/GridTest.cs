using System;
using System.Net.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Remote;

namespace csharp
{
    [TestClass]
    public class GridTest
    {
        private static readonly string GridUrl =
            Environment.GetEnvironmentVariable("GRID_URL") ?? "http://localhost:4444";

        IWebDriver _driver;

        private static bool GridIsRunning()
        {
            try
            {
                using var client = new HttpClient();
                return client.GetAsync($"{GridUrl}/status").Result.IsSuccessStatusCode;
            }
            catch (Exception)
            {
                return false;
            }
        }

        [TestInitialize]
        public void SetUp()
        {
            if (!GridIsRunning())
            {
                Assert.Inconclusive($"Start a Selenium Grid on {GridUrl} (or set GRID_URL) to run this test");
            }
            _driver = new RemoteWebDriver(new Uri(GridUrl), new FirefoxOptions());
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
        }
    }
}
