module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port:5080,
          base:'',
          hostname:'localhost',
          livereload:35729
        }
      }
    },
    watch:{
      options: {
        livereload: true
      },
      css: {
        files: 'css/*.css'
      },
      html: {
        files: 'views/*.hmtl'
      },
      js: {
        files: '*.js'
      }
    },
      wiredep:{
        target:{
          src:[
            'index.html'
          ],
          options:{
            exclude:['bower/jquery', 'bower/bootstrap/dist/js', 'node_modules/*']
          }
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect','wiredep','watch']);

};