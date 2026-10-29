using System;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class CheckboxesTest : PageTest
    {
        [TestInitialize]
        public async Task VisitCheckboxesPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/checkboxes");
        }

        [TestMethod]
        public async Task LookUpCheckedAttribute()
        {
            ILocator checkboxes = Page.Locator("input[type=\"checkbox\"]");
            string[] checkedValues = await checkboxes.EvaluateAllAsync<string[]>(
                "elements => elements.map(element => element.getAttribute('checked'))");
            Console.WriteLine(string.Join(", ", checkedValues));
            Assert.IsNull(await checkboxes.First.GetAttributeAsync("checked"));
            Assert.IsNotNull(await checkboxes.Last.GetAttributeAsync("checked"));
        }

        [TestMethod]
        public async Task CheckboxIsChecked()
        {
            ILocator checkboxes = Page.Locator("input[type=\"checkbox\"]");
            await Expect(checkboxes.First).Not.ToBeCheckedAsync();
            await Expect(checkboxes.Last).ToBeCheckedAsync();
        }
    }
}
