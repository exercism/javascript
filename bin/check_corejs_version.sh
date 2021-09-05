#!/usr/bin/env bash

babel_version="$(sed -n "s/.*corejs: '\([^\\']*\)'.*/\1/p" babel.config.js)"
package_version="$(sed -n 's/.*"core-js": "\^\?\([^\"]*\)".*/\1/p' package.json)"

IFS='.' read -r -a babel_arr <<< "$babel_version"
IFS='.' read -r -a package_arr <<< "$package_version"

if [ ${babel_arr[0]} != ${package_arr[0]} ] || [ ${babel_arr[1]} != ${package_arr[1]} ]; then
  echo "core-js version in package.json does not match the version in babel.config.js!"
  echo "babel.config.js version: ${babel_version}"
  echo "package.json version: ${package_version}"
  exit 1
fi
