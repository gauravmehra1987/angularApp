 // The actual grunt server settings
var modRewrite = require('connect-modrewrite');

module.exports = function(grunt) {
	
	grunt.config('connect', {
		
		options: {
		  port: 9000,
		  // Change this to '0.0.0.0' to access the server from outside.
		  hostname: 'localhost',
		  livereload: 35729
		},
		livereload: {
		  options: {
			open: true,
			middleware: function (connect) {
			  return [
				connect.static('.tmp'),
				connect().use(
				  '/bower_components',
				  connect.static('./bower_components')
				),
				connect().use(
				  '/app/styles',
				  connect.static('./app/styles')
				),
				connect().use(
				  '/app/images',
				  connect.static('./app/images')
				),
				modRewrite([
				  '!\\.html|\\.js|\\.css|\\.png|\\.jpg$ /index.html [L]'
				]),
				connect.static(grunt.config('yeoman').app)
			  ];
			}
		  }
		},
		
		test: {
		  options: {
			port: 9001,
			middleware: function (connect) {
			  return [
				connect.static('.tmp'),
				connect.static('test'),
				connect().use(
				  '/bower_components',
				  connect.static('./bower_components')
				),
				connect.static(appConfig.app)
			  ];
			}
		  }
		},
		dist: {
		  options: {
			open: true,
			
			base: '<%= yeoman.dist %>'
		  }
		}
		
		
	});
};