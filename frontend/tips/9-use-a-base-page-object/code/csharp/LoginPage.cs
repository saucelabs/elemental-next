using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;

namespace csharp
{
    public class LoginPage : BasePage
    {
        private static readonly By UsernameInput = By.Id("username");
        private static readonly By PasswordInput = By.Id("password");
        private static readonly By SubmitButton = By.CssSelector("#login button");
        private static readonly By SuccessMessage = By.CssSelector(".flash.success");

        public LoginPage(IWebDriver driver) : base(driver)
        {
            Visit("/login");
            Assert.AreEqual("The Internet", Title());
        }

        public void LoginAs(string username, string password)
        {
            Type(UsernameInput, username);
            Type(PasswordInput, password);
            Click(SubmitButton);
        }

        public bool SuccessMessagePresent()
        {
            WaitFor(SuccessMessage);
            return IsDisplayed(SuccessMessage);
        }
    }
}
