using System;
using System.Collections.Concurrent;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.BiDi;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class RecordHarTest
    {
        const string BaseUrl = "https://the-internet.herokuapp.com";
        const string HarFile = "journey.har";
        ChromeDriver _driver;
        IBiDi _bidi;

        [TestInitialize]
        public async Task SetUp()
        {
            // Turns on WebDriver BiDi, which sends every request of the browser to the test
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
        public async Task RecordUserJourney()
        {
            var entries = new ConcurrentQueue<object>();
            var urls = new ConcurrentQueue<string>();
            await _bidi.Network.BeforeRequestSent.SubscribeAsync(e =>
            {
                // Keeps only the requests to the site under test, not the ones to third parties
                if (e.Request.Url.StartsWith(BaseUrl))
                {
                    urls.Enqueue(e.Request.Url);
                    entries.Enqueue(new
                    {
                        startedDateTime = e.Timestamp.ToString("o"),
                        request = new { method = e.Request.Method, url = e.Request.Url }
                    });
                }
            });

            _driver.Navigate().GoToUrl(BaseUrl);
            _driver.FindElement(By.LinkText("Dynamic Loading")).Click();
            _driver.FindElement(By.PartialLinkText("Example 2")).Click();
            _driver.FindElement(By.CssSelector("#start button")).Click();
            var finish = new WebDriverWait(_driver, TimeSpan.FromSeconds(10))
                .Until(d => d.FindElements(By.Id("finish")).FirstOrDefault(e => e.Displayed));
            Assert.AreEqual("Hello World!", finish.Text);

            var har = new
            {
                log = new
                {
                    version = "1.2",
                    creator = new { name = "Elemental Selenium", version = "1.0" },
                    entries = entries.ToArray()
                }
            };
            File.WriteAllText(HarFile, JsonSerializer.Serialize(har, new JsonSerializerOptions { WriteIndented = true }));

            foreach (var page in new[] { "/", "/dynamic_loading", "/dynamic_loading/2" })
            {
                CollectionAssert.Contains(urls.ToArray(), BaseUrl + page);
            }
        }
    }
}
