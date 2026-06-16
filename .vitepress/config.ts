import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CCK UI',
  description: 'Another Vue 3 Components Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/en-US/component/button.md' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Grid', link: '/en-US/component/grid.md' },
          { text: 'Button', link: '/en-US/component/button.md' },
          { text: 'Loader', link: '/en-US/component/loader.md' },
          { text: 'Icon', link: '/en-US/component/icon.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JackAtlas/cck-ui' }
    ]
  }
})
