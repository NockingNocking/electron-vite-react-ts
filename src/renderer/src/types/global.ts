/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 09:02:12
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 21:45:53
 * @FilePath: \react-vite-electron-ts\src\renderer\src\types\window.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { type } from 'os'

// * global
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
  interface Navigator {
    msSaveOrOpenBlob: (blob: Blob, fileName: string) => void
    browserLanguage: string
  }
}

// * Vite
declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
  VITE_API_URL: string
  VITE_PORT: number
  VITE_OPEN: boolean
  VITE_GLOB_APP_TITLE: string
  VITE_DROP_CONSOLE: boolean
  VITE_PROXY_URL: string
  VITE_BUILD_GZIP: boolean
  VITE_REPORT: boolean
}

export type { Recordable, ViteEnv }
