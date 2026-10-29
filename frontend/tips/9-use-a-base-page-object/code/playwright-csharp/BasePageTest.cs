using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class BasePageTest : PageTest
    {
        [TestMethod]
        public async Task HelloWorldAfterLoading()
        {
            DynamicLoadingPage dynamicLoading = new DynamicLoadingPage(Page);
            await dynamicLoading.LoadAsync();
            await dynamicLoading.StartAsync();
            await Expect(dynamicLoading.FinishText)
                .ToHaveTextAsync("Hello World!", new LocatorAssertionsToHaveTextOptions { Timeout = 10000 });
        }

        [TestMethod]
        public async Task LoginWithValidCredentials()
        {
            LoginPage login = new LoginPage(Page);
            await login.LoadAsync();
            await login.LoginAsAsync("tomsmith", "SuperSecretPassword!");
            await Expect(login.SuccessMessage).ToBeVisibleAsync();
        }
    }
}
