/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:20:04
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 21:24:52
 * @FilePath: \react-vite-electron-ts\src\renderer\src\api\loading.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ReactDOM from 'react-dom/client'
import Loading from '@/components/Loading'

let count = 0

export const showLoading = () => {
  if (count === 0) {
    let dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    ReactDOM.createRoot(dom).render(<Loading />)
  }
  count++
}

export const hideLoadig = () => {
  if (count <= 0) return
  count--
  if (count === 0) {
    document.body.removeChild(document.getElementById('loading') as HTMLElement)
  }
}
