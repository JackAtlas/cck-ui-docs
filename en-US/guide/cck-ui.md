---
title: Welcome to CCK UI
lang: en-US
---

# Welcome to CCK UI

CCK UI provides a series of out-of-box components.

This library is using base on vue 3 with using **composition api**, and design and code components in the traditional way by Vue possible, fully **Typescript**.

Almost all the **default value of props** for each component can be quickly modified by configuration, for easy customization.

And, the writing of component codes pay great attention to lowering the threshold of **source code reading**, and the style of code is as close to the usual business code habits as possible to avoid dazzling encapsulation.

**warning** This project is **under active development**. Features and APIs are **subject to change** without prior notice. We are moving fast, and while we strive to keep things stable, **breaking changes may occur** between versions.

## Latest Version

[![NPM version](https://img.shields.io/npm/v/@cck-ui/core?style=for-the-badge)](https://npmx.dev/package/@cck-ui/core)

## Install

It is recommended to use pnpm to install:

```sh
pnpm add @cck-ui/core @cck-ui/hooks
```

Install PostCSS plugins and postcss-preset-cck

```sh
pnpm add --dev postcss postcss-preset-cck postcss-simple-vars
```

> **PostCSS without framework**
>
> If you are using a framework that is not officially supported, you may need to configure PostCSS manually. Please refer to the framework's documentation for specific instructions. For instance, if you are using Webpack, it will be necessary to install and set up [postcss-loader](https://webpack.js.org/loaders/postcss-loader/).

Add `postcss-preset-cck` to your postcss setting:

```ts
// For example, in your vite setup:
import { defineConfig } from 'vite'
import presetCck from 'postcss-preset-cck'
import simpleVars from 'postcss-simple-vars'

export default defineConfig({
  // other settings
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
})
```

Add styles imports to the root of your application. Usually styles are imported once in the root file. For example, you can import styles in your entrance file:

```ts
// core styles are required for all packages
import '@cck-ui/core/styles.css'
```

Wrap your application with [CckConfigProvider](../theming/cck-config-provider.md):

```vue
<template>
  <cck-config-provider :theme="theme">
    <!-- Your app here -->
  </cck-config-provider>
</template>

<script setup>
import { createTheme, CckConfigProvider } from '@cck-ui/core'

const theme = createTheme({
  /** Put your cck-ui theme override here  */
})
</script>
```

## Import Directly

CCK-UI already has the ability of tree-shaking. You can directly import components where you need to use them, and only those components you used will be packaged.

```vue
<template>
  <c-button>Get Started</c-button>
</template>

<script setup lang="ts">
import { CButton } from '@cck-ui/core'
import '@cck-ui/core/styles/baseline.css'
import '@cck-ui/core/styles/global.css'
import '@cck-ui/core/styles/default-css-variables.css'
import '@cck-ui/core/styles/button.css'
</script>
```

But you can see that you need to import style file for each component seperately by this way.

For the high compression ratio and convenience, you can directly import all styles at the top level:

```ts
import '@cck-ui/core/styles.css'
```

If you don't care about the package size at all, or you use almost all components, you can choose to import all components globally:

```ts
import { createApp } from 'vue'
import App from './app.vue'
import { install } from '@cck-ui/core'
import '@cck-ui/core/styles.css'

createApp(App).use(install).mount('#app')
```

## Import Automatically (WIP)

## Set up VS Code

By default, VS Code does not recognize postcss syntax, you need to install PostCSS Intellisense and Highlighting to enable syntax highlighting and supports variables (`$variables`) errors.

To get CSS variables autocomplete, install CSS Variable Autocomplete extension. Then create `.vscode/settings.json` file in the root folder of your project with the following content:

```json
{
  "cssVariables.lookupFiles": [
    "**/*.css",
    "**/*.scss",
    "**/*.sass",
    "**/*.less",
    "node_modules/@cck-ui/core/styles.css"
  ]
}
```