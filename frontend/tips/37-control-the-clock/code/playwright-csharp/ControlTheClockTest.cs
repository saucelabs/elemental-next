using System.Threading.Tasks;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class ControlTheClockTest : PageTest
    {
        [TestMethod]
        public async Task ToastHidesItselfAfterOneMinute()
        {
            // Replaces the timers of the page with fake ones that move only when the test says so
            await Page.Clock.InstallAsync();

            await Page.GotoAsync("https://the-internet.herokuapp.com/toasts?duration=60000");
            await Page.Locator("#success-toast").ClickAsync();
            await Expect(Page.Locator(".toast-message")).ToHaveTextAsync("Saved successfully");

            await Page.Clock.RunForAsync(59000);
            await Expect(Page.Locator(".toast")).ToBeVisibleAsync();

            await Page.Clock.RunForAsync(1000);
            await Expect(Page.Locator(".toast")).ToHaveCountAsync(0);
        }
    }
}
