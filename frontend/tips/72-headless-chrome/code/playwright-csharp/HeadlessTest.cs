using System;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class HeadlessTest : PageTest
    {
        [TestMethod]
        public async Task LoadThePage()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com");
            await Expect(Page).ToHaveTitleAsync("The Internet");

            string userAgent = await Page.EvaluateAsync<string>("() => navigator.userAgent");
            Console.WriteLine(userAgent);
            Assert.IsTrue(userAgent.Contains("HeadlessChrome"));
        }
    }
}
