module.exports = function (grunt) {
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
  
  
    grunt.initConfig({
      jshint: {
        options: {
          predef: ["document", "console", "firebase", "angular", "app", "moment"],
          esnext: true,
          globalstrict: true,
          globals: {
            "app": true
          }
        },
        // files: ['../javascripts/**/*.js']
        files: ['../app/*']
      },
      sass: {
        dist: {
          files: {
            '../styles/main.css': '../sass/main.scss'
          }
        }
      },
      watch: {
        options: {
          livereload: true,
        },
        sass: {
          files: ['../sass/**/*.scss'],
          tasks: ['sass']
        },
        javascripts: {
          files: ['../app/**/*.js'],
          tasks: ['jshint']
        }
      },
      clean: {
        options: { force: true },
        public: ['../dist']
      },
      copy: {
        dev: {
          files: [{
            expand: true,
            cwd: "../",
            src: [
              "index.html",
              "img/*",
              "styles/**/*.css",
              "lib/node_modules/jquery/dist/jquery.min.js",
              "lib/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
              "lib/node_modules/bootstrap/dist/css/bootstrap.min.css",
              "lib/node_modules/font-awesome/css/font-awesome.min.css",
              "lib/node_modules/simple-line-icons/css/simple-line-icons.css",
              "lib/node_modules/startbootstrap-stylish-portfolio/css/stylish-portfolio.css",
              "lib/node_modules/startbootstrap-stylish-portfolio/js/stylish-portfolio.js",
              "lib/node_modules/jquery.easing/jquery.easing.min.js",
              "lib/node_modules/angular/angular.min.js",
              "lib/node_modules/angular-route/angular-route.min.js",
              "lib/node_modules/firebase/firebase.js",
              "lib/node_modules/angularfire/dist/angularfire.min.js",
            //   "javascripts/**/*.js",
              "app/**/*",
            ],
            dest: "../dist/"
          }]
        }
      }
    });
  
    grunt.registerTask('default', ['jshint', 'sass', 'watch']);
    grunt.registerTask('deploy', ['sass', 'copy']);
    grunt.registerTask('cleanit', ['clean']);
  };