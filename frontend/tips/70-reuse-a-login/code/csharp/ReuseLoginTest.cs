using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class ReuseLoginTest
    {
        const string BaseUrl = "https://the-internet.herokuapp.com";
        static Cookie _sessionCookie;
        IWebDriver _driver;

        [ClassInitialize]
        public static void LogIn(TestContext context)
        {
            // Logs in through the form once, and keeps the session cookie of the logged-in user
            IWebDriver driver = new FirefoxDriver();
            try
            {
                driver.Navigate().GoToUrl($"{BaseUrl}/login");
                driver.FindElement(By.Id("username")).SendKeys("tomsmith");
                driver.FindElement(By.Id("password")).SendKeys("SuperSecretPassword!");
                driver.FindElement(By.CssSelector("button[type='submit']")).Click();
                _sessionCookie = driver.Manage().Cookies.GetCookieNamed("rack.session");
            }
            finally
            {
                driver.Quit();
            }
        }

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            // A cookie can only be added for the site of the current page
            _driver.Navigate().GoToUrl(BaseUrl);
            _driver.Manage().Cookies.AddCookie(new Cookie(_sessionCookie.Name, _sessionCookie.Value));
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void TheSecureAreaShowsTheUser()
        {
            _driver.Navigate().GoToUrl($"{BaseUrl}/secure");

            Assert.AreEqual("tomsmith", _driver.FindElement(By.Id("username")).Text);
        }

        [TestMethod]
        public void LogOut()
        {
            _driver.Navigate().GoToUrl($"{BaseUrl}/secure");
            _driver.FindElement(By.CssSelector("a[href='/logout']")).Click();

            StringAssert.Contains(_driver.FindElement(By.Id("flash")).Text, "You logged out of the secure area!");
        }
    }
}
