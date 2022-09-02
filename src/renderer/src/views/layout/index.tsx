/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 11:50:15
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-02 10:45:32
 * @FilePath: \react-vite-electron-ts\src\renderer\src\views\layout\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
// import { setAuthButtons } from '@/redux/modules/auth/action'
import { updateCollapse } from '@/store/modules/menu/action'
// import { getAuthorButtons } from '@/api/modules/login'
import { connect } from 'react-redux'
import LayoutMenu from './components/Menu'
import LayoutFooter from './components/Footer'
import './index.less'

const LayoutIndex = (props: any) => {
  const { Sider, Content } = Layout
  const { isCollapse, updateCollapse } = props

  // 获取按钮权限列表
  const getAuthButtonsList = async () => {
    // const { data } = await getAuthorButtons()
    // setAuthButtons(data)
  }

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        let screenWidth = document.body.clientWidth
        if (!isCollapse && screenWidth > 1200) {
          updateCollapse(false)
        } else if (!isCollapse && screenWidth < 1200) {
          updateCollapse(true)
        }
      })()
    }
  }

  useEffect(() => {
    listeningWindow()
    getAuthButtonsList()
  }, [])

  return (
    <section className="container">
      <Sider trigger={null} collapsed={props.isCollapse} width={220} theme="dark">
        <LayoutMenu></LayoutMenu>
      </Sider>
      <Layout>
        <Content>
          <Outlet></Outlet>
        </Content>
        <LayoutFooter></LayoutFooter>
      </Layout>
    </section>
  )
}

const mapStateToProps = (state: any) => state.menu
// setAuthButtons,
const mapDispatchToProps = { updateCollapse }
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex)
