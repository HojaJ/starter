const 
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('css', () => {
  return gulp
    .src('./scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['css'], () => {
    browserSync.init({
        notify: false,
        server: {
          baseDir: './'
        }
    });
    gulp.watch('scss/**/*.scss', ['css']);
    gulp.watch('./*.html').on('change', browserSync.reload);
  });