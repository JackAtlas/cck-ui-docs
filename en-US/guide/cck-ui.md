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