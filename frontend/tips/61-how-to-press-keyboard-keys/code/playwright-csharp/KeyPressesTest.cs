using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class KeyPressesTest : PageTest
    {
        [TestInitialize]
        public async Task VisitKeyPressesPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/key_presses");
        }

        [TestMethod]
        public async Task PressKeyOnElement()
        {
            await Page.Locator("#target").PressAsync("Space");
            await Expect(Page.Locator("#result")).ToHaveTextAsync("You entered: SPACE");
        }

        [TestMethod]
        public async Task PressKeyWithoutElement()
        {
            await Page.Keyboard.PressAsync("Tab");
            await Expect(Page.Locator("#result")).ToHaveTextAsync("You entered: TAB");
        }
    }
}
