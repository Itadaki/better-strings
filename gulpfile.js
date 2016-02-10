var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify');

gulp.task('hint', function(){
    return gulp.src(['index.js', 'lib/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(notify({
        "title": "Gulp!",
        "message": "Executed tasks."
      }));
});

gulp.task('watch', ['hint'], function(){
    gulp.watch(['index.js', 'lib/*.js'], ['default']);
});

gulp.task('default', ['watch']);
