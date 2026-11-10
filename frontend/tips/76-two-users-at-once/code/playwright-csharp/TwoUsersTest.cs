using System;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class TwoUsersTest : BrowserTest
    {
        // A random room, so tests running at the same time don't see each other's messages
        static readonly string ChatUrl =
            $"https://the-internet.herokuapp.com/chat?room=elemental-{Guid.NewGuid().ToString()[..8]}";

        async Task<IPage> Join(string name)
        {
            // Each user gets a browser context of their own: a fresh browser profile, like a second browser
            IBrowserContext context = await Browser.NewContextAsync();
            IPage page = await context.NewPageAsync();
            await page.GotoAsync(ChatUrl);
            await Expect(page.Locator("#status")).ToHaveTextAsync("Connected");
            await page.Locator("#name").FillAsync(name);
            await page.Locator("#join").ClickAsync();
            return page;
        }

        static async Task SendMessage(IPage page, string text)
        {
            await page.Locator("#message").FillAsync(text);
            await page.Locator("#send").ClickAsync();
        }

        [TestMethod]
        public async Task TwoUsersChat()
        {
            IPage alice = await Join("Alice");
            IPage bob = await Join("Bob");
            // Messages are not saved: Alice waits until Bob is in the room before she writes
            await Expect(alice.Locator("#messages")).ToContainTextAsync("Bob joined");

            await SendMessage(alice, "Hi Bob");
            await Expect(bob.Locator("#messages")).ToContainTextAsync("Alice: Hi Bob");

            await SendMessage(bob, "Hi Alice");
            await Expect(alice.Locator("#messages")).ToContainTextAsync("Bob: Hi Alice");

            await alice.Context.CloseAsync();
            await bob.Context.CloseAsync();
        }
    }
}
