/**
 * This file provides helper functions
 * & is NOT intended to be run as a script.
 */

const shell = require('shelljs');
const fs = require('fs');

const exerciseDirs = shell.ls('-d', 'exercises/*');

const config = JSON.parse(fs.readFileSync('config.json'))['exercises'];
const assignments = exerciseDirs.map(dir => dir.split('/')[1])
      .filter(exercise => !exercise.deprecated);

// Preapre all exercises (see above) & run a given command
function prepareAndRun(command, infoStr, failureStr) {
  if(shell.env['PREPARE']) {
    const assignment = shell.env['ASSIGNMENT'];

    if(assignment) {
      prepare(assignment);
    }
    else {
      assignments.forEach(prepare);
    }
  }

  if(infoStr) { shell.echo(infoStr); }
  const result = shell.exec(command);

  if(shell.env['CLEANUP']) { cleanUp(); }

  if(result.code !== 0) {
    if(failureStr) { shell.echo(failureStr); }
    shell.exit(1);
  }
}

// Delete tmp directory
function cleanUp() {
  shell.rm('-rf', 'tmp_exercises');
}

// These packages will be skipped while performing checksum
const SKIP_PACKAGES_FOR_CHECKSUM = ['shelljs', '@babel/node'];

// Filter out some unwanted packages and create package.json for exercises
function createExercisePackageJson() {
  const packageFile = shell.cat('package.json').toString();
  const packageJson = JSON.parse(packageFile);

  delete packageJson['version'];
  SKIP_PACKAGES_FOR_CHECKSUM.forEach(pkg => delete packageJson['devDependencies'][pkg]);

  const shellStr = new shell.ShellString(JSON.stringify(packageJson, null, 2) + '\n');
  shellStr.to('exercise-package.json');
}

// PRIVATE

/**
 * Copy sample solution and specs for given assignment to tmp_exercises
 */
function prepare(assignment) {
  if(!assignment) {
    shell.echo('assignment not provided');
    shell.exit(1);
  }
  const exampleFile = ['exercises', assignment, 'example.js'].join('/');
  const specFile = ['exercises', assignment, assignment + '.spec.js'].join('/');

  shell.mkdir('-p', 'tmp_exercises/lib');
  shell.cp(exampleFile, ['tmp_exercises', assignment + '.js'].join('/'));
  shell.sed('xtest', 'test', specFile)
    .to(['tmp_exercises', assignment + '.spec.js'].join('/'));

  const libDir = ['exercises', assignment, 'lib'].join('/');
  if(shell.test('-d', libDir)) {
    shell.cp(libDir + '/*.js', 'tmp_exercises/lib');
  }
}

module.exports = {
  assignments: assignments,
  cleanUp: cleanUp,
  prepareAndRun: prepareAndRun,
  createExercisePackageJson: createExercisePackageJson
};
