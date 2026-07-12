import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CCK UI',
  description: 'Another Vue 3 Components Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/en-US/guide/cck-ui' },
      { text: 'Theming & Styles', link: '/en-US/theming/cck-config-provider' },
      { text: 'Components', link: '/en-US/component/button' }
    ],

    sidebar: {
      '/en-US/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Welcome to CCK UI', link: '/en-US/guide/cck-ui' },
            { text: 'Browser support', link: '/en-US/guide/browser-support' }
          ]
        }
      ],
      '/en-US/theming/': [
        {
          text: 'Theming',
          items: [
            { text: 'CckConfigProvider', link: '/en-US/theming/cck-config-provider' },
            { text: 'Theme object', link: '/en-US/theming/theme-object' },
            { text: 'Color', link: '/en-US/theming/colors' },
            { text: 'Color scheme', link: '/en-US/theming/color-schemes' }
          ]
        }
      ],
      '/en-US/component/': [
        {
          text: 'Layout',
          items: [
            { text: 'Grid', link: '/en-US/component/grid' },
            { text: 'Group', link: '/en-US/component/group' },
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
        },
        {
          text: 'Typography',
          items: [{text: 'Text', link: '/en-US/component/text'}]
        },
        {
          text: 'Miscellaneous',
          items: [{text: 'Box', link: '/en-US/component/box'}]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JackAtlas/cck-ui' }
    ]
  }
})
