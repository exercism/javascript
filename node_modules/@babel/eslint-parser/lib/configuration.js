"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeESLintConfig = normalizeESLintConfig;
exports.normalizeBabelParseConfig = normalizeBabelParseConfig;

var _core = require("@babel/core");

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function normalizeESLintConfig(options) {
  const {
    babelOptions = {},
    ecmaVersion = 2020,
    sourceType = "module",
    allowImportExportEverywhere = false,
    requireConfigFile = true
  } = options,
        otherOptions = _objectWithoutPropertiesLoose(options, ["babelOptions", "ecmaVersion", "sourceType", "allowImportExportEverywhere", "requireConfigFile"]);

  return Object.assign({
    babelOptions,
    ecmaVersion,
    sourceType,
    allowImportExportEverywhere,
    requireConfigFile
  }, otherOptions);
}

function getParserPlugins(babelOptions) {
  var _babelOptions$parserO, _babelOptions$parserO2;

  const babelParserPlugins = (_babelOptions$parserO = (_babelOptions$parserO2 = babelOptions.parserOpts) == null ? void 0 : _babelOptions$parserO2.plugins) != null ? _babelOptions$parserO : [];
  const estreeOptions = {
    classFeatures: false
  };

  for (const plugin of babelParserPlugins) {
    if (Array.isArray(plugin) && plugin[0] === "estree") {
      Object.assign(estreeOptions, plugin[1]);
      break;
    }
  }

  return [["estree", estreeOptions], ...babelParserPlugins];
}

function normalizeBabelParseConfig(options) {
  const parseOptions = Object.assign({
    sourceType: options.sourceType,
    filename: options.filePath
  }, options.babelOptions, {
    parserOpts: Object.assign({
      allowImportExportEverywhere: options.allowImportExportEverywhere,
      allowReturnOutsideFunction: true,
      allowSuperOutsideMethod: true
    }, options.babelOptions.parserOpts, {
      plugins: getParserPlugins(options.babelOptions),
      ranges: true,
      tokens: true
    }),
    caller: Object.assign({
      name: "@babel/eslint-parser"
    }, options.babelOptions.caller)
  });

  if (options.requireConfigFile !== false) {
    const config = (0, _core.loadPartialConfig)(parseOptions);

    if (config !== null) {
      if (!config.hasFilesystemConfig()) {
        let error = `No Babel config file detected for ${config.options.filename}. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.`;

        if (config.options.filename.includes("node_modules")) {
          error += `\nIf you have a .babelrc.js file or use package.json#babel, keep in mind that it's not used when parsing dependencies. If you want your config to be applied to your whole app, consider using babel.config.js or babel.config.json instead.`;
        }

        throw new Error(error);
      }

      return config.options;
    }
  }

  return parseOptions;
}