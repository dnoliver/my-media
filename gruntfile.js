module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  
  var config = {};
  
  config.closureDepsWriter = {
    options: {
      closureLibraryPath: './node_modules/closure-library',
      root_with_prefix: [
        '"app/ ../../../../app/"'
      ]
    },
    all: {
      dest: 'app/deps.js'
    }
  };
  
  config.jshint = {
    all: ['app/src/**/*.js']
  };
  
  grunt.initConfig(config);
  
  grunt.registerTask('default', ['jshint','closureDepsWriter']);
};
