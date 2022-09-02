/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:19:36
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 22:58:18
 * @FilePath: \react-vite-electron-ts\src\renderer\src\api\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { showLoading, hideLoadig } from './loading'
import NProgress from './nprogress'
import { message } from 'antd'
import { ResultData } from './types'
import { ResultEnum } from './types/httpCode'
import { checkCode } from './utils/checkCode'
import { AxiosCanceler } from './utils/axiosCancel'
import { store } from '@/store'
import { setToken } from '@/store/modules/global/action'

const axiosCanceler = new AxiosCanceler()
const config: AxiosRequestConfig = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  // 设置超时时间（10s）
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true
}

class Http {
  service: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)
    // 请求拦截器
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        NProgress.start()
        axiosCanceler.addPending(config)
        config.headers!.noLoading || showLoading()
        const token: string = store.getState().global.token
        return { ...config, headers: { ...config.headers, 'x-access-token': token } }
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
    // 相应拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response
        NProgress.done()
        axiosCanceler.removePending(config)
        hideLoadig()
        if (data.code == ResultEnum.OVERDUE) {
          store.dispatch(setToken(''))
          message.error(data.msg)
          window.location.hash = '/login'
          return Promise.reject(data)
        }
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          message.error(data.msg)
          return Promise.reject(data)
        }
        return data
      },
      async (error: AxiosError) => {
        const { response } = error
        NProgress.done()
        hideLoadig()

        if (error.message.indexOf('timeout') !== -1) message.error('请求超时，请稍后再试')

        if (response) checkCode(response.status)

        if (!window.navigator.onLine) window.location.hash = '/500'
        return Promise.reject(error)
      }
    )
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new Http(config)
