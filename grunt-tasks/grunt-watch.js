// Watches files for changes and runs tasks based on the changed files

module.exports = function(grunt) {
	
	grunt.config('watch', {
		bower: {
		  files: ['bower.json'],
		  tasks: ['wiredep']
		},
		js: {
		  files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
		  tasks: ['newer:jshint:all', 'newer:jscs:all'],
		  options: {
			livereload: '<%= connect.options.livereload %>'
		  }
		},
		jsTest: {
		  files: ['test/spec/{,*/}*.js'],
		  tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
		},
		compass: {
		  files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
		  tasks: ['compass:server', 'postcss:server','concat','copy:dist']
		},
		gruntfile: {
		  files: ['Gruntfile.js']
		},
		livereload: {
		  options: {
			livereload: '<%= connect.options.livereload %>',
			middleware: function (connect) {
			  return [
				modRewrite([
				  '!\\.html|\\.js|\\.css|\\.png$ /index.html [L]'
				]),
				lrSnippet,
				mountFolder(connect, '.tmp'),
				mountFolder(connect, grunt.config('yeoman').app)
			  ];
			}
		  },
		  files: [
			'<%= yeoman.app %>/{,**/}*.html',
			'.tmp/styles/{,*/}*.css',
			'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
		  ]
		}
	});
}

