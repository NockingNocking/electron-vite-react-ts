/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 11:52:36
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 11:55:38
 * @FilePath: \react-vite-electron-ts\src\renderer\src\views\layout\components\Tabs\components\MoreButton.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HOME_URL } from '@/config/config'
import { MenuOptions } from '../types'

const MoreButton = (props: any) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // close multipleTab
  const closeMultipleTab = (tabPath?: string) => {
    const handleTabsList = props.tabsList.filter((item: MenuOptions) => {
      return item.path === tabPath || item.path === HOME_URL
    })
    props.setTabsList(handleTabsList)
    tabPath ?? navigate(HOME_URL)
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <span>{t('tabs.closeCurrent')}</span>,
          onClick: () => props.delTabs(pathname)
        },
        {
          key: '2',
          label: <span>{t('tabs.closeOther')}</span>,
          onClick: () => closeMultipleTab(pathname)
        },
        {
          key: '3',
          label: <span>{t('tabs.closeAll')}</span>,
          onClick: () => closeMultipleTab()
        }
      ]}
    />
  )
  return (
    <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }} trigger={['click']}>
      <Button className="more-button" type="primary" size="small">
        {t('tabs.more')} <DownOutlined />
      </Button>
    </Dropdown>
  )
}
export default MoreButton
