using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.BiDi;
using OpenQA.Selenium.BiDi.Network;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class MockResponsesTest
    {
        ChromeDriver _driver;
        IBiDi _bidi;

        [TestInitialize]
        public async Task SetUp()
        {
            // Turns on WebDriver BiDi, which lets the test intercept network requests
            var options = new ChromeOptions { UseWebSocketUrl = true };
            _driver = new ChromeDriver(options);
            _bidi = await _driver.AsBiDiAsync();
        }

        [TestCleanup]
        public async Task TearDown()
        {
            if (_bidi != null)
            {
                await _bidi.DisposeAsync();
            }
            _driver?.Quit();
        }

        [TestMethod]
        public async Task PageShowsTheMockedAnswer()
        {
            // Pauses the calls to /slow_api/data, with any query string
            var api = new PatternUrlPattern { Hostname = "the-internet.herokuapp.com", Pathname = "/slow_api/data" };
            await _bidi.Network.AddInterceptAsync([InterceptPhase.BeforeRequestSent],
                new AddInterceptOptions { UrlPatterns = [api] });
            await _bidi.Network.BeforeRequestSent.SubscribeAsync(async e =>
            {
                if (e.IsBlocked)
                {
                    await _bidi.Network.ProvideResponseAsync(e.Request.Request, new ProvideResponseOptions
                    {
                        StatusCode = 200,
                        Headers = [new Header("Content-Type", "application/json")],
                        Body = "{\"message\": \"Hello from the mock\"}",
                    });
                }
            });

            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/slow_api");
            _driver.FindElement(By.Id("call-api")).Click();
            new WebDriverWait(_driver, TimeSpan.FromSeconds(5))
                .Until(d => d.FindElement(By.Id("status-text")).Text == "Hello from the mock");
            Assert.AreEqual("200: Hello from the mock", _driver.FindElement(By.CssSelector("#attempts li")).Text);
        }
    }
}
