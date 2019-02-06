module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            font: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/bower_components/components-font-awesome/webfonts',
                        src: '**',
                        dest: 'assets/webfonts/'
                    }
                ]
            }
        },
        less: {
            frontend: {
                options: {
                    cleancss: true
                },
                src: 'assets/less/main.less',
                dest: 'assets/dist/iamafile.css'
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        src: [
                            'assets/bower_components/components-font-awesome/css/fontawesome-all.min.css',
                            'assets/dist/iamafile.css'
                        ],
                        dest: 'assets/dist/iamafile.min.css',
                        separator: ';\n'
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: ';' + "\n\n/**********************************************************/\n\n"
            },
            default: {
                src: [
                    'assets/bower_components/jquery/dist/jquery.min.js',
                    'assets/bower_components/particles.js/particles.min.js',
                    'assets/bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'assets/bower_components/gsap/src/minified/TweenLite.min.js',
                    'assets/bower_components/gsap/src/minified/easing/EasePack.min.js',
                    'assets/bower_components/wow/dis/wow.min.js',
                    'assets/js/*.js'
                ],
                dest: 'assets/dist/iamafile.js'
            }
        },
        uglify: {
            default: {
                files: {
                    'assets/dist/iamafile.min.js': 'assets/dist/iamafile.js'
                }
            }
        },
        watch: {
            default: {
                files: [
                    'assets/less/*.less',
                    'assets/js/*.js'
                ],
                tasks: ['less', 'cssmin', 'concat', 'uglify'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['copy', 'less', 'cssmin', 'concat', 'uglify']);
};