/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:20:51
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 21:21:00
 * @FilePath: \react-vite-electron-ts\src\renderer\src\components\Loading\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Spin } from 'antd'
import './index.less'

const Loading = ({ tip = 'Loading' }: { tip?: string }) => {
  return <Spin tip={tip} size="large" className="request-loading" />
}

export default Loading
