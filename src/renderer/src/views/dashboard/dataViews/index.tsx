/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 20:04:32
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 20:25:07
 * @FilePath: \react-vite-electron-ts\src\renderer\src\views\dashboard\dataViews\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Tabs } from 'antd'
import Pie from './components/pie'
import BookSum from './images/book-sum.png'
import AddPerson from './images/add_person.png'
import AddTeam from './images/add_team.png'
import Today from './images/today.png'
import BookSum1 from './images/book_sum.png'
import './index.less'

const { TabPane } = Tabs

const DataViews = () => {
  const onChange = (key: string) => {
    console.log(key)
  }
  const tabsList = [
    { label: '未来7日', name: 1 },
    { label: '近七日', name: 2 },
    { label: '近一月', name: 3 },
    { label: '近三月', name: 4 },
    { label: '近半年', name: 5 },
    { label: '近一年', name: 6 }
  ]

  return (
    <div className="dataVisualize-box">
      <div className="top-box">
        <div className="top-title">数据可视化</div>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          {tabsList.map((item) => {
            return <TabPane tab={item.label} key={item.name}></TabPane>
          })}
        </Tabs>
        <div className="top-content">
          <div className="item-left sle">
            <span className="left-title">访问总数</span>
            <div className="img-box">
              <img src={BookSum} alt="" />
            </div>
            <span className="left-number">848.132w</span>
          </div>
          <div className="item-center">
            <div className="gitee-traffic traffic-box">
              <div className="traffic-img">
                <img src={AddPerson} alt="" />
              </div>
              <span className="item-value">2222</span>
              <span className="traffic-name sle">Gitee 访问量</span>
            </div>
            <div className="gitHub-traffic traffic-box">
              <div className="traffic-img">
                <img src={AddTeam} alt="" />
              </div>
              <span className="item-value">2222</span>
              <span className="traffic-name sle">GitHub 访问量</span>
            </div>
            <div className="today-traffic traffic-box">
              <div className="traffic-img">
                <img src={Today} alt="" />
              </div>
              <span className="item-value">4567</span>
              <span className="traffic-name sle">今日访问量</span>
            </div>
            <div className="yesterday-traffic traffic-box">
              <div className="traffic-img">
                <img src={BookSum1} alt="" />
              </div>
              <span className="item-value">1234</span>
              <span className="traffic-name sle">昨日访问量</span>
            </div>
          </div>
          <div className="item-right">
            <div className="echarts-title">Gitee / GitHub 访问量占比</div>
            <div className="book-echarts">
              <Pie />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataViews
