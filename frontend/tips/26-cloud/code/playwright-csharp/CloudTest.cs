using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using static Microsoft.Playwright.Assertions;

namespace PlaywrightTests
{
    [TestClass]
    public class CloudTest : SauceTest
    {
        [TestMethod]
        public async Task LoadThePage()
        {
            IPage page = await OpenPageAsync("chromium");
            await page.GotoAsync("https://the-internet.herokuapp.com");
            await Expect(page).ToHaveTitleAsync("The Internet");
        }
    }
}
