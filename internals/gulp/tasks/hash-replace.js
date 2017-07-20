const argv = require('yargs').boolean('p').argv;
const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');
const path = require('path');
const fs = require('fs');
const cfg = require('../config');

/**
 * Production Mode
 * if set, the css output will be optimized
 * @type {Boolean}
 */
const isProduction = argv.p;

const manifest = gulp.src(`${path.join(process.cwd(), cfg.assetPath)}/rev-manifest.json`);

gulp.task('hash-replace', () => {
  if (isProduction) {
    
    fs.readdir(path.join(process.cwd(), cfg.assetPath), (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    })

    console.log("base", path.join(process.cwd(), cfg.assetPath));
    // console.log(`./${cfg.assetPath}/rev-manifest.json`);
    console.log(manifest);
    return gulp.src([
      `${cfg.destinationPath}/**/*.html`,
      `${cfg.destinationPath}/**/*.xml`,
      `${cfg.destinationPath}/**/*.json`,
      `${cfg.destinationPath}/**/*.css`,
      `${cfg.destinationPath}/**/*.js`
    ])
      .pipe(revReplace({ manifest, replaceInExtensions: ['.js', '.css', '.html', '.xml', '.json'] }))
      .pipe(gulp.dest(cfg.destinationPath));
  }
  return 0;
});
