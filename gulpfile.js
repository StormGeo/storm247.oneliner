var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	gzip = require('gulp-gzip'),
	replace = require('gulp-replace'),
	watch = require('gulp-watch'),
	config = require('./.config');

var publicKey = config.publicKey || '<forgot to create .config.json?>';

gulp.task('default', ['build']);

gulp.task('build', function () {
	return gulp.src('src/index.js')
		.pipe(concat('storm247-oneline.min.js'))
		.pipe(uglify({
			unsafe: true,
			hoist_vars: true,
			outSourceMap: true,
		}))
		.pipe(gzip({}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('dev', function () {
	return gulp.src('examples/**/*.html')
		.pipe(watch('examples/**/*.html'))
		.pipe(replace('<publicKey>', publicKey))
		.pipe(gulp.dest('dev'));
});