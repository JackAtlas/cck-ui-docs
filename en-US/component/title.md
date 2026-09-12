---
title: Title
lang: en-US
---

# Title

h1-h6 heading

**Note**: Title styles in this documentation website is infuenced by injected styles provided by Vitepress' default theme. We will rebuild this website with custom theme using CCK UI components in the future.

## Usage

Use the Title component to render h1-h6 headings with CCK UI [theme](../theming/theme-object) styles. By default, `Title` has no margins and paddings. You can change `font-size`, `font-weight` and `line-height` per heading with [theme.headings](../theming/typography).

Set the `order` prop to render a specific element (h1-h6); the default order is `1`:

<c-stack>
  <c-title v-for="i in 6" :index="i" :order="i">This is h{{ i }} title</c-title>
</c-stack>

```vue
<template>
  <c-title v-for="i in 6" :index="i" :order="i">This is h{{ i }} title</c-title>
</template>
```

## Size

You can change the Title `size` independent of its `order`:

- If you set the size to `h1`-`h6`, then the component will add corresponding `font-size` and `line-height` from the [theme](../theming/theme-object)
- If you set the size to any other value, then `line-height` will be calculated based on `order` - `size` will impact only `font-size`

<c-stack>
  <c-title size="h1" :order="3">H3 heading with h1 font-size</c-title>
  <c-title size="h4">H1 heading with h4 font-size</c-title>
  <c-title :size="16">H1 heading with 16px size</c-title>
  <c-title size="xs">H1 heading with xs size</c-title>
</c-stack>

```vue
<template>
  <c-title size="h1" :order="3">H3 heading with h1 font-size</c-title>
  <c-title size="h4">H1 heading with h4 font-size</c-title>
  <c-title :size="16">H1 heading with 16px size</c-title>
  <c-title size="xs">H1 heading with xs size</c-title>
</template>
```

## Text wrap

Use the `textWrap` prop to control the [text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) CSS property. It controls how text inside an element is wrapped.

<c-stack>
  <c-title text-wrap="wrap" :order="3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!</c-title>
  <c-title text-wrap="balance" :order="3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!</c-title>
</c-stack>

```vue
<template>
  <c-title text-wrap="wrap" :order="3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!</c-title>
  <c-title text-wrap="balance" :order="3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!</c-title>
</template>
```

You can also set `textWrap` on [theme](../theming/theme-object):

```vue
<template>
  <cck-config-provider :theme="theme">
    <c-title>Some very long title that should wrap</c-title>
  </cck-config-provider>
</template>

<script setup lang="ts">
import { CckConfigProvider, createTheme } from '@cck-ui/core'

const theme = createTheme({
  headings: {
    textWrap: 'wrap'
  }
})
</script>
```

## Line clamp

Set the `lineClamp` prop to truncate text after the specified number of lines:

<c-box :maw="400">
  <c-title :line-clamp="2" :order="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?</c-title>
</c-box>

## Props

### Title props

|Name|Type|Description|Default value|
|---|---|---|---|
|lineClamp|number|Number of lines after which heading will be truncated||
|order|TitleOrder|Heading order (1-6), controls `font-size` style if `size` prop is not set|`1`|
|size|TitleSize|Changes title size, if not set, then size is controlled by `order` prop||
|textWrap|"wrap" \| "nowrap" \| "balance" \| "pretty" \| "stable"|Heading `text-wrap` CSS property|`'wrap'`|

## Styles API

`Title` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Title Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Title-root|Root element|

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
      <td>--title-fw</td>
      <td>Title <code>font-weight</code>, by default value from <code>theme.headings</code></td>
    </tr>
    <tr>
      <td>--title-fz</td>
      <td>Title <code>font-size</code>, by default value from <code>theme.headings</code></td>
    </tr>
    <tr>
      <td>--title-lh</td>
      <td>Title <code>line-height</code>, by default value from <code>theme.headings</code></td>
    </tr>
    <tr>
      <td>--title-line-clamp</td>
      <td>Controls <code>-webkit-line-clamp</code> css property</td>
    </tr>
    <tr>
      <td>--title-text-wrap</td>
      <td>Controls <code>text-wrap</code> css property</td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|root|data-order|-|Value of the `order` prop|
|root|data-line-clamp|`lineClamp` prop is a number|-|