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
  return 'babel-output';
}

const gulp = require('gulp'),
  jasmine = require('gulp-jasmine'),
  babel = require('gulp-babel'),
  polyfill = require('babel/polyfill'),
  del = require('del'),
  argv  = require('yargs').argv,
  inputDir = getInputDirectory(argv),
  outputDir = getOutputDirectory(argv);

// Gulp tasks definition

gulp.task('default', [ 'test' ]);

gulp.task('test', [ 'babel' ], function () {
  return gulp.src([ outputDir + '/*.spec.js' ])
    .pipe(jasmine());
});

gulp.task('babel', function () {
  return gulp.src([ inputDir + '/*.js' ])
    .pipe(babel())
    .pipe(gulp.dest(outputDir));
});

gulp.task('clean', function (cb) {
  del([ outputDir ], cb);
});

