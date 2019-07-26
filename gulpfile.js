const gulp = require("gulp");
const plumber = require("gulp-plumber");
const merge = require("merge-stream");

function modules() {
    //jQuery
    var jquery = gulp.src('./node_modules/jquery/dist/jquery.slim.min.js')
        .pipe(gulp.dest('./stylesheets/js'));
    //jQuery Easing
    var easing = gulp.src('./node_modules/jquery.easing/jquery.easing.compatibility.js')
        .pipe(gulp.dest('./stylesheets/js'));
    //popper.js
    var popper = gulp.src('./node_modules/popper.js/dist/umd/popper.min.js')
        .pipe(gulp.dest('./stylesheets/js'));
    //bootstrap.js
    var bootstrap = gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./stylesheets/js'));
    return merge(jquery, easing, popper, bootstrap);
}
gulp.task('default', modules);