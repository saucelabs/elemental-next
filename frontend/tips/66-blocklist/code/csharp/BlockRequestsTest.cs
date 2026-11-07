using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.BiDi;
using OpenQA.Selenium.BiDi.Network;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class BlockRequestsTest
    {
        const string SlowRequest = "https://the-internet.herokuapp.com/slow_external";
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
        public async Task SlowRequestIsBlocked()
        {
            var blocked = new ConcurrentQueue<string>();
            await _bidi.Network.AddInterceptAsync([InterceptPhase.BeforeRequestSent],
                new AddInterceptOptions { UrlPatterns = [new StringUrlPattern(SlowRequest)] });
            await _bidi.Network.BeforeRequestSent.SubscribeAsync(async e =>
            {
                if (e.IsBlocked)
                {
                    blocked.Enqueue(e.Request.Url);
                    await _bidi.Network.FailRequestAsync(e.Request.Request);
                }
            });

            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/slow");
            // jQuery.active counts the requests that are still running. The slow request takes 30 seconds,
            // so it reaches 0 in time only when the request is blocked.
            new WebDriverWait(_driver, TimeSpan.FromSeconds(5))
                .Until(d => (long)_driver.ExecuteScript("return jQuery.active") == 0);
            CollectionAssert.AreEqual(new[] { SlowRequest }, blocked.ToArray());
        }
    }
}
