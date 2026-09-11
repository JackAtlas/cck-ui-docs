---
title: ThemeIcon
lang: en-US
---

# ThemeIcon

Render icon inside element with theme colors

## Usage

<c-theme-icon variant="filled">
  <image-icon size="70%" />
</c-theme-icon>

```vue
<template>
  <c-theme-icon variant="filled">
    <image-icon size="70%" />
  </c-theme-icon>
</template>

<script setup lang="ts">
import { ImageIcon } from '@lucide/vue'
</script>
```

## Gradient variant

When the `variant` prop is set to `gradient`, you can control the gradient with the `gradient` prop, which accepts an object with `from`, `to` and `deg` properties. If the `gradient` prop is not set, `ThemeIcon` will use `theme.defaultGradient` which can be configured on the [theme object](../theming/theme-object). The `gradient` prop is ignored when `variant` is not `gradient`.

Note that `variant="gradient"` supports only linear gradients with two colors. If you need a more complex gradient, use the [Styles API](../styles/styles-api) to modify `ThemeIcon` styles.

<c-theme-icon aria-label="Gradient action icon" size="xl" variant="gradient" :gradient="{ from: 'blue', to: 'cyan', deg: 90 }">
  <heart-icon />
</c-theme-icon>

```vue
<template>
  <c-theme-icon aria-label="Gradient action icon" size="xl" variant="gradient" :gradient="{ from: 'blue', to: 'cyan', deg: 90 }">
    <heart-icon />
  </c-theme-icon>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'
</script>
```

## Customize variants colors

You can customize colors for `ThemeIcon` and other component variants by adding [variantColorResolver](../theming/colors) to your theme.

<cck-config-provider :theme="{ variantColorResolver }">
  <c-group>
    <c-theme-icon color="lime.4" size="lg" variant="filled">
      <image-icon :size="20" />
    </c-theme-icon>
    <c-theme-icon color="orange" size="lg" variant="light">
      <fingerprint-pattern-icon :size="20" />
    </c-theme-icon>
    <c-theme-icon size="lg" variant="danger">
      <triangle-alert-icon :size="20" />
    </c-theme-icon>
  </c-group>
</cck-config-provider>

```vue
<template>
  <cck-config-provider :theme="{ variantColorResolver }">
    <c-group>
      <c-theme-icon color="lime.4" size="lg" variant="filled">
        <image-icon :size="20" />
      </c-theme-icon>
      <c-theme-icon color="orange" size="lg" variant="light">
        <fingerprint-pattern-icon :size="20" />
      </c-theme-icon>
      <c-theme-icon size="lg" variant="danger">
        <triangle-alert-icon :size="20" />
      </c-theme-icon>
    </c-group>
  </cck-config-provider>
</template>

<script setup lang="ts">
import { FingerprintPatternIcon, ImageIcon, TriangleAlertIcon } from '@lucide/vue'
import { CckConfigProvider, darken, defaultVariantColorsResolver, parseThemeColor, rgba } from '@cck-ui/core'

const variantColorResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme
  })

  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--c-color-black)',
      hoverColor: 'var(--c-color-black)'
    }
  }

  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1)
    }
  }

  if (input.variant === 'danger') {
    return {
      background: 'var(--c-color-red-9)',
      hover: 'var(--c-color-red-8)',
      color: 'var(--c-color-white)',
      border: 'none'
    }
  }

  return defaultResolvedColors
}
</script>
```

## autoContrast

`ThemeIcon` supports the `autoContrast` prop and [theme.autoContrast](../theming/theme-object). If `autoContrast` is set either on `ThemeIcon` or on the theme, the content color will be adjusted to have sufficient contrast with the value specified in the `color` prop.

Note that the `autoContrast` feature works only if you use the `color` prop to change the background color. `autoContrast` works only with the `filled` variant.

<c-group>
  <c-theme-icon color="lime.4" size="lg" variant="filled">
    <fingerprint-pattern-icon :size="20" />
  </c-theme-icon>
  <c-theme-icon auto-contrast color="lime.4" size="lg" variant="filled">
    <fingerprint-pattern-icon :size="20" />
  </c-theme-icon>
</c-group>

```vue
<template>
  <c-group>
    <c-theme-icon color="lime.4" size="lg" variant="filled">
      <fingerprint-pattern-icon :size="20" />
    </c-theme-icon>
    <c-theme-icon auto-contrast color="lime.4" size="lg" variant="filled">
      <fingerprint-pattern-icon :size="20" />
    </c-theme-icon>
  </c-group>
</template>

<script setup lang="ts">
import { FingerprintPatternIcon } from '@lucide/vue'
</script>
```

<script setup lang="ts">
import { FingerprintPatternIcon, ImageIcon, HeartIcon, TriangleAlertIcon } from '@lucide/vue'
import { CckConfigProvider, darken, defaultVariantColorsResolver, parseThemeColor, rgba } from '@cck-ui/core'

const variantColorResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme
  })

  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--c-color-black)',
      hoverColor: 'var(--c-color-black)'
    }
  }

  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1)
    }
  }

  if (input.variant === 'danger') {
    return {
      background: 'var(--c-color-red-9)',
      hover: 'var(--c-color-red-8)',
      color: 'var(--c-color-white)',
      border: 'none'
    }
  }

  return defaultResolvedColors
}
</script>

## Props

### ThemeIcon props

|Name|Type|Description|Default value|
|---|---|---|---|
|autoContrast|boolean|If set, adjusts text color based on background color for `filled` variant||
|color|CColor|Key of `theme.colors` or any valid CSS color.|`theme.primaryColor`|
|gradient|CGradient|Gradient data used when `variant="gradient"`|`theme.defaultGradient`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem.|`theme.defaultRadius`|
|size|CSize \| number|Controls width and height of the button. Numbers are converted to rem.|`'md'`|

## Styles API

`ThemeIcon` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### ThemeIcon Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-ThemeIcon-root|Root element|

#### CSS variables

<table>
  <thead>
    <tr>
      <th>Selector</th>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">root</td>
      <td>--ti-bg</td>
      <td>Controls <code>background</code></td>
    </tr>
    <tr>
      <td>--ti-bd</td>
      <td>Controls <code>border</code></td>
    </tr>
    <tr>
      <td>--ti-color</td>
      <td>Controls icon <code>color</code></td>
    </tr>
    <tr>
      <td>--ti-radius</td>
      <td>Controls <code>border-radius</code></td>
    </tr>
    <tr>
      <td>--ti-size</td>
      <td>Controls <code>width</code>, <code>height</code>, <code>min-width</code> and <code>min-height</code> styles</td>
    </tr>
  </tbody>
</table>