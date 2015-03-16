module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        extract: 'always',
        reporter: require('jshint-stylish')
      },
      all: [
        '*.html'
      ]
    },
    vulcanize: {
      default: {
        options: {},
        files: {
          'dist/index.html' : ['demo.html'],
        }
      }
    }
  });

}
