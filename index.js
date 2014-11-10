/*jshint node:true, es3:false*/
/*globals require, it, describe*/
var _ = require('lodash'),
  mout = require('mout');

exports.classify = function (name) {
  return mout.string.pascalCase(name);
};

exports.titleize = function (name) {
  return mout.string.properCase(mout.string.replace(mout.string.hyphenate(name), ['-', '_'], ' '));
};

exports.hyphenate = function (name) {
  var name = name.split('.').join('-');
  return mout.string.replace(mout.string.hyphenate(name), ['_'], '-')
}

exports.camelize = function (name) {
  return mout.string.camelCase(name)
}
