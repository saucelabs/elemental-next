#!/usr/bin/env bash
# Runs the code examples in the given directories, retrying each one up to 3 times.
# Fails at the end if any directory still fails, so one failure does not hide the others.
# Commands read from /dev/null, so an example that waits for input (e.g., a REPL) does not hang.
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

failed=()
while read -r dir; do
  [[ -z "${dir}" ]] && continue
  echo "::group::${dir}"
  passed=false
  for attempt in 1 2 3; do
    echo "Attempt ${attempt} in ${dir}"
    if (cd "${root}/${dir}" && run_one) </dev/null; then
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
