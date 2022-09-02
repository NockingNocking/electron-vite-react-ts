/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 08:57:11
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 11:46:52
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\reducers\global\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 08:57:11
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 09:19:18
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\reducers\login\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AnyAction } from 'redux'
import { GlobalState } from '@/store/types'
import produce from 'immer'
import * as types from '@/store/types/mutation-types'

const globalState: GlobalState = {
  token: '',
  language: 'zh',
  userInfo: {}
}

const global = (state = globalState, action: AnyAction) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case types.SET_TOKEN:
        draftState.token = action.token
        break
      case types.SET_LANGUAGE:
        draftState.language = action.language
        break
      default:
        return draftState
    }
  })

export default global
