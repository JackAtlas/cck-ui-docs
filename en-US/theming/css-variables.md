---
title: CSS variables
lang: en-US
---

# CCK UI CSS variables

CckConfigProvider exposes all CCK UI CSS variables based on the given theme. You can use these variables in CSS files, style prop or any other styles. Note that not all values are documented on this page, you can find full list of variables on this page.

## Typography variables

Typography variables control the font family, font size, line height, font weight, and other text-related properties of all CCK UI components.

### Font family

The following CSS variables are used to assign font families to all CCK UI components:

|Variable|Default value|
|---|---|
| `--c-font-family`<br>Controls the font-family property of most CCK UI components | system sans-serif fonts |
| `--c-font-family-monospace`<br>Controls the font-family property of code blocks | system monospace fonts |
| `--c-font-family-headings`<br>Controls the font-family property of headings | system sans-serif fonts |

You can control these variables in the theme. Note that if `theme.headings.fontFamily` is not set, the `--c-font-family-headings` value will be the same as `--c-font-family`.

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  // Controls --c-font-family
  fontFamily: 'Arial, sans-serif',

  // Controls --c-font-family-monospace
  fontFamilyMonospace: 'Courier New, monospace',

  headings: {
    // Controls --c-font-family-headings
    fontFamily: 'Georgia, serif'
  }
})
```

If you want to use system fonts as a fallback for custom fonts, you can reference `DEFAULT_THEME` value instead of defining it manually:

```ts
import { createTheme, DEFAULT_THEME } from '@cck-ui/core'

const theme = createTheme({
  fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`
})
```

You can reference font family variables in your CSS:

```css
.text {
  font-family: var(--c-font-family);
}

.code {
  font-family: var(--c-font-family-monospace);
}

.heading {
  font-family: var(--c-font-family-headings);
}
```

And in the ff style prop:

- `ff="text"` will use `--c-font-family` variable
- `ff="monospace"` will use `--c-font-family-monospace` variable
- `ff="heading"` will use `--c-font-family-headings` variable

```vue
<template>
  <c-text ff="monospace">
    This text uses the --c-font-family-monospace variable
  </c-text>
</template>
```

### Font size

Font size variables are used in most CCK UI components to control the text size. The variable that is chosen depends on the component and its `size` prop.

|Variable|Default value|
|---|---|
| `--c-font-size-xs` | 0.75rem(12px) |
| `--c-font-size-sm` | 0.875rem(14px) |
| `--c-font-size-md` | 1rem(16px) |
| `--c-font-size-lg` | 1.125rem(18px) |
| `--c-font-size-xl` | 1.25rem(20px) |

You can reference font size variables in CSS:

```css
.demo {
  font-size: var(--c-font-size-md);
}
```

And in the fz style prop:

```vue
<template fz="xl">
  This text uses --c-font-size-xl variable
</template>
```

To define custom font sizes, can use `theme.fontSizes` property:

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  fontSize: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem'
  }
})
```

Note that `theme.fontSizes` object is merged with the `DEFAULT_THEME.fontSizes` - it is not required to define all values, only those that you want to change:

```ts
import { createTheme } from '@cck-ui/core'

// Changes only xs font size
// other values will be taken from the DEFAULT_THEME
const theme = createTheme({
  fontSize: {
    xs: '0.5rem'
  }
})
```

You can add any number of additional font sizes to the `theme.fontSizes` object. These values will be defined as CSS variables in `--c-font-size-{size}` format:

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  fontSize: {
    xxs: '0.125rem',
    xxl: '2rem'
  }
})
```

After defining `theme.fontSizes`, you can reference these variables in your CSS:

```css
.demo {
  font-size: var(--c-font-size-xxs);
}
```

> **Case conversion**
>
> Case conversion (camelCase to kebab-case) is not automatically applied to custom font sizes. If you define `theme.fontSizes` with camelCase keys, you need to reference them in camelCase format. For example, if you define `{ customSize: '1rem' }`, you need to reference it as `--c-font-size-customSize`.

### Line height

Line height variables are used in [Text](../component/text) component. In other components, line-height is either calculated based on font size or set to `--c-line-height`, which is an alias for `--c-line-height-md`.

| Variable | Default value |
| --- | --- |
| `--c-line-height` | 1.55 |
| `--c-line-height-xs` | 1.4 |
| `--c-line-height-sm` | 1.45 |
| `--c-line-height-md` | 1.55 |
| `--c-line-height-lg` | 1.6 |
| `--c-line-height-xl` | 1.65 |

You can reference line height variables in your CSS:

```css
.demo {
  line-height: var(--c-line-height-md);
}
```

And in lh style prop:

```vue
<template>
  <c-text lh="xl">This text uses --c-line-height-xl variable</c-text>
</template>
```

To define custom line heights, you can use `theme.lineHeights` property:

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  lineHeights: {
    xs: '1.2',
    sm: '1.3',
    md: '1.4',
    lg: '1.5',
    xl: '1.6'
  }
})
```

### Headings

`theme.headings` controls font-size, line-height, font-weight and text-wrap CSS properties of headings in Title and Typography components.

|Name|Variable|Default value|
|---|---|--|
|General variables|`--c-heading-font-weight`<br>Controls font-weight property of all headings if not overridden | 700 |
| | `--c-heading-text-wrap`<br>Controls text-wrap property of all headings | wrap |
|h1 heading|`--c-h1-font-size` | 2.125rem(34px) |
||`--c-h1-line-height`| 1.3 |
||`--c-h1-font-weight`| 700 |
|h2 heading|`--c-h2-font-size` | 1.625rem(26px) |
||`--c-h1-line-height`| 1.35 |
||`--c-h1-font-weight`| 700 |
|h3 heading|`--c-h3-font-size` | 1.375rem(22px) |
||`--c-h1-line-height`| 1.4 |
||`--c-h1-font-weight`| 700 |
|h4 heading|`--c-h4-font-size` | 1.125rem(18px) |
||`--c-h1-line-height`| 1.45 |
||`--c-h1-font-weight`| 700 |
|h5 heading|`--c-h5-font-size` | 1rem(16px) |
||`--c-h1-line-height`| 1.5 |
||`--c-h1-font-weight`| 700 |
|h6 heading|`--c-h6-font-size` | 0.875rem(14px) |
||`--c-h1-line-height`| 1.5 |
||`--c-h1-font-weight`| 700 |

These variables are used in Title component, `order` prop controls which heading level to use. For example, `order={3}` Title will use:

- `--c-h3-font-size`
- `--c-h3-line-height`
- `--c-h3-font-weight`

You can reference heading variables in your CSS:

```css
.h1 {
  font-size: var(--c-h1-font-size);
  line-height: var(--c-h1-line-height);
  font-weight: var(--c-h1-font-weight);
}
```

And in fz and lh style props:

```vue
<template>
  <c-box fz="h1" lh="h1">This text uses --c-h1-* variables</c-box>
</template>
```

To change heading styles, can use `theme.headings` property:

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  headings: {
    sizes: {
      h1: {
        fontSize: '2rem',
        lineHeight: '1.5',
        fontWeight: '500'
      },
      h2: {
        fontSize: '1.5rem',
        lineHeight: '1.6',
        fontWeight: '500'
      }
    }
  }
})
```

`theme.headings` object is deeply merged with the `DEFAULT_THEME.headings` object - it is not required to define all values, only those that you want to change.

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  headings: {
    sizes: {
      h1: {
        fontSize: '2rem'
      }
    }
  }
})
```

### Font smoothing

Font smoothing variables control -webkit-font-smoothing and -moz-osx-font-smoothing CSS properties. These variables are used to make text look better on screens with high pixel density.

Font smoothing variables are controlled by `theme.fontSmoothing` theme property, it is `true` by default. If `theme.fontSmoothing` is `false`, both variables will be set to `unset`.

|Variable|Default value|
|---|---|
|`--c-webkit-font-smoothing`<br>Controls-webkit-font-smoothing CSS property|antialiased|
|`--c-moz-font-smoothing`<br>Controls-moz-osx-font-smoothing CSS property|grayscale|

If you need to override font smoothing values, the best way is to disable `theme.fontSmoothing` and set global styles on the body element:

```ts
import { createTheme } from '@cck-ui/core'

// Disable font smoothing in your theme
const theme = createTheme({
  fontSmoothing: false
})
```

```css
/* Add global styles to your project with desired font smoothing values */
body {
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
}
```

## Colors variables

Colors variables are controlled by `theme.colors` and `theme.primaryColor`. Each color defined in `theme.colors` object is required to have 10 shades. Theme color can be referenced by its name and shade index, for example, `--c-color-red-6`.

You can define new colors on the theme object or override existing colors:

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  colors: {
    demo: [
      '#ff0000',
      '#ff3333',
      '#ff6666',
      '#ff9999',
      '#ffcccc',
      '#ffeeee',
      '#fffafa',
      '#fff5f5',
      '#fff0f0',
      '#fffbfb'
    ]
  }
})
```

The code above will define the following CSS variables:

|Variable|Default value|
|---|---|
|`--c-color-demo-0`|#ff0000|
|`--c-color-demo-1`|#ff3333|
|`--c-color-demo-2`|#ff6666|
|`--c-color-demo-3`|#ff9999|
|`--c-color-demo-4`|#ffcccc|
|`--c-color-demo-5`|#ffeeee|
|`--c-color-demo-6`|#fffafa|
|`--c-color-demo-7`|#fff5f5|
|`--c-color-demo-8`|#fff0f0|
|`--c-color-demo-9`|#fffbfb|

### Variant colors

Some CCK UI components like [Button](../component/button) have `variant` prop that in combination with `color` prop controls the component text, background and border colors. For each variant and color, CCK UI defines a set of CSS variables that control these colors. For example, for the default `blue` color the following CSS variables are defined:

|Name|Variable|Default value|
|---|---|---|
|Filled variant|`--c-color-blue-filled`<br>Background color of filled variant|var(--c-color-blue-6)|
||`--c-color-blue-filled-hover`<br>Background color of filled variant on hover|var(--c-color-blue-7)|
|Light variant|`--c-color-blue-light`<br>Background color of light variant|rgba(34, 139, 230, 0.1)|
||`--c-color-blue-light-hover`<br>Background color of light variant on hover|rgba(34, 139, 230, 0.12)|
||`--c-color-blue-light-color`<br>Text color of light variant|var(--c-color-blue-6)|
|Outline variant|`--c-color-blue-outline`<br>Border color of outline variant|var(--c-color-blue-6)|
||`--c-color-blue-outline-hover`<br>Border color of outline variant|rgba(34, 139, 230, 0.05)|

For example, if you use [Button](../component/button) component the following way:

```vue
<template>
  <c-button color="pink" variant="filled">Filled pink button</c-button>
</template>
```

The component will have the following styles:

- Background color will be `var(--c-color-pink-filled)`
- Background color on hover will be `var(--c-color-pink-filled-hover)`
- Text color will be `var(--c-color-white)`
- Border color will be `transparent`

Note that the variables above are not static, they are generated based on the values of `theme.colors` and `theme.primaryShade`. Additionally, their values are different for dark and light color schemes.

Variant colors variables are used in all components that support `color` prop, for example, [Button](../component/button). Colors values that are used by these components are determined by `cssVariablesResolver` described below and variantColorResolver.

### Primary color variants

Primary color variables are defined by `theme.primaryColor` (which must be a key of `theme.colors`). The following CSS variables are defined for the primary color:

|Variable|Default value|
|---|---|
|`--c-primary-color-{shade}`<br>Shade is 0-9 to reference specific primary color shade|var(--c-color-{primaryColor}-{shade})|
|`--c-primary-color-filled`<br>Background color of filled variant|var(--c-color-{primaryColor}-filled)|
|`--c-primary-color-filled-hover`<br>Background color of filled variant on hover|var(--c-color-{primaryColor}-filled-hover)|
|`--c-primary-color-light`<br>Background color of light variant|var(--c-color-{primaryColor}-light)|
|`--c-primary-color-light-hover`<br>Background color of light variant on hover|var(--c-color-{primaryColor}-light-hover)|
|`--c-primary-color-light-color`<br>Text color of light variant|var(--c-color-{primaryColor}-light-color)|

You can reference primary color variables in CSS:

```css
.demo {
  color: var(--c-primary-color-0);
  background-color: var(--c-primary-color-filled);
}
```

### Other color variables

The following colors are used in various CCK UI components. Note that default values are provided for the light color scheme, dark color scheme values are different.

|Variable|Default value|
|---|---|
|`--c-color-white`<br>Value of theme.white|#fff|
|`--c-color-black`<br>Value of theme.black|#000|
|`--c-color-text`<br>Color used for text in the body element|var(--c-color-black)|
|`--c-color-body`<br>Body background color|var(--c-color-white)|
|`--c-color-error`<br>Color used for error messages and states|var(--c-color-red-6)|
|`--c-color-success`<br>Color used for success messages and states|var(--c-color-teal-8)|
|`--c-color-placeholder`<br>Color used for input placeholders|var(--c-color-gray-5)|
|`--c-color-dimmed`<br>Color used for dimmed text|var(--c-color-gray-6)|
|`--c-color-bright`<br>Color used for bright text|var(--c-color-black)|
|`--c-color-anchor`<br>Color used for links|var(--c-primary-color-6)|
|`--c-color-default`<br>Background color of default variant|var(--c-color-white)|
|`--c-color-default-hover`<br>Background color of default variant on hover|var(--c-color-gray-0)|
|`--c-color-default-color`<br>Text color of default variant|var(--c-color-black)|
|`--c-color-default-border`<br>Border color of default variant|var(--c-color-gray-4)|
|`--c-color-disabled`<br>Background color of disabled elements|var(--c-color-gray-2)|
|`--c-color-disabled-color`<br>Text color of disabled elements|var(--c-color-gray-5)|
|`--c-color-disabled-border`<br>Border color of disabled elements|var(--c-color-gray-3)|

## Spacing variables

`theme.spacing` values are used in most CCK UI components to control paddings, margins, and other spacing-related properties. The following CSS variables are defined based on `theme.spacing`:

|Variable|Default value|
|---|---|
|`--c-spacing-xs`|0.625rem(10px)|
|`--c-spacing-sm`|0.75rem(12px)|
|`--c-spacing-md`|1rem(16px)|
|`--c-spacing-lg`|1.25rem(20px)|
|`--c-spacing-xl`|2rem(32px)|

To define custom spacing values, use `theme.spacing` property:

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  }
})
```

## Border radius variables

CCK UI components that support `radius` prop use border radius variables to control border radius. The following CSS variables are defined based on `theme.radius`:

|Variable|Default value|
|---|---|
|`--c-radius-xs`|0.125rem(2px)|
|`--c-radius-sm`|0.25rem(4px)|
|`--c-radius-md`|0.5rem(8px)|
|`--c-radius-lg`|1rem(16px)|
|`--c-radius-xl`|2rem(32px)|

Additionally, `--c-radius-default` variable is defined based on `theme.defaultRadius` value. If `radius` prop on components is not set explicitly, `--c-radius-default` is used instead.

To define custom border radius values, use `theme.radius` and `theme.defaultRadius` properties:

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  defaultRadius: 'sm',
  radius: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '3rem'
  }
})
```

## Shadow variables

Shadow variables are used in all CCK UI components that support `shadow` prop. The following CSS variables are defined based on `theme.shadows`:

|Variable|Default value|
|---|---|
|`--c-shadow-xs`|0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)|
|`--c-shadow-sm`|0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 15px -5px rgba(0, 0, 0, 0.05), 0 7px 7px -5px rgba(0, 0, 0, 0.04)|
|`--c-shadow-md`|0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)|
|`--c-shadow-lg`|0 1px 3px rgba(0, 0, 0, 0.05), 0 28px 23px -7px rgba(0, 0, 0, 0.05), 0 12px 12px -7px rgba(0, 0, 0, 0.04)|
|`--c-shadow-xl`|0 1px 3px rgba(0, 0, 0, 0.05), 0 36px 28px -7px rgba(0, 0, 0, 0.05), 0 17px 17px -7px rgba(0, 0, 0, 0.04)|

To define custom shadow values, use `theme.shadows` property:

```ts
import { createTheme } from '@cck-ui/core'

const theme = createTheme({
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.1)',
    xl: '0 8px 16px rgba(0, 0, 0, 0.1)'
  }
})
```

## z-index variables

z-index variables are defined in `@cck-ui/core/styles.css`. Unlike other variables, z-index variables are not controlled by the theme and are not exposed in the same object.

|Variable|Default value|
|---|---|
|`--c-z-index-app`|100|
|`--c-z-index-modal`|200|
|`--c-z-index-popover`|300|
|`--c-z-index-overlay`|400|
|`--c-z-index-max`|9999|

You can reference z-index variables in CSS:

```css
/* Display content above the modal */
.my-content {
  z-index: calc(var(--c-z-index-modal) + 1);
}
```

And in components by referencing CSS variable:

```vue
<template>
  <c-box z-index="var(--c-z-index-max)">Hight z index content</c-box>
</template>
```

## CSS variables resolver

`cssVariablesResolver` prop on CckConfigProvider allows you to modify values of CCK UI CSS variables or even add your own variables. `cssVariablesResolver` is a function that accepts theme as a single argument and returns an object with CSS variables divided into three groups:

- `variables` - variables that do not depend on color scheme
- `light` - variables for light color scheme only
- `dark` - variables for dark color scheme only

Example of adding new CSS variables based on `theme.other`:

```vue
<template>
  <cck-config-provider :theme="themeOverride" :cssVariablesResolver="resolver">
    <!-- Your app here -->
  </cck-config-provider>
</template>

<script setup>
import { createTheme, CSSVariablesResolver, CckConfigProvider } from '@cck-ui/core'

const themeOverride = createTheme({
  other: {
    deepOrangeLight: '#e17900',
    deepOrangeDark: '#fc8c0c',
    heroHeight: 400
  }
})

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--c-hero-height': theme.other.heroHeight
  },
  light: {
    '--c-color-deep-orange': theme.other.deepOrangeLight
  },
  dark: {
    '--c-color-deep-orange': theme.other.deepOrangeDark
  }
})
</script>
```

Then you will be able to use `--c-hero-height` and `--c-color-deep-orange` variables in any part of your application:

```css
.hero {
  height: var(--c-hero-height);

  /* background color will automatically change based on color scheme */
  background-color: var(--c-color-deep-orange);
}
```