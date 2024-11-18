const HtmlWebpackPlugin = require("html-webpack-plugin");

const {CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require("path")
module.exports={
mode: "production",
entry: "./src/index.js",
output:{
  path: path.resolve(__dirname, "dist"),
  filename: "bundle.js",
  
},
//dette er alle tilføjelserne
module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader",],
      },
      
     
      {
        test: /\.(jpg|png|svg)$/i,
        use: [
          {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            publicPath: "images/"
          }
        }
      ]
      }
    ]
  },
  stats: {
    children: true
  },
  plugins: [
   new HtmlWebpackPlugin({
    template:'./src/index.html'
    
   }),
   new HtmlWebpackPlugin({
    template: './src/auth.html', // Skabelon til hovedside
    filename: 'auth.html', // Output-fil
   
  }),
   
   
  ]

}