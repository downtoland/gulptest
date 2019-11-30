let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat');
gulp.task('sass',()=>{
    gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
})      
gulp.task('js',()=>{
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
})
gulp.task('img',()=>{
    gulp.src('./src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})
gulp.task('default',()=>{
    gulp.watch('./src/img/*.*','img');
    gulp.watch(['./src/sass/*.scss','./src/js/*.js'],['sass','js']);

})