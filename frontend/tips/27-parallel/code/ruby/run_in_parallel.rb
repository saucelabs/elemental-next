# Runs the specs in the spec directory in parallel, one process per spec file.
exit system('bundle', 'exec', 'parallel_rspec', 'spec', chdir: __dir__) ? 0 : 1
