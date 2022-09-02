/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 08:56:46
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 17:16:05
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { legacy_createStore as createStore, combineReducers, Store, compose } from 'redux'
// 数据持久化插件
import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
// 异步
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
// 仓库
import global from './modules/global'
import auth from './modules/auth'
import menu from './modules/menu'
import breadcrumb from './modules/breadcrumb'

const reducer = combineReducers({
  global,
  auth,
  menu,
  breadcrumb
})
const persistConfig = {
  key: 'redux-state',
  storage: storage
}
// 仓库数据持久化
const persistReducerConfig = persistReducer(persistConfig, reducer)
// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise)
// 创建 store
const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares))
// 创建持久化 store
const persistor = persistStore(store)
export { store, persistor }
