---
title: Colors
lang: en-US
---

<script setup>
import { darken, defaultVariantColorsResolver, parseThemeColor, rgba } from '@cck-ui/core'

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

# Colors

CCK UI uses [open-color](https://yeun.github.io/open-color/) in the default theme with some additions. Each color has 10 shades.

Colors are exposed on the [theme object](./theme-object) as an array of strings. You can access a color shade by color name and index(0-9); colors with a larger index are darker:

Colors are also exposed as CSS variables:

```css
.demo {
  color: var(--c-color-red-5);
  background: var(--c-color-grape-9);
  border: 1px solid var(--c-color-blue-1);
}
```

## Adding extra colors

You can add any number of extra colors to the `theme.colors` object. This will allow you to use them in all components that support the `color` prop, for example [Button](../component/button).

## Virtual colors

A virtual color is a special color whose values should be different for light and dark color schemes. To define a virtual color, use the `virtualColor` function which accepts an object with the following properties as a single arguments:

- `name` - color name, must be the same as the key in `theme.colors` object
- `light` - a key of `theme.colors` object for light color scheme
- `dark` - a key of `theme.colors` object for dark color scheme

To see the demo in action, switch between light and dark color schemes

Virtual colors support autoContrast: the text color of `filled` components is calculated separately for each other scheme based on the resolved background color. Enable `autoContrast` on the theme or component and switch between light and dark color schemes to see the text color adjust to the undylying virtual color:

## colorsTuple

Use the `colorsTuple` function to:

- Use a single color as the same color for all shades
- Transform dynamic string arrays to CCK UI color tuple (the array should still have 10 values)

## Supported color formats

You can use the following color formats in `theme.colors`:

- HEX: `#fff`, `#ffffff`
- RGB: `rgb(255, 255, 255)`, `rgba(255, 255, 255, 0.5)`
- HSL: `hsl(0, 0%, 100%)`, `hsla(0, 0%, 100%, 0.5)`
- OKLCH: `oklch(96.27% 0.0217 238.66)`, `oklch(96.27% 0.0217 238.66 / 0.5)`

Example of adding an oklch color to theme:

## primaryColor

`theme.primaryColor` is a key of `theme.colors`, it is used:

- As a default value for most of the components that support `color` prop
- To set default focus ring outline color

## primaryShade

`theme.primaryShade` is a number from 0 to 9. It determines which shade will be used for components that have a `color` prop.

You can also customize primary shade for dark and light color schemes separately:

## Color prop

Components that support changing their color have `color` prop. This prop supports the following values:

- Key of `theme.colors`, for example, `blue` or `green`
- Key of `theme.colors` with color index, for example, `blue.5` or `green.9`
- CSS color value, for example, `#fff` or `rgba(0, 0, 0, 0.5)`

## Colors index reference

You can reference colors by index in the `color` prop and style props, for example the `c` prop:

<c-text c="blue.6">Text with blue.6</c-text>

```vue
<template>
  <c-text c="blue.6">Text with blue.6</c-text>
</template>
```

## Difference between color and c props

The `color` prop is used to control multiple CSS properties of the component. These properties can vary across different components, but usually the `color` prop controls `background`, `color`, and `border-color` CSS properties. For example, when you set `color="#c3ff36"` on the [Button](../component/button) component (with `variant="filled"`), it will set the following CSS properties:

- `background-color` to `#c3ff36`
- `background-color` when the button is hovered to `#b0e631` (`#c3ff36` darkened by 10%)
- `color` to `var(--c-color-white)`
- `border-color` to `transparent`

`c` is a style prop - it is responsible for setting a single CSS property `color` (color of the text). You can combine both props to achieve better contrast between text and background. In the following example:

- The `color` prop sets `background: #c3ff36` and `color: var(--c-color-white)`
- The `c` prop overrides color style to `color: var(--c-color-black)`

<c-button variant="filled" color="#c3ff36" c="black">Button with color and c props</c-button>

```vue
<template>
  <c-button variant="filled" color="#c3ff36" c="black">Button with color and c props</c-button>
</template>
```

## Colors variant resolver

`theme.variantColorResolver` is a function that is used to determine which colors will be used in different variants in the following components: [Button](../component/button).

It accepts an object argument with the following properties:

```ts
interface VariantColorsResolverInput {
  color: CColor | undefined
  theme: CTheme
  variant: string
  gradient?: CGradient
  autoContrast?: boolean
}
```

`theme.variantColorResolver` must return an object with the following properties:

```ts
interface VariantColorsResolverResult {
  background: string
  hover: string
  color: string
  border: string
  hoverColor?: string
}
```

You can use `theme.variantColorResolver` to customize colors handling by default variants or to add support for new variants:

<cck-config-provider :theme="{ variantColorResolver }">
  <c-group>
    <c-button color="lime.4" variant="filled">Lime filled button</c-button>
    <c-button color="orange" variant="light">Orange light button</c-button>
    <c-button variant="danger">Danger button</c-button>
  </c-group>
</cck-config-provider>

```vue
<template>
  <cck-config-provider :theme="{ variantColorResolver }">
    <c-group>
      <c-button color="lime.4" variant="filled">Lime filled button</c-button>
      <c-button color="orange" variant="light">Orange light button</c-button>
      <c-button variant="danger">Danger button</c-button>
    </c-group>
  </cck-config-provider>
</template>

<script setup>
import { darken, defaultVariantColorsResolver, parseThemeColor, rgba } from '@cck-ui/core'

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
