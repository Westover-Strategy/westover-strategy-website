const gulp = require('gulp');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const rev = require('gulp-rev');
const path = require('path');
const cfg = require('../config');

gulp.task('hash', () =>
  gulp.src([
    `${cfg.styles.destinationPath}/**/*.css`,
    `${cfg.scripts.destinationPath}/**`,
    `${cfg.images.destinationPath}/**`,
    `${cfg.svg.destinationPath}/**`
  ], { base: path.join(process.cwd(), cfg.assetPath) })
    .pipe(vinylPaths(del))
    .pipe(rev())
    .pipe(gulp.dest(cfg.assetPath))
    .pipe(rev.manifest())
    .pipe(gulp.dest(cfg.assetPath))
);
