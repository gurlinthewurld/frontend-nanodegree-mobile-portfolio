module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Load the plugins that provide the tasks.

    grunt.loadNpmTasks('grunt-contrib-imagemin');



    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
        imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'views/images',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/'
                }]
              }
            }
    });

    // Default task(s).
    grunt.registerTask('default', [
      'imagemin'
    ]);
};
