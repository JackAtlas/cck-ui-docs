import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CCK UI',
  description: 'Another Vue 3 Components Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/en-US/guide/cck-ui' },
      { text: 'Components', link: '/en-US/component/button' }
    ],

    sidebar: {
      '/en-US/guide/': [
        {
          text: 'Introduction',
          items: [{ text: 'Welcome to CCK UI', link: '/en-US/guide/cck-ui' }]
        }
      ],
      '/en-US/component/': [
        {
          text: 'Layout',
          items: [
            { text: 'Grid', link: '/en-US/component/grid' },
            { text: 'SimpleGrid', link: '/en-US/component/simple-grid' }
          ]
        },
        {
          text: 'Buttons',
          items: [{ text: 'Button', link: '/en-US/component/button' }]
        },
        {
          text: 'Feedback',
          items: [{ text: 'Loader', link: '/en-US/component/loader' }]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JackAtlas/cck-ui' }
    ]
  }
})
