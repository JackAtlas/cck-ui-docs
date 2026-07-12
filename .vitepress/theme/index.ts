import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import CckUI from '@cck-ui/core'
import '@cck-ui/core/styles.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(CckUI)
  }
} satisfies Theme
