using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class SecureFilesTest : PageTest
    {
        private const string BaseUrl = "https://the-internet.herokuapp.com";

        [TestMethod]
        public async Task FilesBehindBasicAuth()
        {
            IBrowserContext context = await Browser.NewContextAsync(new BrowserNewContextOptions
            {
                HttpCredentials = new HttpCredentials { Username = "admin", Password = "admin" }
            });
            IPage page = await context.NewPageAsync();
            await page.GotoAsync($"{BaseUrl}/download_secure");
            string link = await page.Locator(".example a").First.EvaluateAsync<string>("element => element.href");

            IAPIResponse response = await page.APIRequest.HeadAsync(link);
            Assert.AreEqual(200, response.Status, link);
            await context.CloseAsync();
        }

        [TestMethod]
        public async Task PageBehindFormLogin()
        {
            await Page.GotoAsync($"{BaseUrl}/login");
            await Page.Locator("#username").FillAsync("tomsmith");
            await Page.Locator("#password").FillAsync("SuperSecretPassword!");
            await Page.Locator("#login button").ClickAsync();
            await Expect(Page.Locator(".flash.success")).ToBeVisibleAsync();

            IAPIResponse response = await Page.APIRequest.GetAsync($"{BaseUrl}/secure",
                new APIRequestContextOptions { MaxRedirects = 0 });
            Assert.AreEqual(200, response.Status);

            IAPIRequestContext loggedOut = await Playwright.APIRequest.NewContextAsync();
            response = await loggedOut.GetAsync($"{BaseUrl}/secure", new APIRequestContextOptions { MaxRedirects = 0 });
            Assert.AreEqual(302, response.Status);
            await loggedOut.DisposeAsync();
        }
    }
}
