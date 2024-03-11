using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class MultipleWindowsTest
    {
        IWebDriver _driver;
        WebDriverWait _wait;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(2));
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver.Quit();
        }

        [TestMethod]
        public void MultipleWindowsExample1()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/windows");
            _driver.FindElement(By.CssSelector(".example a")).Click();

            var Windows = _driver.WindowHandles;

            _driver.SwitchTo().Window(Windows[0]);
            Assert.AreEqual("The Internet", _driver.Title);

            _driver.SwitchTo().Window(Windows[1]);
            // Waiting for the new window to have a title, then we consider it is loaded
            _wait.Until(driver => !string.IsNullOrEmpty(driver.Title));
            Assert.AreEqual("New Window", _driver.Title);
        }

        [TestMethod]
        public void MultipleWindowsExample2()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/windows");
            string FirstWindow = _driver.CurrentWindowHandle;
            string SecondWindow = "";

            _driver.FindElement(By.CssSelector(".example a")).Click();

            var Windows = _driver.WindowHandles;
            foreach(var Window in Windows)
            {
                if (Window != FirstWindow)
                    SecondWindow = Window;
            }

            _driver.SwitchTo().Window(FirstWindow);
            Assert.AreEqual("The Internet", _driver.Title);

            _driver.SwitchTo().Window(SecondWindow);
            // Waiting for the new window to have a title, then we consider it is loaded
            _wait.Until(driver => !string.IsNullOrEmpty(driver.Title));
            Assert.AreEqual("New Window", _driver.Title);
        }
    }
}