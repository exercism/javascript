#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack pnpm node scripts/name-uniq.mjs
 *
 * This will run following checks:
 *
 * 1. All exercises have unique package names in their package.json files.
 */

import shell from 'shelljs';
import { packageFiles, registerExitHandler } from './helpers.mjs';

registerExitHandler();

let exitCode = 0;
const allNames = packageFiles.map(
  (filePath) => JSON.parse(shell.cat(filePath).toString())['name'],
);

// Check if all exercises have unique package names
const duplicates = allNames.filter((e, i) => allNames.indexOf(e) !== i);
if (duplicates.length !== 0) {
  exitCode = 1;
  shell.echo(
    `[Failure] Duplicate package names found: ${duplicates.join(', ')}`,
  );
}

if (exitCode === 0) {
  shell.echo('[Success] All package names are unique.');
}
