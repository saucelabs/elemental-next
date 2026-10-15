using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    public class DynamicLoadingPage
    {
        private const string Url = "https://the-internet.herokuapp.com/dynamic_loading/2";
        private static readonly By StartButton = By.CssSelector("#start button");
        private static readonly By FinishText = By.Id("finish");

        private readonly IWebDriver _driver;

        public DynamicLoadingPage(IWebDriver driver)
        {
            _driver = driver;
            _driver.Navigate().GoToUrl(Url);
            Assert.AreEqual("The Internet", _driver.Title);
        }

        public void Start()
        {
            _driver.FindElement(StartButton).Click();
        }

        public void WaitForFinish()
        {
            var wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(FinishText).Displayed);
        }

        public string GetFinishText()
        {
            return _driver.FindElement(FinishText).Text;
        }
    }
}
