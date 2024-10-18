#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack pnpm node scripts/test.mjs
 *
 * This runs `jest` tests for all sample solutions
 */

import { env } from 'shelljs';
import { prepareAndRun } from './helpers.mjs';
const assignment = env['ASSIGNMENT'];

const infoStr = assignment
  ? '\nRunning tests for ' + assignment + '...'
  : '\nRunning tests for all exercises...';
const failureStr = '[Failure] Tests failed!';

// Copies the necessary files
env['PREPARE'] = true;

// Cleans up after
env['CLEANUP'] = true;

prepareAndRun('corepack pnpm jest --bail tmp_exercises', infoStr, failureStr);
