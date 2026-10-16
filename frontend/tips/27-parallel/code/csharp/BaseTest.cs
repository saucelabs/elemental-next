using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

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
    }
}
