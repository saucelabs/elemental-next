using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class RestApisTest
    {
        const string BaseUrl = "https://the-internet.herokuapp.com";
        const string Password = "SuperSecret123";
        readonly HttpClient _http = new() { BaseAddress = new Uri(BaseUrl) };
        IWebDriver _driver;
        string _user;

        [TestInitialize]
        public async Task SetUp()
        {
            // A unique name, so tests that run at the same time don't share a user
            _user = "user-" + Guid.NewGuid().ToString("N")[..12];
            var response = await _http.PostAsJsonAsync("/api/users", new { username = _user, password = Password });
            Assert.AreEqual(201, (int)response.StatusCode);
            _driver = new ChromeDriver();
        }

        [TestCleanup]
        public async Task TearDown()
        {
            _driver?.Quit();
            await _http.DeleteAsync($"/api/users/{_user}");
        }

        string LoggedInUser()
        {
            return new WebDriverWait(_driver, TimeSpan.FromSeconds(5))
                .Until(d => d.FindElements(By.CssSelector("span#username")).FirstOrDefault(e => e.Displayed))
                .Text;
        }

        [TestMethod]
        public void LogInWithANewUser()
        {
            _driver.Navigate().GoToUrl($"{BaseUrl}/login");
            _driver.FindElement(By.Id("username")).SendKeys(_user);
            _driver.FindElement(By.Id("password")).SendKeys(Password);
            _driver.FindElement(By.CssSelector("button[type='submit']")).Click();
            Assert.AreEqual(_user, LoggedInUser());
        }

        [TestMethod]
        public async Task SkipTheLoginForm()
        {
            var response = await _http.PostAsJsonAsync("/api/sessions", new { username = _user, password = Password });
            Assert.AreEqual(200, (int)response.StatusCode);
            // The cookie header looks like "rack.session=<value>; path=/; ...", so we keep the value
            var cookie = response.Headers.GetValues("Set-Cookie").First().Split(';')[0];
            var value = cookie[(cookie.IndexOf('=') + 1)..];
            // The browser accepts cookies only for the site it shows, so we open a page of the site first
            _driver.Navigate().GoToUrl($"{BaseUrl}/login");
            _driver.Manage().Cookies.AddCookie(new Cookie("rack.session", value));
            _driver.Navigate().GoToUrl($"{BaseUrl}/secure");
            Assert.AreEqual(_user, LoggedInUser());
        }
    }
}
