---
title: Skeleton
lang: en-US
---

# Skeleton

Indicate content loading state

## Usage

Use `Skeleton` to create a placeholder for loading content. `Skeleton` supports the following props:

- `height` - height - any valid CSS value
- `width` - width - any valid CSS value
- `radius` - key of `theme.radius` or any valid CSS value to set border-radius
- `circle` - if true, width, height and border-radius will equal the value specified in the `height` prop
- `animate` - true by default, controls animation

<div>
  <c-skeleton :height="50" circle mb="xl" />
  <c-skeleton :height="8" radius="xl" />
  <c-skeleton :height="8" :mt="6" radius="xl" />
  <c-skeleton :height="8" :mt="6" width="70%" radius="xl" />
</div>

```vue
<template>
  <c-skeleton :height="50" circle mb="xl" />
  <c-skeleton :height="8" radius="xl" />
  <c-skeleton :height="8" :mt="6" radius="xl" />
  <c-skeleton :height="8" :mt="6" width="70%" radius="xl" />
</template>
```

## With content

If you want to indicate the loading state of content that is already on the page, wrap it with Skeleton and control the loading overlay visibility with the `visible` prop:

<c-stack>
  <c-skeleton :visible="loading">
    <c-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet ligula sem. In hac habitasse platea dictumst. Donec auctor rutrum mi quis pharetra. Donec varius orci ac risus aliquam dignissim ac eget tortor. Proin ut dictum nisl, nec sagittis orci. Duis sed enim purus. In laoreet dolor metus, at sagittis lacus maximus non. Suspendisse viverra eget tortor at varius. Vivamus et orci at nisi molestie pretium.</c-text>
  </c-skeleton>
  <c-button @click="toggleLoading">Toggle Skeleton</c-button>
</c-stack>

```vue
<template>
  <c-skeleton :visible="loading">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet ligula sem. In hac habitasse platea dictumst. Donec auctor rutrum mi quis pharetra. Donec varius orci ac risus aliquam dignissim ac eget tortor. Proin ut dictum nisl, nec sagittis orci. Duis sed enim purus. In laoreet dolor metus, at sagittis lacus maximus non. Suspendisse viverra eget tortor at varius. Vivamus et orci at nisi molestie pretium.
  </c-skeleton>
  <c-button @click="toggleLoading">Toggle Skeleton</c-button>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)

function toggleLoading() {
  loading.value = !loading.value
}
</script>
```

<script setup>
import { ref } from 'vue'

const loading = ref(true)

function toggleLoading() {
  loading.value = !loading.value
}
</script>

## Props

### Skeleton props

|Name|Type|Description|Default value|
|---|---|---|---|
|animate|boolean|Enables animation|`true`|
|circle|boolean|If set, Skeleton `width` and `border-radius` are equal to its `height`|`false`|
|height|Height<string \| number>|Skeleton `height`, numbers are converted to rem|`auto`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem.|`theme.defaultValue`|
|visible|boolean|Determines whether Skeleton overlay should be displayed|`true`|
|width|Properties["width"]|Skeleton `width`, numbers are converted to rem, ignored when `circle` prop is set.|`100%`|

## Styles API

`Skeleton` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Skeleton Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Skeleton-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--skeleton-height|Controls skeleton `height`|
||--skeleton-width|Controls skeleton `width`|
||--skeleton-radius|Controls skeleton `border-radius`|