using Microsoft.VisualStudio.TestTools.UnitTesting;

// Run the tests (including each data row) in parallel, in 3 workers.
[assembly: Parallelize(Workers = 3, Scope = ExecutionScope.MethodLevel)]
