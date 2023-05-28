const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

const compressImage = () => {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

const compressJs = () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

const compileSass = () => {
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

exports.default = () => {
  gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass))
  gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(compressJs))
  gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.series(compressImage))
}