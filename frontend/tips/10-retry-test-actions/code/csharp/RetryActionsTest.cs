using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class RetryActionsTest
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

        private static string RetryIfMessageContains(string failMessage, Func<string> action, int attempts = 10)
        {
            var message = action();
            for (var attempt = 1; attempt < attempts && message.Contains(failMessage); attempt++)
            {
                message = action();
            }
            return message;
        }

        [TestMethod]
        public void NotificationMessage()
        {
            var message = RetryIfMessageContains("please try again", () =>
            {
                _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/notification_message");
                return _driver.FindElement(By.Id("flash")).Text;
            });
            StringAssert.Contains(message, "Action successful");
        }
    }
}
