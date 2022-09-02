/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 08:40:53
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 20:00:28
 * @FilePath: \react-vite-electron-ts\src\renderer\src\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ReactDOM from 'react-dom'
import App from './App'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import '@/styles/reset.less'
import 'antd/dist/antd.css'
import '@/assets/iconfont/iconfont.less'
import '@/assets/fonts/font.less'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
