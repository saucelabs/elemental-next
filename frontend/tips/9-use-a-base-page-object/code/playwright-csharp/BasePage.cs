using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    public class BasePage
    {
        private const string BaseUrl = "https://the-internet.herokuapp.com";

        protected readonly IPage Page;

        public BasePage(IPage page)
        {
            Page = page;
        }

        public async Task VisitAsync(string path = "/")
        {
            await Page.GotoAsync(BaseUrl + path);
            await Assertions.Expect(Page).ToHaveTitleAsync("The Internet");
        }
    }
}
