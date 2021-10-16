const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('html', function () {
    return gulp.src('source/*.html')
        .pipe(gulp.dest('./build'))
})

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    })

    gulp.watch('source/*.html', gulp.series('html'))
    gulp.watch("source/*.html").on('change', browserSync.reload)
    gulp.watch('source/css/*.css', gulp.series('css'))
    gulp.watch("source/css/*.css").on('change', browserSync.reload)
})

gulp.task('css', function () {
    return gulp.src('source/css/*.css')
        .pipe(gulp.dest('build/css'))
})