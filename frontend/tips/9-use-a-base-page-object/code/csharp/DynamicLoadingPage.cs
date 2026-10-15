using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;

namespace csharp
{
    public class DynamicLoadingPage : BasePage
    {
        private static readonly By StartButton = By.CssSelector("#start button");
        private static readonly By FinishText = By.Id("finish");

        public DynamicLoadingPage(IWebDriver driver) : base(driver)
        {
            Visit("/dynamic_loading/2");
            Assert.AreEqual("The Internet", Title());
        }

        public void Start()
        {
            Click(StartButton);
        }

        public string GetFinishText()
        {
            WaitFor(FinishText);
            return TextOf(FinishText);
        }
    }
}
