#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack pnpm node scripts/pr-check.mjs path/1 path/2 path/3
 *
 * This will run following checks:
 * 1. Find the exercises at all the paths provided
 * 2. Check stub existence for those exercises
 * 3. Check integrity of configuration for those exercises
 * 4. Run eslint for those exercises to check code-style
 */

import shell from 'shelljs';
import path from 'node:path';
import {
  findExerciseDirectory,
  prepare,
  cleanUp,
  registerExitHandler,
  envIsThruthy,
  hasStub,
  assignments,
} from './helpers.mjs';

const files = process.argv.slice(2);

if (files.length === 0) {
  shell.echo(
    '[Failure] No files passed in. Pass in paths to exercise directories or its file.',
  );
  shell.exit(-1);
}

shell.echo('[Files] The files passed in are as follows:');
files.forEach((file) => {
  shell.echo(`[Files] ${file}`);
});

const _exercises = files
  .map(findExerciseDirectory)
  .filter(Boolean)
  .filter((exercise, index, array) => array.indexOf(exercise) === index);

const hasRootFile = files.some((file) => file === 'package.json');

if (hasRootFile) {
  shell.echo(
    '[Root PR] When package.json is changed, all exercises need to be checked',
  );
} else if (_exercises.length > 8) {
  shell.echo(
    '[Big PR] When more than 8 exercises are being checked, all of them are ' +
      'checked as this is likely a PR affecting everything.',
  );
}

const exercises =
  hasRootFile || _exercises.length > 8 ? assignments : _exercises;

if (exercises.length === 0) {
  shell.echo('[Skip] None of the files are inside an exercise directory.');
  shell.exit(0);
}

registerExitHandler(false);

if (!envIsThruthy('SKIP_STUB', false)) {
  shell.echo('\n==========\nEnsure stubs are present\n');

  // Inline the stub check instead of running scripts/stub-check, to save a
  // few seconds.
  const noStubs = exercises.filter((assignment) => !hasStub(assignment));

  if (noStubs.length > 0) {
    shell.echo(`[FAILURE] ${noStubs.length} missing a stub`);
    noStubs.forEach((stub) => {
      shell.echo(`${stub} is missing a stub file`);
    });
    shell.exit(-1);
  } else {
    shell.echo('[SUCCES] All stubs are present');
  }
}

if (!envIsThruthy('SKIP_INTEGRITY', false)) {
  shell.echo('\n==========\nCheck configuration and packages integrity\n');

  exercises.forEach((exercise) => {
    shell.env['ASSIGNMENT'] = exercise;

    const checkResult = shell.exec(
      `corepack pnpm node ${path.join('scripts', 'checksum.mjs')}`,
    ).code;

    if (checkResult !== 0) {
      shell.echo(
        `scripts/checksum.mjs returned a non-zero exit code: ${checkResult}`,
      );
      shell.exit(checkResult);
    }

    const nameCheckResult = shell.exec(
      `corepack pnpm node ${path.join('scripts', 'name-check.mjs')}`,
    ).code;

    if (nameCheckResult !== 0) {
      shell.echo(
        `scripts/name-check.mjs returned a non-zero exit code: ${nameCheckResult}`,
      );
      shell.exit(nameCheckResult);
    }
  });

  const nameUniqResult = shell.exec(
    `corepack pnpm node ${path.join('scripts', 'name-uniq.mjs')}`,
  ).code;

  if (nameUniqResult !== 0) {
    shell.echo(
      `scripts/name-uniq.mjs returned a non-zero exit code: ${nameUniqResult}`,
    );
    shell.exit(nameUniqResult);
  }

  const directoryResult = shell.exec(
    `ncorepack pnpm node ${path.join('scripts', 'directory-check.mjs')}`,
  ).code;

  if (directoryResult !== 0) {
    shell.echo(
      `scripts/directory-check.mjs returned a non-zero exit code: ${directoryResult}`,
    );
    shell.exit(directoryResult);
  }
}

// Cleanup tmp directory if any exists
cleanUp();

/**
 * Moves all example and test files to single directory - tmp_exercises
 * This allows running the test command together for all files
 * which is way faster than running once for each exercise
 */

shell.echo('\n==========\nLint all the files\n');

shell.env['PREPARE'] = false;
shell.env['CLEANUP'] = false;
delete shell.env['ASSIGNMENT'];

exercises.forEach(prepare);

shell.env['CLEANUP'] = true;

const checkResult = shell.exec(
  `corepack pnpm node ${path.join('scripts', 'lint.mjs')}`,
).code;
if (checkResult !== 0) {
  shell.echo(`scripts/lint returned a non-zero exit code: ${checkResult}`);
  shell.exit(checkResult);
}
