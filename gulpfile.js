var { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var sassPath = './sass/*.sass';

function sassTask(){
  return src(sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('.'));
}

function watchTask(){
  watch([sassPath], sassTask);
}

exports.default = series(
  sassTask,
  watchTask
);
