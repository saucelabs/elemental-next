using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class ReuseLoginTest : BrowserTest
    {
        const string BaseUrl = "https://the-internet.herokuapp.com";
        static string _storageState;
        IBrowserContext _context;
        IPage _page;

        async Task<string> LogIn()
        {
            // Logs in through the form once, and keeps the cookies and the local storage of the logged-in user
            await using IBrowserContext context = await Browser.NewContextAsync();
            IPage page = await context.NewPageAsync();
            await page.GotoAsync($"{BaseUrl}/login");
            await page.GetByLabel("Username").FillAsync("tomsmith");
            await page.GetByLabel("Password").FillAsync("SuperSecretPassword!");
            await page.Locator("button[type='submit']").ClickAsync();
            await Expect(page.Locator("#username")).ToHaveTextAsync("tomsmith");
            return await context.StorageStateAsync();
        }

        [TestInitialize]
        public async Task SetUp()
        {
            _storageState ??= await LogIn();
            _context = await Browser.NewContextAsync(new() { StorageState = _storageState });
            _page = await _context.NewPageAsync();
        }

        [TestCleanup]
        public async Task TearDown()
        {
            await _context.CloseAsync();
        }

        [TestMethod]
        public async Task TheSecureAreaShowsTheUser()
        {
            await _page.GotoAsync($"{BaseUrl}/secure");

            await Expect(_page.Locator("#username")).ToHaveTextAsync("tomsmith");
        }

        [TestMethod]
        public async Task LogOut()
        {
            await _page.GotoAsync($"{BaseUrl}/secure");
            await _page.Locator("a[href='/logout']").ClickAsync();

            await Expect(_page.Locator("#flash")).ToContainTextAsync("You logged out of the secure area!");
        }
    }
}
