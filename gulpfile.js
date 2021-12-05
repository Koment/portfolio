// const { src, dest, watch } = require("gulp");

const gulp = require("gulp");

const sass = require("gulp-sass")(require("sass"));

function styles() {
  return gulp.src("sass/main.scss").pipe(sass()).pipe(gulp.dest("css/"));
}

function sledi() {
  gulp.watch("sass/**/*.scss", styles);
}

exports.styles = styles;

exports.sledi = sledi;

// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask;
