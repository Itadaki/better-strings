var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');

gulp.task('hint', function(){
    return gulp.src(['index.js', 'lib/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function(){
    return gulp.src('test/test.js', {read: false})
        .pipe(mocha());
});

gulp.task('watch', ['hint', 'test'], function(){
    gulp.watch(['index.js', 'lib/*.js'], ['default']);
    gulp.watch(['test/test.js'], ['test']);
});

gulp.task('default', ['watch']);
