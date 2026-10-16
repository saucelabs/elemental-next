using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    public class BasePage
    {
        private const string BaseUrl = "https://the-internet.herokuapp.com";

        protected readonly IWebDriver Driver;

        public BasePage(IWebDriver driver)
        {
            Driver = driver;
        }

        protected void Visit(string path)
        {
            Driver.Navigate().GoToUrl(BaseUrl + path);
        }

        protected IWebElement Find(By locator)
        {
            return Driver.FindElement(locator);
        }

        protected void Click(By locator)
        {
            Find(locator).Click();
        }

        protected void Type(By locator, string text)
        {
            Find(locator).Clear();
            Find(locator).SendKeys(text);
        }

        protected bool IsDisplayed(By locator)
        {
            try
            {
                return Find(locator).Displayed;
            }
            catch (NoSuchElementException)
            {
                return false;
            }
        }

        protected string TextOf(By locator)
        {
            return Find(locator).Text;
        }

        protected string Title()
        {
            return Driver.Title;
        }

        protected void WaitFor(By locator)
        {
            new WebDriverWait(Driver, TimeSpan.FromSeconds(10)).Until(_ => IsDisplayed(locator));
        }
    }
}
