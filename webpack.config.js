// eslint-disable-next-line @typescript-eslint/no-var-requires
const path  = require('path')

module.exports = {
  mode: 'development',
  entry:"./tsout/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sot.umd.js',
    library: 'sot',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
}
