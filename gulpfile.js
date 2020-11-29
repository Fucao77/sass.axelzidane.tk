const { src, dest, symlink, parallel, watch } = require('gulp');
const del = require('del');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Watch Sass
function watcher(done){
    watch('./sass/*.scss', sass)
    browserSync.reload();
    done();
}



// Export des function()
module.exports = {
    watcher,
    browser: parallel(browser, watcher)

}