const gulp = require('gulp');
    concat = require('gulp-concat');

gulp.task('css', () => {
    gulp.src('styles/**/*.css')
    .pipe(concat('common.css'))
    .pipe(gulp.dest('./'));
});