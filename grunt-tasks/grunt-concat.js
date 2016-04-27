module.exports = function(grunt) {

	grunt.config('concat', {

		app: {
			files: {
				'.tmp/styles/app.css': [
					'.tmp/styles/{,*/}*.css',
				]
			}
		}
	});
};