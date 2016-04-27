module.exports = function(grunt) {

	grunt.config('copy', {
		
		dist: {
			files: [{
			  expand: true,
			  dot: true,
			  cwd: '<%= yeoman.app %>',
			  dest: '<%= yeoman.dist %>',
			  src: [
				'*.{ico,png,txt}',
				'*.html',
				'images/{,*/}*.{webp}',
				'styles/fonts/{,*/}*.*'
			  ]
			}, {
			  expand: true,
			  cwd: '.tmp/images',
			  dest: '<%= yeoman.dist %>/images',
			  src: ['generated/*']
			}, {
			  expand: true,
			  cwd: '.',
			  src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
			  dest: '<%= yeoman.dist %>'
			}]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
	  
	  dev: {
			expand: true,
			dot: true,
			
			dest: '<%= yeoman.app %>/styles/app.css',
			src: [
				'.tmp/styles/app.css',
			]
		}
		
	});
}
