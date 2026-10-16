using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class ScreenshotTest
    {
        IWebDriver _driver;

        public TestContext TestContext { get; set; }

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            if (TestContext.CurrentTestOutcome == UnitTestOutcome.Failed)
            {
                var screenshot = ((ITakesScreenshot)_driver).GetScreenshot();
                screenshot.SaveAsFile($"failshot_{TestContext.FullyQualifiedTestClassName}.{TestContext.TestName}.png");
            }
            _driver?.Quit();
        }

        [TestMethod]
        public void FailsOnPurpose()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            Assert.AreEqual("blah blah blah", _driver.FindElement(By.CssSelector("h1")).Text);
        }
    }
}
