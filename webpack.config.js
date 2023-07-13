const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const outputType = process.env.OUTPUT_TYPE // 读取当前的输出格式（UMD/ESM）

/** @type {import('webpack').Configuration} */
const config = {
  mode: isProduction ? 'production' : 'development',

  entry: './src/index.ts',
  // 由于输出 ESM 格式文件为 Webpack 实验特性，因此需要加上此配置。
  experiments: {
    outputModule: outputType === 'esm'
  },

  // 针对不同的环境变量，执行不同的打包动作。
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    filename: 'index.js',
    library: {
      name: 'feutils',
      type: 'umd',
      export: 'default'
    },
    libraryTarget: 'umd',
    globalObject: 'window',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.json', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './tsconfig.json')
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
