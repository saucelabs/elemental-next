#!/usr/bin/env bash
# Runs the code examples in the given directories, retrying each one up to 3 times.
# Fails at the end if any directory still fails, so one failure does not hide the others.
# Commands read from /dev/null, so an example that waits for input (e.g., a REPL) does not hang.
#
# A directory with a `needs-grid` file gets a Selenium Grid (standalone) running on http://localhost:4444 while its
# tests run (e.g., tip 52).
#
# A directory with an `expect-files` file passes when its tests pass AND every file pattern listed in it matches a
# file (e.g., the JUnit XML report in tip 57).
#
# A directory with an `expect-failure` file holds tests that fail on purpose (e.g., to show a screenshot taken on
# failure). It passes when the tests fail AND every file pattern listed in `expect-failure` matches a file.
#
# Usage: run-tips.sh <language> '<JSON array of directories>'
set -uo pipefail

# Selenium Server version used for the tips that need a Grid. Keep it in sync with the Selenium version of the tips.
GRID_VERSION=4.51.0

language="$1"
dirs_json="$2"
root="$(pwd)"

run_one() {
  case "${language}" in
    java | selenide) mvn -B test ;;
    csharp) dotnet test ;;
    javascript | serenity-js) npm install && npm test ;;
    python)
      python -m pip install -r requirements.txt && python -m pytest ./*.py
      ;;
    ruby)
      bundle install || return 1
      for file in ./*.rb; do
        bundle exec ruby "${file}" || return 1
      done
      ;;
    *)
      echo "Unknown language: ${language}" >&2
      return 1
      ;;
  esac
}

start_grid() {
  local jar="${RUNNER_TEMP:-${TMPDIR:-/tmp}}/selenium-server-${GRID_VERSION}.jar"
  if [[ ! -f "${jar}" ]]; then
    curl -sSfL -o "${jar}" \
      "https://github.com/SeleniumHQ/selenium/releases/download/selenium-${GRID_VERSION}/selenium-server-${GRID_VERSION}.jar" \
      || return 1
  fi
  java -jar "${jar}" standalone --port 4444 > grid.log 2>&1 &
  grid_pid=$!
  for _ in $(seq 1 60); do
    if curl -s http://localhost:4444/status | grep -q '"ready": *true'; then
      return 0
    fi
    sleep 1
  done
  echo "The Grid did not start, see grid.log"
  return 1
}

stop_grid() {
  kill "${grid_pid}" 2>/dev/null
  wait "${grid_pid}" 2>/dev/null
  rm -f grid.log
}

# Runs the tests of the current directory, honoring the `needs-grid` and `expect-failure` files when present.
run_dir() {
  if [[ -f needs-grid ]]; then
    start_grid || return 1
    local result=0
    run_tests || result=$?
    stop_grid
    return "${result}"
  fi
  run_tests
}

# Checks that every file pattern listed in the given file matches a file.
check_files() {
  local pattern
  for pattern in $(tr -d '\r' < "$1"); do
    if ! compgen -G "${pattern}" >/dev/null; then
      echo "No file matches '${pattern}'"
      return 1
    fi
  done
}

# Runs the tests of the current directory, honoring the `expect-files` and `expect-failure` files when present.
run_tests() {
  if [[ -f expect-files ]]; then
    # shellcheck disable=SC2046
    rm -f $(tr -d '\r' < expect-files)
    run_one && check_files expect-files
    return
  fi
  if [[ ! -f expect-failure ]]; then
    run_one
    return
  fi
  local patterns
  patterns=$(tr -d '\r' < expect-failure)
  # shellcheck disable=SC2086
  rm -f ${patterns}
  if run_one; then
    echo "Expected the tests to fail, but they passed"
    return 1
  fi
  for pattern in ${patterns}; do
    if ! compgen -G "${pattern}" >/dev/null; then
      echo "The tests failed as expected, but no file matches '${pattern}'"
      return 1
    fi
  done
  echo "The tests failed as expected and created: ${patterns}"
}

failed=()
while read -r dir; do
  [[ -z "${dir}" ]] && continue
  echo "::group::${dir}"
  passed=false
  for attempt in 1 2 3; do
    echo "Attempt ${attempt} in ${dir}"
    if (cd "${root}/${dir}" && run_dir) </dev/null; then
      passed=true
      break
    fi
  done
  echo "::endgroup::"
  if [[ "${passed}" == false ]]; then
    echo "::error::Tests failed in ${dir}"
    failed+=("${dir}")
  fi
done < <(jq -r '.[]' <<<"${dirs_json}" | tr -d '\r')

if ((${#failed[@]} > 0)); then
  echo "Failed directories:"
  printf '  %s\n' "${failed[@]}"
  exit 1
fi
