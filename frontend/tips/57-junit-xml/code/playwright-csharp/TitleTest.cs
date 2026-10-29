using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class TitleTest : PageTest
    {
        [TestMethod]
        public async Task HasTheRightTitle()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com");
            await Expect(Page).ToHaveTitleAsync("The Internet");
        }
    }
}
