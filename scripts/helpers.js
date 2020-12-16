/**
 * This file provides helper functions
 * & is NOT intended to be run as a script.
 */

const shell = require("shelljs");
const path = require("path");

const exerciseDirs = shell.ls("-d", path.join("exercises", "*"));

export const assignments = shell.env["ASSIGNMENT"]
  ? [shell.env["ASSIGNMENT"]]
  : exerciseDirs
      .map((dir) => path.basename(dir))
      .filter((exercise) => !exercise.deprecated);

export function findExerciseDirectory(input) {
  return exerciseDirs.find((exerciseDir) => {
    return input.indexOf(exerciseDir) !== -1;
  });
}

export function hasStub(assignment) {
  return shell.test(
    "-f",
    path.join("exercises", assignment, `${assignment}.js`)
  );
}

export function envIsThruthy(key, unset = false) {
  if (shell.env[key] === undefined) {
    return unset;
  }

  return !["0", 0, "false", false, null, "null"].includes(shell.env[key]);
}

export function shouldPrepare() {
  return envIsThruthy("PREPARE");
}

export function shouldCleanup() {
  return envIsThruthy("CLEANUP");
}

// Preapre all exercises (see above) & run a given command
export function prepareAndRun(command, infoStr, failureStr) {
  if (shouldPrepare()) {
    const assignment = shell.env["ASSIGNMENT"];

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

// Delete tmp directory
export function cleanUp() {
  shell.rm("-rf", "tmp_exercises");
}

// These packages will be skipped while performing checksum
const SKIP_PACKAGES_FOR_CHECKSUM = ["shelljs", "@babel/node"];

// Filter out some unwanted packages and create package.json for exercises
export function createExercisePackageJson(assignmentVersion) {
  const packageFile = shell.cat("package.json").toString();
  const packageJson = JSON.parse(packageFile);

  packageJson["version"] = assignmentVersion;
  SKIP_PACKAGES_FOR_CHECKSUM.forEach(
    (pkg) => delete packageJson["devDependencies"][pkg]
  );

  const shellStr = new shell.ShellString(
    JSON.stringify(packageJson, null, 2) + "\n"
  );
  shellStr.to("exercise-package.json");
}

/**
 * Copy sample solution and specs for given assignment to tmp_exercises
 */
export function prepare(assignment) {
  if (!assignment) {
    shell.echo("[Failure] Assignment not provided");
    shell.exit(1);
  }
  const exampleFile = path.join("exercises", assignment, "example.js");
  const specFile = path.join("exercises", assignment, `${assignment}.spec.js`);
  const specFileDestination = path.join(
    "tmp_exercises",
    `${assignment}.spec.js`
  );

  shell.mkdir("-p", path.join("tmp_exercises", "lib"));
  shell.cp(exampleFile, path.join("tmp_exercises", `${assignment}.js`));
  shell.cp(specFile, specFileDestination);

  // Enable tests
  shell
    .sed(/x(test|it)\(/, "test(", specFileDestination)
    .to(specFileDestination);
  shell
    .sed("xdescribe", "describe", specFileDestination)
    .to(specFileDestination);

  const libDir = path.join("exercises", assignment, "lib");
  if (shell.test("-d", libDir)) {
    shell.cp(path.join(libDir, "*.js"), path.join("tmp_exercises", "lib"));
  }

  shell.mkdir("-p", path.join("tmp_exercises", "data"));
  const dataDir = path.join("exercises", assignment, "data");

  if (shell.test("-d", dataDir)) {
    shell.cp(path.join(dataDir, "*"), path.join("tmp_exercises", "data"));
  }
}

export function registerExitHandler() {
  function exitHandler(options, exitCode) {
    cleanUp();

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
  process.on("exit", exitHandler.bind(null, { cleanup: true }));

  //catches ctrl+c event
  process.on("SIGINT", exitHandler.bind(null, { exit: true }));

  // catches "kill pid" (for example: nodemon restart)
  process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
  process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

  //catches uncaught exceptions
  process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
}
