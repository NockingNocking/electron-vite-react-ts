/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-28 15:00:45
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-02 10:44:19
 * @FilePath: \Hooks-Admin\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// antd全局配置
import { ConfigProvider } from 'antd'
import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import AuthRouter from '@/router/authCheck'
import Router from '@/router/index'

const App = () => {
  return (
    <HashRouter>
      <ConfigProvider>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ConfigProvider>
    </HashRouter>
  )
}

const mapStateToProps = (state: any) => state.global
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(App)
