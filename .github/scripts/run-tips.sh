#!/usr/bin/env bash
# Runs the code examples in the given directories, retrying each one up to 3 times.
# Fails at the end if any directory still fails, so one failure does not hide the others.
# Commands read from /dev/null, so an example that waits for input (e.g., a REPL) does not hang.
#
# A directory with an `expect-failure` file holds tests that fail on purpose (e.g., to show a screenshot taken on
# failure). It passes when the tests fail AND every file pattern listed in `expect-failure` matches a file.
#
# Usage: run-tips.sh <language> '<JSON array of directories>'
set -uo pipefail

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

# Runs the tests of the current directory, honoring an `expect-failure` file when present.
run_dir() {
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
