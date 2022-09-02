/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 21:42:16
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 22:09:29
 * @FilePath: \react-vite-electron-ts\src\renderer\src\utils\setEnv.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import type { Recordable, ViteEnv } from '@/types/global'

export const setEnv = (cfg: Recordable): ViteEnv => {
  const ret: any = {}
  for (const envName of Object.keys(cfg)) {
    let realName = cfg[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName)
      } catch (error) {
        console.log(error)
      }
    }
    ret[envName] = realName
    process.env[envName] = realName
  }
  return ret
}

export function getEnvConfig(match = 'VITE_GLOB_', confFiles = ['.env', '.env.production']) {
  let envConfig = {}
  confFiles.forEach((item) => {
    try {
      const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)))
      envConfig = { ...envConfig, ...env }
    } catch (error) {
      console.error(`Error in parsing ${item}`, error)
    }
  })

  Object.keys(envConfig).forEach((key) => {
    const reg = new RegExp(`^(${match})`)
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key)
    }
  })
  return envConfig
}

export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir)
}
