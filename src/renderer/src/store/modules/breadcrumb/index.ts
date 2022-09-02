/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 16:55:09
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 16:57:10
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\modules\breadcrumb\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AnyAction } from 'redux'
import { BreadcrumbState } from '@/store/types'
import produce from 'immer'
import * as types from '@/store/types/mutation-types'

const breadcrumbState: BreadcrumbState = {
  breadcrumbList: {}
}

// breadcrumb reducer
const breadcrumb = (state: BreadcrumbState = breadcrumbState, action: AnyAction) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case types.SET_BREADCRUMB_LIST:
        draftState.breadcrumbList = action.breadcrumbList
        break
      default:
        return draftState
    }
  })

export default breadcrumb
