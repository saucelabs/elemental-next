using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class TaggingTest
    {
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

        [TestMethod]
        [TestCategory("smoke")]
        public void Title()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            Assert.AreEqual("The Internet", _driver.Title);
        }

        // This test is not finished yet, so it fails. Since it's in the wip category, it doesn't run with the smoke filter.
        [TestMethod]
        [TestCategory("wip")]
        public void WorkInProgress()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            Assert.AreEqual("Not finished yet", _driver.Title);
        }
    }
}
