using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class ScreenshotTest : PageTest
    {
        [TestCleanup]
        public async Task TakeScreenshotOnFailure()
        {
            if (TestContext.CurrentTestOutcome == UnitTestOutcome.Failed)
            {
                await Page.ScreenshotAsync(new PageScreenshotOptions
                {
                    Path = $"failshot_{TestContext.FullyQualifiedTestClassName}.{TestContext.TestName}.png"
                });
            }
        }

        [TestMethod]
        public async Task FailsOnPurpose()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com");

            await Expect(Page.Locator("h1"))
                .ToHaveTextAsync("blah blah blah", new LocatorAssertionsToHaveTextOptions { Timeout = 2000 });
        }
    }
}
