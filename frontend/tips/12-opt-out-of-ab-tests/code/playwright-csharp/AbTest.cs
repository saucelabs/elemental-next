using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class AbTest : PageTest
    {
        private static readonly Cookie OptOutCookie = new Cookie
        {
            Name = "optimizelyOptOut",
            Value = "true",
            Url = "https://the-internet.herokuapp.com"
        };

        [TestMethod]
        public async Task ForgeCookieOnTargetPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/abtest");
            await Expect(Page.Locator("h3")).ToHaveTextAsync(new Regex("A/B Test (Variation 1|Control)"));

            await Context.AddCookiesAsync(new[] { OptOutCookie });
            await Page.ReloadAsync();

            await Expect(Page.Locator("h3")).ToHaveTextAsync("No A/B Test");
        }

        [TestMethod]
        public async Task ForgeCookieBeforeVisitingTargetPage()
        {
            await Context.AddCookiesAsync(new[] { OptOutCookie });
            await Page.GotoAsync("https://the-internet.herokuapp.com/abtest");

            await Expect(Page.Locator("h3")).ToHaveTextAsync("No A/B Test");
        }

        [TestMethod]
        public async Task AppendOptOutParameterToUrl()
        {
            Page.Dialog += async (_, dialog) => await dialog.DismissAsync();
            await Page.GotoAsync("https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");

            await Expect(Page.Locator("h3")).ToHaveTextAsync("No A/B Test");
        }
    }
}
