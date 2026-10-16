using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace csharp
{
    [TestClass]
    public class GrowlTest
    {
        IWebDriver _driver;
        IJavaScriptExecutor _js;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
            _js = (IJavaScriptExecutor)_driver;
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver?.Quit();
        }

        [TestMethod]
        public void GrowlNotification()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com");
            var wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(10));

            // Step 1: check for jQuery on the page, add it if need be
            _js.ExecuteScript(@"
                if (!window.jQuery) {
                    var jquery = document.createElement('script');
                    jquery.type = 'text/javascript';
                    jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
                    document.getElementsByTagName('head')[0].appendChild(jquery);
                }");
            wait.Until(_ => (bool)_js.ExecuteScript("return !!window.jQuery"));

            // Step 2: use jQuery to add jquery-growl to the page
            _js.ExecuteScript("$.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

            // Step 3: use jQuery to add jquery-growl styles to the page
            _js.ExecuteScript("$('head').append('<link rel=\"stylesheet\" " +
                "href=\"https://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');");
            wait.Until(_ => (bool)_js.ExecuteScript("return !!$.growl"));

            // Step 4: display a message with jquery-growl
            _js.ExecuteScript("$.growl({ title: 'GET', message: '/' });");

            var notification = wait.Until(d =>
            {
                var element = d.FindElement(By.CssSelector("#growls .growl"));
                return element.Displayed ? element : null;
            });
            Assert.AreEqual("GET", notification.FindElement(By.ClassName("growl-title")).Text);
            Assert.AreEqual("/", notification.FindElement(By.ClassName("growl-message")).Text);
        }
    }
}
