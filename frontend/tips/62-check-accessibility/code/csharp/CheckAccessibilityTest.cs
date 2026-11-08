using System.Collections.Generic;
using System.Linq;
using Deque.AxeCore.Selenium;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class CheckAccessibilityTest
    {
        // Rules the page breaks on purpose
        static readonly string[] KnownIssues =
            ["image-alt", "label", "select-name", "button-name", "link-name", "aria-roles", "heading-order"];

        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        HashSet<string> Scan()
        {
            // Checks only the part of the page with the examples
            var results = new AxeBuilder(_driver).Include("#widgets").Analyze();
            return results.Violations.Select(violation => violation.Id).ToHashSet();
        }

        [TestMethod]
        public void ThePageHasTheKnownIssues()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/accessibility_issues");

            Assert.IsTrue(Scan().IsSupersetOf(KnownIssues));
        }

        [TestMethod]
        public void TheFixedPageHasNoIssues()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/accessibility_issues?fixed=true");

            Assert.AreEqual(0, Scan().Count);
        }
    }
}
