// eslint-disable-next-line @typescript-eslint/no-var-requires
const path  = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'SmartTool.umd.js',
    path: path.resolve(__dirname, 'dist/umd'),
    library:'SmartTool',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine:true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是对那些文件生效
        test:/\.ts$/, // 通过正则表达式匹配文件的名字
        loader: 'ts-loader', // 通过ts-loader处理以ts结尾的文件
        exclude: /node_modules/, // 指定要排除的文件
        options: {
          configFile: path.resolve(__dirname, './tsconfig.json')
        }
      }
    ]
  }
}
