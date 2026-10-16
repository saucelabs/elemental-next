using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class DynamicLoadingTest
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

        private void WaitFor(Func<IWebDriver, bool> condition, int seconds = 10)
        {
            new WebDriverWait(_driver, TimeSpan.FromSeconds(seconds)).Until(condition);
        }

        [TestMethod]
        [DataRow("1")]
        [DataRow("2")]
        public void DynamicLoading(string example)
        {
            _driver.Navigate().GoToUrl($"https://the-internet.herokuapp.com/dynamic_loading/{example}");
            _driver.FindElement(By.CssSelector("#start button")).Click();
            WaitFor(d => d.FindElement(By.Id("finish")).Displayed);
            Assert.IsTrue(_driver.FindElement(By.Id("finish")).Displayed);
        }
    }
}
