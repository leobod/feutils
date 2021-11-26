# small-tool

## License

 ![1](https://img.shields.io/badge/LICENSE-BSD%203%20Clause-blue.svg)

 ![2](https://img.shields.io/badge/CN-ESIDE-orange.svg?longCache=true)

 ![3](https://img.shields.io/badge/VERSION-v0.0.1-red.svg?longCache=true)

 ![4](https://img.shields.io/badge/AUTHOR-LEOBOD-green.svg?longCache=true)



## Features
-
-

## Prepare
- `npm install typescript`
- `npm install @types/node --save-dev`
- `npm install ts-node --save-dev`
- `npm install nodemon --save-dev`
- 初始化typescript环境
  - `.\node_modules\.bin\tsc --init`
- lint
  - `npm i eslint@latest --save-dev`
  - `npm i @typescript-eslint/eslint-plugin --save-dev`
  - `npm i @typescript-eslint/parser --save-dev`
  -

### .eslintrc.js
```txt
{
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ]
}
```


## Reference

1.
2.

