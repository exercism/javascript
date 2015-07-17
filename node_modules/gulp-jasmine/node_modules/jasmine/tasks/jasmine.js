'use strict';

module.exports = function(grunt) {
  var Jasmine = require('../lib/jasmine');

  grunt.registerTask('specs', function() {
    var jasmine = new Jasmine();
    var done = this.async();

    jasmine.loadConfigFile('./spec/support/jasmine.json');
    jasmine.onComplete(done);
    jasmine.execute();
  });
};
