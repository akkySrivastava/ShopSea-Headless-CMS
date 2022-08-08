import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

gulp.task("sass", () => {
    console.log("gulp runnn");
});

gulp.task("sass", () => {
    console.log("hello app");
    return gulp.src("src/assets/sass/app.scss").pipe(sass()).pipe(gulp.dest("src"));
});

gulp.task("watch", () => {
    gulp.watch("src/assets/sass/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("watch"));
