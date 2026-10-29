using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class HighlightTest : PageTest
    {
        private const string HighlightStyle = "border: 2px solid red; border-style: dashed;";

        private static async Task Highlight(ILocator element, int duration = 3)
        {
            // store the original style so it can be reset later
            string originalStyle = await element.GetAttributeAsync("style") ?? "";
            // style the element with a red dashed border
            await element.EvaluateAsync("(el, style) => el.setAttribute('style', style)", HighlightStyle);
            // keep the element highlighted for a spell and then revert
            if (duration > 0)
            {
                await element.Page.WaitForTimeoutAsync(duration * 1000);
                await element.EvaluateAsync("(el, style) => el.setAttribute('style', style)", originalStyle);
            }
        }

        [TestInitialize]
        public async Task VisitLargePage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/large");
        }

        [TestMethod]
        public async Task HighlightElement()
        {
            ILocator element = Page.Locator("[id=\"sibling-2.3\"]");
            await Highlight(element, 0);
            await Expect(element).ToHaveAttributeAsync("style", new Regex("dashed"));
        }

        [TestMethod]
        public async Task RevertStyleAfterward()
        {
            ILocator element = Page.Locator("[id=\"sibling-2.3\"]");
            await Highlight(element, 1);
            await Expect(element).Not.ToHaveAttributeAsync("style", new Regex("dashed"));
        }
    }
}
