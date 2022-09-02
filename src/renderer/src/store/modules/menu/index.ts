/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 16:46:10
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-02 10:37:24
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\modules\menu\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AnyAction } from 'redux'
import { MenuState } from '@/store/types'
import produce from 'immer'
import * as types from '@/store/types/mutation-types'

const menuState: MenuState = {
  isCollapse: false,
  menuList: []
}

// menu reducer
const menu = (state: MenuState = menuState, action: AnyAction) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case types.UPDATE_COLLAPSE:
        console.log(action.isCollapse, 'action.isCollapse')

        draftState.isCollapse = action.isCollapse
        break
      case types.SET_MENU_LIST:
        draftState.menuList = action.menuList
        break
      default:
        return draftState
    }
  })

export default menu
