
## 使用webpack与ts打包

+ 优点:
  + 可以使用ts来提升质量
  + 使用webpack + tsloader 输出独立文件
+ 缺点
  + es6 与 cjs 通过 tsc无法直接输出共享
  + 使用 webpack输出cjs,无法带上dts
  + 使用 webpack输出umd,配置与注意事项率多,不具有通用性

### tsconfig

```javascript
{
  "compilerOptions": {
    "target": "es6", /* 输出的目标js版本, 这里用es6 */
    "forceConsistentCasingInFileNames": true, /* import时模块是否忽略大小写 */
    "esModuleInterop": true, /* 直接通过`import`的方式来引用commonjs模块 */
    "lib": ["ESNext", "DOM"],                            /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    "moduleResolution": "node",
    "baseUrl": "./src",
    "paths": {
      // "@/*": ["./src/*"]
    },
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true, /* 所有严格检查的总开关 */
    // "alwaysStrict": true, /* 是否使用严格模式 */
    "noImplicitAny": false, /* 不允许隐式的any类型 */
    "noImplicitThis": false, /* 不允许不明确类型的this */
    /* 输出相关 */
    "sourceMap": true,
    "module": "commonjs", /* 要使用的模块化的规范 */
    "outDir": "./dist/lib",
    "allowSyntheticDefaultImports": true, /* 自动合成一个默认导出 */
    // "declaration": true, /* 是否生成`.d.ts`的类型声明文件 */
    // "declarationDir": "./dist/types",
  },
  /* 编译文件所在的目录 */
  "include": [
    "./src/**/*.ts"
  ],
  /* 排除在外的目录 */
  "exclude": [
    "node_modules",
    "dist",
  ],
  "typeRoots": [
    "./src/@types"
  ]
}


```

### 使用webpack与ts打包出独立文件的cjs

```javascript
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path  = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.cjs.js',
    path: path.resolve(__dirname, 'dist/cjs'),
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
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

```

### 使用webpack与ts打包出独立文件的umd

```javascript
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path  = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.umd.js',
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

```
