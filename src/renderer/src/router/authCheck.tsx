/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:18:47
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-02 10:48:10
 * @FilePath: \react-vite-electron-ts\src\renderer\src\router\authCheck.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useLocation, Navigate } from 'react-router-dom'
import { AxiosCanceler } from '@/api/utils'
import { searchRoute } from '@/utils'
import { rootRouter } from '@/router'
import { HOME_URL } from '@/config/config'
import { store } from '@/store/index'

const axiosCanceler = new AxiosCanceler()

const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  const route = searchRoute(pathname, rootRouter)
  console.log(route)
  console.log(props.children)

  axiosCanceler.removeAllPending()

  if (!route.meta?.requiresAuth) return props.children

  const token = store.getState().global.token
  if (!token) return <Navigate to="/login" replace />
  const dynamicRouter = store.getState().auth.authRouter

  const staticRouter = [HOME_URL, '/403']
  const routerList = dynamicRouter.concat(staticRouter)
  if (routerList.indexOf(pathname) == -1) return <Navigate to="/403" />

  return props.children
}

export default AuthRouter
