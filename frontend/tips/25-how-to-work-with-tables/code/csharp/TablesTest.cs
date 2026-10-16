using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class TablesTest
    {
        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/tables");
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        private List<string> Texts(string locator)
        {
            return _driver.FindElements(By.CssSelector(locator)).Select(element => element.Text).ToList();
        }

        private List<double> Dues(string locator)
        {
            return Texts(locator)
                .Select(due => double.Parse(due.Replace("$", ""), CultureInfo.InvariantCulture))
                .ToList();
        }

        [TestMethod]
        public void SortNumberAscending()
        {
            _driver.FindElement(By.CssSelector("#table1 thead tr th:nth-of-type(4)")).Click();
            var dueValues = Dues("#table1 tbody tr td:nth-of-type(4)");
            CollectionAssert.AreEqual(dueValues.OrderBy(due => due).ToList(), dueValues);
        }

        [TestMethod]
        public void SortNumberDescending()
        {
            _driver.FindElement(By.CssSelector("#table1 thead tr th:nth-of-type(4)")).Click();
            _driver.FindElement(By.CssSelector("#table1 thead tr th:nth-of-type(4)")).Click();
            var dueValues = Dues("#table1 tbody tr td:nth-of-type(4)");
            CollectionAssert.AreEqual(dueValues.OrderByDescending(due => due).ToList(), dueValues);
        }

        [TestMethod]
        public void SortTextAscending()
        {
            _driver.FindElement(By.CssSelector("#table1 thead tr th:nth-of-type(3)")).Click();
            var emails = Texts("#table1 tbody tr td:nth-of-type(3)");
            CollectionAssert.AreEqual(emails.OrderBy(email => email, System.StringComparer.Ordinal).ToList(), emails);
        }

        [TestMethod]
        public void SortNumberAscendingWithSemanticLocators()
        {
            _driver.FindElement(By.CssSelector("#table2 thead .dues")).Click();
            var dueValues = Dues("#table2 tbody .dues");
            CollectionAssert.AreEqual(dueValues.OrderBy(due => due).ToList(), dueValues);
        }
    }
}
