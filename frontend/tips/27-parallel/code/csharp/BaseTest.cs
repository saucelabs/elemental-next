using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium;

namespace csharp
{
    public abstract class BaseTest
    {
        // MSTest creates a new instance of the test class for each test, so each test gets its own driver.
        protected IWebDriver Driver;

        [TestInitialize]
        public void SetUp()
        {
            Driver = new FirefoxDriver();
            Driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/tables");
        }

        [TestCleanup]
        public void TearDown()
        {
            Driver?.Quit();
        }

        protected List<double> Dues(string locator)
        {
            return Driver.FindElements(By.CssSelector(locator))
                .Select(due => double.Parse(due.Text.Replace("$", ""), CultureInfo.InvariantCulture))
                .ToList();
        }

        // Waits until the header has the class of the sort order, which tells that the table is sorted
        protected void WaitForSort(string header, string sortClass)
        {
            new WebDriverWait(Driver, TimeSpan.FromSeconds(5))
                .Until(driver => driver.FindElement(By.CssSelector(header))
                    .GetDomAttribute("class").Contains(sortClass));
        }
    }
}
