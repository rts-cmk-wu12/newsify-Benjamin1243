const HtmlWebpackPlugin = require("html-webpack-plugin");

const {CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require("path")
module.exports={
mode: "production",
entry: { 
bundle: "./src/index.js",
auth: "./src/auth.js",
home: "./src/home.js",
archieve: "./src/archieve.js"
},

output:{
  //grundet github, skiftede jeg filename til docs  istedet for dist, men ellers er det præcis det samme
  path: path.resolve(__dirname, "docs"),
  filename: "[name].js",
  
  
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
    template:'./src/index.html',
    chunks: ["bundle"]
    
   }),
   new HtmlWebpackPlugin({
    template: './src/auth.html', // Skabelon til hovedside
    filename: 'auth.html', // Output-fil
    chunks: ["auth"]
   
  }),
  new HtmlWebpackPlugin({
    template: './src/home.html', // Skabelon til hovedside
    filename: 'home.html', // Output-fil
    chunks: ["home"],
    scriptLoading: "module"
   
  }),
  new HtmlWebpackPlugin({
    template: './src/archieve.html', // Skabelon til hovedside
    filename: 'archieve.html', // Output-fil
    chunks: ["archieve"],
    scriptLoading: "module"
   
  })
   
   
  ]

}