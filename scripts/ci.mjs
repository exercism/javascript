#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * corepack pnpm node scripts/ci.mjs
 *
 * This will run following checks:
 *
 * 1. Find the exercises
 * 2. Run tests against sample solutions
 */

import {
  prepareAndRun,
  prepare,
  cleanUp,
  registerExitHandler,
  assignments,
} from './helpers.mjs';
import shelljs from 'shelljs';

const { echo, exit, env } = shelljs;

const exercises = assignments;

if (exercises.length === 0) {
  echo('[Skip] None of the files are inside an exercise directory.');
  exit(0);
}

registerExitHandler(false);

env['PREPARE'] = false;
env['CLEANUP'] = false;

const infoStr = `Running tests for ${
  exercises.length === 1 ? exercises[0] : `${exercises.length} exercises\n`
}`;
const failureStr = '[Failure] Tests failed!';

// Prepare exercises
exercises.forEach(prepare);

// Run tests
prepareAndRun('corepack pnpm jest --bail tmp_exercises', infoStr, failureStr);

echo(
  exercises.length === 1
    ? `[Success] Tests passed for ${exercises[0]}`
    : `[Success] Tests passed for all ${exercises.length} exercises`,
);

// Cleanup
cleanUp();
