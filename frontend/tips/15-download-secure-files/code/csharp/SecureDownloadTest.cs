using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class SecureDownloadTest
    {
        private const string BaseUrl = "https://the-internet.herokuapp.com";
        private static readonly HttpClient HttpClient = new(new HttpClientHandler { AllowAutoRedirect = false, UseCookies = false });

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
        public void FilesBehindBasicAuth()
        {
            _driver.Navigate().GoToUrl("https://admin:admin@the-internet.herokuapp.com/download_secure");
            var link = _driver.FindElement(By.CssSelector(".example a")).GetDomAttribute("href");

            var credentials = Convert.ToBase64String(Encoding.UTF8.GetBytes("admin:admin"));
            using var request = new HttpRequestMessage(HttpMethod.Head, $"{BaseUrl}/{link}");
            request.Headers.Authorization = new AuthenticationHeaderValue("Basic", credentials);
            using var response = HttpClient.Send(request);
            Assert.AreEqual(200, (int)response.StatusCode, link);
        }

        [TestMethod]
        public void PageBehindFormLogin()
        {
            _driver.Navigate().GoToUrl($"{BaseUrl}/login");
            _driver.FindElement(By.Id("username")).SendKeys("tomsmith");
            _driver.FindElement(By.Id("password")).SendKeys("SuperSecretPassword!");
            _driver.FindElement(By.CssSelector("#login button")).Click();
            new WebDriverWait(_driver, TimeSpan.FromSeconds(10))
                .Until(d => d.FindElement(By.CssSelector(".flash.success")).Displayed);

            var cookie = _driver.Manage().Cookies.GetCookieNamed("rack.session");
            using var withCookie = new HttpRequestMessage(HttpMethod.Get, $"{BaseUrl}/secure");
            withCookie.Headers.Add("Cookie", $"{cookie.Name}={cookie.Value}");
            using var authorized = HttpClient.Send(withCookie);
            Assert.AreEqual(200, (int)authorized.StatusCode);

            using var withoutCookie = new HttpRequestMessage(HttpMethod.Get, $"{BaseUrl}/secure");
            using var unauthorized = HttpClient.Send(withoutCookie);
            Assert.AreEqual(302, (int)unauthorized.StatusCode);
        }
    }
}
