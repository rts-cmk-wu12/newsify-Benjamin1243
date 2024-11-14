module.exports={
mode: "production",
//dette er alle tilføjelserne
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

}