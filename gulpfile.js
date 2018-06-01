const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const pckg = require('./package.json');


gulp.task('sass', () => {
  return gulp.src('src/scss/bundle.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass({
      precision: 8,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: pckg.browserslist,
      cascade: false
    }))
    // .pipe(sourcemaps.write())
    .pipe(rename('ui-core.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename('ui-core.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', () => {
  gulp.src([
    'src/js/bootstrap/bootstrap.min.js'
  ])
  .pipe(rename('ui-core.min.js'))
  .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'js']);