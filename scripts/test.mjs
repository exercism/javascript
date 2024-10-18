#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack pnpm node scripts/test.mjs
 *
 * This runs `jest` tests for all sample solutions
 */

const shell = require('shelljs');
const helpers = require('./helpers');
const assignment = shell.env['ASSIGNMENT'];

const infoStr = assignment
  ? '\nRunning tests for ' + assignment + '...'
  : '\nRunning tests for all exercises...';
const failureStr = '[Failure] Tests failed!';

// Copies the necessary files
shell.env['PREPARE'] = true;

// Cleans up after
shell.env['CLEANUP'] = true;

helpers.prepareAndRun(
  'corepack pnpm jest --bail tmp_exercises',
  infoStr,
  failureStr,
);
