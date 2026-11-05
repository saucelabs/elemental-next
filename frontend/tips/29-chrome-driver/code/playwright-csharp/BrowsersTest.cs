using System;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class BrowsersTest : PlaywrightTest
    {
        private async Task LoadThePage(BrowserTypeLaunchOptions options)
        {
            await using var browser = await Playwright.Chromium.LaunchAsync(options);
            var page = await browser.NewPageAsync();
            await page.GotoAsync("https://the-internet.herokuapp.com");
            await Expect(page).ToHaveTitleAsync("The Internet");
            Console.WriteLine($"{options.Channel ?? "Playwright Chromium"} {browser.Version}");
        }

        // The browser that `playwright.ps1 install chromium` downloaded for this Playwright version
        [TestMethod]
        public async Task PlaywrightChromium()
        {
            await LoadThePage(new BrowserTypeLaunchOptions());
        }

        // The Google Chrome installed on this machine
        [TestMethod]
        public async Task GoogleChrome()
        {
            await LoadThePage(new BrowserTypeLaunchOptions { Channel = "chrome" });
        }
    }
}
