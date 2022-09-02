/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 10:33:07
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 17:16:58
 * @FilePath: \react-vite-electron-ts\src\renderer\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from '@/router/types'
import Login from '@/views/login/index'
//导入所有router
const metaRouters: any = import.meta.glob('./modules/*.tsx', { eager: true })

export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key])
  })
})

export const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
