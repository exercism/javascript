// Not intended to be run as a script

var shell = require('shelljs');

var assignments = [];
var exerciseDirs = shell.ls('-d', 'exercises/*');
for(i = 0; i < exerciseDirs.length; i++) {
  assignments.push(exerciseDirs[i].split('/')[1]);
}


/**
 * Copy sample solution and specs for given assignment to tmp_exercises
 */
function prepare(assignment) {
  if(!assignment) {
    shell.echo('assignment not provided');
    shell.exit(1);
  }
  var exampleFile = ['exercises', assignment, 'example.js'].join('/');
  var specFile = ['exercises', assignment, assignment + '.spec.js'].join('/');

  var inDir = ['exercises', assignment].join('/');
  var outDir = ['tmp_exercises', assignment].join('/');

  shell.mkdir('-p', 'tmp_exercises/lib');
  shell.cp(exampleFile, ['tmp_exercises', assignment + '.js'].join('/'));
  shell.sed('xtest', 'test', specFile)
    .to(['tmp_exercises', assignment + '.spec.js'].join('/'));

  var libDir = ['exercises', assignment, 'lib'].join('/');
  if(shell.test('-d', libDir)) {
    shell.cp(libDir + '/*.js', 'tmp_exercises/lib');
  }
}

// Preapre all exercises (see above) & run a given command
function prepareAndRun(command, infoStr, failureStr) {
  if(shell.env['PREPARE']) {
    var assignment = shell.env['ASSIGNMENT'];

    if(assignment) {
      prepare(assignment);
    }
    else {
      for(i = 0; i < assignments.length; i++) {
        prepare(assignments[i]);
      }
    }
  }

  if(infoStr) { shell.echo(infoStr); }
  var result = shell.exec(command);

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

// Filter out some unwanted packages and create package.json for exercises
function createExercisePackageJson() {
  var packageFile = shell.cat('package.json').toString();
  var packageJson = JSON.parse(packageFile);
  delete packageJson['devDependencies']['shelljs'];
  var shellStr = new shell.ShellString(JSON.stringify(packageJson, null, 2) + '\n');
  shellStr.to('exercise-package.json');
}

module.exports = {
  assignments: assignments,
  cleanUp: cleanUp,
  prepareAndRun: prepareAndRun,
  createExercisePackageJson: createExercisePackageJson
};
