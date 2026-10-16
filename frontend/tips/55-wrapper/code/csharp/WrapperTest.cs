using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.Events;

namespace csharp
{
    [TestClass]
    public class WrapperTest
    {
        EventFiringWebDriver _driver;
        Wrapper _listener;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new EventFiringWebDriver(new FirefoxDriver());
            _listener = new Wrapper(_driver);
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void ListenerLogsEveryAction()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            _driver.FindElement(By.LinkText("Checkboxes")).Click();

            CollectionAssert.AreEqual(new List<string>
            {
                "Navigated to https://the-internet.herokuapp.com",
                "Finding element By.LinkText: Checkboxes",
                "Found element By.LinkText: Checkboxes",
                "Clicking on Checkboxes",
                "URL changed to https://the-internet.herokuapp.com/checkboxes"
            }, _listener.Messages);
        }
    }
}
