var gulp = require('gulp');
var markupconfig = require('../config').markup;
var vendorconfig = require('../config').vendor;

gulp.task('markup', function() {
  return gulp.src(markupconfig.src)
    .pipe(gulp.dest(markupconfig.dest));
});

gulp.task('vendor', function() {
  console.log('vendor', vendorconfig.src, vendorconfig.dest);
  return gulp.src(vendorconfig.src)
      .pipe(gulp.dest(vendorconfig.dest));
});