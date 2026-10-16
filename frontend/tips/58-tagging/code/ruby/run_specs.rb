# Runs the specs, with the options in the .rspec file (only the ones tagged as smoke).
exit system('bundle', 'exec', 'rspec', chdir: __dir__) ? 0 : 1
