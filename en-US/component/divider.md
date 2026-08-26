---
title: Divider
lang: en-US
---

# Divider

Horizontal line with optional label or vertical divider

## Usage

<div>
  <c-text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
    perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
    aliquid commodi atque sunt officiis natus?
  </c-text>
  <c-divider my="md"></c-divider>
  <c-text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
    perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
    aliquid commodi atque sunt officiis natus?
  </c-text>
  <c-divider my="md"></c-divider>
  <c-text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
    perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
    aliquid commodi atque sunt officiis natus?
  </c-text>
</div>

```vue
<template>
  <c-text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
    perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
    aliquid commodi atque sunt officiis natus?
  </c-text>
  <c-divider my="md"></c-divider>
  <c-text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
    perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
    aliquid commodi atque sunt officiis natus?
  </c-text>
  <c-divider my="md"></c-divider>
  <c-text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
    perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
    aliquid commodi atque sunt officiis natus?
  </c-text>
</template>
```

## Variants

<c-divider my="sm"></c-divider>
<c-divider my="sm" variant="dashed"></c-divider>
<c-divider my="sm" variant="dotted"></c-divider>

```vue
<template>
  <c-divider my="sm"></c-divider>
  <c-divider my="sm" variant="dashed"></c-divider>
  <c-divider my="sm" variant="dotted"></c-divider>
</template>
```

## With label

<c-divider my="xs" label-position="left">
  <template #label>Label on the left</template>
</c-divider>
<c-divider my="xs" label-position="center">
  <template #label>Label on the center</template>
</c-divider>
<c-divider my="xs" label-position="right">
  <template #label>Label on the right</template>
</c-divider>
<c-divider my="xs" label-position="center">
  <template #label>
    <search-icon :size="12" />
    <c-box :ml="5">Search results</c-box>
  </template>
</c-divider>

```vue
<template>
  <c-divider my="xs" label-position="left">
    <template #label>Label on the left</template>
  </c-divider>
  <c-divider my="xs" label-position="center">
    <template #label>Label on the center</template>
  </c-divider>
  <c-divider my="xs" label-position="right">
    <template #label>Label on the right</template>
  </c-divider>
  <c-divider my="xs" label-position="center">
    <template #label>
      <search-icon :size="12" />
      <c-box :ml="5">Search results</c-box>
    </template>
</c-divider>
</template>

<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
</script>
```

## Sizes

<c-stack>
  <c-divider size="xs"></c-divider>
  <c-divider size="sm"></c-divider>
  <c-divider size="md"></c-divider>
  <c-divider size="lg"></c-divider>
  <c-divider size="xl"></c-divider>
  <c-divider :size="10"></c-divider>
</c-stack>

```vue
<template>
  <c-divider size="xs"></c-divider>
  <c-divider size="sm"></c-divider>
  <c-divider size="md"></c-divider>
  <c-divider size="lg"></c-divider>
  <c-divider size="xl"></c-divider>
  <c-divider :size="10"></c-divider>
</template>
```

## Vertical orientation

<c-group>
  <c-text :m="0">Label</c-text>
  <c-divider orientation="vertical"></c-divider>
  <c-text :m="0">Label</c-text>
  <c-divider orientation="vertical" size="sm"></c-divider>
  <c-text :m="0">Label</c-text>
  <c-divider orientation="vertical" size="md"></c-divider>
  <c-text :m="0">Label</c-text>
  <c-divider orientation="vertical" size="lg"></c-divider>
  <c-text :m="0">Label</c-text>
  <c-divider orientation="vertical" size="xl"></c-divider>
  <c-text :m="0">Label</c-text>
</c-group>

```vue
<template>
  <c-group>
    <c-text>Label</c-text>
    <c-divider orientation="vertical"></c-divider>
    <c-text>Label</c-text>
    <c-divider orientation="vertical" size="sm"></c-divider>
    <c-text>Label</c-text>
    <c-divider orientation="vertical" size="md"></c-divider>
    <c-text>Label</c-text>
    <c-divider orientation="vertical" size="lg"></c-divider>
    <c-text>Label</c-text>
    <c-divider orientation="vertical" size="xl"></c-divider>
    <c-text>Label</c-text>
  </c-group>
</template>
```

<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
</script>

## Props

### Divider props

|Name|Type|Description|Default value|
|---|---|---|---|
|color|CColor|Key of `theme.colors` or any valid CSS color value||
|labelPosition|"center" \| "left" \| "right"|Label position|`'center'`|
|orientation|"horizontal" \| "vertical"|Divider orientation|`'horizontal'`|
|size|CSize \| number|Controls width/height (depends on orientation)|`'xs'`|

### Divider slots

|Name|Description|
|---|---|
|label|Divider label, visible only with `orientation="horizontal"`|

## Styles API

`Divider` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Divider Styles APi

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Divider-root|Root element|
|label|.c-Divider-label|Label element|