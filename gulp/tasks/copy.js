var gulp = require('gulp');
var config = require('../config.js');

gulp.task('copy:fonts', function () {
  return gulp
    .src(config.src.fonts + '/**/*.{ttf,eot,woff,woff2}')
    .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:lib', function () {
  return gulp
    .src(config.src.lib + '/**/*.*')
    .pipe(gulp.dest(config.dest.lib));
});

gulp.task('copy:rootfiles', function () {
  console.log('ROOT');
  return gulp
    .src(config.src.root + '/*.html')
    .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:img', function () {
  return gulp
    .src([
      config.src.img + '/*.{jpg,png,jpeg,svg,gif}'
    ])
    .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy:html', function () {
  console.log('HTML');
  return gulp
    .src(config.src.html + '/index.html')
    .pipe(gulp.dest(config.dest.html));
});

gulp.task('copy:video', function () {
  return gulp
    .src(config.src.video + '/*.*')
    .pipe(gulp.dest(config.dest.video));
});

// gulp.task('copy:root:html', function() {
//     console.log('Root HTML');
//     return gulp
//         .src([config.src + '/*.html'])
//         .pipe(gulp.dest(config.dest.html));
// });

//todo add handlebars
gulp.task('copy', [
  'copy:img',
  // 'copy:rootfiles',
  // 'copy:lib',
  'copy:fonts',
  'copy:html',
  //'copy:video'
  // 'copy:root:html'
]);
gulp.task('copy:watch', function () {
  gulp.watch(config.src.img + '/*', ['copy']);
  gulp.watch(config.src.html + '/index.html', ['copy']);
});
