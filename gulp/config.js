var dest = './build',
    src = './src',
    mui = './node_modules/material-ui/src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/www/**",
    dest: dest 
  },
    vendor: {
    src: src + "/app/vendor/**",
        dest: dest + '/js'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  },
    sass: {
    errLogToConsole: true,
        outputStyle: 'expanded'
    },
  server: {
      // basic local server configuration for development.
      // some server-side routing needs to handle static assets
      // as the React Router doesn't work well with paths beyond '/'
      // ie: https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md
      dest: dest,
      css: {
          root: '/css',
          dest: dest + "/css"
      },
      js: {
          root: '/js',
          dest: dest + "/js"
      }
  }
};
