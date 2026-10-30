using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;

namespace csharp
{
    [TestClass]
    public class SortWithoutAttributesTest : BaseTest
    {
        [TestMethod]
        public void AscendingOrder()
        {
            Driver.FindElement(By.CssSelector("#table1 thead tr th:nth-of-type(4)")).Click();
            WaitForSort("#table1 thead tr th:nth-of-type(4)", "headerSortDown");
            var dueValues = Dues("#table1 tbody tr td:nth-of-type(4)");
            CollectionAssert.AreEqual(dueValues.OrderBy(due => due).ToList(), dueValues);
        }

        [TestMethod]
        public void DescendingOrder()
        {
            Driver.FindElement(By.CssSelector("#table1 thead tr th:nth-of-type(4)")).Click();
            Driver.FindElement(By.CssSelector("#table1 thead tr th:nth-of-type(4)")).Click();
            WaitForSort("#table1 thead tr th:nth-of-type(4)", "headerSortUp");
            var dueValues = Dues("#table1 tbody tr td:nth-of-type(4)");
            CollectionAssert.AreEqual(dueValues.OrderByDescending(due => due).ToList(), dueValues);
        }
    }
}
