# Runs the specs, with the options in the .rspec file (including the JUnit XML report).
exit system('bundle', 'exec', 'rspec', chdir: __dir__) ? 0 : 1
