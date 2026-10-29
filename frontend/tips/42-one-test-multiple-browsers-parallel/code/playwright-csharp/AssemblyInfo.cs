using Microsoft.VisualStudio.TestTools.UnitTesting;

// Run the tests in parallel, in up to 3 workers: one per browser.
[assembly: Parallelize(Workers = 3, Scope = ExecutionScope.MethodLevel)]
