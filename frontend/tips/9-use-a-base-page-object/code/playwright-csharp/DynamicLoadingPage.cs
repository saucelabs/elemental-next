using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    public class DynamicLoadingPage : BasePage
    {
        public ILocator StartButton { get; }
        public ILocator FinishText { get; }

        public DynamicLoadingPage(IPage page) : base(page)
        {
            StartButton = page.Locator("#start button");
            FinishText = page.Locator("#finish");
        }

        public async Task LoadAsync()
        {
            await VisitAsync("/dynamic_loading/2");
        }

        public async Task StartAsync()
        {
            await StartButton.ClickAsync();
        }
    }
}
