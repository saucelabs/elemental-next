using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using static Microsoft.Playwright.Assertions;

namespace PlaywrightTests
{
    [TestClass]
    public class MultipleBrowsersTest : SauceTest
    {
        [TestMethod]
        [DataRow("chromium")]
        [DataRow("firefox")]
        [DataRow("webkit")]
        public async Task LoadThePage(string browserName)
        {
            IPage page = await OpenPageAsync(browserName);
            await page.GotoAsync("https://the-internet.herokuapp.com");
            await Expect(page).ToHaveTitleAsync("The Internet");
        }
    }
}
