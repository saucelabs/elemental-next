using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
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
        IWebDriver _alice;
        IWebDriver _bob;

        [TestInitialize]
        public void SetUp()
        {
            _alice = new FirefoxDriver();
            _bob = new FirefoxDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            _alice?.Quit();
            _bob?.Quit();
        }

        static void WaitForText(IWebDriver driver, string id, string text)
        {
            new WebDriverWait(driver, TimeSpan.FromSeconds(10))
                .Until(d => d.FindElement(By.Id(id)).Text.Contains(text));
        }

        static void Join(IWebDriver driver, string name)
        {
            driver.Navigate().GoToUrl(ChatUrl);
            WaitForText(driver, "status", "Connected");
            driver.FindElement(By.Id("name")).SendKeys(name);
            driver.FindElement(By.Id("join")).Click();
        }

        static void SendMessage(IWebDriver driver, string text)
        {
            driver.FindElement(By.Id("message")).SendKeys(text);
            driver.FindElement(By.Id("send")).Click();
        }

        [TestMethod]
        public void TwoUsersChat()
        {
            Join(_alice, "Alice");
            Join(_bob, "Bob");
            // Messages are not saved: Alice waits until Bob is in the room before she writes
            WaitForText(_alice, "messages", "Bob joined");

            SendMessage(_alice, "Hi Bob");
            WaitForText(_bob, "messages", "Alice: Hi Bob");

            SendMessage(_bob, "Hi Alice");
            WaitForText(_alice, "messages", "Bob: Hi Alice");
        }
    }
}
