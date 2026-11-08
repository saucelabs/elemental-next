using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Deque.AxeCore.Commons;
using Deque.AxeCore.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class CheckAccessibilityTest : PageTest
    {
        // Rules the page breaks on purpose
        static readonly string[] KnownIssues =
            ["image-alt", "label", "select-name", "button-name", "link-name", "aria-roles", "heading-order"];

        async Task<HashSet<string>> Scan()
        {
            // Checks only the part of the page with the examples
            var context = new AxeRunContext { Include = [new AxeSelector("#widgets")] };
            AxeResult results = await Page.RunAxe(context);
            return results.Violations.Select(violation => violation.Id).ToHashSet();
        }

        [TestMethod]
        public async Task ThePageHasTheKnownIssues()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/accessibility_issues");

            Assert.IsTrue((await Scan()).IsSupersetOf(KnownIssues));
        }

        [TestMethod]
        public async Task TheFixedPageHasNoIssues()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/accessibility_issues?fixed=true");

            Assert.AreEqual(0, (await Scan()).Count);
        }
    }
}
