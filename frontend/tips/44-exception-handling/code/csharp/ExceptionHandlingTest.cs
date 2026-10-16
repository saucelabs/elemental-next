using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class ExceptionHandlingTest
    {
        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/login");
            _driver.FindElement(By.Id("username")).SendKeys("tomsmith");
            _driver.FindElement(By.Id("password")).SendKeys("SuperSecretPassword!");
            _driver.FindElement(By.CssSelector("#login button")).Click();
            new WebDriverWait(_driver, TimeSpan.FromSeconds(10))
                .Until(d => d.FindElement(By.CssSelector(".flash.success")).Displayed);
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        private bool IsDisplayed(By locator)
        {
            try
            {
                return _driver.FindElement(locator).Displayed;
            }
            catch (Exception e) when (e is NoSuchElementException or StaleElementReferenceException)
            {
                return false;
            }
        }

        [TestMethod]
        public void LookingForAMissingElementThrowsAnException()
        {
            Assert.ThrowsExactly<NoSuchElementException>(() => _driver.FindElement(By.Id("login")).Displayed);
        }

        [TestMethod]
        public void LoginFormIsNotDisplayed()
        {
            Assert.IsFalse(IsDisplayed(By.Id("login")));
        }
    }
}
