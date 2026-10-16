using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class StatusCodesTest
    {
        private const string StatusCodeScript =
            "return performance.getEntriesByType('navigation')[0].responseStatus";

        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        private long StatusCode()
        {
            return Convert.ToInt64(((IJavaScriptExecutor)_driver).ExecuteScript(StatusCodeScript));
        }

        [TestMethod]
        [DataRow(200)]
        [DataRow(301)]
        [DataRow(404)]
        [DataRow(500)]
        public void RetrievesStatusCode(int expected)
        {
            _driver.Navigate().GoToUrl($"https://the-internet.herokuapp.com/status_codes/{expected}");
            Assert.AreEqual(expected, StatusCode());
        }
    }
}
