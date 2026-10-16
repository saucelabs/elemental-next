using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class NotificationTest
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

        // The page shows the successful message only some of the time, so this test is flaky on purpose.
        // If it fails, MSTest runs it again (with its setup and cleanup), up to 9 more times.
        [TestMethod]
        [Retry(9)]
        public void NotificationMessage()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/notification_message");
            var message = _driver.FindElement(By.Id("flash")).Text;
            StringAssert.Contains(message, "Action successful");
        }
    }
}
