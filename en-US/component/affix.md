---
title: Affix
lang: en-US
---

# Affix

Renders children inside portal at fixed position

## Usage

`Affix` renders a div element with a fixed position inside the [Portal](./portal) component. Use it to display elements fixed at any position on the screen, for example, scroll to top button:

<c-text>Affix is located at the bottom of the screen, scroll to see it</c-text>

<c-affix :position="{ bottom: 20, right: 20 }">
  <c-transition transition="slide-up" :mounted="y > 0">
    <template #default="{ styles }">
      <c-button :style="styles" @click="scrollTo({ y: 0 })">
        <template #left-section>
          <arrow-up-icon :size="16" />
        </template>
        Scroll to top
      </c-button>
    </template>
  </c-transition>
</c-affix>

```vue
<template>
  <c-text>Affix is located at the bottom of the screen, scroll to see it</c-text>

  <c-affix :position="{ bottom: 20, right: 20 }">
    <c-transition transition="slide-up" :mounted="y > 0">
      <template #default="{ styles }">
        <c-button :style="styles" @click="scrollTo({ y: 0 })">
          <template #left-section>
            <arrow-up-icon :size="16" />
          </template>
          Scroll to top
        </c-button>
      </template>
    </c-transition>
  </c-affix>
</template>

<script setup lang="ts">
import { ArrowUpIcon } from '@lucide/vue'
import { useWindowScroll } from '@cck-ui/hooks'
const { x, y, scrollTo } = useWindowScroll()
</script>
```

<script setup lang="ts">
import { ArrowUpIcon } from '@lucide/vue'
import { useWindowScroll } from '@cck-ui/hooks'
const { x, y, scrollTo } = useWindowScroll()
</script>

## Props

### Affix props

|Name|Type|Description|Default value|
|---|---|---|---|
|portalProps|BasePortalProps|Props passed down to the `Portal` component. Ignored when `withinPortal` is `false`.||
|position|AffixPosition|Affix position on screen|`{ bottom: 0, right: 0 }`|
|withinPortal|boolean|Determines whether the component is rendered within `Portal`|`true`|
|zIndex|Properties['zIndex']|Root element `z-index` property|`200`|

## Styles API

`Affix` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Affix Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Affix-root|Root element|

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
      <td>--affix-z-index</td>
      <td>Controls `z-index` property</td>
    </tr>
    <tr>
      <td>--affix-top</td>
      <td>Controls `top` property</td>
    </tr>
    <tr>
      <td>--affix-bottom</td>
      <td>Controls `bottom` property</td>
    </tr>
    <tr>
      <td>--affix-left</td>
      <td>Controls `left` property</td>
    </tr>
    <tr>
      <td>--affix-right</td>
      <td>Controls `right` property</td>
    </tr>
  </tbody>
</table>