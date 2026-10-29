using System;
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
    public class TablesTest : PageTest
    {
        private static async Task<List<double>> Dues(ILocator cells)
        {
            IReadOnlyList<string> dues = await cells.AllTextContentsAsync();
            return dues.Select(due => double.Parse(due.Replace("$", ""), CultureInfo.InvariantCulture)).ToList();
        }

        [TestInitialize]
        public async Task VisitTablesPage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/tables");
        }

        [TestMethod]
        public async Task SortNumberColumnInAscendingOrder()
        {
            await Page.Locator("#table1 thead tr th:nth-of-type(4)").ClickAsync();
            await Expect(Page.Locator("#table1 thead tr th:nth-of-type(4)")).ToContainClassAsync("headerSortDown");
            List<double> dueValues = await Dues(Page.Locator("#table1 tbody tr td:nth-of-type(4)"));
            CollectionAssert.AreEqual(dueValues.Order().ToList(), dueValues);
        }

        [TestMethod]
        public async Task SortNumberColumnInDescendingOrder()
        {
            await Page.Locator("#table1 thead tr th:nth-of-type(4)").ClickAsync();
            await Page.Locator("#table1 thead tr th:nth-of-type(4)").ClickAsync();
            await Expect(Page.Locator("#table1 thead tr th:nth-of-type(4)")).ToContainClassAsync("headerSortUp");
            List<double> dueValues = await Dues(Page.Locator("#table1 tbody tr td:nth-of-type(4)"));
            CollectionAssert.AreEqual(dueValues.OrderDescending().ToList(), dueValues);
        }

        [TestMethod]
        public async Task SortTextColumnInAscendingOrder()
        {
            await Page.Locator("#table1 thead tr th:nth-of-type(3)").ClickAsync();
            await Expect(Page.Locator("#table1 thead tr th:nth-of-type(3)")).ToContainClassAsync("headerSortDown");
            ILocator emailCells = Page.Locator("#table1 tbody tr td:nth-of-type(3)");
            List<string> emails = (await emailCells.AllTextContentsAsync()).ToList();
            CollectionAssert.AreEqual(emails.Order(StringComparer.Ordinal).ToList(), emails);
        }

        [TestMethod]
        public async Task SortNumberColumnInAscendingOrderWithSemanticLocators()
        {
            await Page.Locator("#table2 thead th:has(.dues)").ClickAsync();
            await Expect(Page.Locator("#table2 thead th:has(.dues)")).ToContainClassAsync("headerSortDown");
            List<double> dueValues = await Dues(Page.Locator("#table2 tbody .dues"));
            CollectionAssert.AreEqual(dueValues.Order().ToList(), dueValues);
        }
    }
}
