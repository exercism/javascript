var gulp = require('gulp'),
  jasmine = require('gulp-jasmine'),
  traceur = require('gulp-traceur'),
  clean = require('gulp-clean'),
  argv  = require('yargs').argv;

gulp.task('default', [ 'test' ]);
 
gulp.task('test', [ 'traceur', 'copy-runtime' ], function () {
  return gulp.src([ argv.output + '/*_test.spec.js' ])
    .pipe(jasmine());
});

gulp.task('traceur', function () {
  return gulp.src([ argv.input + '/*.js' ])
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
    .pipe(gulp.dest(argv.output));
});

gulp.task('copy-runtime', function () {
  return gulp.src(traceur.RUNTIME_PATH)
    .pipe(gulp.dest(argv.output));
});

gulp.task('clean', function () {
  return gulp.src(argv.output, { read: false })
    .pipe(clean());
});

