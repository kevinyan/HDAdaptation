// Gulp.js 配置
var gulp = require('gulp'),
    postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var fontstack = require('fontstack');
var demo = require('imageadaptor');

// 应用 PostCSS 插件
gulp.task('css', function() {
  var plugins = [
        autoprefixer({browsers: ['last 3 version']}),
        fontstack(),
        demo()
    ];

  return gulp.src('./test/*.css')
      .pipe(postcss(plugins))
      .pipe(gulp.dest('./dest'));
});
