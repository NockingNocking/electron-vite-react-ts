/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 10:59:14
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 11:00:32
 * @FilePath: \react-vite-electron-ts\src\renderer\src\language\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import i18n from 'i18next'
import enUsTrans from './modules/en'
import zhCnTrans from './modules/zh'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enUsTrans
    },
    zh: {
      translation: zhCnTrans
    }
  },

  fallbackLng: 'zh',
  debug: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
