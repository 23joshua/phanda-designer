// list dependences
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const prefix = require('gulp-autoprefixer')
const minify = require('gulp-clean-css')
const terser = require('gulp-terser')
const imagemin = require('gulp-imagemin')
const imagewebp = require('gulp-webp')

// create functions
function compilescss() {
  return src('src/sass/**/*.sass')
      .pipe(sass())
      .pipe(prefix('last 2 versions'))
      .pipe(minify())
    .pipe(dest('assets/css/'))
}

//optimize and move images
function optimizeimg() {
  return src('src/img/**/*.{jpg,png,svg,gif}') // change to your source directory
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
    ]))
    .pipe(dest('assets/img/')) // change to your final/public directory
};

// webpimages
function webpImage() {
  return src('assets/img/**/*.{jpg,png,svg,gif}')
  .pipe(imagewebp())
  .pipe(dest('assets/img/'))
}

//optimize and move images
function webpImage() {
  return src('assets/img/*.{jpg,png,svg,gif}') // change to your source directory
    .pipe(imagewebp())
    .pipe(dest('assets/img/')) // change to your final/public directory
};

// minify js
function jsmin(){
  return src('src/js/**/*.js') // change to your source directory
    .pipe(terser())
    .pipe(dest('assets/js/')); // change to your final/public directory
}

//watchtask
function watchTask(){
  watch('src/sass/**/*.sass', compilescss); // change to your source directory
  watch('src/js/**/*.js', jsmin); // change to your source directory
  watch('src/img/**/*', optimizeimg); // change to your source directory
  watch('assets/img/*.{jpg,png, svg, gif}', webpImage); // change to your source directory
}

// Default Gulp task 
exports.default = series(
  compilescss,
  jsmin,
  optimizeimg,
  webpImage,
  watchTask
);