using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class BasicAuthTest
    {
        private const string Message = "Congratulations! You must have the proper credentials.";

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
        public void CredentialsInUrl()
        {
            _driver.Navigate().GoToUrl("https://admin:admin@the-internet.herokuapp.com/basic_auth");
            var pageMessage = _driver.FindElement(By.CssSelector(".example p")).Text;
            Assert.AreEqual(Message, pageMessage);
        }

        [TestMethod]
        public void CredentialsCachedByTheBrowser()
        {
            _driver.Navigate().GoToUrl("https://admin:admin@the-internet.herokuapp.com/basic_auth");
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/basic_auth");
            var pageMessage = _driver.FindElement(By.CssSelector(".example p")).Text;
            Assert.AreEqual(Message, pageMessage);
        }
    }
}
