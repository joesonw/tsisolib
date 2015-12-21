var gulp    = require('gulp');
var ts      = require('gulp-typescript');
var merge   = require('merge2');

var TS_SRC = './src/index.ts';


gulp.task('ts', function() {
    var result = gulp.src(TS_SRC)
        .pipe(ts({
            target: "ES5",
            module: "commonjs",
            declaration: true,
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            sourceMap: false
        }));
    return merge([
        result.dts.pipe(gulp.dest('builds')),
        result.js.pipe(gulp.dest('builds'))
    ]);
});
