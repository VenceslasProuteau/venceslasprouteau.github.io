var input = './sass/**/*.scss';
var output = './public/css';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var minifycss = require('gulp-minify-css');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// ... variables

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest(output))
    .pipe(sassdoc())
    .resume()
});

gulp.task('sassdoc', function () {
  return gulp
    .src(input)
    .pipe(sassdoc())
    .resume();
});

gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'watch' /*, possible other tasks... */]);

gulp.task('prod', ['sassdoc'], function () {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});