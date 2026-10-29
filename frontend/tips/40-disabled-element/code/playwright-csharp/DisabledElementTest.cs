using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class DisabledElementTest : PageTest
    {
        [TestMethod]
        public async Task FindDisabledOption()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/dropdown");

            await Expect(Page.Locator("option", new() { HasText = "Please select an option" })).ToBeDisabledAsync();
            await Expect(Page.Locator("option", new() { HasText = "Option 1" })).ToBeEnabledAsync();
        }
    }
}
