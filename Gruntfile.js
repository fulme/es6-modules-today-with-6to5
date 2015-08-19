module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		clean: ['dist'],
		'6to5': {
			options: {
				modules: 'amd'
			},

			build: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.js'],
					dest: 'dist/',
				}],
			}
		},

		copy: {
			main: {
				cwd: './src/sample',
				src: 'index.html',
				dest: 'dist/',
				expand: true,
				flatten: true,
				filter: 'isFile'
			},
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: './',
					name: 'dist/app.js',
					out: 'dist/app.js'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['6to5','copy', 'requirejs'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.registerTask('default', ['watch']);
}