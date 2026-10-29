using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class AlertsTest : PageTest
    {
        [TestInitialize]
        public async Task VisitAlertsPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/javascript_alerts");
        }

        [TestMethod]
        public async Task AcceptConfirmation()
        {
            Page.Dialog += async (_, dialog) => await dialog.AcceptAsync();
            await Page.GetByRole(AriaRole.Button, new() { Name = "Click for JS Confirm" }).ClickAsync();

            await Expect(Page.Locator("#result")).ToHaveTextAsync("You clicked: Ok");
        }

        [TestMethod]
        public async Task DismissConfirmation()
        {
            Page.Dialog += async (_, dialog) => await dialog.DismissAsync();
            await Page.GetByRole(AriaRole.Button, new() { Name = "Click for JS Confirm" }).ClickAsync();

            await Expect(Page.Locator("#result")).ToHaveTextAsync("You clicked: Cancel");
        }
    }
}
