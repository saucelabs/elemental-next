using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class DownloadTest : PageTest
    {
        private static readonly string ServerUrl =
            Environment.GetEnvironmentVariable("PLAYWRIGHT_SERVER_URL") ?? "ws://127.0.0.1:3000/";
        private static bool _serverIsRunning;

        [ClassInitialize]
        public static async Task CheckServer(TestContext context)
        {
            try
            {
                using HttpClient client = new HttpClient { Timeout = TimeSpan.FromSeconds(5) };
                // Any answer means the server is running
                await client.GetAsync(new Uri(ServerUrl.Replace("ws://", "http://")));
                _serverIsRunning = true;
            }
            catch (Exception)
            {
                _serverIsRunning = false;
            }
        }

        // Connects to a Chrome that runs where the Playwright server runs, instead of on this machine
        public override Task<(string, BrowserTypeConnectOptions)?> ConnectOptionsAsync()
        {
            (string, BrowserTypeConnectOptions)? options = _serverIsRunning ? (ServerUrl, null) : null;
            return Task.FromResult(options);
        }

        [TestMethod]
        public async Task DownloadFile()
        {
            if (!_serverIsRunning)
            {
                Assert.Inconclusive($"Start a Playwright server on {ServerUrl} (or set PLAYWRIGHT_SERVER_URL) to run the test");
            }
            await Page.GotoAsync("https://the-internet.herokuapp.com/download");
            var link = Page.Locator(".example a").First;
            var fileName = await link.TextContentAsync();

            // Waits for the download that the click starts
            var download = await Page.RunAndWaitForDownloadAsync(() => link.ClickAsync());
            Assert.AreEqual(fileName, download.SuggestedFilename);

            // Copies the file from the remote browser to a folder on this machine
            var targetDir = Directory.CreateTempSubdirectory().FullName;
            try
            {
                var downloadedFile = Path.Combine(targetDir, download.SuggestedFilename);
                await download.SaveAsAsync(downloadedFile);
                Assert.IsTrue(new FileInfo(downloadedFile).Length > 0);
            }
            finally
            {
                Directory.Delete(targetDir, true);
            }
        }
    }
}
