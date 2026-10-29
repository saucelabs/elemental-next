using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PlaywrightTests
{
    [TestClass]
    public class GrowlTest : PageTest
    {
        [TestMethod]
        public async Task DisplayNotification()
        {
            await Page.GotoAsync("https://the-internet.herokuapp.com");

            // Step 1: add jQuery to the page, if it's not there
            if (!await Page.EvaluateAsync<bool>("() => 'jQuery' in window"))
            {
                await Page.AddScriptTagAsync(new PageAddScriptTagOptions
                {
                    Url = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
                });
            }

            // Step 2: add jquery-growl to the page
            await Page.AddScriptTagAsync(new PageAddScriptTagOptions
            {
                Url = "https://the-internet.herokuapp.com/js/vendor/jquery.growl.js"
            });

            // Step 3: add the jquery-growl styles to the page
            await Page.AddStyleTagAsync(new PageAddStyleTagOptions
            {
                Url = "https://the-internet.herokuapp.com/css/jquery.growl.css"
            });

            // Step 4: display a message with jquery-growl
            await Page.EvaluateAsync("() => jQuery.growl({title: 'GET', message: '/'})");

            await Expect(Page.Locator("#growls .growl .growl-title")).ToHaveTextAsync("GET");
            await Expect(Page.Locator("#growls .growl .growl-message")).ToHaveTextAsync("/");
        }
    }
}
