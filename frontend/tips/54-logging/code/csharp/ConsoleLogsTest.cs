using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.BiDi;
using OpenQA.Selenium.BiDi.Log;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class ConsoleLogsTest
    {
        ChromeDriver _driver;
        IBiDi _bidi;

        [TestInitialize]
        public async Task SetUp()
        {
            // Turns on WebDriver BiDi, which sends the console messages and errors of the page to the test
            var options = new ChromeOptions { UseWebSocketUrl = true };
            _driver = new ChromeDriver(options);
            _bidi = await _driver.AsBiDiAsync();
        }

        [TestCleanup]
        public async Task TearDown()
        {
            if (_bidi != null)
            {
                await _bidi.DisposeAsync();
            }
            _driver?.Quit();
        }

        [TestMethod]
        public async Task ConsoleMessagesAndErrors()
        {
            var messages = new ConcurrentQueue<string>();
            var errors = new ConcurrentQueue<string>();
            await _bidi.Log.EntryAdded.SubscribeAsync(entry =>
            {
                if (entry is ConsoleEntryAddedEventArgs)
                {
                    messages.Enqueue($"{entry.Level.ToString().ToLower()}: {entry.Text}");
                }
                else if (entry is JavascriptEntryAddedEventArgs)
                {
                    errors.Enqueue(entry.Text);
                }
            });

            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/network_console");
            _driver.FindElement(By.Id("log-console")).Click();
            _driver.FindElement(By.Id("throw-error")).Click();

            new WebDriverWait(_driver, TimeSpan.FromSeconds(5))
                .Until(_ => messages.Count == 3 && errors.Count == 1);
            // The messages can arrive in any order
            CollectionAssert.AreEquivalent(new[]
            {
                "info: the-internet: a log message",
                "warn: the-internet: a warning",
                "error: the-internet: an error message"
            }, messages.ToArray());
            CollectionAssert.AreEqual(new[] { "Error: the-internet: thrown on purpose" }, errors.ToArray());
        }
    }
}
