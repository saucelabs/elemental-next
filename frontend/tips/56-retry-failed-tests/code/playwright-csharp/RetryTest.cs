using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class RetryTest : PageTest
    {
        // The page shows the successful message only some of the time, so this test is flaky on purpose.
        // If it fails, MSTest runs it again, up to 9 more times.
        [TestMethod]
        [Retry(9)]
        public async Task NotificationMessageIsSuccessful()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/notification_message");

            string message = await Page.Locator("#flash").TextContentAsync();
            Assert.IsTrue(message.Contains("Action successful"));
        }
    }
}
