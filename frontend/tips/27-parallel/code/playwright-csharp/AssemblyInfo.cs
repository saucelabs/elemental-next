using Microsoft.VisualStudio.TestTools.UnitTesting;

// Run the test methods in parallel, in up to 4 workers, each one with its own browser.
[assembly: Parallelize(Workers = 4, Scope = ExecutionScope.MethodLevel)]
