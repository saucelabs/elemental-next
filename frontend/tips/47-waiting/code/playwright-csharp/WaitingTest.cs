using System;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class WaitingTest : PageTest
    {
        private const string BaseUrl = "https://the-internet.herokuapp.com/dynamic_loading";

        [TestMethod]
        [DataRow("1")]
        [DataRow("2")]
        public async Task WaitForElementToBeVisible(string example)
        {
            await Page.GotoAsync($"{BaseUrl}/{example}");
            await Page.Locator("#start button").ClickAsync();

            await Page.Locator("#finish").WaitForAsync(new LocatorWaitForOptions
            {
                State = WaitForSelectorState.Visible,
                Timeout = 10000
            });
            Assert.IsTrue((await Page.Locator("#finish").TextContentAsync()).Contains("Hello World!"));
        }

        [TestMethod]
        public async Task GiveUpWhenWaitIsTooShort()
        {
            await Page.GotoAsync($"{BaseUrl}/2");
            await Page.Locator("#start button").ClickAsync();

            await Assert.ThrowsExactlyAsync<TimeoutException>(() => Page.Locator("#finish").WaitForAsync(
                new LocatorWaitForOptions { State = WaitForSelectorState.Visible, Timeout = 2000 }));
        }

        [TestMethod]
        public async Task WaitInsideAssertion()
        {
            await Page.GotoAsync($"{BaseUrl}/1");
            await Page.Locator("#start button").ClickAsync();

            await Expect(Page.Locator("#finish"))
                .ToHaveTextAsync("Hello World!", new LocatorAssertionsToHaveTextOptions { Timeout = 10000 });
        }
    }
}
