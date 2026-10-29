using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class BasicAuthTest : PageTest
    {
        private const string Message = "Congratulations! You must have the proper credentials.";

        public override BrowserNewContextOptions ContextOptions()
        {
            return new BrowserNewContextOptions
            {
                HttpCredentials = new HttpCredentials { Username = "admin", Password = "admin" }
            };
        }

        [TestMethod]
        public async Task LoginWithBasicAuth()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/basic_auth");

            await Expect(Page.Locator(".example p")).ToHaveTextAsync(Message);
        }
    }
}
