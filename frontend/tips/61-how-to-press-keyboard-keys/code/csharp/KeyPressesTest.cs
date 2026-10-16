using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;

namespace csharp
{
    [TestClass]
    public class KeyPressesTest
    {
        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/key_presses");
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void SendKeysToAnElement()
        {
            _driver.FindElement(By.Id("target")).SendKeys(Keys.Space);
            Assert.AreEqual("You entered: SPACE", _driver.FindElement(By.Id("result")).Text);
        }

        [TestMethod]
        public void SendKeysWithoutAnElement()
        {
            new Actions(_driver).SendKeys(Keys.Tab).Perform();
            Assert.AreEqual("You entered: TAB", _driver.FindElement(By.Id("result")).Text);
        }
    }
}
