using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using Microsoft.CodeAnalysis.Scripting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace csharp
{
    public class Globals
    {
        public IWebDriver Driver;
    }

    public static class Repl
    {
        public static async Task Run(IWebDriver driver, TextReader input, TextWriter output)
        {
            var options = ScriptOptions.Default
                .AddReferences(typeof(IWebDriver).Assembly)
                .AddImports("OpenQA.Selenium");
            var globals = new Globals { Driver = driver };
            ScriptState<object> state = null;

            while (true)
            {
                output.Write(">> ");
                var command = input.ReadLine();
                if (command == null)
                {
                    break;
                }
                if (command == "q")
                {
                    output.WriteLine("Quitting...");
                    break;
                }
                try
                {
                    state = state == null
                        ? await CSharpScript.RunAsync(command, options, globals)
                        : await state.ContinueWithAsync(command, options);
                    if (state.ReturnValue != null)
                    {
                        output.WriteLine(state.ReturnValue);
                    }
                }
                catch (Exception e)
                {
                    output.WriteLine($"{e.GetType().Name}: {e.Message}");
                }
            }
        }

        public static async Task Main()
        {
            IWebDriver driver = new FirefoxDriver();
            try
            {
                await Run(driver, Console.In, Console.Out);
            }
            finally
            {
                driver.Quit();
            }
        }
    }
}
