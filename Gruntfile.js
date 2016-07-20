module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["www"],
        sass: {
            dist: {
                files: {
                    'www/css/main.css': 'src/sass/main.scss'
                }
            }
        },
        copy: {
            index: {
                expand: true,
                src: ['src/*.html'],
                dest: 'www/',
                filter: 'isFile',
                flatten: true
            }
        },
        cssmin: {
            'www/css/main.min.css': 'www/css/main.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['clean', 'copy', 'sass', 'cssmin']);

};
