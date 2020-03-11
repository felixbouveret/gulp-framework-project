const GulpClient = require('gulp')
const plugins = require('gulp-load-plugins')()
const optionsBS = {
  server: {
    baseDir: "./dist/"
  },
  files       : [
    'dist/**/*'
  ],
  watchEvents : ['add', 'change', 'unlink', 'addDir', 'unlinkDir'],
  open        : false,
  notify      : false,
  ghostMode   : false,
  ui: {
    port: 8001
  }
}
var browsersync = false

console.log(plugins);

GulpClient.task('browsersync', () => {
  if (browsersync === false) {
    browsersync = require('browser-sync').create()
    browsersync.init(optionsBS)
  }
})

GulpClient.task('css-dev', () => {
  return GulpClient.src('./src/assets/source.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.sourcemaps.write())
    .pipe(GulpClient.dest('./dist/assets/'))
})

GulpClient.task('css-build', () => {
  return GulpClient.src('./dist/assets/*')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.groupCssMediaQueries())
    .pipe(plugins.autoprefixer({
      overrideBrowserslist: ['last 2 versions', '> 2%']
    }))
    .pipe(plugins.cleanCss())
    .pipe(plugins.sourcemaps.write())
    .pipe(GulpClient.dest('./dist/assets/'))
})

GulpClient.task('html', () => {
  return GulpClient.src('./src/*.html')
    .pipe(GulpClient.dest('./dist/'))
})

GulpClient.task('watch', () => {
  GulpClient.watch('./src/**/*', GulpClient.series('html', 'css-dev'))
})

GulpClient.task('default', GulpClient.parallel('browsersync','watch'))