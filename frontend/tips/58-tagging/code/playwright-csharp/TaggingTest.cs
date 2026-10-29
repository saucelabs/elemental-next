using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class TaggingTest : PageTest
    {
        [TestMethod]
        [TestCategory("smoke")]
        public async Task HasTheRightTitle()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com");
            await Expect(Page).ToHaveTitleAsync("The Internet");
        }

        // This test is not finished yet, so it fails. Since it's in the wip category, the smoke run leaves it out.
        [TestMethod]
        [TestCategory("wip")]
        public async Task WorkInProgress()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com");
            await Expect(Page).ToHaveTitleAsync("Not finished yet");
        }
    }
}
