---
title: rem, em and px units
lang: en-US
---

# rem, em and px units

## rem units

All CCK UI components use `rem` units to apply size styles (`margin`, `padding`, `width`, etc.). By default, `1rem` is considered to be `16px`, as it is the default setting in most browsers. All components scale based on the user's browser font-size settings or font-size of the `html`/`:root`.

## rem units scaling

If you want to change the font-size of the `:root`/`html` element and preserve CCK UI component sizes, set `scale` on the theme to the value of `1 / htmlFontSize`.

For example, if you set the `html` font-size to `10px` and want to scale CCK UI components accordingly, you need to set `scale` to `1 / (10 / 16)` (16 - default font-size) = `1 / 0.625` = `1.6`:

```css
:root {
  font-size: 10px;
}
```

```vue
<template>
  <cck-config-provider :theme="theme">
    <!-- Your app here -->
  </cck-config-provider>
</template>

<script setup>
import { createTheme, CckConfigProvider } from '@cck-ui/core'

const theme = createTheme({
  scale: 1.6
})
</script>
```

## em units

`em` units are used in media queries the same way as `rem` units, but they are not affected by the font-size specified on the `html`/`:root` element. `1em` is considered to be `16px`.

## px conversions

You can use numbers in some CCK UI components props. Numbers are treated as `px` and converted to `rem`, for example:

```vue
<template>
  <c-box :w="32" :h="16"></c-box>
</template>
```

## rem and em function

`@cck-ui/core` package exports `rem` and `em` function that can be used to convert `px` into `rem`/`em`:

```ts
import { em, rem } from '@cck-ui/core'

// numbers and values in px are converted to rem
rem(32) // -> calc(2rem * var(--c-scale))
em(32) // -> 2em
rem('16px') // -> calc(1rem * var(--c-scale))
em('16px') // -> 1em

rem('2rem') // -> 2rem
em('2rem') // -> 2rem

rem('50%') // -> 50%
em('50%') // -> 50%

rem('5vh') // -> 5vh
em('5vh') // -> 5vh

// mixed values are converted to rem
rem('16px 2rem') // -> calc(1rem * var(--c-scale)) 2rem
```

## Convert rem to px

To convert `rem`/`em` to `px` use `px` function exported from `@cck-ui/core`:

```ts
import { px } from '@cck-ui/core'

px('2rem') // -> 32
px('10rem') // -> 160
```

## rem/em functions in css file

You can use `rem` and `em` function in css files if postcss-preset-cck is installed:

```scss
.demo {
  font-size: rem(16px);

  @media (min-width: em(320px)) {
    font-size: rem(32px);
  }
}
```

## Convert px to rem automatically in css files

To convert `px` to `rem` automatically in css files, enable `autoRem` option in postcss-preset-cck configuration:

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
        ...presetCck({ autoRem: true })
      ]
    }
  }
})
```