#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack pnpm node scripts/pr.mjs path/1 path/2 path/3
 *
 * This will run following checks:
 *
 * 1. Find the exercises at all the paths provided
 * 2. Run tests for those exercises against sample solutions
 */

import shell from 'shelljs';
import {
  findExerciseDirectory,
  prepareAndRun,
  prepare,
  cleanUp,
  registerExitHandler,
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

shell.env['PREPARE'] = false;
shell.env['CLEANUP'] = false;

const infoStr = `Running tests for ${
  exercises.length === 1 ? exercises[0] : `${exercises.length} exercises\n`
}`;
const failureStr = '[Failure] Tests failed!';

// Prepare exercises
exercises.forEach(prepare);

// Run tests
prepareAndRun(
  'corepack pnpm jest --bail tmp_exercises --runInBand',
  infoStr,
  failureStr,
);

shell.echo(
  exercises.length === 1
    ? `[Success] Tests passed for ${exercises[0]}`
    : `[Success] Tests passed for all ${exercises.length} exercises`,
);

// Cleanup
cleanUp();
