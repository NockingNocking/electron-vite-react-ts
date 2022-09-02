/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:27:15
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 21:27:32
 * @FilePath: \react-vite-electron-ts\src\renderer\src\api\nprogress.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

export default NProgress
