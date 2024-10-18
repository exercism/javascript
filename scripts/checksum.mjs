#!/usr/bin/env node

/**
 * Run this script (from root directory): npx babel-node scripts/checksum
 *
 * This will check root `package.json` matches each exercise's `package.json`.
 * But the catch is there are some dependencies used for build but not served to end users
 * We skip those dependencies while performing checksum.
 * See `SKIP_PACKAGES_FOR_CHECKSUM` in helpers.js for list of skipped packages.
 */

import { join } from 'path';
import shelljs from 'shelljs';
import {
  prepareExercisePackageJson,
  shaPackageJson,
  sha,
  assertAssignment,
  assignments as _assignments,
  registerExitHandler,
  createExercisePackageJson,
} from './helpers.mjs';

const { cat, echo, exit, env } = shelljs;

/**
 * Compares the file of the assignment with some known value
 *
 * @param filename file to check (local to the assignment directory)
 * @param assignment slug with type, eg. practice/two-fer
 * @param baseFile the file path that {filename} must be compared against
 * @param expectedSha known value of {baseFile}
 */
function checksumAssignment(assignment, filename, baseFile, expectedSha) {
  if (!assignment) {
    return;
  }

  const filePath = join('exercises', assignment, filename);

  let fileSha;

  if (filename === 'package.json') {
    const packageJson = prepareExercisePackageJson(filePath, false);

    fileSha = shaPackageJson(packageJson);
  } else {
    const fileContents = cat(filePath).toString();
    fileSha = sha(fileContents);
  }

  if (fileSha !== expectedSha) {
    // prettier-ignore
    echo(
      `[Failure] ${filename} did not match for ${assignment} (${expectedSha} != ${fileSha})\n`,
      `! Expected ${baseFile} to match ${filePath}\n`,
      `! Did you forget to run ${"`corepack pnpm node scripts/sync.mjs`"}?\n`
    );

    exit(1);
  }
}

/**
 * Check all the exercises, or given, {filename} against {rootFileName}
 *
 * @param filename filename in the exercise directory
 * @param rootFileName filename in the root directory
 */
function checksumAll(filename, rootFileName = filename) {
  const assignments = [env['ASSIGNMENT']].filter(Boolean);

  let expectedSha;

  if (rootFileName === 'exercise-package.json') {
    expectedSha = cat('exercise-package.json.sha').toString();
  } else {
    const fileContents = cat(rootFileName).toString();
    expectedSha = sha(fileContents);
  }

  if (assignments.length > 0) {
    if (!assignments.every((assignment) => assertAssignment(assignment))) {
      exit();
    }

    return assignments.every((assignment) => {
      echo(`Checking integrity of ${assignment}/${filename}...`);
      return checksumAssignment(
        assignment,
        filename,
        rootFileName,
        expectedSha,
      );
    });
  }

  echo(
    `Checking integrity of ${filename} in all ${_assignments.length} exercises`,
  );

  _assignments.forEach((assignment) =>
    checksumAssignment(assignment, filename, rootFileName, expectedSha),
  );
}

registerExitHandler();
createExercisePackageJson(true);

checksumAll('package.json', 'exercise-package.json');

['.eslintrc', '.npmrc', 'babel.config.js', 'LICENSE', '.gitignore'].forEach(
  (fileToCheck) => {
    checksumAll(fileToCheck);
  },
);

echo('All files passed the checksum test');
