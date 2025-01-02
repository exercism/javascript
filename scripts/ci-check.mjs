#!/usr/bin/env node

/**
 * Run this script (from root directory): corepack pnpm node scripts/ci-check.mjs
 *
 * This will run following checks:
 *
 * 1. Check config in all exercises matches
 * 2. Run eslint to check code-style
 * 3. Run tests against sample solutions
 */

import shelljs from 'shelljs';
import { join } from 'node:path';
import {
  assignments,
  assertAssignment,
  registerExitHandler,
  envIsThruthy,
  hasStub,
  cleanUp,
  prepare,
} from './helpers.mjs';

const { echo, exit, exec, env } = shelljs;

const exercises = assignments;
if (exercises.length === 0) {
  echo('[Skip] None of the files are inside an exercise directory.');
  exit(0);
}

if (exercises.length === 1) {
  if (!assertAssignment(exercises[0], true)) {
    exit(1);
  }
}

registerExitHandler(false);

if (!envIsThruthy('SKIP_STUB', false)) {
  echo('\n==========\nEnsure stubs are present\n');

  // Inline the stub check instead of running scripts/stub-check, to save a
  // few seconds.
  const noStubs = exercises.filter((assignment) => !hasStub(assignment));

  if (noStubs.length > 0) {
    echo(`[FAILURE] ${noStubs.length} missing a stub`);
    noStubs.forEach((stub) => {
      echo(`${stub} is missing a stub file`);
    });
    exit(-1);
  } else {
    echo('[SUCCES] All stubs are present');
  }
}

if (!envIsThruthy('SKIP_INTEGRITY', false)) {
  echo('\n==========\nCheck configuration and packages integrity\n');

  // If > 8 exercises, checksum everything as its faster than subprocessing
  // TODO: be able to pass in any amount of exercises at once
  if (exercises.length >= 8) {
    const checkResult = exec(
      `corepack pnpm node ${join('scripts', 'checksum.mjs')}`,
    ).code;

    if (checkResult !== 0) {
      exit(checkResult);
    }

    const nameCheckResult = exec(
      `corepack pnpm node ${join('scripts', 'name-check.mjs')}`,
    ).code;

    if (nameCheckResult !== 0) {
      exit(nameCheckResult);
    }
  } else {
    exercises.forEach((exercise) => {
      env['ASSIGNMENT'] = exercise;

      const checkResult = exec(
        `corepack pnpm node ${join('scripts', 'checksum.mjs')}`,
      ).code;

      if (checkResult !== 0) {
        exit(checkResult);
      }

      const nameCheckResult = exec(
        `corepack pnpm node ${join('scripts', 'name-check.mjs')}`,
      ).code;

      if (nameCheckResult !== 0) {
        exit(nameCheckResult);
      }
    });
  }

  const nameUniqResult = exec(
    `corepack pnpm node ${join('scripts', 'name-uniq.mjs')}`,
  ).code;

  if (nameUniqResult !== 0) {
    exit(nameUniqResult);
  }

  const directoryResult = exec(
    `corepack pnpm node ${join('scripts', 'directory-check.mjs')}`,
  ).code;

  if (directoryResult !== 0) {
    echo(
      `scripts/directory-check returned a non-zero exit code: ${directoryResult}`,
    );
    exit(directoryResult);
  }
}

// Cleanup tmp directory if any exists
cleanUp();

/**
 * Moves all example and test files to single directory - tmp_exercises
 * This allows running the test command together for all files
 * which is way faster than running once for each exercise
 */

echo('\n==========\nLint all the files\n');

env['PREPARE'] = false;
env['CLEANUP'] = false;

exercises.forEach(prepare);

env['CLEANUP'] = true;

const checkResult = exec(
  `corepack pnpm node ${join('scripts', 'lint.mjs')}`,
).code;
if (checkResult !== 0) {
  exit(checkResult);
}
