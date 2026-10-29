using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class WrapperTest : PageTest
    {
        [TestMethod]
        public async Task LogEveryAction()
        {
            LoggingPage loggingPage = new LoggingPage(Page);

            await loggingPage.GotoAsync("https://the-internet.herokuapp.com");
            await loggingPage.ClickAsync("text=Checkboxes");

            CollectionAssert.AreEqual(new[]
            {
                "Navigated to https://the-internet.herokuapp.com",
                "Clicking on Checkboxes",
                "URL changed to https://the-internet.herokuapp.com/checkboxes"
            }, loggingPage.Messages);
        }
    }
}
