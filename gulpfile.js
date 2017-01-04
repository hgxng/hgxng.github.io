/*
	#
*/
var gulp = require("gulp");
var concat = require("gulp-concat");
var merge = require("merge-stream");
var jst = require("gulp-jst-concat");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var bsync = require("browser-sync");
var express = require('express');
var app = express();
/*
	# Define main gulp tasks
*/
gulp.task("default", ["copy", "jst", "js", "sass", "server"]);
gulp.task("build", ["copy", "jst", "js", "sass"]);
/*
    ## Copy over files
*/
gulp.task("copy", function () {
    // Copy over stuff
    var html = gulp.src(["src/index.html"]).pipe(gulp.dest("build/"));
    var fonts = gulp.src(["src/assets/fonts/**/"]).pipe(gulp.dest("build/fonts"));
    var js = gulp.src(["src/assets/js/**/"]).pipe(gulp.dest("build/js"));
    var img = gulp.src(["src/assets/img/**/"]).pipe(gulp.dest("build/img"));
    var css = gulp.src(["src/assets/css/**/"]).pipe(gulp.dest("build/css"));
    var merged = merge(html, fonts, css);
    merged.add(js);
    merged.add(img);
    return merged;
});
/*
    ## Bundle the JS
*/
gulp.task('js', function () {
    // Compile
    return gulp.src(
                    [
                        'src/app/**/*.js'
                    , ]).pipe(concat('bundle.js')).pipe(gulp.dest('build/js/'));
});
gulp.task('js-watch', ['copy', 'js'], bsync.reload);
/*
    ## Compile tempaltes
*/
gulp.task('jst', function () {
    // Compile
    return gulp.src(
                    [
                        'src/app/**/*.html'
                    , ]).pipe(jst("templates.js", {
        renameKeys: ['^.*app/(.*).html$', '$1']
    })).pipe(gulp.dest('build/js/'));
});
gulp.task('jst-watch', ['jst'], bsync.reload);
/*
    ## Compile the SASS into a single CSS file
*/
gulp.task('sass', function () {
    // Compile
    return gulp.src('src/assets/scss/index.scss').pipe(sass().on('error', sass.logError))
        // .pipe( autoprefixer() )
        .pipe(rename('style.css')).pipe(gulp.dest('build/css/')).pipe(bsync.stream());
});
/*
    ## Development web server and file watcher
*/
gulp.task("server", function () {
    bsync.init({
        server: './build'
        , open: false
    });
    // Watch files
    gulp.watch('src/app/*.js', ['js-watch']);
    gulp.watch('src/app/**/*.js', ['js-watch']);
    gulp.watch('src/app/**/*.html', ['jst-watch']);
    gulp.watch('src/assets/scss/**/*.scss', ['sass']);
    gulp.watch(['src/assets/js/**/*.js'
                    , 'src/assets/js/**/*.json'
                ], ["js-watch"])
    gulp.watch('src/**/*.html').on('change', bsync.reload);
});
/*
    #   
*/
gulp.task("heroku", ["build"], function () {
    // set the port of our application
    // process.env.PORT lets the port be set by Heroku
    var port = process.env.PORT || 8080;
    // set the view engine to ejs
    app.set('view engine', 'jst');
    // make express look in the public directory for assets (css/js/img)
    app.use(express.static(__dirname + '/build'));
    // set the home page route
    app.get('/', function (req, res) {
        // ejs render automatically looks in the views folder
        res.render('index');
    });
    //
    app.listen(port, function () {
        console.log('Our app is running on http://localhost:' + port);
    });
});