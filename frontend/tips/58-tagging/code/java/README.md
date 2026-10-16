## How to run this project

On the same directory as this file, run the following command: `mvn test` (runs only the `smoke` tests, see `pom.xml`)

To choose other tests, run `mvn test -Dgroups=wip` or `mvn test -Dgroups="!wip"`.
