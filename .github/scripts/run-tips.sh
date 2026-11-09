#!/usr/bin/env bash
# Runs the code examples in the given directories, retrying each one up to 3 times.
# Fails at the end if any directory still fails, so one failure does not hide the others.
# Commands read from /dev/null, so an example that waits for input (e.g., a REPL) does not hang.
#
# A directory with a `needs-grid` file gets a Selenium Grid (standalone) running on http://localhost:4444 while its
# tests run (e.g., tip 52). The Grid keeps the files the browsers download (managed downloads, e.g., tip 28).
#
# A Playwright directory with a `needs-playwright-server` file gets a Playwright server running on
# ws://127.0.0.1:3000/ while its tests run (e.g., tip 28). It starts with the Playwright of the directory, so the
# versions match.
#
# A directory with an `expect-files` file passes when its tests pass AND every file pattern listed in it matches a
# file (e.g., the JUnit XML report in tip 57).
#
# A directory with an `expect-failure` file holds tests that fail on purpose (e.g., to show a screenshot taken on
# failure). It passes when the tests fail AND every file pattern listed in `expect-failure` matches a file.
#
# Usage: run-tips.sh <language> '<JSON array of directories>'
set -uo pipefail

# Arguments of the Playwright CLI that start the Playwright server, for the tips that need one.
PLAYWRIGHT_SERVER="run-server --port 3000 --host 127.0.0.1"

# Selenium Server version used for the tips that need a Grid. Keep it in sync with the Selenium version of the tips.
GRID_VERSION=4.51.0

language="$1"
dirs_json="$2"
root="$(pwd)"

# shellcheck disable=SC2086 # PLAYWRIGHT_SERVER is split into the arguments of the Playwright CLI
run_one() {
  case "${language}" in
    java | selenide | vibium-java) mvn -B test ;;
    csharp) dotnet test ;;
    playwright-csharp)
      dotnet build && pwsh bin/Debug/net10.0/playwright.ps1 install --with-deps chromium \
        && with_playwright_server pwsh bin/Debug/net10.0/playwright.ps1 ${PLAYWRIGHT_SERVER} -- dotnet test --no-build
      ;;
    playwright-java)
      mvn -B exec:java -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.classpathScope=test \
        -Dexec.args="install --with-deps chromium" \
        && with_playwright_server mvn -B -q exec:java -Dexec.mainClass=com.microsoft.playwright.CLI \
          -Dexec.classpathScope=test -Dexec.args="${PLAYWRIGHT_SERVER}" \
          -- env PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 mvn -B test
      ;;
    javascript | webdriverio | vibium) npm install && npm test ;;
    playwright)
      npm install && npx playwright install --with-deps chromium \
        && with_playwright_server npx playwright ${PLAYWRIGHT_SERVER} -- npm test
      ;;
    python | vibium-python)
      python -m pip install -r requirements.txt && python -m pytest ./*.py
      ;;
    playwright-python)
      python -m pip install -r requirements.txt && python -m playwright install --with-deps chromium \
        && with_playwright_server python -m playwright ${PLAYWRIGHT_SERVER} -- python -m pytest ./*.py
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
  java -jar "${jar}" standalone --port 4444 --enable-managed-downloads true > grid.log 2>&1 &
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

# Stops a process and the processes it started (e.g., `npx` starts the Playwright server as a child process).
kill_tree() {
  local pid="$1"
  # On Windows (Git Bash), taskkill stops the whole tree
  if [[ -r "/proc/${pid}/winpid" ]]; then
    taskkill //F //T //PID "$(cat "/proc/${pid}/winpid")" >/dev/null 2>&1
    return
  fi
  local child
  for child in $(pgrep -P "${pid}"); do
    kill_tree "${child}"
  done
  kill "${pid}" 2>/dev/null
}

# Usage: with_playwright_server <server command> -- <test command>
# Runs the test command. When the directory has a `needs-playwright-server` file, it first starts a Playwright server
# with the server command, and stops it after the tests.
with_playwright_server() {
  local server=()
  while [[ "$1" != "--" ]]; do
    server+=("$1")
    shift
  done
  shift
  if [[ ! -f needs-playwright-server ]]; then
    "$@"
    return
  fi
  "${server[@]}" > playwright-server.log 2>&1 &
  local server_pid=$!
  local ready=false
  for _ in $(seq 1 120); do
    # The server answers plain HTTP requests once it is listening
    if curl -s -o /dev/null http://127.0.0.1:3000/; then
      ready=true
      break
    fi
    sleep 1
  done
  local result=1
  if [[ "${ready}" == true ]]; then
    result=0
    "$@" || result=$?
  else
    echo "The Playwright server did not start:"
    cat playwright-server.log
  fi
  kill_tree "${server_pid}"
  wait "${server_pid}" 2>/dev/null
  rm -f playwright-server.log
  return "${result}"
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
