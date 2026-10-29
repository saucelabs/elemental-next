using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class GridTest : PageTest
    {
        private static readonly string GridUrl =
            Environment.GetEnvironmentVariable("GRID_URL") ?? "http://localhost:4444";
        private static bool _gridIsRunning;

        [ClassInitialize]
        public static async Task CheckGrid(TestContext context)
        {
            try
            {
                using HttpClient client = new HttpClient { Timeout = TimeSpan.FromSeconds(5) };
                _gridIsRunning = (await client.GetAsync($"{GridUrl}/status")).IsSuccessStatusCode;
            }
            catch (Exception)
            {
                _gridIsRunning = false;
            }
            if (_gridIsRunning)
            {
                // With this variable set, Playwright starts Chrome on the Grid instead of on this machine
                Environment.SetEnvironmentVariable("SELENIUM_REMOTE_URL", GridUrl);
            }
        }

        [TestMethod]
        public async Task LoadThePage()
        {
            if (!_gridIsRunning)
            {
                Assert.Inconclusive("Start a Selenium Grid on http://localhost:4444 (or set GRID_URL) to run the test");
            }
            await Page.GotoAsync("https://the-internet.herokuapp.com");
            await Expect(Page).ToHaveTitleAsync("The Internet");
        }
    }
}
