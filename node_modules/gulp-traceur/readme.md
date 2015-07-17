# gulp-traceur [![Build Status](https://travis-ci.org/sindresorhus/gulp-traceur.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-traceur)

> [`Traceur`](https://github.com/google/traceur-compiler) is a JavaScript.next to JavaScript-of-today compiler

*Issues with the output should be reported on the `Traceur` [issue tracker](https://github.com/google/traceur-compiler/issues).*


## Install

```
$ npm install --save-dev gulp-traceur
```


## Usage

```js
var gulp = require('gulp');
var traceur = require('gulp-traceur');

gulp.task('default', function () {
	return gulp.src('src/app.js')
		.pipe(traceur())
		.pipe(gulp.dest('dist'));
});
```


## API

### traceur([options])

See the `Traceur` [options](https://github.com/google/traceur-compiler/issues/584).

#### options

##### modules

Type: `string`  
Default: `commonjs`  
Values: see [traceur `modules` option](https://github.com/google/traceur-compiler/wiki/Options-for-Compiling#options-for-modules)

By default, gulp-traceur treats all files as modules. This allows use of the `export`, `module` and `import` syntax. In this way the transformer can be used to compile ES6 for AMD or Node.js environments.

### traceur.RUNTIME_PATH

Absolute path to the Traceur runtime.js file.


#### Source Maps

Use [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) like this:

```js
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

gulp.task('default', function () {
	return gulp.src('src/*.js')
		.pipe(sourcemaps.init())
		.pipe(traceur())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
