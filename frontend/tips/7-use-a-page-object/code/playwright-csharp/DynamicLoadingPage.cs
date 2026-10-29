using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    public class DynamicLoadingPage
    {
        private readonly IPage _page;

        public ILocator StartButton { get; }
        public ILocator FinishText { get; }

        public DynamicLoadingPage(IPage page)
        {
            _page = page;
            StartButton = page.Locator("#start button");
            FinishText = page.Locator("#finish");
        }

        public async Task VisitAsync()
        {
            await _page.GotoAsync("https://the-internet.herokuapp.com/dynamic_loading/2");
            await Assertions.Expect(_page).ToHaveTitleAsync("The Internet");
        }

        public async Task StartAsync()
        {
            await StartButton.ClickAsync();
        }
    }
}
