using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class RightClickTest : PageTest
    {
        [TestMethod]
        public async Task OpenContextMenu()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/context_menu");

            List<string> messages = new List<string>();
            Page.Dialog += async (_, dialog) =>
            {
                messages.Add(dialog.Message);
                await dialog.AcceptAsync();
            };
            await Page.Locator("#hot-spot").ClickAsync(new LocatorClickOptions { Button = MouseButton.Right });

            CollectionAssert.AreEqual(new[] { "You selected a context menu" }, messages);
        }
    }
}
