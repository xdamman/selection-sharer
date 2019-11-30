#!/usr/bin/env bash

JSFILES=($(git diff --name-only --cached | grep '.*src/.*js$'))
if [ "${#JSFILES[@]}" -gt 0 ]; then
  echo "Formatting through prettier.."
  echo "${JSFILES[@]}"
  npm run prettier "${JSFILES[@]}"
else
  echo "Skipping formatting.."
fi
