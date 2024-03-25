using System;
using System.IO;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;
using System.Collections.Generic;

namespace csharp
{
    [TestClass]
    public class DropdownTest
    {
        IWebDriver _driver;

        [TestInitialize]
        public void SetUp()
        {
            _driver = new FirefoxDriver();
        }

        [TestCleanup]
        public void TearDown()
        {
            _driver.Quit();
        }

        [TestMethod]
        public void SelectFromDropdownTheHardWay()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/dropdown");
            IWebElement Dropdown = _driver.FindElement(By.Id("dropdown"));
            IReadOnlyCollection<IWebElement> DropdownOptions = Dropdown.FindElements(By.TagName("option"));
            foreach(IWebElement Option in DropdownOptions)
            {
                if(Option.Text.Equals("Option 1"))
                    Option.Click();
            }
            string SelectedOption = "";
            foreach (IWebElement Option in DropdownOptions)
            {
                if (Option.Selected)
                    SelectedOption = Option.Text;
            }
            Assert.AreEqual("Option 1", SelectedOption);
        }

        [TestMethod]
        public void SelectFromDropdownTheEasyWay()
        {
            _driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/dropdown");
            SelectElement Dropdown = new SelectElement(_driver.FindElement(By.Id("dropdown")));
            Dropdown.SelectByText("Option 1");
            Assert.AreEqual("Option 1", Dropdown.SelectedOption.Text);
        }

    }
}