using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class DynamicPagesTest : PageTest
    {
        [TestMethod]
        [DataRow("1", DisplayName = "a hidden element")]
        [DataRow("2", DisplayName = "an element rendered after")]
        public async Task WaitForElement(string example)
        {
            await Page.GotoAsync($"https://the-internet.herokuapp.com/dynamic_loading/{example}");
            await Page.Locator("#start button").ClickAsync();

            await Expect(Page.Locator("#finish"))
                .ToBeVisibleAsync(new LocatorAssertionsToBeVisibleOptions { Timeout = 10000 });
        }
    }
}
