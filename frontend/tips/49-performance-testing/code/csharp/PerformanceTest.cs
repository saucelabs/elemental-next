using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Chrome;

namespace csharp
{
    [TestClass]
    public class PerformanceTest
    {
        // The Navigation Timing API of the browser measures each step of the page load, in milliseconds
        const string Timings = """
            const timing = performance.getEntriesByType('navigation')[0];
            return {
              firstByte: Math.round(timing.responseStart),
              domReady: Math.round(timing.domContentLoadedEventEnd),
              load: Math.round(timing.loadEventEnd),
            };
            """;
        const long LoadBudgetMs = 10_000;
        ChromeDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new ChromeDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void PageLoadsWithinBudget()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            var timings = (Dictionary<string, object>)_driver.ExecuteScript(Timings);
            Console.WriteLine($"First byte: {timings["firstByte"]} ms, DOM ready: {timings["domReady"]} ms, " +
                              $"load: {timings["load"]} ms");

            // The load is 0 until the page has finished loading
            var load = Convert.ToInt64(timings["load"]);
            Assert.IsTrue(load > 0 && load < LoadBudgetMs);
        }
    }
}
