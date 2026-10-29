using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class HoversTest : PageTest
    {
        [TestMethod]
        public async Task DisplayCaptionOnHover()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/hovers");
            ILocator anAvatar = Page.Locator(".figure").First;
            ILocator caption = anAvatar.Locator(".figcaption");
            await Expect(caption).ToBeHiddenAsync();

            await anAvatar.HoverAsync();
            await Expect(caption).ToBeVisibleAsync();
        }
    }
}
