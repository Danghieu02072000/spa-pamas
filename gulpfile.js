var gulp = require('gulp');
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
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('styles', function () {
    var bootstraps = gulp.src('app/pre-scss/vendors/bootstrap/bootstrap.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
       .pipe(sourcemaps.write('../maps/css/'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }));

    var pages = gulp.src('app/pre-scss/pages/*.scss')
       .pipe(sourcemaps.init())
       .pipe(plumber({
           errorHandler: function (error) {
               console.log(error.message);
               this.emit('end');
           }
       }))
       .pipe(sass())
       .pipe(sourcemaps.init({ loadMaps: true }))
       .pipe(autoprefixer('last 2 versions'))
       .pipe(gulp.dest('dist/css/pages'))
       .pipe(rename({ suffix: '.min' }))
       .pipe(cleanCSS())
       .pipe(sourcemaps.write('../../maps/css/pages/'))
       .pipe(gulp.dest('dist/css/pages'))
       .pipe(browserSync.reload({ stream: true }));

    var apps = gulp.src('app/pre-scss/apps/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css/apps'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('../../maps/css/apps/'))
        .pipe(gulp.dest('dist/css/apps'))
        .pipe(browserSync.reload({ stream: true }));

    var main = gulp.src('app/pre-scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('../maps/css/'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }));


    return merge(main, apps, bootstraps, pages);

});

gulp.task('images', function () {
    gulp.src('app/img/**/*')
      .pipe(imagemin())
      .pipe(flatten({ includeParents: [1, 2] }))
      .pipe(gulp.dest('dist/img'))
      .pipe(browserSync.reload({ stream: true }));
});

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

gulp.task('scripts', function () {
    var vendors = gulp.src('app/pre-js/include/vendor/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({ stream: true }));

    var plugin = gulp.src('app/pre-js/include/plugin/*.js')
       .pipe(sourcemaps.init({ loadMaps: true }))
       .pipe(plumber({
           errorHandler: function (error) {
               console.log(error.message);
               this.emit('end');
           }
       }))
       .pipe(concat('plugins.js'))
       .pipe(gulp.dest('dist/js/'))
       .pipe(rename({ suffix: '.min' }))
       .pipe(uglify())
       .pipe(sourcemaps.write('../maps/js'))
       .pipe(gulp.dest('dist/js/'))
       .pipe(browserSync.reload({ stream: true }));

    var pages = gulp.src('app/pre-js/include/pages/*.js')
       .pipe(sourcemaps.init({ loadMaps: true }))
       .pipe(plumber({
           errorHandler: function (error) {
               console.log(error.message);
               this.emit('end');
           }
       }))
       .pipe(rename({ suffix: '.min' }))
       .pipe(uglify())
       .pipe(sourcemaps.write('../../maps/js/pages'))
       .pipe(gulp.dest('dist/js/pages'))
       .pipe(browserSync.reload({ stream: true }));

    var plugins = gulp.src('app/pre-js/include/plugins/*.js')
      .pipe(plumber({
          errorHandler: function (error) {
              console.log(error.message);
              this.emit('end');
          }
      }))
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.reload({ stream: true }));

    var customs = gulp.src('app/pre-js/include/custom/*.js')
       .pipe(sourcemaps.init({ loadMaps: true }))
       .pipe(plumber({
           errorHandler: function (error) {
               console.log(error.message);
               this.emit('end');
           }
       }))
       .pipe(concat('customs.js'))
       .pipe(gulp.dest('dist/js/'))
       .pipe(rename({ suffix: '.min' }))
       .pipe(uglify())
       .pipe(sourcemaps.write('../maps/js'))
       .pipe(gulp.dest('dist/js/'))
       .pipe(browserSync.reload({ stream: true }));

    return merge(vendors, plugin, customs, pages, plugins);

});

gulp.task('pages', function () {
    gulp.src('app/*.html')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({ stream: true }));

});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('app/pre-scss/**/*.scss', ['styles']);
    gulp.watch('app/pre-js/include/**/*.js', ['scripts']);
    gulp.watch('app/**/*.html', ['pages']);
    gulp.watch('app/fonts/*', ['fonts']);
    gulp.watch('app/img/**/*', ['images']);  
});