/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 09:11:23
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 16:56:06
 * @FilePath: \react-vite-electron-ts\src\renderer\src\store\types\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export interface GlobalState {
  token: string
  language: string
  userInfo: any
}
export interface MenuOptions {
  path: string
  title: string
  icon?: string
  isLink?: string
  close?: boolean
  children?: MenuOptions[]
}

export interface MenuState {
  isCollapse: boolean
  menuList: MenuOptions[]
}

/* themeConfigProp */
export interface ThemeConfigProp {
  primary: string
  isDark: boolean
  weakOrGray: string
}

/* TabsState */
export interface TabsState {
  tabsActive: string
  tabsList: MenuOptions[]
}

/* BreadcrumbState */
export interface BreadcrumbState {
  breadcrumbList: {
    [propName: string]: any
  }
}

/* AuthState */
export interface AuthState {
  authButtons: {
    [propName: string]: any
  }
  authRouter: string[]
}
