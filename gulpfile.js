var gulp         = require('gulp')
var sass         = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var combineMq    = require('gulp-combine-mq')
var uglify       = require('gulp-uglify')
var imagemin     = require('gulp-imagemin')
var pngquant     = require('imagemin-pngquant')
var rename       = require('gulp-rename')
var gulpCopy     = require('gulp-copy')
var browserSync  = require('browser-sync').create()
var injectPartials = require('gulp-inject-partials')

gulp.task('html', function () {
    gulp.src('src/html/**/*.html')
        .pipe(injectPartials())
        .pipe(gulp.dest('./html/'))
        .pipe(browserSync.stream())
})

gulp.task('styles', function () {
    gulp.src('src/assets/_scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            precision: 7
            }).on('error', sass.logError))
        .pipe(combineMq({
                beautify: false
            }))
        .pipe(autoprefixer({
                browsers: ['last 5 versions', 'ie > 8', 'ff > 3'],
                cascade: false
            }))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./html/assets/css/'))
        .pipe(browserSync.stream())
})

gulp.task('scripts', function () {
    gulp.src('src/assets/_js/*.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.extname = '.min.js';
        }))
        .pipe(gulp.dest('./html/assets/js'))
        .pipe(browserSync.stream())
})

gulp.task('images', function () {
    gulp.src('src/assets/_img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('html/assets/img'))
        .pipe(browserSync.stream())
})

gulp.task('assets', function () {
    gulp.src('src/assets/_favicons/*')
        .pipe(gulp.dest('./html/'))
        .pipe(browserSync.stream())

    gulp.src('src/assets/_fonts/*')
        .pipe(gulp.dest('./html/assets/fonts/'))
        .pipe(browserSync.stream())
})

gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: './html'
        },
        notify: false
    })
})

gulp.task('default', ['html', 'styles', 'scripts', 'images', 'assets', 'browsersync'], function () {
    gulp.watch('src/html/**/*.html', ['html'])
    gulp.watch('src/assets/**/*.scss', ['styles'])
    gulp.watch('src/assets/**/*.js', ['scripts'])
    gulp.watch('src/assets/_img/*', ['images'])
    gulp.watch('src/assets/_favicons/*', ['assets'])
    gulp.watch('src/assets/_fonts/*', ['assets'])
})
