import { defineConfig } from 'vitepress'
import presetCck from 'postcss-preset-cck'
import simpleVars from 'postcss-simple-vars'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CCK UI',
  description: 'Another Vue 3 Components Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guides', link: '/en-US/guides/cck-ui' },
      { text: 'Theming & Styles', link: '/en-US/theming/cck-config-provider' },
      { text: 'Components', link: '/en-US/component/get-started' }
    ],

    sidebar: {
      '/en-US/guides/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Welcome to CCK UI', link: '/en-US/guides/cck-ui' },
            { text: 'Browser support', link: '/en-US/guides/browser-support' },
            { text: 'About CCK UI', link: '/en-US/guides/about' }
          ]
        }
      ],
      '/en-US/theming/': [
        {
          text: 'Theming',
          items: [
            { text: 'CckConfigProvider', link: '/en-US/theming/cck-config-provider' },
            { text: 'Theme object', link: '/en-US/theming/theme-object' },
            { text: 'Colors', link: '/en-US/theming/colors' },
            { text: 'Color schemes', link: '/en-US/theming/color-schemes' }
          ]
        },
        {
          text: 'Styling',
          items: [
            { text: 'CSS modules', link: '/en-US/styles/css-modules' },
            { text: 'PostCSS preset', link: '/en-US/styles/postcss-preset' },
            { text: 'Global styles', link: '/en-US/styles/global-styles' },
            { text: 'CSS variables', link: '/en-US/styles/css-variables' },
            { text: 'CSS variables list', link: '/en-US/styles/css-variables-list' },
            { text: 'rem, em and px units', link: '/en-US/styles/rem' },
            { text: 'style prop', link: '/en-US/styles/style' },
            { text: 'Responsive styles', link: '/en-US/styles/responsive' },
            { text: 'Styles API', link: '/en-US/styles/styles-api' },
            { text: 'data-* attributes', link: '/en-US/styles/data-attributes' },
            { text: 'Style props', link: '/en-US/styles/style-props' },
            { text: 'Color functions', link: '/en-US/styles/color-functions' }
          ]
        },
        {
          text: 'Other',
          items: [
            { text: 'Styles performance', link: '/en-US/styles/styles-performance' },
            { text: 'Polymorphic components', link: '/en-US/styles/polymorphic' }
          ]
        }
      ],
      '/en-US/styles/': [
        {
          text: 'Theming',
          items: [
            { text: 'CckConfigProvider', link: '/en-US/theming/cck-config-provider' },
            { text: 'Theme object', link: '/en-US/theming/theme-object' },
            { text: 'Colors', link: '/en-US/theming/colors' },
            { text: 'Color schemes', link: '/en-US/theming/color-schemes' }
          ]
        },
        {
          text: 'Styling',
          items: [
            { text: 'CSS modules', link: '/en-US/styles/css-modules' },
            { text: 'PostCSS preset', link: '/en-US/styles/postcss-preset' },
            { text: 'Global styles', link: '/en-US/styles/global-styles' },
            { text: 'CSS variables', link: '/en-US/styles/css-variables' },
            { text: 'CSS variables list', link: '/en-US/styles/css-variables-list' },
            { text: 'rem, em and px units', link: '/en-US/styles/rem' },
            { text: 'style prop', link: '/en-US/styles/style' },
            { text: 'Responsive styles', link: '/en-US/styles/responsive' },
            { text: 'Styles API', link: '/en-US/styles/styles-api' },
            { text: 'data-* attributes', link: '/en-US/styles/data-attributes' },
            { text: 'Style props', link: '/en-US/styles/style-props' },
            { text: 'Color functions', link: '/en-US/styles/color-functions' }
          ]
        },
        {
          text: 'Other',
          items: [
            { text: 'Styles performance', link: '/en-US/styles/styles-performance' },
            { text: 'Polymorphic components', link: '/en-US/styles/polymorphic' }
          ]
        }
      ],
      '/en-US/component/': [
        {
          items: [
            { text: 'Get started', link: '/en-US/component/get-started' },
            { text: 'Default values', link: '/en-US/component/boolean-props-and-default-values' }
          ]
        },
        {
          text: 'Layout',
          items: [
            { text: 'AspectRatio', link: '/en-US/component/aspect-ratio' },
            { text: 'Center', link: '/en-US/component/center' },
            { text: 'Container', link: '/en-US/component/container' },
            { text: 'Flex', link: '/en-US/component/flex' },
            { text: 'Grid', link: '/en-US/component/grid' },
            { text: 'Group', link: '/en-US/component/group' },
            { text: 'SimpleGrid', link: '/en-US/component/simple-grid' },
            { text: 'Splitter', link: '/en-US/component/splitter' },
            { text: 'Stack', link: '/en-US/component/stack' }
          ]
        },
        {
          text: 'Buttons',
          items: [
            { text: 'Button', link: '/en-US/component/button' },
            { text: 'CloseButton', link: '/en-US/component/close-button' },
            { text: 'UnstyledButton', link: '/en-US/component/unstyled-button' }
          ]
        },
        {
          text: 'Feedback',
          items: [
            { text: 'Alert', link: '/en-US/component/alert' },
            { text: 'EmptyState', link: '/en-US/component/empty-state' },
            { text: 'Loader', link: '/en-US/component/loader' },
            { text: 'SemiCircleProgress', link: '/en-US/component/semi-circle-progress' },
            { text: 'Skeleton', link: '/en-US/component/skeleton' }
          ]
        },
        {
          text: 'Typography',
          items: [{text: 'Text', link: '/en-US/component/text'}]
        },
        {
          text: 'Miscellaneous',
          items: [
            { text: 'Box', link: '/en-US/component/box' },
            { text: 'Paper', link: '/en-US/component/paper' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JackAtlas/cck-ui' }
    ],

    footer: {
      message: 'Built by <a href="https://jackatlas.xyz" target="_blank" no-referer>JackAtlas</a>'
    }
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          ...presetCck({ autoRem: true }),
          simpleVars({
            variables: {
              'c-breakpoint-xs': '36em',
              'c-breakpoint-sm': '48em',
              'c-breakpoint-md': '62em',
              'c-breakpoint-lg': '75em',
              'c-breakpoint-xl': '88em'
            }
          })
        ]
      }
    }
  }
})
