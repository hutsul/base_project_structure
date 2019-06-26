var gulp         = require('gulp');
var scss         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var config       = require('../config');
var csso = require('postcss-csso');

var processors = [
    autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }),
    require('lost'),
    csso
];

gulp.task('scss', function() {
    return gulp
        .src(config.src.sass + '/*.{sass,scss}')
        .pipe(sourcemaps.init())
        .pipe(scss({
            outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
            precision: 5
        }))
        .on('error', config.errorHandler)
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest.css));
});

gulp.task('scss:watch', function() {
    gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['scss']);
});