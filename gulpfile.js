const gulp = require("gulp");
const browserSync =  require('browser-sync').create();

gulp.task("hello",function(done) {
    console.log("Привет,мир!");
    done();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");

function minifyCSS() {
  return (
    gulp
      .src("./css/*.css")
      .pipe(cleanCSS())
      .pipe(gulp.dest("minified"))
  );
}

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
    });
    
