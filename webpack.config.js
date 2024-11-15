const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        test: /\.html$ /,
        use: ['html-loader']
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
   })
  ]

}