using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class FindByRoleTest : PageTest
    {
        [TestMethod]
        public async Task PickAFruit()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/custom_dropdown");

            await Page.GetByRole(AriaRole.Combobox, new() { Name = "Fruit" }).ClickAsync();
            await Page.GetByRole(AriaRole.Option, new() { Name = "Mango" }).ClickAsync();

            await Expect(Page.GetByRole(AriaRole.Combobox, new() { Name = "Fruit" })).ToHaveTextAsync("Mango");
            await Expect(Page.Locator("#result")).ToHaveTextAsync("Selected: mango");
        }
    }
}
