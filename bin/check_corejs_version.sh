#!/usr/bin/env bash

babel_version="$(sed -n "s/.*corejs: '\([0-9]\+\.[0-9]\+\).*/\1/p" babel.config.js)"
package_version="$(sed -n 's/.*"core-js": "^\?\([0-9]\+\.[0-9]\+\).*/\1/p' package.json)"

if [ ${babel_version} != ${package_version} ]; then
  echo "core-js version (major.minor) in package.json does not match the version in babel.config.js!"
  echo "babel.config.js version: ${babel_version}"
  echo "package.json version: ${package_version}"
  exit 1
fi
