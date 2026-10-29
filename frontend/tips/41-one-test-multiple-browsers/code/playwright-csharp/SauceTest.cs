using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    // Gives each test a page in a browser that runs on Sauce Labs, instead of on this machine
    public abstract class SauceTest
    {
        private const string SauceUrl = "https://ondemand.us-west-1.saucelabs.com";
        private const string SauceApiUrl = "https://api.us-west-1.saucelabs.com";
        private static readonly string Username = Environment.GetEnvironmentVariable("SAUCE_USERNAME") ?? "";
        private static readonly string AccessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY") ?? "";
        // Sauce Labs needs the major and minor version of Playwright, e.g. "1.61"
        private static readonly string PlaywrightVersion = typeof(IPage).Assembly.GetName().Version.ToString(2);

        private IPlaywright _playwright;
        private IAPIRequestContext _api;
        private IBrowser _browser;
        private string _sessionId;

        public TestContext TestContext { get; set; }

        [TestInitialize]
        public void SkipWithoutCredentials()
        {
            if (Username == "" || AccessKey == "")
            {
                Assert.Inconclusive("Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
            }
        }

        // Starts a browser (chromium, firefox or webkit) on Sauce Labs and opens a page in it
        protected async Task<IPage> OpenPageAsync(string browserName)
        {
            _playwright = await Playwright.CreateAsync();
            _api = await _playwright.APIRequest.NewContextAsync(new APIRequestNewContextOptions
            {
                HttpCredentials = new HttpCredentials
                {
                    Username = Username,
                    Password = AccessKey,
                    Send = HttpCredentialsSend.Always
                }
            });

            // Asks Sauce Labs for the browser. It redirects (303) until the browser is ready
            IAPIResponse response = await _api.PostAsync($"{SauceUrl}/playwright/session", new APIRequestContextOptions
            {
                DataObject = new Dictionary<string, object>
                {
                    ["browserName"] = browserName == "chromium" ? "chrome" : browserName,
                    ["platformName"] = "Linux",
                    ["playwrightVersion"] = PlaywrightVersion,
                    ["sauce:options"] = new Dictionary<string, object>
                    {
                        ["name"] = TestContext.TestDisplayName,
                        ["build"] = "Elemental Selenium - Tip 41 - Playwright C#"
                    }
                },
                MaxRedirects = 0
            });
            while (response.Status == 303)
            {
                response = await _api.GetAsync(response.Headers["location"],
                    new APIRequestContextOptions { MaxRedirects = 0 });
            }
            JsonElement session = (await response.JsonAsync()).Value.GetProperty("value");
            _sessionId = session.GetProperty("sessionId").GetString();

            // Connects to the browser with the Playwright protocol
            string wsEndpoint = session.GetProperty("wsEndpoint").GetString();
            _browser = await _playwright[browserName].ConnectAsync($"{wsEndpoint}?browser={browserName}");
            return await _browser.NewPageAsync();
        }

        [TestCleanup]
        public async Task CloseBrowser()
        {
            if (_browser == null)
            {
                return;
            }
            await _browser.CloseAsync();

            // Marks the job as passed or failed on Sauce Labs
            bool passed = TestContext.CurrentTestOutcome == UnitTestOutcome.Passed;
            await _api.PutAsync($"{SauceApiUrl}/rest/v1/{Username}/jobs/{_sessionId}",
                new APIRequestContextOptions { DataObject = new { passed } });
            await _api.DisposeAsync();
            _playwright.Dispose();
            Console.WriteLine($"See the job at https://app.saucelabs.com/tests/{_sessionId}");
        }
    }
}
