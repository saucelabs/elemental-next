using System.IO;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class DownloadTest : PageTest
    {
        [TestMethod]
        public async Task DownloadFile()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/download");

            IDownload download = await Page.RunAndWaitForDownloadAsync(async () =>
            {
                await Page.Locator(".example a").First.ClickAsync();
            });

            string folder = Directory.CreateTempSubdirectory().FullName;
            string filePath = Path.Combine(folder, download.SuggestedFilename);
            await download.SaveAsAsync(filePath);

            Assert.IsTrue(new FileInfo(filePath).Length > 0);
        }
    }
}
