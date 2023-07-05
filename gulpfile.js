const gulp = require('gulp');
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");

gulp.task("minify-html", async () => {
    return gulp.src("app/**/*.html")
    .pipe(htmlmin({ 
        collapseWhitespace: true,
        removeComments: true }))
    .pipe(gulp.dest("public/"));
});


gulp.task('minify-css', async () => {
    return gulp.src("app/sass/*.sass")
    .pipe(sass()).on("error", sass.logError)
    .pipe(autoprefixer({
        overrideBrowserslist:  ['last 14 versions'],
        cascade: false
    }))
    .pipe(cleanCss())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest("public/css/"));
});

gulp.task('minify-js', async () => {
    return gulp.src("app/**/*.js")
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest("public/"));
});

gulp.task("migrate-media", async () => {
    return gulp.src("app/assets/**/*")
    .pipe(gulp.dest("public/assets/"));
});

gulp.task("server", async () => {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    });
    browserSync.watch("public/**/*").on("change", browserSync.reload);
});

gulp.task("watch-files", async () => {
    gulp.watch("app/**/*.html", gulp.series("minify-html"));
    gulp.watch("app/sass/**/*.sass", gulp.series("minify-css"));
    gulp.watch("app/**/*.js", gulp.series("minify-js"));
    gulp.watch("app/assets/**/*", gulp.series("migrate-media"));
});

gulp.task("build", gulp.series("minify-html", "minify-js", "minify-css", "migrate-media"));

gulp.task("default", gulp.parallel("watch-files", "server"));