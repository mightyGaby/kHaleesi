var gulp = require('gulp');

var babelify = require('babelify'),
	browserify = require('browserify'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	gutil = require('gulp-util'),
	rename = require("gulp-rename"),
	sass = require('gulp-sass'),
	source = require('vinyl-source-stream');
 
// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
	'react',
	'react-dom',
	'jquery'
];

// Keep a count of the times a task refires
var scriptsCount = 0;

// Compile Sass
gulp.task('sass', function() {
    return gulp.src([
    	'scss/**/*.scss',
    	'scss/*.scss', 
    	'!scss/includes/*.scss'
    	])
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Minify CSS
gulp.task('minify-css', function() {
	return gulp.src([
		'css/*.css', 
		'css/**/*.css'
		])
	.pipe(rename({
	   suffix: '.min'
	}))
	.pipe(concat('style.min.css'))
	.pipe(cleanCSS({debug: true}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
	.pipe(gulp.dest('web/css/min/'));
});
 
gulp.task('scripts', function() {
    bundleApp(false);
});
 
gulp.task('deploy', function() {
	bundleApp(true);
});
 
gulp.task('watch', function() {
	// Watch the .scss files for changes and run 'sass' task
	gulp.watch(['scss/**/*.scss', 'scss/*.scss', '!scss/variables.scss', '!scss/mixins.scss'], ['sass']);
    
    // Watch the .css files for changes and run 'minify-css' task
    gulp.watch('css/*.css', ['minify-css']);

	// Watch the .js files for changes and run 'scripts' task
	gulp.watch(['./app/*.js', './app/pages/*.js'], ['scripts']);
});
 
gulp.task('default', ['scripts','watch','sass','minify-css']);

// Private Function
function bundleApp(isProduction) {
	scriptsCount++;

	var appBundler = browserify({
    	entries: ['./app/app.js'],
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