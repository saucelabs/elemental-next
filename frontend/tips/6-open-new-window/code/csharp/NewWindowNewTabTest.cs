using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class NewWindowNewTabTest
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
            _driver.Quit();
        }

        [TestMethod]
        public void NewWindowTest()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/windows");
            _driver.SwitchTo().NewWindow(WindowType.Window);
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/typos");
            Assert.AreEqual(2, _driver.WindowHandles.Count);
        }

        [TestMethod]
        public void NewTabTest()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/windows");
            _driver.SwitchTo().NewWindow(WindowType.Tab);
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/typos");
            Assert.AreEqual(2, _driver.WindowHandles.Count);
        }
    }
}