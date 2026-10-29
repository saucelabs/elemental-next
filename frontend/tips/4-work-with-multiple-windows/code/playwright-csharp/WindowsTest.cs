using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class WindowsTest : PageTest
    {
        [TestMethod]
        public async Task MultipleWindows()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/windows");

            IPage newPage = await Context.RunAndWaitForPageAsync(async () =>
            {
                await Page.Locator(".example a").ClickAsync();
            });

            await Expect(Page).ToHaveTitleAsync("The Internet");
            await Expect(newPage).ToHaveTitleAsync("New Window");
        }
    }
}
