/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 09:48:40
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-02 11:02:45
 * @FilePath: \react-vite-electron-ts\src\renderer\src\views\login\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 *
 */

import { connect } from 'react-redux'
import { setToken } from '@/store/modules/global/action'
// import loginLeft from '@/assets/images/login_bg.png'
import logo from '@/assets/images/logo.png'
import LoginForm from './components/LoginForm'
import './index.less'

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          {/* <div className="login-left">
            <img src={loginLeft} alt="login" />
          </div> */}
          <div className="login-form">
            <div className="login-logo">
              <img className="login-icon" src={logo} alt="logo" />
              <span className="logo-text">Nocking-admin</span>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}
const mapDispatchToProps = { setToken }
const mapStateToProps = (state: any) => state.global
export default connect(mapStateToProps, mapDispatchToProps)(Login)
