/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 11:54:27
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 11:55:19
 * @FilePath: \react-vite-electron-ts\src\renderer\src\views\layout\components\Tabs\types\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface MenuOptions {
  path: string
  title: string
  icon?: string
  isLink?: string
  close?: boolean
  children?: MenuOptions[]
}
