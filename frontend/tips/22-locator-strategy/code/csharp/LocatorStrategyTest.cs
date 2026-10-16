using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class LocatorStrategyTest
    {
        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/download");
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void FirstLinkOnThePage()
        {
            var link = _driver.FindElement(By.CssSelector("a")).GetDomProperty("href");
            Console.WriteLine(link);
            StringAssert.Contains(link, "github.com");
        }

        [TestMethod]
        public void FirstLinkInTheContent()
        {
            var link = _driver.FindElement(By.CssSelector("#content a")).GetDomProperty("href");
            Console.WriteLine(link);
            StringAssert.Contains(link, "/download/");
        }

        [TestMethod]
        public void FirstLinkInTheExample()
        {
            var link = _driver.FindElement(By.CssSelector("#content .example a")).GetDomProperty("href");
            Console.WriteLine(link);
            StringAssert.Contains(link, "/download/");
        }
    }
}
