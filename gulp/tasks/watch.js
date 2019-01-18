var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    //建設區域網路雲端伺服器
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });
    //當index.html變動則重新整理網頁
    watch('./app/index.html', function() {
        browserSync.reload();
    })
    
    watch('./app/assets/styles/**/*.css', function() {
        console.log('css reloading');
        gulp.start('cssInject');
    })
    
    watch('./app/assets/scripts/**/*.js', function() {
        console.log('js reloading');
        gulp.start('scriptsRefresh');
    })

    

})

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
})

gulp.task('scriptsRefresh', function() {
    browserSync.reload();
})