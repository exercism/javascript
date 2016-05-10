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
  eslint = require('gulp-eslint'),
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
  return gulp.src([ inputDir + '/*.js', inputDir + '/lib/*.js' ])
    .pipe(babel())
    .pipe(gulp.dest(outputDir));
});

gulp.task('lint', function () {
  return gulp.src([ inputDir + '/*.js' ])
    .pipe(eslint({
      envs: [
        'es6'  //turns on all es6 features except modules
      ],
      rules: {
        // full documentation here : http://eslint.org/docs/rules

        // Possible errors
        'comma-dangle': [2, 'never'], // don't let a comma at the end of object properties or array element
        'no-cond-assign': [2, 'always'], // no assignments in conditional statements
        'no-console': 2,  // no console.log() statements in production code
        'no-constant-condition': 2, // no constants in conditional statements
        'no-control-regex': 2,  // no control characters in regex's
        'no-debugger': 2, // no debugger in productin code
        'no-dupe-args': 2, // no duplicated arguments in functions
        'no-dupe-keys': 2, // no duplicated keys when creating object literals
        'no-duplicate-case': 2, // no duplicated `case` in `switch` statements
        'no-empty-character-class': 2, // disallow the use of empty character classes in regular expressions
        'no-empty': 2, // no empty blocks
        'no-ex-assign': 2, // do not assign any value to an Exception raised
        'no-extra-boolean-cast': 2, // do not use !!falseExpression to cast to boolean
        'no-extra-parens': 2,  // do not use extra parenthesis
        'no-extra-semi': 2,  // do not use extra semicolons
        'no-func-assign': 2, // do not overwrite variables declared as functions
        'no-inner-declarations': [2, 'both'], // only declare var's and funct's on function scope
        'no-invalid-regexp': 2,  // validates string arguments passed to RegExp constructor
        'no-irregular-whitespace': 2, // detects special characters used as spaces
        'no-negated-in-lhs': 2,  // do not use negation in the left operand in an `in` expression
        'no-obj-calls': 2, // prevent calling global objects as if they were functions
        'no-regex-spaces': 2, // do not use multiple spaces in regex's
        'no-sparse-arrays': 2, // do not use sparse arrays (empty elements)
        'no-unexpected-multiline': 2, // Avoid code that looks like two expressions but is actually one
        'no-unreachable': 2, // detects unreachable statements (after return, throw,...)
        'use-isnan': 2, // do not compare with `NaN` value, use isNan() instead
        'valid-jsdoc': 2, // ensure JSDoc comments are valid
        'valid-typeof': 2 // ensure that the results of typeof are compared against a valid string
      },
      ecmaFeatures: {
        'modules': true  //this gives us modules :)
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('clean', function (cb) {
  del([ outputDir ], cb);
});
