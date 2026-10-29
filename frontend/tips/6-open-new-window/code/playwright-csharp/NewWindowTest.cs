using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class NewWindowTest : PageTest
    {
        [TestMethod]
        public async Task OpensNewTab()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/windows");

            IPage newPage = await Context.NewPageAsync();
            await newPage.GotoAsync("https://the-internet.herokuapp.com/typos");

            Assert.AreEqual(2, Context.Pages.Count);
            await Expect(newPage.Locator("h3")).ToHaveTextAsync("Typos");
        }
    }
}
