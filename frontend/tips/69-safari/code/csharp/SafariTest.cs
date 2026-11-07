using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Safari;

namespace csharp
{
    // Safari runs on macOS only, so the test is skipped on Windows and Linux
    [TestClass]
    [OSCondition(OperatingSystems.OSX)]
    public class SafariTest
    {
        SafariDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new SafariDriver();
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
            var capabilities = _driver.Capabilities;
            Console.WriteLine($"{capabilities.GetCapability("browserName")} {capabilities.GetCapability("browserVersion")}");

            Assert.AreEqual("The Internet", _driver.Title);
        }
    }
}
