using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class StatusCodesTest : PageTest
    {
        [TestMethod]
        [DataRow(200)]
        [DataRow(301)]
        [DataRow(404)]
        [DataRow(500)]
        public async Task RetrieveStatusCode(int expected)
        {
            IResponse response = await Page.GotoAsync($"https://the-internet.herokuapp.com/status_codes/{expected}");

            Assert.AreEqual(expected, response.Status);
        }
    }
}
