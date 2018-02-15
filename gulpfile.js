var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	replace = require('gulp-replace'),
	watch = require('gulp-watch');

gulp.task('default', ['build']);

gulp.task('build', function () {
	return gulp.src('src/storm247.oneliner.js')
		.pipe(uglify({
			unsafe: true,
			hoist_vars: true,
			outSourceMap: true,
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('dev', function () {
	var config = require('./.config');
	var publicKey = config.publicKey || '<forgot to create .config.json?>';
	
	return gulp.src('examples/**/*.html')
		.pipe(watch('examples/**/*.html'))
		.pipe(replace('<publicKey>', publicKey))
		.pipe(gulp.dest('dev'));
});