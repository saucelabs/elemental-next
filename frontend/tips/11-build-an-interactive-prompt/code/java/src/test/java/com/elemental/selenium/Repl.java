package com.elemental.selenium;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import jdk.jshell.EvalException;
import jdk.jshell.JShell;
import jdk.jshell.Snippet;
import jdk.jshell.SnippetEvent;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Repl {
    // JShell snippets read the driver from here, since they can't receive Java objects directly.
    public static WebDriver driver;

    public static void run(WebDriver webDriver, BufferedReader input, PrintStream output) throws IOException {
        driver = webDriver;
        try (JShell jshell = JShell.builder().executionEngine("local").out(output).err(output).build()) {
            for (String entry : System.getProperty("java.class.path").split(File.pathSeparator)) {
                jshell.addToClasspath(entry);
            }
            jshell.eval("import org.openqa.selenium.*;");
            jshell.eval("WebDriver driver = com.elemental.selenium.Repl.driver;");

            while (true) {
                output.print(">> ");
                String command = input.readLine();
                if (command == null) {
                    break;
                }
                if (command.equals("q")) {
                    output.println("Quitting...");
                    break;
                }
                for (SnippetEvent event : jshell.eval(command)) {
                    if (event.exception() instanceof EvalException e) {
                        output.println(e.getExceptionClassName() + ": " + e.getMessage());
                    } else if (event.exception() != null) {
                        output.println(event.exception().getMessage());
                    } else if (event.status() == Snippet.Status.REJECTED) {
                        jshell.diagnostics(event.snippet())
                            .forEach(d -> output.println("Error: " + d.getMessage(null)));
                    } else if (event.value() != null && !event.value().isEmpty()) {
                        output.println(event.value());
                    }
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        WebDriver webDriver = new FirefoxDriver();
        try {
            run(webDriver, new BufferedReader(new InputStreamReader(System.in)), System.out);
        } finally {
            webDriver.quit();
        }
    }
}
