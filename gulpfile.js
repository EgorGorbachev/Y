const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const { notify } = require('browser-sync');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require ('gulp-autoprefixer');
const imagemin = require ('gulp-imagemin');
const del = require ('del');
const rename = require ('gulp-rename');

function images() {
    return src('app/image/**/*')
        .pipe(imagemin())
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('dist/image'))
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        
        'app/js/main.js',
        'app/js/video.js',
        'app/js/slider.js',
        'app/js/team.js',
        'app/js/validForm.js'
    ])
    .pipe(uglify())
    .pipe(
        rename({
            extname: '.min.js'
        })
    )
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function browsersync() {
    browserSync.init({
        server:{
            baseDir: 'app/'
        },
        notify: false
    });
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
};

function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/*.min.js',
        'app/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

function watching() {
    watch(['app/scss/*.scss'], styles)
    watch(['app/js/**/*.js', '!app/js/*.min.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
};

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images =images;

exports.build = series(images, build);
exports.default = parallel(styles, browsersync, watching, scripts);