module.exports = function(grunt) {

	grunt.config('wiredep', {
//		main: {
			app: {
				src: ['<%= yeoman.app %>/index.html'],
				ignorePath:  /\.\.\//
			},
			test: {
				devDependencies: true,
				src: '<%= karma.unit.configFile %>',
				ignorePath:  /(\.\.\/){1,2}bower_components\//,
				fileTypes:{
				  js: {
					block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
					  detect: {
						js: /'(.*\.js)'/gi
					  },
					  replace: {
						js: '\'{{filePath}}\','
					  }
					}
				  }
			},
			sass: {
				src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
				ignorePath: /(\.\.\/){1,2}bower_components\//
			}
//		}
	});
}