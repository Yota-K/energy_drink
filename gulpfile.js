const {src, dest, watch} = require('gulp'),
      sass = require('gulp-sass');

const compileSass = () => 
    src('./src/css/main.scss')
    .pipe(
        sass({
            outputStyle: 'expanded'
        })
    )
    .pipe(dest('./src/css'));

const watchSass = () => watch('./src/css/main.scss', compileSass);
exports.default = watchSass;