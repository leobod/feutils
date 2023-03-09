import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import commonjs2 from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: './src/index.ts',
    plugins: [
      resolve(['.js', '.ts']),
      commonjs(),
      typescript(),
      json()
    ],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs.js'
      }
    ]
  },
  {
    input: './src/index.ts',
    plugins: [
      resolve(['.js', '.ts']),
      typescript(),
      json(),
      commonjs2({
        // non-CommonJS modules will be ignored, but you can also
        // specifically include/exclude files
        include: 'node_modules/**',  // Default: undefined
      })
    ],
    output: [
      {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].esm.js'
      }
    ]
  },
  /* 单独生成声明文件 */
  {
    input: './src/index.ts',
    plugins: [resolve(), commonjs(), typescript(), json(), dts()],
    output: {
      format: 'esm',
      file: 'dist/index.d.ts'
    }
  }
]
