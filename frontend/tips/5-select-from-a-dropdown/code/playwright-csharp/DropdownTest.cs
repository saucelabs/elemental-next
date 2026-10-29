using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class DropdownTest : PageTest
    {
        [TestMethod]
        public async Task SelectFromADropdown()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/dropdown");

            await Page.Locator("#dropdown").SelectOptionAsync(new SelectOptionValue { Label = "Option 1" });

            await Expect(Page.Locator("#dropdown option:checked")).ToHaveTextAsync("Option 1");
        }
    }
}
