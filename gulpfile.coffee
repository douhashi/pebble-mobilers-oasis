gulp   = require 'gulp'
coffee = require 'gulp-coffee'

gulp.task 'compile', () ->
  gulp.src 'coffee/src/**/*.coffee'
    .pipe coffee()
    .pipe gulp.dest('src')
