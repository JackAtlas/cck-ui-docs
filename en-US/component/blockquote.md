---
title: Blockquote
lang: en-US
---

# Blockquote

Blockquote with optional cite

## Usage

<c-blockquote color="blue" :icon-size="38">
  <template #icon>
    <info-icon />
  </template>
  Life is like an npm install - you never know what you are going to get.
  <template #cite>- Forrest Gump</template>
</c-blockquote>

```vue
<template>
  <c-blockquote color="blue" :icon-size="38">
    <template #icon>
      <info-icon />
    </template>
    Life is like an npm install - you never know what you are going to get.
    <template #cite>- Forrest Gump</template>
  </c-blockquote>
</template>

<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
</script>
```

## Text wrap

Use the `textWrap` prop to control the `text-wrap` CSS property:

<c-blockquote color="blue" text-wrap="wrap" :icon-size="38">
  <template #icon>
    <info-icon />
  </template>
  Life is like a box of chocolates. You never know what you are gonna get. But whatever you get, you should make the most of it and enjoy every moment.
  <template #cite>- Forrest Gump</template>
</c-blockquote>

<c-blockquote color="blue" mt="xl" text-wrap="balance" :icon-size="38">
  <template #icon>
    <info-icon />
  </template>
  Life is like a box of chocolates. You never know what you are gonna get. But whatever you get, you should make the most of it and enjoy every moment.
  <template #cite>- Forrest Gump</template>
</c-blockquote>

```vue
<template>
  <c-blockquote color="blue" text-wrap="wrap" :icon-size="38">
    <template #icon>
      <info-icon />
    </template>
    Life is like a box of chocolates. You never know what you are gonna get. But whatever you get, you should make the most of it and enjoy every moment.
    <template #cite>- Forrest Gump</template>
  </c-blockquote>
</template>

<c-blockquote color="blue" mt="xl" text-wrap="balance" :icon-size="38">
  <template #icon>
    <info-icon />
  </template>
  Life is like a box of chocolates. You never know what you are gonna get. But whatever you get, you should make the most of it and enjoy every moment.
  <template #cite>- Forrest Gump</template>
</c-blockquote>

<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
</script>
```

<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
</script>

## Props

### Blockquote props

|Name|Type|Description|Default value|
|---|---|---|---|
|color|CColor|Key of `theme.color` or any valid CSS color|`theme.primaryColor`|
|iconSize|string \| number|Controls icon wrapper `width` and `height`, numbers are converted to rem|`40`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set `border-radius`|`theme.defaultRadius`|
|textWrap|"wrap" \| "nowrap" \| "balance" \| "pretty" \| "stable"|Controls `text-wrap` CSS property||

### Blockquote slots

|Name|Description|
|---|---|
|cite|Reference to a cited quote|
|icon|Blockquote icon, displayed at the top left side|

## Styles API

`Blockquote` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Blockquote Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Blockquote-root|Root element|
|icon|.c-Blockquote-icon|Icon element|
|cite|.c-Blockquote-cite|Cite element|

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
      <td rowspan="6">root</td>
      <td>--bq-bd</td>
      <td>Controls <code>border</code></td>
    </tr>
    <tr>
      <td>--bq-bg-dark</td>
      <td>Controls <code>background-color</code> in dark color scheme</td>
    </tr>
    <tr>
      <td>--bq-bg-light</td>
      <td>Controls <code>background-color</code> in light color scheme</td>
    </tr>
    <tr>
      <td>--bq-icon-size</td>
      <td>Controls <code>width</code> and <code>height</code> of the icon</td>
    </tr>
    <tr>
      <td>--bq-radius</td>
      <td>Controls <code>border-radius</code></td>
    </tr>
    <tr>
      <td>--bq-text-wrap</td>
      <td>Controls <code>text-wrap</code> property</td>
    </tr>
  </tbody>
</table>