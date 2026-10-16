using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class RightClickTest
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
        public void RightClick()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/context_menu");
            var menuArea = _driver.FindElement(By.Id("hot-spot"));
            new Actions(_driver).ContextClick(menuArea).Perform();

            var wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(5));
            wait.IgnoreExceptionTypes(typeof(NoAlertPresentException));
            var alert = wait.Until(d => d.SwitchTo().Alert());
            Assert.AreEqual("You selected a context menu", alert.Text);
            alert.Accept();
        }
    }
}
