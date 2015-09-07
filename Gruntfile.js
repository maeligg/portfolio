module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/*.js'
                ],
                dest: 'js/prod/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/prod/production.js',
                dest: 'js/prod/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/prod/'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/styles.css': 'sass/styles.scss'
                }
            }
        },


        watch: {

                    scripts: {
                        files: ['js/*.js'],
                        tasks: ['concat', 'uglify'],
                        options: {
                            spawn: false,
                        },
                    },
                    images: {
                        files: ['img/dev/*.{png,jpg,gif}'],
                        tasks: ['imagemin'],
                        options: {
                            spawn: false,
                        },
                    },
                    css: {
                        files: ['sass/*.scss'],
                        tasks: ['sass'],
                        options: {
                            spawn: false,
                        }
                    }
                }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};