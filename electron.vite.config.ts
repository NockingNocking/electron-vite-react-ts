/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 08:40:53
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 22:28:12
 * @FilePath: \react-vite-electron-ts\electron.vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { resolve } from 'path'
import { defineConfig, splitVendorChunkPlugin, defineViteConfig } from 'electron-vite'
import { loadEnv, ConfigEnv, UserConfig } from 'vite'
import { setEnv } from './src/renderer/src/utils/setEnv'
import { createHtmlPlugin } from 'vite-plugin-html'

import react from '@vitejs/plugin-react'
// splitVendorChunkPlugin 分割 Vendor Chunk
export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        external: ['@electron-toolkit/utils']
      }
    },
    plugins: [splitVendorChunkPlugin()]
  },
  preload: {
    build: {
      rollupOptions: {
        external: ['@electron-toolkit/preload']
      }
    },
    plugins: [splitVendorChunkPlugin()]
  },
  renderer: defineViteConfig((mode: ConfigEnv): UserConfig => {
    const env = loadEnv(mode.mode, process.cwd())

    const viteEnv = setEnv(env)

    return {
      plugins: [
        react(),
        splitVendorChunkPlugin(),
        createHtmlPlugin({
          inject: {
            data: {
              title: viteEnv.VITE_GLOB_APP_TITLE
            }
          }
        })
      ],
      resolve: {
        alias: {
          '@': resolve('src/renderer/src')
        }
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            additionalData: `@import "@/styles/var.less";`
          }
        }
      },
      server: {
        host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        port: viteEnv.VITE_PORT,
        open: viteEnv.VITE_OPEN,
        cors: true,
        // https: false,
        // 代理跨域（mock 不需要配置，这里只是个事列）
        proxy: {
          // '/api': {
          //   target: '',
          //   changeOrigin: true,
          //   rewrite: (path) => path.replace(/^\/api/, '')
          // }
        }
      }
    }
  })
})
