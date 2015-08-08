function getInputDirectory(argv) {
  if (argv.input) {
    return argv.input;
  }
  return '.';
}

function getOutputDirectory(argv) {
  if (argv.output) {
    return argv.output;
  }
  return 'traceur-output';
}

var gulp = require('gulp'),
  jasmine = require('gulp-jasmine'),
  traceur = require('gulp-traceur'),
  del = require('del'),
  argv  = require('yargs').argv,
  inputDir = getInputDirectory(argv),
  outputDir = getOutputDirectory(argv);

// Gulp tasks definition

gulp.task('default', [ 'test' ]);
 
gulp.task('test', [ 'traceur', 'copy-runtime' ], function () {
  return gulp.src([ outputDir + '/*_test.spec.js' ])
    .pipe(jasmine());
});

gulp.task('traceur', function () {
  return gulp.src([ inputDir + '/*.js' ])
    .pipe(traceur({
      modules: 'commonjs',

      // experimental options
      properTailCalls: true,
      symbols: true,
      annotations: true,
      arrayComprehension: true,
      asyncFunctions: true,
      asyncGenerators: true,
      exponentiation: true,
      exportFromExtended: true,
      forOn: true,
      generatorComprehension: true,
      memberVariables: true,
      require: true,
      types: true
    }))
    .pipe(gulp.dest(outputDir));
});

gulp.task('copy-runtime', function () {
  return gulp.src(traceur.RUNTIME_PATH)
    .pipe(gulp.dest(outputDir));
});

gulp.task('clean', function (cb) {
  del([ outputDir ], cb);
});

