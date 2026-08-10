---
title: Color functions
lang: en-US
---

# Color functions

The `@cck-ui/core` package exports several functions that can be used to manipulate colors or extract information before using them as CSS values.

## darken and lighten

The `darken` and `lighten` functions can be used to manipulate color brightness. They accept a color in any format as the first argument and the amount of lightness to add/remove as the second argument.

```typescript
import { darken, lighten } from '@cck-ui/core'

lighten('#228be6', 0.1) // lighten by 10%
// -> rgba(56, 151, 233, 1)

darken('rgb(245, 159, 0)', 0.5) // darken by 50%
// -> rgba(123, 80, 0, 1)

darken('rgba(245, 159, 0, .3)', 0.5) // darken by 50%
// -> rgba(123, 80, 0, .3)

lighten('var(--c-color-gray-4)', 0.74)
// -> color-mix(in srgb, var(--c-color-gray-4), white 74%)
```

## alpha

The `alpha` function converts a color to rgba format with a given alpha channel. It is usually used to make colors more transparent. If it is not possible to convert the color to rgba format (for example, if the color is a CSS variable), the function will use [color-mix](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix). Note that `color-mix` is not supported in some older browsers. You can check [caniuse](https://caniuse.com/mdn-css_types_color_color-mix) for more information.

```typescript
import { alpha } from '@cck-ui/core'

alpha('#4578fc', 0.45) // -> rgba(69, 120, 252, 0.45)
alpha('var(--c-color-gray-4)', 0.74)
// -> color-mix(in srgb, var(--c-color-gray-4), transparent 26%)
```

## parseThemeColor

The `parseThemeColor` function returns information about a given color in the following format:

```typescript
interface ParseThemeColorResult {
  /**
   * True if the given color is a theme color. For example,
   * `blue`, `orange.9`, `pink.3` are theme colors,
   * while `#fff`, `rgba(0, 0, 0, .5)` are not
   */
  isThemeColor: boolean

  /**
   * Key of `theme.colors` if the given color is a theme color. For example,
   * if the given color is `blue` it will be `blue`,
   * if the given color is `orange.9` it will be `orange`
   */
  color: string

  /**
   * Resolved color value. For example,
   * it the given color is `blue.7` it will be the value of `theme.colors.blue[7]`,
   * if the given color is `#fff` it will be `#fff`
   */
  value: string

  /**
   * If the given color is a theme color, this will be the shade of that color.
   * For example, if the given color is `blue.7` it will be `7`.
   * If the given color does not have an index or is not a theme color, then it will be `undefined`.
   */
  shade: CColorShade | undefined

  /**
   * Color CSS variable. For example:
   * `blue.7` - `--c-color-blue-7`,
   * `red` - `--c-color-red-filled`,
   * `white` - `--c-color-white`,
   * `#fff` - `undefined`
   */
  variable: CssVariable | undefined
}
```

The `parseThemeColor` function can be used anywhere the `theme` object is available, for example in [CSS variables resolver](./css-variables), variant color resolver, or component body:

```vue
<template>
  <div :style="{ backgroundColor: parsedColor.isThemeColor ? `var(${parsedColor.variable})` : parsedColor.value }"></div>
</template>

<script setup lang="ts">
import { CColor, parseThemeColor, useCckTheme } from '@cck-ui/core'

interface DemoProps {
  color: CColor
}

const theme = useCckTheme()
const parsedColor = parseThemeColor({ color, theme })
</script>
```

## getThemeColor

`getThemeColor` is a simpler version of the `parseThemeColor` function. It accepts a color string as the first argument and a theme object as the second argument. It returns the parsed color value or CSS variable:

```typescript
import { getThemeColor, useCckTheme } from '@cck-ui/core'

function Demo() {
  const theme = useCckTheme()

  getThemeColor('blue', theme) // -> var(--c-color-blue-filled)
  getThemeColor('blue.7', theme) // -> var(--c-color-blue-7)
  getThemeColor('white', theme) // -> var(--c-color-white)
  getThemeColor('#df78e4', theme) // -> #df78e4
}
```

## getGradient

The `getGradient` function transforms a given `CGradient` object to a CSS gradient string:

```typescript
import { getGradient, useCckTheme } from '@cck-ui/core'

function Demo() {
  const theme = useCckTheme()

  getGradient({ deg: 180, from: 'blue', to: 'cyan.7' }, theme)
  // -> `linear-gradient(180deg, var(--c-color-blue-filled) 0%, var(--c-color-cyan-7) 100%)`
}
```

## isLightColor

The `isLightColor` function can be used to achieve better contrast between text and background:

```vue
<template>
  <c-box :bg="color" :c="isLightColor(color) ? 'black' : 'white'">
    Box with contrast text
  </c-box>
</template>

<script setup lang="ts">
import { Box, isLightColor } from '@cck-ui/core'

interface DemoProps {
  color: string
}
</script>
```

## luminance

The `luminance` function returns the color luminance. It can be used check color contrast:

```typescript
import { luminance } from '@cck-ui/core'

luminance('#fff') // -> 1
luminance('#000') // -> 0
luminance('#4578fc') // -> 0.21726425554966
```