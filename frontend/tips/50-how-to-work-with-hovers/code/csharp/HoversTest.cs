using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;

namespace csharp
{
    [TestClass]
    public class HoversTest
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

        [TestMethod]
        public void Hover()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/hovers");
            var anAvatar = _driver.FindElement(By.ClassName("figure"));
            var caption = anAvatar.FindElement(By.ClassName("figcaption"));
            Assert.IsFalse(caption.Displayed);

            new Actions(_driver).MoveToElement(anAvatar).Perform();
            Assert.IsTrue(caption.Displayed);
        }
    }
}
