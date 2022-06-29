/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-06-29 17:11:11
 * @LastEditors: wxy
 * @LastEditTime: 2022-06-29 17:11:17
 */
export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [
    {
      dir: path.resolve(__dirname, 'dist/esm'),
      format: 'esm', // 通过esm格式输出
    }
  ]
}