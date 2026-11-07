using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class MockResponsesTest : PageTest
    {
        [TestMethod]
        public async Task PageShowsTheMockedAnswer()
        {
            await Page.RouteAsync("**/slow_api/data?*", async route =>
            {
                await route.FulfillAsync(new RouteFulfillOptions
                {
                    Json = new { message = "Hello from the mock" },
                });
            });

            await Page.GotoAsync("https://the-internet.herokuapp.com/slow_api");
            await Page.Locator("#call-api").ClickAsync();

            await Expect(Page.Locator("#status-text")).ToHaveTextAsync("Hello from the mock");
            await Expect(Page.Locator("#attempts li")).ToHaveTextAsync("200: Hello from the mock");
        }
    }
}
