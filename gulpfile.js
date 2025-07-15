const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
}

function watchFiles() {
    gulp.watch('app/**/*.scss', compileSass);
}

const build = gulp.series(compileSass, watchFiles);

exports.default = build;

