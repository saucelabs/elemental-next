using System.Threading.Tasks;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class ShadowDomTest : PageTest
    {
        [TestInitialize]
        public async Task OpenPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/shadowdom_advanced");
        }

        [TestMethod]
        public async Task ClickAButtonInsideNestedShadowRoots()
        {
            // CSS locators look inside open shadow roots, so there is no need to name the shadow hosts
            await Page.Locator("#inner-button").ClickAsync();

            await Expect(Page.Locator("#nested-result"))
                .ToHaveTextAsync("You clicked the button in the inner shadow root");
        }

        [TestMethod]
        public async Task XPathDoesNotLookInsideShadowRoots()
        {
            await Expect(Page.Locator("xpath=//button[@id='inner-button']")).ToHaveCountAsync(0);
        }
    }
}
