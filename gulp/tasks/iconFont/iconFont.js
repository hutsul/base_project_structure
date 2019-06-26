var gulp = require('gulp');
var plumber = require('gulp-plumber');
var iconfont = require('gulp-iconfont');
var iconfontTemplate = require('gulp-iconfont-template');
var iconfontCss = require('gulp-iconfont-css');
var svgmin = require('gulp-svgmin');
var config = require('../../config');

//todo add consolidate and config templater

gulp.task('iconFont', function () {
    gulp.src(config.src.iconsFont + '/*.svg')
        .pipe(plumber({
            errorHandler: config.errorHandler
        }))
        .pipe(iconfontTemplate({
            fontName: 'iconFont',
            path: 'gulp/tasks/iconFont/fontMapTemplate.html',
            fontPath: config.src.fonts + '/icon-font/',
            targetPath: '../../html/tp.html',
            cssClass: 'ic'
        }))
        .pipe(plumber({
            errorHandler: config.errorHandler
        }))
        .pipe(iconfontCss({
            fontName: 'iconFont',
            path: 'gulp/tasks/iconFont/iconFontTemplate.scss',
            targetPath: '../../scss/layouts/_icon.scss',
            fontPath: '../fonts/icon-font/',
            cssClass: 'ic'
        }))
        .pipe(plumber({
            errorHandler: config.errorHandler
        }))
        .pipe(iconfont({
            fontName: 'iconFont',
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            normalize:true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest(config.src.fonts + '/icon-font'));
});

gulp.task('iconFont:watch', function() {
    gulp.watch(config.src.iconsFont + '/*.svg', ['iconFont']);
});