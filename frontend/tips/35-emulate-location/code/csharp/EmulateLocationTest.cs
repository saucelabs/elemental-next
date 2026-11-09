using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.BiDi;
using OpenQA.Selenium.BiDi.Emulation;
using OpenQA.Selenium.BiDi.Permissions;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using Tab = OpenQA.Selenium.BiDi.BrowsingContext.BrowsingContext;

namespace csharp
{
    [TestClass]
    public class EmulateLocationTest
    {
        ChromeDriver _driver;
        IBiDi _bidi;
        Tab _tab;

        [TestInitialize]
        public async Task SetUp()
        {
            // Turns on WebDriver BiDi, which lets the test change what the browser reports
            var options = new ChromeOptions { UseWebSocketUrl = true };
            _driver = new ChromeDriver(options);
            _bidi = await _driver.AsBiDiAsync();
            _tab = new Tab(_bidi, _driver.CurrentWindowHandle);
        }

        [TestCleanup]
        public async Task TearDown()
        {
            if (_bidi != null)
            {
                await _bidi.DisposeAsync();
            }
            _driver?.Quit();
        }

        [TestMethod]
        public async Task Geolocation()
        {
            await _bidi.AsPermissions().SetPermissionAsync(new PermissionDescriptor("geolocation"),
                PermissionState.Granted, "https://the-internet.herokuapp.com");
            await _bidi.Emulation.SetGeolocationOverrideAsync(new GeolocationCoordinatesOverride(52.52, 13.405),
                new SetGeolocationOverrideOptions { Contexts = [_tab] });

            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/geolocation");
            _driver.FindElement(By.TagName("button")).Click();
            new WebDriverWait(_driver, TimeSpan.FromSeconds(5))
                .Until(d => d.FindElements(By.Id("lat-value")).Count > 0);
            Assert.AreEqual("52.52", _driver.FindElement(By.Id("lat-value")).Text);
            Assert.AreEqual("13.405", _driver.FindElement(By.Id("long-value")).Text);
        }

        [TestMethod]
        public async Task TimeZoneAndLocale()
        {
            await _bidi.Emulation.SetTimezoneOverrideAsync("Asia/Tokyo",
                new SetTimezoneOverrideOptions { Contexts = [_tab] });
            await _bidi.Emulation.SetLocaleOverrideAsync("de-DE", new SetLocaleOverrideOptions { Contexts = [_tab] });

            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/locale");
            Assert.AreEqual("Asia/Tokyo", _driver.FindElement(By.Id("browser-timezone")).Text);
            Assert.AreEqual("de-DE", _driver.FindElement(By.Id("browser-language")).Text);
            Assert.AreEqual("Mittwoch, 15. April 2026 um 21:00", _driver.FindElement(By.Id("formatted-date")).Text);
            Assert.AreEqual("1.234.567,891", _driver.FindElement(By.Id("formatted-number")).Text);
            Assert.AreEqual("Hallo!", _driver.FindElement(By.Id("greeting")).Text);
        }
    }
}
