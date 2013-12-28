var banner = '/* @author: Xavier Damman (@xdamman) - http://github.com/xdamman/share-selection - @license: MIT */';
module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      dist: {
        options: {
          banner: banner 
        },
        files: {
          'dist/share-selection.css': ['src/*.css']
        }
      }
    },
    uglify: {
      dist: {
        options: {
          banner: banner
        },
        files: {
          'dist/share-selection.js': ['src/*.js']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['uglify','cssmin']);

};
