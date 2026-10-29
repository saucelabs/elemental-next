using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    public class LoginPage : BasePage
    {
        public ILocator UsernameInput { get; }
        public ILocator PasswordInput { get; }
        public ILocator SubmitButton { get; }
        public ILocator SuccessMessage { get; }

        public LoginPage(IPage page) : base(page)
        {
            UsernameInput = page.Locator("#username");
            PasswordInput = page.Locator("#password");
            SubmitButton = page.Locator("#login button");
            SuccessMessage = page.Locator(".flash.success");
        }

        public async Task LoadAsync()
        {
            await VisitAsync("/login");
        }

        public async Task LoginAsAsync(string username, string password)
        {
            await UsernameInput.FillAsync(username);
            await PasswordInput.FillAsync(password);
            await SubmitButton.ClickAsync();
        }
    }
}
