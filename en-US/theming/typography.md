---
title: Typography
lang: en-US
---

# Typography

## Change fonts

You can change fonts and other text styles for headings, code, and all other components with the following theme properties:

- `theme.fontFamily` - controls font-family in all components except [Title](../component/title), [Code](../component/code), and [Kbd](../component/kbd)
- `theme.fontFamilyMonospace` - controls font-family of components that require monospace font: [Code](../component/code), [Kbd](../component/kbd)
- `theme.headings.fontFamily` - controls font-family of h1-h6 tags in [Title](../component/title) and [Typography](../component/typography) components; falls back to `theme.fontFamily` if not defined

**Note**: Typography styles in this documentation website is infuenced by injected styles provided by Vitepress' default theme. We will rebuild this website with custom theme using CCK UI components in the future.

<cck-config-provider cssVariablesSelector=".demo" :theme="theme">
  <div class="demo" style="fontFamily: var(--c-font-family)">
    <c-center>
      <c-title :order="3">Outfit or sans-serif title</c-title>
    </c-center>
    <c-group justify="center" mt="8">
      <c-button>Verdana button</c-button>
      <c-code>Monaco, Courier Code</c-code>
    </c-group>
  </div>
</cck-config-provider>

```vue
<template>
  <cck-config-provider cssVariablesSelector=".demo" :theme="theme">
    <div class="demo" style="fontFamily: var(--c-font-family)">
      <c-title :order="3">Outfit or sans-serif title</c-title>
      <c-button>Verdana button</c-button>
      <c-code>Monaco, Courier Code</c-code>
    </div>
  </cck-config-provider>
</template>

<script setup lang="ts">
import { CckConfigProvider, createTheme } from '@cck-ui/core'

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, sans-serif' }
})
</script>
```

**Note**: The value of `Button` component style `font-family` is default (`inherit` in most user-agent). So you need to set its parent node's style `fontFamily: var(--c-font-family)`, in this case, `.demo`.

If you want to apply the overriden theme style to the whole application, just don't provide the `cssVariablesSelector` prop to `CckConfigProvider`:

```vue
<template>
  <cck-config-provider :theme="theme">
    <c-title :order="3">Outfit or sans-serif title</c-title>
    <c-button>Verdana button</c-button>
    <c-code>Monaco, Courier Code</c-code>
  </cck-config-provider>
</template>
```

## System fonts

By default, CCK UI uses system fonts. This means that different devices will display components based on the available font. For example, macOS and iOS users will see the [San Francisco font](https://developer.apple.com/fonts/), Windows users will see the [Segoe UI font](https://docs.microsoft.com/en-us/typography/font-list/segoe-ui), Android users will see the [Roboto font](https://fonts.google.com/specimen/Roboto), and so on. This approach provides a familiar experience to users and allows avoiding common problems related to custom fonts loading (layout shift, invisible text, etc.). If you do not have strict requirements, it is recommended to use system fonts for better performance.

Default values for theme properties:

- Default value for `theme.fontFamily` and `theme.headings.fontFamily` is `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji`
- Default value for `theme.fontFamilyMonospace` is `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`

## Font sizes

<c-text fz="md" lh="md">Paras is an orange, insectoid Pokémon that resembles the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pseudopupils.</c-text>

```vue
<template>
  <c-text fz="md" lh="md">Paras is an orange, insectoid Pokémon that resembles the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pseudopupils.</c-text>
</template>
```

The `theme.fontSizes` property defines font-size values for all CCK UI components:

```vue
<template>
  <cck-config-provider :theme="theme">
    <!-- Your app here -->
  </cck-config-provider>
</template>

<script setup lang="ts">
import { CckConfigProvider, createTheme } from '@cck-ui/core'

const theme = createTheme({
  fontSizes: {
    xs: 10,
    sm: 11,
    md: 14,
    lg: 16,
    xl: 20
  }
})
</script>
```

Default `theme.fontSizes` values:

|Key|Value|Value in px|
|---|---|---|
|xs|0.75rem|12px|
|sm|0.875rem|14px|
|md|1rem|16px|
|lg|1.125rem|18px|
|xl|1.25rem|20px|

## Line heights

The `theme.lineHeights` property defines line-height values for the [Text](../component/text) component; most other components use `theme.lineHeights.md` by default:

```vue
<template>
  <cck-config-provider :theme="theme">
    <!-- Your app here -->
  </cck-config-provider>
</template>

<script setup lang="ts">
import { CckConfigProvider, createTheme } from '@cck-ui/core'

const theme = createTheme({
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65'
  }
})
</script>
```

Default `theme.lineHeights` values:

|Key|Value|
|---|---|
|xs|1.4|
|sm|1.45|
|md|1.55|
|lg|1.6|
|xl|1.65|

## h1-h6 styles

To customize heading styles in [Title](../component/title) and [Typography](../component/typography) components, set `theme.headings`:

```vue
<template>
  <cck-config-provider :theme="theme">
    <!-- Your app here -->
  </cck-config-provider>
</template>

<script setup lang="ts">
import { CckConfigProvider, createTheme } from '@cck-ui/core'

const theme = createTheme({
  headings: {
    // properties for all headings
    fontWeight: '400',
    fontFamily: 'Roboto',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: {
        fontWeight: '100',
        fontSize: 36,
        lineHeight: '1.4'
      },
      h2: { fontSize: 30, lineHeight: '1.5' },
      // ...up to h6
      h6: { fontWeight: '900' }
    }
  }
})
</script>
```

With `theme.headings` you can customize font-size, font-weight, and line-height per heading level. If you need more control over styles, use the [:is selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) with the [Styles API](../styles/styles-api) to target a specific heading level:

```scss
// demo.module.css
.heading {
  &:is(h1) {
    font-family: Outfit, sans-serif;
    font-weight: 900;
  }

  &:is(h5, h6) {
    color: var(--c-color-dimmed);
  }
}
```

```vue
<template>
  <cck-config-provider :theme="theme">
    <c-title :order="1">Heading 1</c-title>
    <c-title :order="2">Heading 2</c-title>
    <c-title :order="3">Heading 3</c-title>
    <c-title :order="4">Heading 4</c-title>
    <c-title :order="5">Heading 5</c-title>
    <c-title :order="6">Heading 6</c-title>
  </cck-config-provider>
</template>

<script setup lang="ts">
import { CckConfigProvider, createTheme, CTitle } from '@cck-ui/core'
import classes from './demo.module.css'

const theme = createTheme({
  components: {
    Title: CTitle.extend({
      classNames: {
        root: classes.heading
      }
    })
  }
})
</script>
```

<script setup lang="ts">
import { CckConfigProvider, createTheme } from '@cck-ui/core'

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, sans-serif' }
})
</script>