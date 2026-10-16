using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class WaitingTest
    {
        private const string BaseUrl = "https://the-internet.herokuapp.com/dynamic_loading";

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
        public void ImplicitWaitGivesUpBeforeTheElementIsRendered()
        {
            _driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
            _driver.Navigate().GoToUrl($"{BaseUrl}/2");
            _driver.FindElement(By.CssSelector("#start button")).Click();
            Assert.ThrowsExactly<NoSuchElementException>(() => _driver.FindElement(By.Id("finish")));
        }

        [TestMethod]
        public void ImplicitWaitDoesNotWaitForHiddenElements()
        {
            _driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
            _driver.Navigate().GoToUrl($"{BaseUrl}/1");
            _driver.FindElement(By.CssSelector("#start button")).Click();
            Assert.IsFalse(_driver.FindElement(By.Id("finish")).Displayed);
        }

        [TestMethod]
        [DataRow("1")]
        [DataRow("2")]
        public void ExplicitWait(string example)
        {
            _driver.Navigate().GoToUrl($"{BaseUrl}/{example}");
            _driver.FindElement(By.CssSelector("#start button")).Click();
            var finish = new WebDriverWait(_driver, TimeSpan.FromSeconds(10))
                .Until(d =>
                {
                    var element = d.FindElement(By.Id("finish"));
                    return element.Displayed ? element : null;
                });
            Assert.AreEqual("Hello World!", finish.Text);
        }
    }
}
