var TRACEUR_OUTPUT_DIR = 'traceur-output',
  gulp = require('gulp'),
  jasmine = require('gulp-jasmine'),
  traceur = require('gulp-traceur'),
  clean = require('gulp-clean');

gulp.task('default', [ 'test' ]);
 
gulp.task('test', [ 'traceur', 'copy-runtime' ], function () {
  return gulp.src([ TRACEUR_OUTPUT_DIR + '/*_test.spec.js' ])
    .pipe(jasmine());
});

gulp.task('traceur', function () {
  return gulp.src([ '*.js', '!gulpfile.js', '!example.js' ])
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
    .pipe(gulp.dest(TRACEUR_OUTPUT_DIR));
});

gulp.task('copy-runtime', function () {
  return gulp.src(traceur.RUNTIME_PATH)
    .pipe(gulp.dest(TRACEUR_OUTPUT_DIR));
});

gulp.task('clean', function () {
  return gulp.src(TRACEUR_OUTPUT_DIR, { read: false })
    .pipe(clean());
});

