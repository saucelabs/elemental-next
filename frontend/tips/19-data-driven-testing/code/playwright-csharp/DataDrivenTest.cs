using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class DataDrivenTest : PageTest
    {
        public static IEnumerable<object[]> UserData()
        {
            return File.ReadAllLines("user_data.csv")
                .Skip(1)
                .Select(line => line.Split(',').Cast<object>().ToArray());
        }

        [TestMethod]
        [DynamicData(nameof(UserData))]
        public async Task Login(string accountType, string username, string password, string notificationMessage)
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com/login");
            await Page.Locator("#username").FillAsync(username);
            await Page.Locator("#password").FillAsync(password);
            await Page.Locator("#login button").ClickAsync();

            await Expect(Page.Locator("#flash")).ToContainTextAsync(notificationMessage);
        }
    }
}
