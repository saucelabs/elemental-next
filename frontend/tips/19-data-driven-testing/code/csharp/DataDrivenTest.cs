using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class DataDrivenTest
    {
        IWebDriver _driver;

        public static IEnumerable<object[]> UserData()
        {
            return File.ReadAllLines("user_data.csv")
                .Skip(1)
                .Select(line => line.Split(',').Cast<object>().ToArray());
        }

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

        private string NotificationText()
        {
            var wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(5));
            return wait.Until(d =>
            {
                var flash = d.FindElement(By.Id("flash"));
                return flash.Displayed ? flash.Text : null;
            });
        }

        [TestMethod]
        [DynamicData(nameof(UserData))]
        public void Login(string accountType, string username, string password, string notificationMessage)
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/login");
            _driver.FindElement(By.Id("username")).SendKeys(username);
            _driver.FindElement(By.Id("password")).SendKeys(password);
            _driver.FindElement(By.CssSelector("#login button")).Click();
            StringAssert.StartsWith(NotificationText(), notificationMessage);
        }
    }
}
