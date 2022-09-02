/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 11:59:00
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 11:59:30
 * @FilePath: \react-vite-electron-ts\src\renderer\src\router\modules\home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Layout from '@/views/layout/index'
import { RouteObject } from '@/router/types'
import Home from '@/views/home/index'

// 首页模块
const homeRouter: Array<RouteObject> = [
  {
    element: <Layout />,
    children: [
      {
        path: '/home/index',

        element: <Home />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      }
    ]
  }
]

export default homeRouter
