var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
 
// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
	'react',
	'react-dom',
	'jquery'
];

// keep a count of the times a task refires
var scriptsCount = 0;

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('web/css'));
});
 
gulp.task('scripts', function() {
    bundleApp(false);
});
 
gulp.task('deploy', function() {
	bundleApp(true);
});
 
gulp.task('watch', function() {
	gulp.watch(['./scss/*.scss'], ['sass']);
	gulp.watch(['./app/*.js'], ['scripts']);
});
 
gulp.task('default', ['scripts','watch','sass']);

// Private Function
function bundleApp(isProduction) {
	scriptsCount++;

	var appBundler = browserify({
    	entries: './app/app.js',
    	debug: true
  	})

	//For dev only
  	if (!isProduction && scriptsCount === 1) {
  		browserify({
			require: dependencies,
			debug: true
		})
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(gulp.dest('./web/js/'));
  	}
  	if (!isProduction){
  		dependencies.forEach(function(dep) {
  			appBundler.external(dep);
  		})
  	}
 
  	appBundler
  		// transform ES6 and JSX to ES5 with babelify
	  	.transform("babelify", {presets: ["es2015", "react"]})
	    .bundle()
	    .on('error',gutil.log)
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest('./web/js/'));
}