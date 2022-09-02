/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 16:46:16
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-02 10:37:07
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\modules\menu\action.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MenuOptions } from '../../types'
import * as types from '../../types/mutation-types'

export const setMenuList = (menuList: MenuOptions[]) => ({
  type: types.SET_MENU_LIST,
  menuList
})

export const updateCollapse = (isCollapse: boolean) => ({
  type: types.UPDATE_COLLAPSE,
  isCollapse
})
