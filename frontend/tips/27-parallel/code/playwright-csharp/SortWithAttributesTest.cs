using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class SortWithAttributesTest : PageTest
    {
        private async Task<List<double>> Dues()
        {
            IReadOnlyList<string> cells = await Page.Locator("#table2 tbody .dues")
                .AllTextContentsAsync();
            return cells.Select(due => double.Parse(due.Replace("$", ""), CultureInfo.InvariantCulture))
                .ToList();
        }

        [TestInitialize]
        public async Task VisitTablesPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/tables");
        }

        [TestMethod]
        public async Task InAscendingOrder()
        {
            await Page.Locator("#table2 thead th:has(.dues)").ClickAsync();
            await Expect(Page.Locator("#table2 thead th:has(.dues)")).ToContainClassAsync("headerSortDown");
            List<double> dueValues = await Dues();
            CollectionAssert.AreEqual(dueValues.Order().ToList(), dueValues);
        }

        [TestMethod]
        public async Task InDescendingOrder()
        {
            await Page.Locator("#table2 thead th:has(.dues)").ClickAsync();
            await Page.Locator("#table2 thead th:has(.dues)").ClickAsync();
            await Expect(Page.Locator("#table2 thead th:has(.dues)")).ToContainClassAsync("headerSortUp");
            List<double> dueValues = await Dues();
            CollectionAssert.AreEqual(dueValues.OrderDescending().ToList(), dueValues);
        }
    }
}
