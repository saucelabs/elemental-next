using System;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class ExceptionsTest : PageTest
    {
        [TestInitialize]
        public async Task Login()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/login");
            await Page.Locator("#username").FillAsync("tomsmith");
            await Page.Locator("#password").FillAsync("SuperSecretPassword!");
            await Page.Locator("#login button").ClickAsync();
            await Expect(Page.Locator(".flash.success")).ToBeVisibleAsync();
        }

        [TestMethod]
        public async Task ErrorWhenActingOnMissingElement()
        {
            TimeoutException exception = await Assert.ThrowsExactlyAsync<TimeoutException>(
                () => Page.Locator("#login").ClickAsync(new LocatorClickOptions { Timeout = 2000 }));
            Assert.IsTrue(exception.Message.Contains("Timeout 2000ms exceeded"));
        }

        [TestMethod]
        public async Task LoginFormNotDisplayed()
        {
            Assert.IsFalse(await Page.Locator("#login").IsVisibleAsync());
        }
    }
}
