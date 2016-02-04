var gulp = require('gulp')
var uglify = require('gulp-uglifyjs')

gulp.task('uglify', function() {
  gulp.src('ng-ticker.js')
    .pipe(uglify('ng-ticker.min.js'))
    .pipe(gulp.dest('dist'))
})
