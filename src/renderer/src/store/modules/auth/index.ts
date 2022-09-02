/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 16:58:45
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 16:59:00
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\modules\auth\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AnyAction } from 'redux'
import { AuthState } from '@/store/types'
import produce from 'immer'
import * as types from '@/store/types/mutation-types'

const authState: AuthState = {
  authButtons: {},
  authRouter: []
}

// auth reducer
const auth = (state: AuthState = authState, action: AnyAction) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case types.SET_AUTH_BUTTONS:
        draftState.authButtons = action.authButtons
        break
      case types.SET_AUTH_ROUTER:
        draftState.authRouter = action.authRouter
        break
      default:
        return draftState
    }
  })

export default auth
