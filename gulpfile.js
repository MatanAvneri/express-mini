var gulp = require('gulp'),
  template = require('gulp-template')

gulp.task('default', function () {
  return gulp.src(__dirname + '/app/templates/**')
    .pipe(template({})) // Empty data for now
    .pipe(gulp.dest('./')); // Relative to cwd
})
