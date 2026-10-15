using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class BasePageTest
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
        public void DynamicLoading()
        {
            var dynamicLoading = new DynamicLoadingPage(_driver);
            dynamicLoading.Start();
            Assert.AreEqual("Hello World!", dynamicLoading.GetFinishText());
        }

        [TestMethod]
        public void Login()
        {
            var login = new LoginPage(_driver);
            login.LoginAs("tomsmith", "SuperSecretPassword!");
            Assert.IsTrue(login.SuccessMessagePresent());
        }
    }
}
