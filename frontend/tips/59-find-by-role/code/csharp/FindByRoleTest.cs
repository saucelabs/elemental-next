using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class FindByRoleTest
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

        IWebElement FindByRole(string role, string name)
        {
            // The browser computes the role and the accessible name of each element, as a screen reader sees them
            foreach (WebElement element in _driver.FindElements(By.CssSelector($"[role=\"{role}\"]")))
            {
                if (element.ComputedAccessibleRole == role && element.ComputedAccessibleLabel == name)
                {
                    return element;
                }
            }
            throw new NoSuchElementException($"No {role} named \"{name}\"");
        }

        [TestMethod]
        public void PickAFruit()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/custom_dropdown");

            FindByRole("combobox", "Fruit").Click();
            FindByRole("option", "Mango").Click();

            Assert.AreEqual("Mango", FindByRole("combobox", "Fruit").Text);
            Assert.AreEqual("Selected: mango", _driver.FindElement(By.Id("result")).Text);
        }
    }
}
