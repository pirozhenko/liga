var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps'),
    iconfont     = require("gulp-iconfont"),
    consolidate  = require("gulp-consolidate");

gulp.task('sass', function () {
  return gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(browser.stream({match: '**/*.css'}))
});

// Starts a BrowerSync instance
gulp.task('serve', ['sass'], function(){
  browser.init({
        server: {
            baseDir: "./"
        }
    });
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve'], function() {
  gulp.watch(['assets/scss/**/*.scss'], ['sass']);
  gulp.watch('./**/*.html').on('change', browser.reload);
});