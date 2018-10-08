const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const less = require('gulp-less');
const base64 = require('gulp-base64');

const cwd = process.cwd();
const libDir = path.join(cwd, 'lib');

gulp.task('dist', () => {
    return gulp.src(['src/**/*.scss', 'src/**/*.less', 'src/**/*.png', 'src/**/*.jpg', 'src/**/*.gif'])
        .pipe(base64())
        .pipe(gulp.dest(libDir));
});

gulp.task('less', () => {
    return gulp.src(['lib/index.less', 'lib/**/*.less'])
        .pipe(less({ includePaths: ['/lib/'] }))
        .pipe(gulp.dest(libDir));
});

gulp.task('sass', () => {
    return gulp.src(['lib/index.scss', 'lib/**/*.scss'])
        .pipe(sass({ includePaths: ['/lib/'] }))
        .pipe(gulp.dest(libDir));
});

gulp.task('compile', ['dist'], () => {
    return gulp.src(['lib/index.less', 'lib/**/*.less'])
        .pipe(less({ includePaths: ['/lib/'] }))
        .pipe(gulp.dest(libDir));
});
