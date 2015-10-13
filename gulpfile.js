var gulp = require('gulp');
var chokidar = require('chokidar');

gulp.task('build', function (done) {
	return gulp.src('src/main.css')
		.pipe(gulp.dest('dist'));
});

gulp.task('dev', function () {
	chokidar.watch('src/**/*.css')
	.on('change', function (event) {
		console.log(event);
		gulp.start('build');
	})
})
