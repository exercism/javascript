'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var applySourceMap = require('vinyl-sourcemaps-apply');
var objectAssign = require('object-assign');
var traceur = require('traceur');

module.exports = function (opts) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-traceur', 'Streaming not supported'));
			return;
		}

		opts = objectAssign({
			modules: 'commonjs',
			inputSourceMap: file.sourceMap
		}, opts);

		try {
			var compiler = new traceur.NodeCompiler(opts);
			var ret = compiler.compile(file.contents.toString(), file.relative, file.relative, file.base);
			var sourceMap = file.sourceMap && compiler.getSourceMap();

			if (ret) {
				file.contents = new Buffer(ret);
			}

			if (sourceMap) {
				applySourceMap(file, sourceMap);
			}

			this.push(file);
		} catch (errs) {
			this.emit('error', new gutil.PluginError('gulp-traceur', errs.join('\n'), {
				fileName: file.path,
				showStack: false
			}));
		}

		cb();
	});
};

module.exports.RUNTIME_PATH = traceur.RUNTIME_PATH;
