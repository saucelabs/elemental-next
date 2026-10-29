using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class RetryActionsTest : PageTest
    {
        private const int Attempts = 10;

        [TestMethod]
        public async Task EventuallyDisplaysASuccessfulNotification()
        {
            for (int attempt = 1; attempt <= Attempts; attempt++)
            {
                await Page.GotoAsync("https://the-internet.herokuapp.com/notification_message");
                try
                {
                    await Expect(Page.Locator("#flash")).ToContainTextAsync("Action successful",
                        new LocatorAssertionsToContainTextOptions { Timeout = 1000 });
                    return;
                }
                catch (PlaywrightException) when (attempt < Attempts)
                {
                }
            }
        }
    }
}
