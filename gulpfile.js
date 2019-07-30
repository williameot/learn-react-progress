var gulp = require("gulp");
// Requires the gulp-sass plugin
var sass = require("gulp-sass");
var sassPath = "./scss";
var publicPath = "./public";
gulp.task("watch", function() {
  gulp.watch(sassPath + "/**/*.scss", gulp.series("sass"));
  // Other watchers
});
gulp.task("sass", function() {
  return gulp
    .src(sassPath + "/main.scss")
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest(publicPath + "/css"));
});
