module.exports = function(grunt) {
	
	grunt.config('jshint', {
		options: {
			jshintrc: '.jshintrc',
			reporter: require('jshint-stylish')
		  },
		  all: {
			src: [
			  'Gruntfile.js',
			  '<%= yeoman.app %>/scripts/{,*/}*.js'
			]
		  },
		  test: {
			options: {
			  jshintrc: 'test/.jshintrc'
			},
			src: ['test/spec/{,*/}*.js']
		  }
		});
	
}