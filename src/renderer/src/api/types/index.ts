/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:29:33
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 22:50:24
 * @FilePath: \react-vite-electron-ts\src\renderer\src\api\types\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IResult {
  code: string
  msg: string
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends IResult {
  data?: T
}
