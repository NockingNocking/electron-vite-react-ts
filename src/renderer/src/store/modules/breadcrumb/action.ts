/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 16:55:15
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 16:58:21
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\modules\breadcrumb\action.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as types from '@/store/types/mutation-types'

// * setBreadcrumbList
export const setBreadcrumbList = (breadcrumbList: { [propName: string]: any }) => ({
  type: types.SET_BREADCRUMB_LIST,
  breadcrumbList
})
