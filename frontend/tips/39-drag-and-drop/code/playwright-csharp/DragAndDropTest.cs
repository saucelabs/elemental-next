using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class DragAndDropTest : PageTest
    {
        [TestMethod]
        public async Task SwapColumns()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/drag_and_drop");

            await Page.Locator("#column-a").DragToAsync(Page.Locator("#column-b"));

            await Expect(Page.Locator("#column-a")).ToHaveTextAsync("B");
            await Expect(Page.Locator("#column-b")).ToHaveTextAsync("A");
        }
    }
}
