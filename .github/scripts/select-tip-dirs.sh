#!/usr/bin/env bash
# Prints (as a JSON array) the frontend/tips/*/code/<language> directories that CI should run.
#
# Every directory runs when:
#   - the workflow runs on a schedule or is started manually,
#   - the change comes from Renovate (dependency bumps),
#   - the CI itself changes (the language workflow, run-tips.yml or these scripts),
#   - the list of changed files cannot be computed.
# Otherwise, only the directories with changed files run.
#
# Usage: select-tip-dirs.sh <language> <workflow file>
# Env:   EVENT_NAME, BASE_SHA, HEAD_SHA, HEAD_REF, ACTOR (set by run-tips.yml)
set -euo pipefail

language="$1"
workflow_file="$2"

all_dirs() {
  find frontend/tips -type d -path "*/code/${language}" | sort
}

to_json() {
  jq -Rsc 'split("\n") | map(select(length > 0))'
}

run_all() {
  echo "Running all '${language}' directories: $1" >&2
  all_dirs | to_json
  exit 0
}

case "${EVENT_NAME:-}" in
  schedule | workflow_dispatch) run_all "triggered by ${EVENT_NAME}" ;;
esac

if [[ "${ACTOR:-}" == renovate* || "${HEAD_REF:-}" == renovate/* ]]; then
  run_all "dependency update from Renovate"
fi

if [[ -z "${BASE_SHA:-}" || "${BASE_SHA}" =~ ^0+$ ]] || ! git cat-file -e "${BASE_SHA}^{commit}" 2>/dev/null; then
  run_all "base commit not available"
fi

changed_files="$(git diff --name-only "${BASE_SHA}...${HEAD_SHA}")"

if grep -qE "^\.github/(scripts/|workflows/run-tips\.yml$|workflows/${workflow_file}$)" <<<"${changed_files}"; then
  run_all "CI configuration changed"
fi

echo "${changed_files}" \
  | sed -nE "s#^(frontend/tips/[^/]+/code/${language})/.*#\1#p" \
  | sort -u \
  | while read -r dir; do if [[ -d "${dir}" ]]; then echo "${dir}"; fi; done \
  | to_json
