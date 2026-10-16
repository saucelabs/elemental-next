using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class JavaScriptAlertsTest
    {
        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/javascript_alerts");
            _driver.FindElements(By.CssSelector("button"))[1].Click();
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        private IAlert Alert()
        {
            var wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(5));
            wait.IgnoreExceptionTypes(typeof(NoAlertPresentException));
            return wait.Until(d => d.SwitchTo().Alert());
        }

        [TestMethod]
        public void AcceptConfirmation()
        {
            Alert().Accept();
            Assert.AreEqual("You clicked: Ok", _driver.FindElement(By.Id("result")).Text);
        }

        [TestMethod]
        public void DismissConfirmation()
        {
            Alert().Dismiss();
            Assert.AreEqual("You clicked: Cancel", _driver.FindElement(By.Id("result")).Text);
        }
    }
}
