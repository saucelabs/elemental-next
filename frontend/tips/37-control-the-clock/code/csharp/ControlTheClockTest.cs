using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.BiDi;
using OpenQA.Selenium.Chrome;

namespace csharp
{
    [TestClass]
    public class ControlTheClockTest
    {
        // Replaces setTimeout with a fake one: its callbacks run only when the test moves the clock with fakeClock.tick
        const string FakeClock = """
            () => {
                let now = 0;
                const timers = [];
                window.setTimeout = (callback, delay = 0) => timers.push({time: now + delay, callback});
                window.fakeClock = {
                    tick: (milliseconds) => {
                        now += milliseconds;
                        timers.filter((timer) => !timer.done && timer.time <= now).forEach((timer) => {
                            timer.done = true;
                            timer.callback();
                        });
                    },
                };
            }
            """;

        ChromeDriver _driver;
        IBiDi _bidi;

        [TestInitialize]
        public async Task SetUp()
        {
            // Turns on WebDriver BiDi, which lets the test add a script that runs before the page's scripts
            var options = new ChromeOptions { UseWebSocketUrl = true };
            _driver = new ChromeDriver(options);
            _bidi = await _driver.AsBiDiAsync();
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
        public async Task ToastHidesItselfAfterOneMinute()
        {
            await _bidi.Script.AddPreloadScriptAsync(FakeClock);

            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/toasts?duration=60000");
            _driver.FindElement(By.Id("success-toast")).Click();
            Assert.AreEqual("Saved successfully", _driver.FindElement(By.ClassName("toast-message")).Text);

            _driver.ExecuteScript("fakeClock.tick(59000)");
            Assert.AreEqual(1, _driver.FindElements(By.ClassName("toast")).Count);

            _driver.ExecuteScript("fakeClock.tick(1000)");
            Assert.AreEqual(0, _driver.FindElements(By.ClassName("toast")).Count);
        }
    }
}
