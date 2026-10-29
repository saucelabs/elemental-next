using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class LoginTest : PageTest
    {
        // Each step is code that the Playwright CLI printed in the session of the tip, in C#
        [TestMethod]
        public async Task Login()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com");
            await Page.GetByRole(AriaRole.Link, new() { Name = "Form Authentication" }).ClickAsync();
            await Page.Locator("#username").FillAsync("tomsmith");
            await Page.Locator("#password").FillAsync("SuperSecretPassword!");
            await Page.Locator("button[type=submit]").ClickAsync();
            await Expect(Page.Locator("#flash")).ToContainTextAsync("You logged into a secure area!");
        }
    }
}
