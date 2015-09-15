var gulp = require('gulp');
var less = require('gulp-less');

var paths = {
    less : {
        src : 'styles/less/*.less',
        dest : 'styles/'
    }
};

gulp.task('less', function() {
    gulp.src(paths.less.src)
        .pipe(less({errLogToConsole: true}))
        .pipe(gulp.dest(paths.less.dest));
});

// watch update on less
gulp.task('watch', function() {
    gulp.watch(paths.less.src, ['less']);
});

gulp.task('default', ['less', 'watch']);
