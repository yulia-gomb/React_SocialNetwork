const { watch } = require('fs');
const path = require('path');
const dotenv  = require('dotenv-webpack');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: './src/app.js', // точка входа для вебпака
  output: {
    path: path.resolve(__dirname, 'dist'), // куда выкидываем сборку
  },

  // настройка дев сервера
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },

  mode : 'development', // режим работы вебпака (прод или дев)
  watch : true, // проверка и ребилд изменений для дев режима (true false)

  module: {
    rules: [
      {
        test: /\.less$/i,
        exclude:/(node_modules|bower_components)/,
        use: ["style-loader", "css-loader", "less-loader"],
      },

      {
        test: /\.css$/i,
        //exclude:/(node_modules|bower_components)/,
        use: ["style-loader", "css-loader"],
      },
      
      {
        test: /\.(png|jpg|gif)$/i,
        use: ["url-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react','@babel/preset-env']
          }
        }
      }
    ],
  },
  
  plugins: [
    new dotenv(),
    new PrettierPlugin()
  ],


  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/images/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@comp': path.resolve(__dirname, 'src/components/'),
    },
  },

  
};


//https://www.npmjs.com/package/dotenv-webpack