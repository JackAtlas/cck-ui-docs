---
title: style prop
lang: en-US
---

# Style prop

All CCK UI components that have a root element support the `style` prop.

## Style object

You can pass a style object to the `style` prop, also you can use CCK UI CSS variables in the style object the same way as in .css files.

```vue
<template>
  <c-box :style="{ color: 'var(--c-color-red-5)', fontSize: rem(12) }"></c-box>
</template>

<script setup>
import { rem } from '@cck-ui/core'
</script>
```

## Define CSS variables in style prop

You can define CSS variables in the style prop. Note that this only works with CCK UI components:

```vue
<template>
  <c-box :style="{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }"></c-box>
</template>
```

## Style function

You can pass a style function to the `style` prop - in this case it will be called with the theme. It is useful when you need to access theme properties that are not exposed as CSS variables, for example, properties from `theme.other`.

```vue
<template>
  <c-box :style="(theme) => ({
    color: theme.colors.red[5],
    fontSize: theme.fontSize.xs
  })"></c-box>
</template>
```

## Styles array

You can pass an array of style objects and/or functions to the `style` prop - in this case, all styles will be merged into one object. It is useful when you want to create a wrapper around a CCK UI component, add inline styles and keep the option to pass the `style` prop to it.

```vue
<template>
  <c-box :style="[{ color: 'red' }, style]"></c-box>
</template>

<script setup>
import { CckStyleProp } from '@cck-ui/core'

interface DemoProps {
  style?: CckStyleProp
}

const { style } = defineProps<DemoProps>()
</script>
```