using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class ABTestOptOutTest
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
        public void ForgeCookieOnTargetPage()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/abtest");
            var headingText = _driver.FindElement(By.TagName("h3")).Text;
            CollectionAssert.Contains(new List<string> { "A/B Test Variation 1", "A/B Test Control" }, headingText);
            _driver.Manage().Cookies.AddCookie(new Cookie("optimizelyOptOut", "true"));
            _driver.Navigate().Refresh();
            headingText = _driver.FindElement(By.TagName("h3")).Text;
            Assert.AreEqual("No A/B Test", headingText);
        }

        [TestMethod]
        public void ForgeCookieBeforeVisitingTargetPage()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            _driver.Manage().Cookies.AddCookie(new Cookie("optimizelyOptOut", "true"));
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/abtest");
            var headingText = _driver.FindElement(By.TagName("h3")).Text;
            Assert.AreEqual("No A/B Test", headingText);
        }

        [TestMethod]
        public void UrlParameter()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");
            var wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(10));
            wait.IgnoreExceptionTypes(typeof(NoAlertPresentException));
            wait.Until(d => d.SwitchTo().Alert()).Dismiss();
            var headingText = wait.Until(d => d.FindElement(By.TagName("h3"))).Text;
            Assert.AreEqual("No A/B Test", headingText);
        }
    }
}
