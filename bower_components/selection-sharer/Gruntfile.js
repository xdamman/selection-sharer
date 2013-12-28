var banner = '/* @author: Xavier Damman (@xdamman) - http://github.com/xdamman/selection-sharer - @license: MIT */';
module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      dist: {
        options: {
          banner: banner 
        },
        files: {
          'dist/selection-sharer.css': ['src/*.css']
        }
      }
    },
    uglify: {
      dist: {
        options: {
          banner: banner
        },
        files: {
          'dist/selection-sharer.js': ['src/selection-sharer.js'],
          'dist/bookmarklet.js': ['src/bookmarklet.js']
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
