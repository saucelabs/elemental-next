using System;
using System.Threading;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    [TestClass]
    public class HighlightTest
    {
        private const string HighlightStyle = "border: 2px solid red; border-style: dashed;";

        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/large");
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        private void Highlight(IWebElement element, int durationInSeconds = 3)
        {
            var js = (IJavaScriptExecutor)_driver;
            // store the original style so it can be reset later
            var originalStyle = element.GetDomAttribute("style") ?? "";
            // style the element with a red dashed border
            js.ExecuteScript("arguments[0].setAttribute('style', arguments[1])", element, HighlightStyle);
            // keep the element highlighted for a spell and then revert
            if (durationInSeconds > 0)
            {
                Thread.Sleep(TimeSpan.FromSeconds(durationInSeconds));
                js.ExecuteScript("arguments[0].setAttribute('style', arguments[1])", element, originalStyle);
            }
        }

        [TestMethod]
        public void HighlightElement()
        {
            var element = _driver.FindElement(By.Id("sibling-2.3"));
            Highlight(element, 0);
            StringAssert.Contains(element.GetDomAttribute("style"), "dashed");
        }

        [TestMethod]
        public void HighlightRevertsTheStyle()
        {
            var element = _driver.FindElement(By.Id("sibling-2.3"));
            Highlight(element, 1);
            Assert.IsFalse((element.GetDomAttribute("style") ?? "").Contains("dashed"));
        }
    }
}
