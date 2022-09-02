/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 09:30:17
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 11:04:14
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\reducers\global\actions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as types from '@/store/types/mutation-types'

export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  token
})

export const setLanguage = (language: string) => ({
  type: types.SET_LANGUAGE,
  language
})
