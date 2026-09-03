---
title: Kbd
lang: en-US
---

# Kbd

Display keyboard key

## Usage

<div>
  <c-kbd>⌘</c-kbd> + <c-kbd>Shift</c-kbd> + <c-kbd>M</c-kbd>
</div>

```vue
<template>
  <c-kbd>⌘</c-kbd> + <c-kbd>Shift</c-kbd> + <c-kbd>M</c-kbd>
</template>
```

## Size

<c-group>
  <c-kbd v-for="size in sizes" :key="size" :size="size">Shift</c-kbd>
</c-group>

```vue
<template>
  <c-kbd v-for="size in sizes" :key="size" :size="size">Shift</c-kbd>
</template>

<script setup lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 30]
</script>
```

<script setup lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 30]
</script>

## Props

### Kbd props

|Name|Type|Description|Default value|
|---|---|---|---|
|size|CSize \| number|Controls `font-size` and `padding`|`'sm'`|

## Styles API

`Kbd` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Kbd Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Kbd-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--kbd-fz|Controls `font-size`|