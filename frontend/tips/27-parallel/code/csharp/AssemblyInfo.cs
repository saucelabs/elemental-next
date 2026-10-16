using Microsoft.VisualStudio.TestTools.UnitTesting;

// Run the test methods in parallel, in 2 workers.
[assembly: Parallelize(Workers = 2, Scope = ExecutionScope.MethodLevel)]
