using System;
using System.Collections.ObjectModel;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class CheckboxesTest
    {
        IWebDriver _driver;
        ReadOnlyCollection<IWebElement> _checkboxes;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/checkboxes");
            _checkboxes = _driver.FindElements(By.CssSelector("input[type=\"checkbox\"]"));
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void AttributeLookup()
        {
            Console.WriteLine(string.Join(", ", _checkboxes.Select(checkbox => checkbox.GetDomAttribute("checked") ?? "null")));
            Assert.IsNull(_checkboxes.First().GetDomAttribute("checked"));
            Assert.IsNotNull(_checkboxes.Last().GetDomAttribute("checked"));
        }

        [TestMethod]
        public void IsSelected()
        {
            Console.WriteLine(string.Join(", ", _checkboxes.Select(checkbox => checkbox.Selected)));
            Assert.IsFalse(_checkboxes.First().Selected);
            Assert.IsTrue(_checkboxes.Last().Selected);
        }
    }
}
