var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './src/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'public/components/Main.jsx',
      Nav: 'public/components/Nav.jsx',
      Weather: 'public/components/Weather.jsx',
      WeatherForm: 'public/components/WeatherForm.jsx',
      WeatherMessage: 'public/components/WeatherMessage.jsx',
      About: 'public/components/About.jsx',
      Examples: 'public/components/Examples.jsx',
      ErrorModal: 'public/components/ErrorModal.jsx',
      //openWeatherMap: 'src/api/openWeatherMap.jsx',
      //applicationStyles: 'src/style/app.css'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
