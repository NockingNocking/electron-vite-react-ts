/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:33:09
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 21:33:12
 * @FilePath: \react-vite-electron-ts\src\renderer\src\api\utils\checkCode.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { message } from 'antd'

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkCode = (status: number): void => {
  switch (status) {
    case 400:
      message.error('请求失败！请您稍后重试')
      break
    case 401:
      message.error('登录失效！请您重新登录')
      break
    case 403:
      message.error('当前账号无权限访问！')
      break
    case 404:
      message.error('你所访问的资源不存在！')
      break
    case 405:
      message.error('请求方式错误！请您稍后重试')
      break
    case 408:
      message.error('请求超时！请您稍后重试')
      break
    case 500:
      message.error('服务异常！')
      break
    case 502:
      message.error('网关错误！')
      break
    case 503:
      message.error('服务不可用！')
      break
    case 504:
      message.error('网关超时！')
      break
    default:
      message.error('请求失败！')
  }
}
