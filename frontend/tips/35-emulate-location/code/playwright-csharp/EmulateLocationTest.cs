using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class EmulateLocationTest : PageTest
    {
        public override BrowserNewContextOptions ContextOptions()
        {
            return new BrowserNewContextOptions
            {
                Geolocation = new Geolocation { Latitude = 52.52f, Longitude = 13.405f },
                Permissions = ["geolocation"],
                TimezoneId = "Asia/Tokyo",
                Locale = "de-DE",
            };
        }

        [TestMethod]
        public async Task Geolocation()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/geolocation");
            await Page.Locator("button").ClickAsync();

            await Expect(Page.Locator("#lat-value")).ToHaveTextAsync("52.52");
            await Expect(Page.Locator("#long-value")).ToHaveTextAsync("13.405");
        }

        [TestMethod]
        public async Task TimeZoneAndLocale()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/locale");

            await Expect(Page.Locator("#browser-timezone")).ToHaveTextAsync("Asia/Tokyo");
            await Expect(Page.Locator("#browser-language")).ToHaveTextAsync("de-DE");
            await Expect(Page.Locator("#formatted-date")).ToHaveTextAsync("Mittwoch, 15. April 2026 um 21:00");
            await Expect(Page.Locator("#formatted-number")).ToHaveTextAsync("1.234.567,891");
            await Expect(Page.Locator("#greeting")).ToHaveTextAsync("Hallo!");
        }
    }
}
