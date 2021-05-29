/**
 * This file provides helper functions & is NOT intended to be run as a script.
 */

const shell = require('shelljs');
const path = require('path');
const crypto = require('crypto');

const exerciseDirs = shell.ls(
  '-d',
  path.join('exercises', '{practice,concept}', '*')
);

export const packageFiles = exerciseDirs.map((dir) => `${dir}/package.json`);

export const assignments = shell.env['ASSIGNMENT']
  ? [shell.env['ASSIGNMENT']]
  : knownAssignments();

function knownAssignments() {
  return exerciseDirs.map((directory) =>
    path.join(path.basename(path.dirname(directory)), path.basename(directory))
  );
}

export function assertAssignment(assignment, shouldExist = true) {
  assignment = assignment.replace(/[/\\]/g, path.sep);

  if (assignment.split(path.sep).length === 2) {
    if (!shouldExist) {
      return true;
    }

    if (shell.test(`-d`, path.join('exercises', assignment))) {
      return true;
    }
  }

  shell.echo("[Failure] that's not a valid assignment reference");
  const chalk = require('chalk');

  if (assignment.split(path.sep).length === 1) {
    // prettier-ignore
    shell.echo(`
Expected ${chalk.cyan(`{type}${path.sep}{slug}`)}, actual: ${chalk.yellow(assignment)}.
- Use ${chalk.green(`concept${path.sep}${assignment}`)} if ${chalk.yellow(assignment)} is a concept exercise.
- Use ${chalk.green(`practice${path.sep}${assignment}`)} if ${chalk.yellow(assignment)} is a practice exercise.
    `.trim());
  }

  const suggestions = knownAssignments().filter((known) =>
    known.includes(assignment)
  );

  if (suggestions.length > 0 && suggestions.length < 5) {
    shell.echo(
      '\nDid you mean:\n' +
        suggestions.map((suggestion) => `- ${suggestion}`).join('\n')
    );
  }

  return false;
}

export function sha(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

export function findExerciseDirectory(input) {
  const directory = exerciseDirs.find((exerciseDir) => {
    return input.indexOf(exerciseDir) !== -1;
  });

  if (!directory) {
    return null;
  }

  return path.join(
    path.basename(path.dirname(directory)),
    path.basename(directory)
  );
}

export function fileConfiguration(assignment) {
  const pathToConfig = path.join(
    'exercises',
    assignment,
    '.meta',
    'config.json'
  );

  let files = undefined;

  if (shell.test('-f', pathToConfig)) {
    const configuration = JSON.parse(shell.cat(pathToConfig).toString());
    if (configuration.files && configuration.files.test.length > 0) {
      files = configuration.files;
    }
  }

  files = files || JSON.parse(shell.cat('config.json').toString()).files;

  Object.keys(files).forEach((key) => {
    files[key] = files[key].map((value) =>
      value
        .replace('%{kebab_slug}', path.basename(assignment))
        .replace(/[/\\]/g, path.sep)
    );
  });

  return files;
}

export function hasStub(assignment) {
  const stubFiles = fileConfiguration(assignment).solution;

  return stubFiles.every((stubFile) =>
    shell.test('-f', path.join('exercises', assignment, stubFile))
  );
}

export function envIsThruthy(key, unset = false) {
  if (shell.env[key] === undefined) {
    return unset;
  }

  return !['0', 0, 'false', false, null, 'null'].includes(shell.env[key]);
}

export function shouldPrepare() {
  return envIsThruthy('PREPARE');
}

export function shouldCleanup() {
  return envIsThruthy('CLEANUP');
}

export function prepareAndRun(command, infoStr, failureStr) {
  if (shouldPrepare()) {
    const assignment = shell.env['ASSIGNMENT'];

    if (assignment) {
      prepare(assignment);
    } else {
      assignments.forEach(prepare);
    }
  }

  if (infoStr) {
    shell.echo(infoStr);
  }
  const result = shell.exec(command);

  if (shouldCleanup()) {
    cleanUp();
  }

  if (result.code !== 0) {
    if (failureStr) {
      shell.echo(failureStr);
    }
    shell.exit(1);
  }
}

export function cleanUp() {
  shell.rm('-rf', 'tmp_exercises');
  shell.rm('-f', 'exercise-package.json');
  shell.rm('-f', 'exercise-package.json.sha');
}

// These packages will be skipped while performing checksum. In other words,
// these packages are only interesting for maintaining this repository and not
// for the student.
const SKIP_PACKAGES_FOR_CHECKSUM = [
  'shelljs',
  '@babel/node',
  'prettier',
  'diff',
  'chalk',
];

// These fields may differ between package.json files.
const SKIP_FIELDS_FOR_CHECKSUM = [
  'name',
  'description',
  'author',
  'contributors',
];

export function createExercisePackageJson(writeSha = false) {
  const packageFile = shell.cat('package.json').toString();
  const packageJson = JSON.parse(packageFile);

  // Filter out some unwanted packages and create package.json for exercises
  SKIP_PACKAGES_FOR_CHECKSUM.forEach(
    (pkg) => delete packageJson['devDependencies'][pkg]
  );

  const shellStr = new shell.ShellString(
    JSON.stringify(packageJson, undefined, 2) + '\n'
  );

  shellStr.to('exercise-package.json');

  // Now remove all fields that should not be considered for checksum
  SKIP_FIELDS_FOR_CHECKSUM.forEach((field) => {
    delete packageJson[field];
  });

  delete packageJson['repository']['directory'];

  if (writeSha) {
    const checksumShellStr = new shell.ShellString(shaPackageJson(packageJson));
    checksumShellStr.to('exercise-package.json.sha');
  }
}

export function mergePackageJsons(basePackageJson, packageJson, assignment) {
  const mergedPackageJson = JSON.parse(JSON.stringify(basePackageJson));

  SKIP_FIELDS_FOR_CHECKSUM.forEach((key) => {
    mergedPackageJson[key] = packageJson[key];
  });

  const extraRepositoryKeys = Object.keys(packageJson.repository || {}).filter(
    (key) => !basePackageJson.repository[key]
  );

  extraRepositoryKeys.forEach((key) => {
    mergedPackageJson.repository[key] = packageJson.repository[key];
  });

  mergedPackageJson.repository.directory = `exercises/${assignment}`;

  return mergedPackageJson;
}

export function prepareExercisePackageJson(destinationPath, writeSha = false) {
  const packageFile = shell.cat(destinationPath).toString();
  const packageJson = JSON.parse(packageFile);

  // Now remove all fields that should not be considered for checksum
  SKIP_FIELDS_FOR_CHECKSUM.forEach((field) => {
    delete packageJson[field];
  });

  delete packageJson['repository']['directory'];

  if (writeSha) {
    const checksumShellStr = new shell.ShellString(shaPackageJson(packageJson));
    checksumShellStr.to(`${destinationPath}.sha`);
  }

  return packageJson;
}

export function shaPackageJson(packageJson) {
  return sha(JSON.stringify(packageJson, undefined, 2).trim() + '\n');
}

/**
 * Copy sample solution and specs for given assignment to tmp_exercises
 */
export function prepare(assignment) {
  if (!assignment) {
    shell.echo('[Failure] Assignment not provided');
    shell.exit(1);
  }

  if (!assertAssignment(assignment, true)) {
    shell.exit(1);
  }

  const files = fileConfiguration(assignment);
  const [type] = assignment.split(/[/\\]/g);

  const exampleFiles = type === 'concept' ? files.exemplar : files.example;

  files.test.forEach((specFileName) => {
    const specFile = path.join('exercises', assignment, specFileName);

    // Skip file if it doesn't exist
    if (!shell.test('-f', specFile)) {
      if (specFileName !== 'custom.spec.js') {
        console.warn(
          `Skipped copying test file for ${assignment}: ${specFileName} because it doesn't exist`
        );
      }

      return;
    }

    const specFileDestination = path.join(
      'tmp_exercises',
      assignment,
      specFileName
    );

    shell.mkdir('-p', path.dirname(specFileDestination));
    shell.cp(specFile, specFileDestination);

    // Enable tests
    //
    // This purposefully does not replace describe.skip or test.skip, so we can
    // have test cases that are _always_ skipped, including CI. Use case?
    // - platform dependent tests
    // - test cases that don't yet work with our solution
    //
    shell
      .sed(/x(test|it)\(/, 'test(', specFileDestination)
      .to(specFileDestination);
    shell
      .sed('xdescribe', 'describe', specFileDestination)
      .to(specFileDestination);
  });

  shell.mkdir('-p', path.join('tmp_exercises', assignment, 'lib'));

  exampleFiles.forEach((exampleFileName, i) => {
    const exampleFile = path.join('exercises', assignment, exampleFileName);
    const exampleFileDestination = path.join(
      'tmp_exercises',
      assignment,
      files.solution[i]
    );

    shell.sed("from '../", "from './", exampleFile).to(exampleFileDestination);
  });

  // If there are more solution files than example or exemplar files, copy over
  // the remaining ones. This allows us to overwrite solution files by providing
  // them in exemplar, but keep them
  if (files.solution.length > exampleFiles.length) {
    files.solution.slice(exampleFiles.length).forEach((extraLibFileName) => {
      const solutionFile = path.join('exercises', assignment, extraLibFileName);
      const solutionFileDestination = path.join(
        'tmp_exercises',
        assignment,
        extraLibFileName
      );

      shell.cp(solutionFile, solutionFileDestination);
    });
  }

  // Copy new-style editor files
  if ('editor' in files) {
    files.editor.forEach((readonlyFileName) => {
      const readonlyFile = path.join('exercises', assignment, readonlyFileName);
      const readonlyFileDestination = path.join(
        'tmp_exercises',
        assignment,
        readonlyFileName
      );

      shell.cp(readonlyFile, readonlyFileDestination);
    });
  }

  // Copy legacy lib files
  const libDir = path.join('exercises', assignment, 'lib');
  if (shell.test('-d', libDir)) {
    shell.cp(
      path.join(libDir, '*.js'),
      path.join('tmp_exercises', assignment, 'lib')
    );
  }

  // Copy legacy data files
  shell.mkdir('-p', path.join('tmp_exercises', assignment, 'data'));
  const dataDir = path.join('exercises', assignment, 'data');

  if (shell.test('-d', dataDir)) {
    shell.cp(
      path.join(dataDir, '*'),
      path.join('tmp_exercises', assignment, 'data')
    );
  }
}

export function registerExitHandler() {
  function exitHandler(options, exitCode) {
    cleanUp();

    if (options.error) {
      console.error(options.error);
    }

    if (options.cleanup) {
      /* clean exit */
    }
    if (exitCode || exitCode === 0) {
      /* exit code given */
    }
    if (options.exit) {
      /* should exit forcefully */
      process.exit();
    }
  }

  //do something when app is closing
  process.on('exit', exitHandler.bind(null, { cleanup: true }));

  //catches ctrl+c event
  process.on('SIGINT', exitHandler.bind(null, { exit: true }));

  // catches "kill pid" (for example: nodemon restart)
  process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
  process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));

  //catches uncaught exceptions
  process.on('uncaughtException', (error) =>
    exitHandler({ exit: true, error })
  );
}
