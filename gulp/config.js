var util = require('gulp-util');

var production = util.env.production || util.env.prod || false;
var destPath = 'markup/build';
var srcPath = 'markup/src';

var config = {
  env: 'development',
  production: production,

  src: {
    html: srcPath,
    root: 'markup/src',
    // templates for nunjucks template
    //templates    : 'markup/src/templates',
    //templatesData: 'markup/src/templates/data',
    //pagelist     : 'src/index.yaml',
    sass: 'markup/src/scss',
    // path for sass files that will be generated automatically via some of tasks
    sassGen: 'markup/src/sass/generated',
    js: 'markup/src/js',
    img: 'markup/src/img',
    svg: 'markup/src/img/svg',
    icons: 'markup/src/icons',
    // path to png sources for sprite:png task
    iconsPng: 'markup/src/icons',
    // path to svg sources for sprite:svg task
    iconsSvg: 'markup/src/icons',
    // path to svg sources for iconfont task
    iconsFont: 'markup/src/icons',
    fonts: 'markup/src/fonts',
    lib: 'markup/src/lib'
  },
  dest: {
    root: destPath,
    html: destPath,
    css: destPath + '/css',
    js: destPath + '/js',
    img: destPath + '/img',
    fonts: destPath + '/fonts',
    lib: destPath + '/lib'
  },

  setEnv: function (env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },

  logEnv: function () {
    util.log(
      'Environment:',
      util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
    );
  },

  errorHandler: require('./util/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
