module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Load the plugins that provide the tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTask('grunt-contrib-cssmin');
    grunt.loadNpmTasks('load-grunt-tasks');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-inline-css');


    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        },
        concat:{
          dist: {
            src: config.jsSrcDir+'*.js'
            dest: config.jsConcatDir+'*.js'
          }
        },
        cssmin: {
          dist: {
            src: config.scssDir+'style.js',
            dest: config.cssDir+'style.js'
          }
        },
        jshint: {
            options: {
              "eqeqeq": true
            },
            all:
              'Gruntfile.js',
              config.jsSrcDir+.'*js'
        },
        imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'src/images',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/'
          }]
        },
        inline_css: {
        main: {
          options: {
          },
          files: {
            'index.html': 'index.html'
            }
          }
        }
      }
      }
    });

	//Project configuration and task definition
	//The project configuration is defined as an object passed to grunt.initConfig()method
	grunt.initConfig({
    	responsive_images: {
        dev: {
    		options: {
      			// Task-specific options go here.
      			engine: 'im',
      			sizes: [
            {
      				width: 100,
      				upscale: true,
              quality: 60
      			}]
    		},
    		files: [{
      			// Target-specific file lists and/or options go here.
      			expand: true,
      			src: ['pizzeria.jpg'],
            cwd: 'src/views/images/',
      			dest: 'dist/views/images/'
    		}]
  		}
      } // for responsive_images
	}); // for grunt.initConfig()

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'responsive_images','concat', 'imagemin', 'cssmin', 'inline_css']);

};
