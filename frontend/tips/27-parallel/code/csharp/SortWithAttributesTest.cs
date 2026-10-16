using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;

namespace csharp
{
    [TestClass]
    public class SortWithAttributesTest : BaseTest
    {
        [TestMethod]
        public void AscendingOrder()
        {
            Driver.FindElement(By.CssSelector("#table2 thead .dues")).Click();
            var dueValues = Dues("#table2 tbody .dues");
            CollectionAssert.AreEqual(dueValues.OrderBy(due => due).ToList(), dueValues);
        }

        [TestMethod]
        public void DescendingOrder()
        {
            Driver.FindElement(By.CssSelector("#table2 thead .dues")).Click();
            Driver.FindElement(By.CssSelector("#table2 thead .dues")).Click();
            var dueValues = Dues("#table2 tbody .dues");
            CollectionAssert.AreEqual(dueValues.OrderByDescending(due => due).ToList(), dueValues);
        }
    }
}
