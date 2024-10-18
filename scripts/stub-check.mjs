#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack pnpm node scripts/stub-check.mjs
 *
 * This script checks that all exercises have a stub file.
 * Ref: https://github.com/exercism/javascript/issues/705
 */

import shell from 'shelljs';
import * as helpers from './helpers.mjs';

const noStubs = helpers.assignments.filter(
  (assignment) => !helpers.hasStub(assignment),
);

if (noStubs.length > 0) {
  shell.echo('[Error]: No stub files found for following exercises:');
  shell.echo(noStubs.join('\n'));
  shell.exit(1);
}

if (shell.env['ASSIGNMENT']) {
  shell.echo(`[Success]: Stub file present for ${shell.env['ASSIGNMENT']}`);
} else {
  shell.echo('[Success]: Stub files present for all exercises!');
}
