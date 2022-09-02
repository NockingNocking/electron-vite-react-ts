/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 20:26:29
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 21:01:22
 * @FilePath: \react-vite-electron-ts\src\renderer\src\router\modules\dashboard.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import lazyLoad from '@/router/lazyload'
import Layout from '@/views/layout/index'
import { RouteObject } from '@/router/types'

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
  {
    element: <Layout />,
    meta: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '/dashboard/dataViews',
        element: lazyLoad(React.lazy(() => import('@/views/dashboard/dataViews/index'))),
        meta: {
          requiresAuth: true,
          title: '数据可视化',
          key: 'dataVisualize'
        }
      },
      {
        path: '/dashboard/innerWeb',
        element: lazyLoad(React.lazy(() => import('@/views/dashboard/innerWeb/index'))),
        meta: {
          requiresAuth: true,
          title: '内嵌页面',
          key: 'embedded'
        }
      }
    ]
  }
]

export default dashboardRouter
