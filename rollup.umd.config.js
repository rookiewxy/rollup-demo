/*
 * @Description: 和 esm 格式的编译要求不同，umd 格式更多的被用在 cdn 加载。构建物不仅需要编译，还需要打包,无需 .d.ts 文件
 * @Autor: wxy
 * @Date: 2022-06-29 17:22:16
 * @LastEditors: wxy
 * @LastEditTime: 2022-06-29 17:27:21
 */
import babel from '@rollup/plugin-babel';
import path from 'path';
import nodeResolve from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild'

const isProduction = process.env.NODE_ENV === 'production'
const pluginsWithEnv = isProduction ? [] : [serve({
  open: true,
  openPage: '/base/',
  port: 10001,
  contentBase: ['dist', 'examples']
}), livereload('dist/umd')]

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/umd/index.js'),
      format: 'umd',
      name: 'rain'
    }
  ],
  plugins: [
    esbuild({
      target: 'es2015'
    }),
    babel({
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    nodeResolve(),
    json(),
    commonjs(),
    ...pluginsWithEnv
  ],
};