 // The actual grunt server settings
var modRewrite = require('connect-modrewrite');

module.exports = function(grunt) {
	
	grunt.config('open', {
		
		dev : {
			path: 'yeoman.com',
			app: 'Firefox'
		},
		
	});
};