using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class DynamicLoadingTest : PageTest
    {
        private DynamicLoadingPage _dynamicLoading;

        [TestInitialize]
        public async Task SetUp()
        {
            _dynamicLoading = new DynamicLoadingPage(Page);
            await _dynamicLoading.VisitAsync();
        }

        [TestMethod]
        public async Task HelloWorldAfterLoading()
        {
            await _dynamicLoading.StartAsync();
            await Expect(_dynamicLoading.FinishText)
                .ToHaveTextAsync("Hello World!", new LocatorAssertionsToHaveTextOptions { Timeout = 10000 });
        }
    }
}
