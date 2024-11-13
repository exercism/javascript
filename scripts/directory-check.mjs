#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack pnpm node scripts/directory-check.mjs
 *
 * This will run following checks:
 *
 * 1. Package has the correct directory based on the path to the exercise.
 *
 * This script also allows fixing these names:
 *
 * $ corepack pnpm node scripts/directory-check.mjs --fix
 */

import shelljs from 'shelljs';
import { join } from 'node:path';

const { cat, echo, ShellString, exit } = shelljs;

import { assignments, registerExitHandler } from './helpers.mjs';

registerExitHandler();

// First 2 arguments are node and script name skip them
// Check if rest has --fix
const fix = process.argv.slice(2).includes('--fix');

// Check if package repository directory in each exercises' package.json is of the format "exercises/<exercise-path>"

assignments.forEach((assignment) => {
  const filePath = join('exercises', assignment, 'package.json');
  const file = JSON.parse(cat(filePath).toString());
  const givenRepositoryDirectory = file['repository']['directory'];
  const expectedRepositoryDirectory = `exercises/${assignment.replace(
    '\\',
    '/',
  )}`;

  if (givenRepositoryDirectory === expectedRepositoryDirectory) {
    echo(
      `[Success]: Package repository directory for ${assignment} is in correct format.`,
    );
    return;
  }

  if (fix) {
    file['repository']['directory'] = expectedRepositoryDirectory;
    const fileWithFixedRepositoryDirectory = new ShellString(
      JSON.stringify(file, undefined, 2) + '\n',
    );
    fileWithFixedRepositoryDirectory.to(filePath);
    echo(`[Success]: Fixed package repository directory in ${filePath}`);
  } else {
    echo(
      `[Failure]: Package repository directory in ${filePath} must be ${expectedRepositoryDirectory}, actual: ${file['repository']['directory']}"`,
    );
    exit(1);
  }
});

exit(0);
