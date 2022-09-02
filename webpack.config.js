// eslint-disable-next-line @typescript-eslint/no-var-requires
const path  = require('path')

module.exports = {
  mode: 'development',
  entry:"./out/index.js",
  output: {
    path:path.resolve(__dirname,'dist'),
    filename:'sot.js',
  },
  module:{
    rules:[
      // { test: /\.ts$/, use:'ts-loader', exclude:/node-modules/ }
    ]
  }
}
