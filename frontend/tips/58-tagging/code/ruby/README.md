## How to run this project

On the same directory as this file, run the following commands:

- `bundle install`
- `bundle exec rspec` (runs only the `smoke` specs, see `.rspec`), or `ruby run_specs.rb`, which does the same
- `bundle exec rspec --tag ~wip` or `bundle exec rspec --tag wip` to choose other specs
