#!/usr/bin/env bash

if [ -z "$EXERCISM_PRETTIER_VERSION" ]; then
	echo "This script requires the EXERCISM_PRETTIER_VERSION variable to work."
	echo "Please see https://github.com/exercism/v3/blob/master/docs/maintainers/style-guide.md for guidance."
	exit 1
fi

npx "prettier@$EXERCISM_PRETTIER_VERSION" --write "**/*.{js,jsx,ts,tsx,css,sass,scss,html,json,md,yml}"
