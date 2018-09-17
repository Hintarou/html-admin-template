var replace = require('gulp-replace');

module.exports = function(gulp, callback) {
	// replace string
	return gulp.src([config.html + '/' + myTextDirection + '/' + myLayoutName + '/' + 'php' + '/' + '*.php'])
		.pipe(replace('<!DOCTYPE html>', '<?php include "chkUserSession.php"; ?><!DOCTYPE html>'))
		.pipe(replace('https://erfancdn.blob.core.windows.net/admin-template/', ''))
		.pipe(gulp.dest(config.html + '/' + myTextDirection + '/' + myLayoutName + '/' + 'php' + '/'));
};