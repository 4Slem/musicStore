let gulp = require('gulp'),
	jade = require('gulp-jade'),
	concat = require('gulp-concat'),
	server = require('gulp-server-livereload'),
	watch = require('gulp-watch'),
	stylus = require('gulp-stylus');

gulp.task('jade', function () {
	gulp.src(['src/jade/**/*.*', '!src/jade/**/_*.*'])
		.pipe(jade())
		.pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
	gulp.src(['src/styles/main.styl'])
		.pipe(stylus())
		.pipe(gulp.dest('dist/css'));
	gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
		.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
	gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/angular/angular.min.js', 'node_modules/angular-ui-router/release/angular-ui-router.min.js', 'src/js/module.js', 'src/js/config/**/*.*', 'src/js/controller/**/*.*', 'src/js/factory/**/*.*', 'node_modules/bootstrap/dist/js/bootstrap.min.js'])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/app'));
});

gulp.task('image', function () {
	gulp.src(['src/images/**/*.*'])
		.pipe(gulp.dest('dist/image'));
});

gulp.task('fonts', function () {
	gulp.src(['src/fonts/**/*.*', 'node_modules/bootstrap/dist/fonts/**/*.*'])
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch', function () {
	gulp.watch(['src/jade/**/*.*'], ['jade']);
	gulp.watch(['src/styles/**/*.*'], ['styles']);
	gulp.watch(['src/image/**/*.*'], ['image']);
	gulp.watch(['src/js/**/*.*'], ['js']);
	gulp.watch(['src/fonts/**/*.*'], ['fonts']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true
    }));
});

gulp.task('default', ['jade', 'styles', 'js', 'image', 'fonts', 'webserver', 'watch']);