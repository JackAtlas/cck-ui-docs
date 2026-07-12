---
title: Theme object
lang: en-US
---

# Theme object

CCK UI theme is an object where your application's colors, fonts, spacing, border-radius, and other design tokens are stored.

```ts
interface CTheme {
  /**
   * @description Controls focus ring styles. Supports the following options:
   * @default 'auto'
   * - `auto` - focus ring is displayed only when the user navigates with keyboard
   * - `always` - focus ring is displayed when the user navigates with keyboard and mouse
   * - `never` - focus ring is always hidden(not recommended)
   */
  focusRing: 'auto' | 'always' | 'never'

  /**
   * @description Rem units scale, change if you customize font-size of `html` element
   * default value is `1` (for `100%`/`16px` font-size on `html`)
   */
  scale: number

  /**
   * @description Determines whether `font-smoothing` property should be set on the body
   * @default true
   */
  fontSmoothing: boolean

  /** @description White color */
  white: string

  /** @description Black color */
  black: string

  /** @description Object of colors, key is color name, value is an array of at least 10 strings (colors) */
  colors: CThemeColors

  /**
   * @description Index of theme.colors[color].
   * Primary shade is used in all components to determine which color from theme.colors[color] should be used.
   * Can be either a number (0-9) or an object to specify different color shades for light and dark color schemes.
   * Default value `{ light: 6, dark: 8 }`
   *
   * @example
   * { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
   * { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
   */
  primaryShade: CColorShade | CPrimaryShade

  /**
   * @description Key of `theme.colors`, hex/rgb/hsl values are not supported.
   * Determines which color will be used in all components by default.
   * @default `blue`
   */
  primaryColor: string

  /**
   * @description Function to resolve colors based on variant.
   * Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon` and other components that use colors from theme.
   */
  variantColorResolver: VariantColorsResolver

  /**
   * @description Determines whether text color must be changed based on the given `color` prop in filled variant
   * For example, if you pass `color="blue.1"` to Button component, text color will be changed to `var(--c-color-black)`
   * @default false
   */
  autoContrast: boolean

  /**
   * @description Determines which luminance value is used to determine if text color should be light or dark.
   * Used only if `theme.autoContrast` is set to `true`.
   * @default 0.3
   */
  luminanceThreshold: number

  /**
   * @description Font-family used in all components, system fonts by default
   */
  fontFamily: string

  /**
   * @description Monospace font-family, used in code and other similar components, system fonts by default
   */
  fontFamilyMonospace: string

  /**
   * @description Controls various styles of h1-h6 elements, used in Typography and Title components
   */
  headings: {
    fontFamily: string
    fontWeight: string
    textWrap: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable'
    sizes: {
      h1: HeadingStyle
      h2: HeadingStyle
      h3: HeadingStyle
      h4: HeadingStyle
      h5: HeadingStyle
      h6: HeadingStyle
    }
  }

  /**
   * @description Object of values that are used to set `border-radius` in all components that support it
   */
  radius: CRadiusValues

  /**
   * @description Key of `theme.radius` or any valid CSS value.
   * @default `border-radius` used by most components
   */
  defaultRadius: CRadius

  /**
   * @description Object of values that are used to set various CSS properties that control spacing between elements
   */
  spacing: CSpacingValues

  /**
   * @description Object of values that are used to control `font-size` property in all components
   */
  fontSizes: CFontSizesValues

  /**
   * @description Object of values that are used to control `line-height` property in all components
   */
  lineHeights: CLineHeightValues

  /**
   * @description Object of values that are used to control `font-weight` property in all components
   */
  fontWeights: CFontWeightsValues

  /**
   * @description Object of values that are used to control breakpoints in all components,
   * values are expected to be defined in em
   */
  breakpoints: CBreakpointsValues

  /**
   * @description Object of values that are used to add `box-shadow` styles to components that support `shadow` prop
   */
  shadows: CShadowsValues

  /**
   * @description Determines whether user OS settings to reduce motion should be respected.
   * @default false
   */
  respectReducedMotion: boolean

  /**
   * @description Determines which cursor type will be used for interactive elements
   * - `default` - cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles
   * - `pointer` - sets `cursor: pointer` on interactive elements that do not have these styles by default
   */
  cursorType: 'default' | 'pointer'

  /**
   * @description Default gradient configuration for components that support `variant="gradient"`
   */
  defaultGradient: CGradient

  /**
   * @description Class added to the elements that have active styles, for example, `Button` and `ActionIcon`
   */
  activeClassName: string

  /**
   * @description Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`. Overrides `theme.focusRing` property.
   */
  focusClassName: string

  /**
   * @description allows adding `classNames`, `styles` and `defaultProps` to any component
   */
  components: CThemeComponents

  /**
   * @description Any other properties that you want to access with the theme objects
   */
  other: CThemeOther
}
```

## Usage

To customize the theme, pass a theme override object to CckConfigProvider `theme` prop. The theme override will be deeply merged with the default theme.

```vue
<script setup>
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  colors: {
    // Add your color
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81'
    ],

    // or replace default theme color
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379'
    ],

    shadows: {
      md: '1px 1px 3px rgba(0, 0, 0, .25)',
      xl: '5px 5px 3px rgba(0, 0, 0, .25)'
    },

    headings: {
      fontFamily: 'Roboto, sans-serif',
      sizes: {
        h1: { fontSize: '36px' }
      }
    }
  }
})
</script>

<template>
  <cck-config-provider :theme="theme">
    <!-- Your components -->
  </cck-config-provider>
</template>
```

## Theme properties

### autoContrast

`autoContrast` controls whether text color should be changed based on the given `color` prop in the following components:

- [Button](../component/button) with `variant="filled"` only

`autoContrast` checks whether the given color luminosity is above or below the `luminanceThreshold` value and changes text color to either `theme.white` or `theme.black` accordingly.

`autoContrast` can be set globally on the theme level or individually for each component via the `autoContrast` prop.

<div>
  <text>autoContrast: true</text>
  <c-group mt="xs" mb="lg">
    <c-button variant="filled" color="lime.4" auto-contrast>Lime.4 button</c-button>
    <c-button variant="filled" color="blue.2" auto-contrast>Blue.2 button</c-button>
    <c-button variant="filled" color="orange.3" auto-contrast>Orange.3 button</c-button>
  </c-group>

  <text>autoContrast: false</text>
  <c-group mt="xs">
    <c-button variant="filled" color="lime.4">Lime.4 button</c-button>
    <c-button variant="filled" color="blue.2">Blue.2 button</c-button>
    <c-button variant="filled" color="orange.3">Orange.3 button</c-button>
  </c-group>
</div>

```vue
<template>
  <div>
    <text>autoContrast: true</text>
    <c-group mt="xs" mb="lg">
      <c-button variant="filled" color="lime.4" auto-contrast>Lime.4 button</c-button>
      <c-button variant="filled" color="blue.2" auto-contrast>Blue.2 button</c-button>
      <c-button variant="filled" color="orange.3" auto-contrast>Orange.3 button</c-button>
    </c-group>

    <text>autoContrast: false</text>
    <c-group mt="xs">
      <c-button variant="filled" color="lime.4">Lime.4 button</c-button>
      <c-button variant="filled" color="blue.2">Blue.2 button</c-button>
      <c-button variant="filled" color="orange.3">Orange.3 button</c-button>
    </c-group>
  </div>
</template>
```

### luminanceThrehold

`luminanceThrehold` controls which luminance value is used to determine if text color should be light or dark. It is used only if `theme.autoContrast` is set to `true`. The default value is `0.3`.

### focusRing

`theme.focusRing` controls focus ring styles, it supports the following values:

- `auto` (default and recommended) - focus ring is visible only when the user navigates with a keyboard, this is the default browser behavior for native interactive elements
- `always` - focus ring is visible when the user navigates with a keyboard and mouse, for example, the focus ring will be visible when the user clicks on a button
- `never` - focus ring is always hidden; it is not recommended - users who navigates with a keyboard will not have visual indication of the current focused element

### focusClassName

`theme.focusClassName` is a CSS class that is added to elements that have focus styles, for example, [Button](../component//button). It can be used to customize focus ring styles of all interactive components excepet inputs. Note that when `theme.focusClassName` is set, `theme.focusRing` is ignored.

### activeClassName

`theme.activeClassName` is a CSS class that is added to elements that have active styles, for example, [Button](../component/button). It can be used to customize active styles of all interactive components.

To disable active styles for all components, set `theme.activeClassName` to an empty string.

### defaultRadius

`theme.defaultRadius` controls the default `border-radius` property in most components, for example, [Button](../component/button). You can set it to either one of the values from `theme.radius` or a number/string to use an exact value. Note that numbers are treated as pixels, but converted to rem. For example, `theme.defaultRadius: 4` will be converted to 0.25rem. You can learn more about rem conversion in the rem units guide.

### cursorType

`theme.cursorType` controls the default cursor type for interactive elements that do not have `cursor: pointer` styles by default.

### defaultGradient

`theme.defaultGradient` controls the default gradient configuration for components that support `variant="gradient"` ([Button](../component/button), etc.).

### fontWeight

`theme.fontWeight` controls `font-weight` values used in all components. The default values are `regular: 400, medium: 600, bold: 700`. Each value is mapped to a CSS variable: `--c-font-weight-regular`, `--c-font-weight-medium`, `--c-font-weight-bold`.

### components

`theme.components` allows overriding of components' default props and styles with `classNames` and `styles` properties. You can learn more about these features in the default props and Styles API guides.

### other

`theme.other` is an object that can be used to store any other properties that you want to access with the theme object.

## Store theme override object in a variable

To store a theme override object in a variable, use the `createTheme` function:

## Merge multiple theme overrides

Use the `mergeThemeOverrides` function to merge multiple themes into one theme override object

## use-cck-theme hook

The `useCckTheme` hook returns the theme object from CckConfigProvider context

## Default theme

You can import the default theme object from the `@cck-ui/core` package. It includes all theme properties with default values. When you pass a theme overrides to CckConfigProvider, it will be deeply merged with the default theme.

## Access theme outside of components

To access theme outside of components, you need to create a full theme object (your theme override merged with the default theme).

```ts
import { createTheme, DEFAULT_THEME, mergeCckTheme } from '@cck-ui/core'

const themeOverride = createTheme({
  primaryColor: 'orange',
  defaultRadius: 0
})

export const theme = mergeCckTheme(DEFAULT_THEME, themeOverride)
```

Then you will be able to import it anywhere in your application:

```ts
import { theme } from './theme'
```