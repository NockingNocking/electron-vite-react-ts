/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-31 20:18:38
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 11:44:41
 * @FilePath: \react-electron-admin\src\router\modules\error.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import lazyLoad from '@/router/lazyload'
import { RouteObject } from '@/router/types'

// 错误页面模块
const errorRouter: Array<RouteObject> = [
  {
    path: '/403',
    element: lazyLoad(React.lazy(() => import('@/views/Error/403'))),
    meta: {
      requiresAuth: true,
      title: '403页面',
      key: '403'
    }
  },
  {
    path: '/404',
    element: lazyLoad(React.lazy(() => import('@/views/Error/404'))),
    meta: {
      requiresAuth: false,
      title: '404页面',
      key: '404'
    }
  },
  {
    path: '/500',
    element: lazyLoad(React.lazy(() => import('@/views/Error/500'))),
    meta: {
      requiresAuth: false,
      title: '500页面',
      key: '500'
    }
  }
]

export default errorRouter
