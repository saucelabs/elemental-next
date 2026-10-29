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
    public class SortWithoutAttributesTest : PageTest
    {
        private async Task<List<double>> Dues()
        {
            IReadOnlyList<string> cells = await Page.Locator("#table1 tbody tr td:nth-of-type(4)")
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
            await Page.Locator("#table1 thead tr th:nth-of-type(4)").ClickAsync();
            await Expect(Page.Locator("#table1 thead tr th:nth-of-type(4)")).ToContainClassAsync("headerSortDown");
            List<double> dueValues = await Dues();
            CollectionAssert.AreEqual(dueValues.Order().ToList(), dueValues);
        }

        [TestMethod]
        public async Task InDescendingOrder()
        {
            await Page.Locator("#table1 thead tr th:nth-of-type(4)").ClickAsync();
            await Page.Locator("#table1 thead tr th:nth-of-type(4)").ClickAsync();
            await Expect(Page.Locator("#table1 thead tr th:nth-of-type(4)")).ToContainClassAsync("headerSortUp");
            List<double> dueValues = await Dues();
            CollectionAssert.AreEqual(dueValues.OrderDescending().ToList(), dueValues);
        }
    }
}
