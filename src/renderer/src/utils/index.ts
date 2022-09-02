/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 11:09:58
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 21:42:04
 * @FilePath: \react-vite-electron-ts\src\renderer\src\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { RouteObject } from '@/router/types'
import { MenuOptions } from '@/store/types'

export const getBrowserLang = () => {
  let browserLang = navigator.language ? navigator.language : navigator.browserLanguage
  let defaultBrowserLang = ''
  if (
    browserLang.toLowerCase() === 'cn' ||
    browserLang.toLowerCase() === 'zh' ||
    browserLang.toLowerCase() === 'zh-cn'
  ) {
    defaultBrowserLang = 'zh'
  } else {
    defaultBrowserLang = 'en'
  }
  return defaultBrowserLang
}

export const getBreadcrumbList = (path: string, menuList: MenuOptions[]) => {
  let tempPath: any[] = []
  try {
    const getNodePath = (node: MenuOptions) => {
      tempPath.push(node)
      // 找到符合条件的节点，通过throw终止掉递归
      if (node.path === path) {
        throw new Error('GOT IT!')
      }
      if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i])
        }
        // 当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
        tempPath.pop()
      } else {
        // 找到叶子节点时，删除路径当中的该叶子节点
        tempPath.pop()
      }
    }
    for (let i = 0; i < menuList.length; i++) {
      getNodePath(menuList[i])
    }
  } catch (e) {
    return tempPath.map((item) => item.title)
  }
}

export const findAllBreadcrumb = (menuList: MenuOptions[]): { [key: string]: any } => {
  let handleBreadcrumbList: any = {}
  const loop = (menuItem: MenuOptions) => {
    if (menuItem?.children?.length) {
      menuItem.children.forEach((item) => loop(item))
    } else {
      handleBreadcrumbList[menuItem.path] = getBreadcrumbList(menuItem.path, menuList)
    }
  }
  menuList.forEach((item) => loop(item))
  return handleBreadcrumbList
}

export const getOpenKeys = (path: string) => {
  let newStr: string = ''
  let newArr: any[] = []
  let arr = path.split('/').map((i) => '/' + i)
  for (let i = 1; i < arr.length - 1; i++) {
    newStr += arr[i]
    newArr.push(newStr)
  }
  return newArr
}

export function handleRouter(routerList: MenuOptions[], newArr: string[] = []) {
  routerList.forEach((item: MenuOptions) => {
    typeof item === 'object' && item.path && newArr.push(item.path)
    item.children && item.children.length && handleRouter(item.children, newArr)
  })
  return newArr
}

export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
  let result: RouteObject = {}
  for (let item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length) result = res
    }
  }
  return result
}

// 检测是否为（type）的工具函数
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, 'Function')
}
