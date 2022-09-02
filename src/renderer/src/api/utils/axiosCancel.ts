/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:34:05
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-02 10:08:45
 * @FilePath: \react-vite-electron-ts\src\renderer\src\api\utils\axiosCancel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosRequestConfig, Canceler } from 'axios'
import { isFunction } from '@/utils/index'
import qs from 'qs'

let pendingMap = new Map<string, Canceler>()

// * 序列化参数
export const getPendingUrl = (config: AxiosRequestConfig) =>
  [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&')

export class AxiosCanceler {
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel)
        }
      })
  }

  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)

    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel()
      pendingMap.delete(url)
    }
  }

  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  reset(): void {
    pendingMap = new Map<string, Canceler>()
  }
}
