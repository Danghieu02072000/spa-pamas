var gulp = require('gulp');
var del = require('del');
var merge = require('merge-stream');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var flatten = require('gulp-flatten');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

// Styles tasks
gulp.task('styles:all', function () {
    const bootstraps = gulp.src('src/scss/vendors/bootstrap/bootstrap.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('../maps/css/'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));

    // const pages = gulp.src('src/scss/pages/*.scss')
    //     .pipe(sourcemaps.init())
    //     .pipe(plumber({
    //         errorHandler: function (error) {
    //             console.log(error.message);
    //             this.emit('end');
    //         }
    //     }))
    //     .pipe(sass())
    //     .pipe(sourcemaps.init({
    //         loadMaps: true
    //     }))
    //     .pipe(autoprefixer('last 2 versions'))
    //     .pipe(gulp.dest('dist/css/pages'))
    //     .pipe(rename({
    //         suffix: '.min'
    //     }))
    //     .pipe(cleanCSS())
    //     .pipe(sourcemaps.write('../../maps/css/pages/'))
    //     .pipe(gulp.dest('dist/css/pages'))
    //     .pipe(browserSync.reload({
    //         stream: true
    //     }));

    const apps = gulp.src('src/scss/apps/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css/apps'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('../../maps/css/apps/'))
        .pipe(gulp.dest('dist/css/apps'))
        .pipe(browserSync.reload({
            stream: true
        }));

    const main = gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('../maps/css/'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));

    return merge(bootstraps, main, apps);
});

gulp.task('styles:only', function () {
    const apps = gulp.src('src/scss/apps/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css/apps'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('../../maps/css/apps/'))
        .pipe(gulp.dest('dist/css/apps'))
        .pipe(browserSync.reload({
            stream: true
        }));

    const main = gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('../maps/css/'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));

    return merge(main, apps);
});

// Javascript tasks
gulp.task('scripts:all', function () {
    const vendors = gulp.src('src/js/include/vendor/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));

    const plugin = gulp.src('src/js/include/plugin/*.js')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(sourcemaps.write('../maps/js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));

    const pages = gulp.src('src/js/include/pages/*.js')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('../../maps/js/pages'))
        .pipe(gulp.dest('dist/js/pages'))
        .pipe(browserSync.reload({
            stream: true
        }));

    const plugins = gulp.src('src/js/include/plugins/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));

    const customs = gulp.src('src/js/include/custom/*.js')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('customs.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(sourcemaps.write('../maps/js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));

    return merge(vendors, plugin, customs, pages, plugins);
});

gulp.task('scripts:only', function () {
    const customs = gulp.src('src/js/include/custom/*.js')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('customs.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(sourcemaps.write('../maps/js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));

    const plugin = gulp.src('src/js/include/plugin/*.js')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(sourcemaps.write('../maps/js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));

    return merge(customs, plugin);
});

// Html task
gulp.task('pages', function () {
    gulp.src('src/pug/pages/*.pug')
        .pipe(pug({
            pretty: true,
            cache: true,
        }))
        .on('error', function (err) {
            process.stderr.write(err.message + '\n');
            this.emit('end');
        })
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Fonts task
gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Images task
gulp.task('images', function () {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(flatten({
            includeParents: [1, 2]
        }))
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Browser Sync task
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        ghostMode: {
            scroll: true
        }
    });
});

// Clean sourcemaps task
gulp.task('sourcemaps:clean', function () {
    return del('dist/maps', {
        force: true
    });
});

// Watch tasks
gulp.task('w:all', ['browserSync'], function () {
    gulp.watch('src/scss/**/*.scss', ['styles:all']);
    gulp.watch('src/js/include/**/*.js', ['scripts:all']);
    gulp.watch('src/pug/**/*.pug', ['pages']);
    gulp.watch('src/fonts/*', ['fonts']);
    gulp.watch('src/img/**/*', ['images']);
});

gulp.task('w:only', ['browserSync'], function () {
    gulp.watch('src/scss/**/*.scss', ['styles:only']);
    gulp.watch('src/js/include/**/*.js', ['scripts:only']);
    gulp.watch('src/pug/**/*.pug', ['pages']);
    gulp.watch('src/img/**/*', ['images']);
});

// Build tasks
gulp.task('build', ['styles:all', 'scripts:all', 'pages', 'fonts', 'images', 'browserSync']);

gulp.task('build:production', ['styles:all', 'scripts:all', 'pages', 'fonts', 'images', 'sourcemaps:clean', 'browserSync']);