let fs = require('fs');
let browserify = require('browserify');
let gulp = require('gulp');

gulp.task('default', [], () => {
  browserify('./src/raytrace.js')
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .pipe(fs.createWriteStream('./public/raytrace.js'));
});
