using System;
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
        public async Task FileCanBeDownloaded()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/download");
            string link = await Page.Locator(".example a").First.GetAttributeAsync("href");

            IAPIResponse response = await Page.APIRequest.HeadAsync(new Uri(new Uri(Page.Url), link).ToString());

            Assert.IsTrue(response.Headers["content-disposition"].Contains("attachment"));
            Assert.IsTrue(long.Parse(response.Headers["content-length"]) > 0);
        }
    }
}
