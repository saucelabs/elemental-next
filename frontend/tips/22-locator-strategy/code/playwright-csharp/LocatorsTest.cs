using System;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class LocatorsTest : PageTest
    {
        [TestInitialize]
        public async Task VisitDownloadPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/download");
        }

        [TestMethod]
        public async Task FirstLinkOnThePage()
        {
            string link = await Page.Locator("a").First.GetAttributeAsync("href");
            Console.WriteLine(link);
            Assert.IsTrue(link.Contains("github.com"));
        }

        [TestMethod]
        public async Task FirstLinkInTheContent()
        {
            string link = await Page.Locator("#content a").First.GetAttributeAsync("href");
            Console.WriteLine(link);
            Assert.IsTrue(link.Contains("download/"));
        }

        [TestMethod]
        public async Task FirstLinkInTheExample()
        {
            string link = await Page.Locator("#content .example a").First.GetAttributeAsync("href");
            Console.WriteLine(link);
            Assert.IsTrue(link.Contains("download/"));
        }
    }
}
