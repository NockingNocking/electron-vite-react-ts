/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 20:06:24
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 20:21:37
 * @FilePath: \react-vite-electron-ts\src\renderer\src\hooks\useEcharts.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export const useEcharts = (options: echarts.EChartsCoreOption, data?: any) => {
  const myChart = useRef<echarts.EChartsType>()
  const echartsRef = useRef<HTMLDivElement>(null)

  // 监听图表缩放
  const echartsResize = () => {
    echartsRef && myChart.current?.resize()
  }
  // 监听是否有自定义数据传入
  useEffect(() => {
    if (data?.length !== 0) {
      myChart?.current?.setOption(data)
    }
  }, [data])
  // 绘制图表
  useEffect(() => {
    if (echartsRef?.current) {
      myChart.current = echarts.init(echartsRef.current as HTMLDivElement)
    }
    myChart?.current?.setOption(options)
    window.addEventListener('resize', echartsResize, false)
    return () => {
      window.removeEventListener('resize', echartsResize)
      myChart?.current?.dispose()
    }
  }, [])

  return [echartsRef]
}
