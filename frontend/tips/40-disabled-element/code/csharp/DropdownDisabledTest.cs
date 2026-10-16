using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class DropdownDisabledTest
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

        private IWebElement Option(string text)
        {
            return _driver.FindElements(By.TagName("option")).First(option => option.Text == text);
        }

        [TestMethod]
        public void DisabledOption()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/dropdown");
            Assert.IsFalse(Option("Please select an option").Enabled);
            Assert.IsTrue(Option("Option 1").Enabled);
        }
    }
}
