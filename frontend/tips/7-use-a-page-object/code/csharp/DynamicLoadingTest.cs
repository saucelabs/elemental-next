using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class DynamicLoadingTest
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
        public void HelloWorldIsDisplayed()
        {
            var dynamicLoading = new DynamicLoadingPage(_driver);
            dynamicLoading.Start();
            dynamicLoading.WaitForFinish();
            Assert.AreEqual("Hello World!", dynamicLoading.GetFinishText());
        }
    }
}
