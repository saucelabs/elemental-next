using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Chrome;

namespace csharp
{
    [TestClass]
    public class HeadlessTest
    {
        ChromeDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            var options = new ChromeOptions();
            // Runs Chrome without a window
            options.AddArgument("--headless");
            _driver = new ChromeDriver(options);
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

            var userAgent = (string)_driver.ExecuteScript("return navigator.userAgent");
            Console.WriteLine(userAgent);
            StringAssert.Contains(userAgent, "HeadlessChrome");
        }
    }
}
