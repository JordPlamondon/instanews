module.exports = {
  entry: './src/scripts.js',
  output: {
     filename: './build/bundle.js'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file?name=public/fonts/[name].[ext]'
        }]
      },
    // ...other loaders...
      {
         test: /\.scss$/,
         use: [
           {
             loader: 'style-loader'
           },
           {
             loader: 'css-loader',
             options: {
               sourceMap: true
             }
           },
           { 
             loader: 'sass-loader',
              options: {
              sourceMap: true
              }
           }
         ]
      },
   ]
 }
};
