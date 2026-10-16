using System;
using System.Collections.Generic;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.Events;

namespace csharp
{
    public class Wrapper
    {
        private string _preClickUrl;

        public List<string> Messages { get; } = new();

        public Wrapper(EventFiringWebDriver driver)
        {
            driver.Navigated += (_, e) => Log($"Navigated to {e.Url}");
            driver.FindingElement += (_, e) => Log($"Finding element {e.FindMethod}");
            driver.FindElementCompleted += (_, e) => Log($"Found element {e.FindMethod}");
            driver.ElementClicking += (_, e) =>
            {
                Log($"Clicking on {e.Element.Text}");
                _preClickUrl = driver.Url;
            };
            driver.ElementClicked += (_, _) =>
            {
                if (driver.Url != _preClickUrl)
                {
                    Log($"URL changed to {driver.Url}");
                }
            };
        }

        private void Log(string message)
        {
            Console.WriteLine(message);
            Messages.Add(message);
        }
    }
}
