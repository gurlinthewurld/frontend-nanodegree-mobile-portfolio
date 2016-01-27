module.exports = function(grunt) {
  // Load JSHint task
  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
          scripts: {
              expand: true,
              src: ['js/*.js', 'views/js/*.js'],
              dest: 'dist',
              ext: '.min.js'
          }
      }
  });


  // Default task.
  grunt.registerTask('default', 'uglify');


};
