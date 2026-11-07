using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class ShadowDomTest
    {
        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/shadowdom_advanced");
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void ClickAButtonInsideNestedShadowRoots()
        {
            ISearchContext outerRoot = _driver.FindElement(By.Id("outer-card")).GetShadowRoot();
            ISearchContext innerRoot = outerRoot.FindElement(By.CssSelector("#inner-card")).GetShadowRoot();
            innerRoot.FindElement(By.CssSelector("#inner-button")).Click();

            Assert.AreEqual("You clicked the button in the inner shadow root",
                _driver.FindElement(By.Id("nested-result")).Text);
        }

        [TestMethod]
        public void ANormalLocatorDoesNotFindIt()
        {
            Assert.AreEqual(0, _driver.FindElements(By.CssSelector("#inner-button")).Count);
        }
    }
}
