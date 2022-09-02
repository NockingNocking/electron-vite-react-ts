/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 16:38:18
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-02 10:52:09
 * @FilePath: \react-vite-electron-ts\src\renderer\src\config\menu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface IMenu {
  icon: string
  title: string
  path: string
  children?: IMenu[]
}
const Menu: IMenu[] = [
  { icon: 'HomeOutlined', title: '首页', path: '/home/index' },
  {
    icon: 'FundOutlined',
    title: 'Dashboard',
    path: '/dashboard',
    children: [
      { icon: 'AppstoreOutlined', path: '/dashboard/dataViews', title: '数据可视化' },
      { icon: 'AppstoreOutlined', path: '/dashboard/innerWeb', title: '其他页面' }
    ]
  }
]

export default Menu
