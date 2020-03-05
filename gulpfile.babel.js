import { src, dest, watch, parallel, series, task } from "gulp";
import del from "del";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import imagemin from "gulp-imagemin";
import flatten from "gulp-flatten";
import rename from "gulp-rename";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import pug from "gulp-pug";
const browsersync = require("browser-sync").create();

const files = {
  global: {
    dist: "dist",
    src: "src"
  },
  bootstrap: {
    src: "src/scss/vendors/bootstrap",
    glob: "src/scss/vendors/bootstrap/bootstrap.scss",
    dest: "dist/css"
  },
  css: {
    src: "src/scss",
    glob: "src/scss/**/!(plugins|custons).scss",
    dest: "dist/css",
    excl: "!src/scss/vendors/**/*.scss"
  },
  cssPlugins: {
    src: "src/scss",
    glob: "src/scss/plugins.scss",
    dest: "dist/css"
  },
  fonts: {
    src: "src/fonts",
    glob: "src/fonts/**/*",
    dest: "dist/fonts"
  },
  images: {
    src: "src/img",
    glob: "src/img/**/*",
    dest: "dist/img"
  },
  scriptCustoms: {
    src: "src/js",
    glob: "src/js/include/custom/*.js",
    dest: "dist/js"
  },
  scriptVendors: {
    src: "src/js",
    glob: "src/js/include/vendor/*.js",
    dest: "dist/js"
  },
  scriptLibs: {
    src: "src/js",
    glob: "src/js/include/plugin/*.js",
    dest: "dist/js"
  },
  scriptPlugins: {
    src: "src/js",
    glob: "src/js/include/plugins/*.js",
    dest: "dist/js"
  },
  templates: {
    src: "src/pug",
    glob: "src/pug/pages/*.pug",
    watcher: "src/pug/**/*.pug",
    dest: "dist"
  },
  maps: {
    css: "../maps/css",
    script: "../maps/script",
    src: "dist/maps"
  }
};

export const browserSync = done => {
  browsersync.init({
    server: {
      baseDir: files.global.dist
    },
    port: 3000
  });
  done();
};

export const browserSyncReload = done => {
  browsersync.reload();
  done();
};

// Styles tasks
export const styleBootstrap = done => {
  src(files.bootstrap.glob)
    .pipe(sourcemaps.init())
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(sass())
    .pipe(
      sourcemaps.init({
        loadMaps: true
      })
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(dest(files.bootstrap.dest))
    .pipe(sourcemaps.write(files.maps.css))
    .pipe(dest(files.bootstrap.dest))
    .pipe(browsersync.stream());
  done();
};

export const styleMain = done => {
  src([files.css.glob, files.css.excl])
    .pipe(sourcemaps.init())
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(sass())
    .pipe(
      sourcemaps.init({
        loadMaps: true
      })
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(dest(files.css.dest))
    .pipe(sourcemaps.write(files.maps.css))
    .pipe(dest(files.css.dest))
    .pipe(browsersync.stream());
  done();
};

export const stylePlugin = done => {
  src([files.cssPlugins.glob])
    .pipe(sourcemaps.init())
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(sass())
    .pipe(
      sourcemaps.init({
        loadMaps: true
      })
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(dest(files.cssPlugins.dest))
    .pipe(sourcemaps.write(files.maps.css))
    .pipe(dest(files.cssPlugins.dest))
    .pipe(browsersync.stream());
  done();
};

// Javascript tasks
export const scriptVendors = done => {
  src(files.scriptVendors.glob)
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(concat("vendors.js"))
    .pipe(dest(files.scriptVendors.dest))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(uglify())
    .pipe(dest(files.scriptVendors.dest));
  done();
};

export const scriptLibs = done => {
  src(files.scriptLibs.glob)
    .pipe(
      sourcemaps.init({
        loadMaps: true
      })
    )
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(concat("plugins.js"))
    .pipe(dest(files.scriptLibs.dest))
    .pipe(sourcemaps.write(files.maps.script))
    .pipe(dest(files.scriptLibs.dest));
  done();
};

export const scriptPlugins = done => {
  src(files.scriptPlugins.glob)
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(dest(files.scriptPlugins.dest));
  done();
};

export const scriptCustoms = done => {
  src(files.scriptCustoms.glob)
    .pipe(
      sourcemaps.init({
        loadMaps: true
      })
    )
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(concat("customs.js"))
    .pipe(dest(files.scriptCustoms.dest))
    .pipe(sourcemaps.write(files.maps.script))
    .pipe(dest(files.scriptCustoms.dest));
  done();
};

// Html task
export const templates = done => {
  src(files.templates.glob)
    .pipe(
      pug({
        pretty: true,
        cache: true
      })
    )
    .on("error", function(err) {
      process.stderr.write(err.message + "\n");
      this.emit("end");
    })
    .pipe(dest(files.templates.dest));
  done();
};

// Fonts task
export const fonts = done => {
  src(files.fonts.glob)
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(dest(files.fonts.dest));
  done();
};

// Images task
export const images = done => {
  src(files.images.glob)
    .pipe(imagemin())
    .pipe(
      flatten({
        includeParents: [1, 2]
      })
    )
    .pipe(dest(files.images.dest));
  done();
};

// Clean sourcemaps task
export const cleanSourceMap = done => {
  del(files.maps.src, {
    force: true
  });
  done();
};

export const dev = done => {
  browsersync.init({
    server: {
      baseDir: files.global.dist
    },
    ghostMode: {
      scroll: true
    }
  });
  watch(files.bootstrap.glob, series(styleBootstrap));
  watch(files.css.glob, series(styleMain));
  watch(files.cssPlugins.glob, series(stylePlugin));
  watch(files.scriptCustoms.glob, series(scriptCustoms, browserSyncReload));
  watch(files.scriptLibs.glob, series(scriptLibs, browserSyncReload));
  watch(files.scriptVendors.glob, series(scriptVendors, browserSyncReload));
  watch(files.scriptPlugins.glob, series(scriptPlugins, browserSyncReload));
  watch(files.templates.watcher, series(templates, browserSyncReload));
  watch(files.fonts.glob, series(fonts, browserSyncReload));
  watch(files.images.glob, series(images, browserSyncReload));
  done();
};

export const build = parallel(
  styleBootstrap,
  styleMain,
  stylePlugin,
  scriptCustoms,
  scriptLibs,
  scriptVendors,
  scriptPlugins,
  templates,
  images,
  fonts
);

export const clean = series(
  cleanSourceMap
);
