module.exports = () =>
    $.gulp.task('watch', () => {
        for (key in $.path.watch) {
            const pathwatch = $.path.watch[key]
            $.gulp.watch(pathwatch, $.gulp.series(key))
        }
    })