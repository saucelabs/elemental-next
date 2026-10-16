# Runs the specs, and then retries only the ones that failed, up to 9 times.
RETRIES = 9

Dir.chdir(__dir__) do
  File.delete('examples.txt') if File.exist?('examples.txt')
  passed = system('bundle', 'exec', 'rspec')
  RETRIES.times do |retry_number|
    break if passed

    puts "Retrying the failed specs (#{retry_number + 1}/#{RETRIES})"
    passed = system('bundle', 'exec', 'rspec', '--only-failures')
  end
  exit(passed ? 0 : 1)
end
