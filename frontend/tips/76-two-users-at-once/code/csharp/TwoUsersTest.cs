using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.BiDi;
using OpenQA.Selenium.BiDi.BrowsingContext;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class TwoUsersTest
    {
        // A random room, so tests running at the same time don't see each other's messages
        static readonly string ChatUrl =
            $"https://the-internet.herokuapp.com/chat?room=elemental-{Guid.NewGuid().ToString()[..8]}";
        FirefoxDriver _driver;
        IBiDi _bidi;

        [TestInitialize]
        public async Task SetUp()
        {
            // Turns on WebDriver BiDi, which lets the test create user contexts
            var options = new FirefoxOptions { UseWebSocketUrl = true };
            _driver = new FirefoxDriver(options);
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

        async Task<string> NewUserWindow()
        {
            // A user context has its own cookies and storage, like a fresh browser profile
            var userContext = await _bidi.Browser.CreateUserContextAsync();
            var window = await _bidi.BrowsingContext.CreateAsync(
                ContextType.Window, new() { UserContext = userContext.UserContext });
            return window.Context.Id;
        }

        void WaitForText(string id, string text)
        {
            new WebDriverWait(_driver, TimeSpan.FromSeconds(10))
                .Until(d => d.FindElement(By.Id(id)).Text.Contains(text));
        }

        void Join(string name)
        {
            _driver.Navigate().GoToUrl(ChatUrl);
            WaitForText("status", "Connected");
            _driver.FindElement(By.Id("name")).SendKeys(name);
            _driver.FindElement(By.Id("join")).Click();
        }

        void SendMessage(string text)
        {
            _driver.FindElement(By.Id("message")).SendKeys(text);
            _driver.FindElement(By.Id("send")).Click();
        }

        [TestMethod]
        public async Task TwoUsersChat()
        {
            string alice = await NewUserWindow();
            string bob = await NewUserWindow();

            _driver.SwitchTo().Window(alice);
            Join("Alice");
            _driver.SwitchTo().Window(bob);
            Join("Bob");

            // Messages are not saved: Alice waits until Bob is in the room before she writes
            _driver.SwitchTo().Window(alice);
            WaitForText("messages", "Bob joined");
            SendMessage("Hi Bob");

            _driver.SwitchTo().Window(bob);
            WaitForText("messages", "Alice: Hi Bob");
            SendMessage("Hi Alice");

            _driver.SwitchTo().Window(alice);
            WaitForText("messages", "Bob: Hi Alice");
        }
    }
}
