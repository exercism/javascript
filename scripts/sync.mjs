#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack pnpm scripts/sync.mjs
 *
 * This script is used to copy the required files.
 *
 * There is a CI step which checks that package.json in root & exercises match
 * (see checksum script for more info).
 */

import shell from 'shelljs';
import * as helpers from './helpers.mjs';
import path from 'node:path';

const assignmentFromEnv = shell.env['ASSIGNMENT'];

function copyConfigForAssignment(assignment) {
  const destination = path.join('exercises', assignment);
  const assignmentPackageFilename = path.join(destination, 'package.json');

  const packageJson = getCurrentPackageJson(assignmentPackageFilename);
  const basePackageJson = JSON.parse(
    shell.cat('exercise-package.json').toString(),
  );
  const mergedPackageJson = helpers.mergePackageJsons(
    basePackageJson,
    packageJson,
    assignment,
  );

  shell
    .ShellString(JSON.stringify(mergedPackageJson, undefined, 2) + '\n')
    .to(assignmentPackageFilename);

  // DELETE legacy
  ['.eslintignore', '.eslintrc'].forEach((file) => {
    const source = path.join(destination, file);
    shell.rm('-f', source);
  });

  [
    '.npmrc',
    'babel.config.js',
    'eslint.config.mjs',
    'jest.config.js',
    'LICENSE',
    '.gitignore',
  ].forEach((file) => {
    shell.cp(file, destination);
  });
}

function getCurrentPackageJson(assignmentPackageFilename) {
  const packageFile = shell.cat(assignmentPackageFilename).toString();
  if (!packageFile) {
    const packageJson = JSON.parse(
      shell.cat('exercise-package.json').toString(),
    );

    const conceptName = path
      .dirname(assignmentPackageFilename)
      .split(/[/\\]/g)
      .slice(1);

    packageJson.name = `@exercism/javascript-${conceptName.join('-')}`;
    packageJson.description = `Exercism ${conceptName[0]} exercise on ${conceptName[1]}`;
    return packageJson;
  }

  return JSON.parse(packageFile);
}

helpers.registerExitHandler();
helpers.createExercisePackageJson(false);

if (assignmentFromEnv) {
  if (!helpers.assertAssignment(assignmentFromEnv)) {
    shell.exit(1);
  }

  shell.echo('Syncing ' + assignmentFromEnv + '...');
  copyConfigForAssignment(assignmentFromEnv);
} else {
  shell.echo('Syncing all assignments...');
  helpers.assignments.forEach((assignment) => {
    shell.echo('Syncing ' + assignment + '...');
    copyConfigForAssignment(assignment);
  });
}
