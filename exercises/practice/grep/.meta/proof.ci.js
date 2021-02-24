#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv;

function checkLineMatchesPattern(line, pattern) {
  let left = line;
  let right = pattern;

  // ignore case
  if (isOptionSet('i')) {
    left = line.toLowerCase();
    right = pattern.toLowerCase();
  }

  // match entire line
  if (isOptionSet('x')) {
    return left === right;
  }

  return left.match(right) !== null;
}

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

function getConfigFromArgs() {
  const config = {
    pattern: '',
    options: [],
    files: [],
  };

  let patternFound = false;

  ARGS.slice(2).forEach((val) => {
    if (patternFound) {
      config.files.push(val);
      return;
    }

    if (val.indexOf('-') !== -1) {
      const option = val.replace('-', '');

      if (!VALID_OPTIONS.includes(option)) {
        throw new Error(`Unknown option ${option}`);
      }

      config.options.push(option);
      return;
    }

    patternFound = true;
    config.pattern = val;
  });

  return config;
}

const { options, pattern, files } = getConfigFromArgs();
const isOptionSet = (option) => options.includes(option);

files.forEach((file) => {
  const lines = readLines(file);

  // print file names where pattern is found
  if (isOptionSet('l')) {
    const foundMatch = lines.find((line) => {
      const lineMatchesPattern = checkLineMatchesPattern(line, pattern);

      // reverse files results
      return isOptionSet('v') ? !lineMatchesPattern : lineMatchesPattern;
    });

    if (foundMatch) {
      console.log(file);
    }

    return;
  }

  lines.forEach((line, index) => {
    let result = '';
    let shouldOutputLine = checkLineMatchesPattern(line, pattern);

    // reverse files results
    if (isOptionSet('v')) {
      shouldOutputLine = !shouldOutputLine;
    }

    if (shouldOutputLine) {
      if (files.length > 1) {
        result += `${file}:`;
      }

      // add line numbers
      if (isOptionSet('n')) {
        result += `${index + 1}:`;
      }

      result += line;

      console.log(result);
    }
  });
});
