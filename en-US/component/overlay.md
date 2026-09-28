---
title: Overlay
lang: en-US
---

# Overlay

Overlays parent element with div element with any color and opacity

## Usage

`Overlay` takes 100% of the width and height of the parent container or viewport if the `fixed` prop is set. Set the `color` and `backgroundOpacity` props to change the `Overlay` background-color. Note that the `backgroundOpacity` prop does not change the CSS opacity property; it changes the background-color. For example, if you set `color="#000"` and `:backgroundOpactiy="0.85"`, the background-color will be `rgba(0, 0, 0, 0.85)`:

<div>
  <c-aspect-ratio mx="auto" pos="relative" :maw="400" :ratio="16 / 9">
    <img alt="demo" src="https://picsum.photos/960/540" style="margin: 0" />
    <c-overlay color="#000" v-if="visible" :background-opacity="0.75" />
  </c-aspect-ratio>

  <c-button full-width variant="filled" :maw="200" mt="xl" mx="auto" @click="toggle">Toggle overlay</c-button>
</div>

```vue
<template>
  <c-aspect-ratio mx="auto" pos="relative" :maw="400" :ratio="16 / 9">
    <img alt="demo" src="https://picsum.photos/960/540" />
    <c-overlay color="#000" v-if="visible" :background-opacity="0.75" />
  </c-aspect-ratio>

  <c-button full-width variant="filled" :maw="200" mt="xl" mx="auto" @click="toggle">Toggle overlay</c-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const toggle = () => {
  visible.value = !visible.value
}
</script>
```

## Gradient

Set the `gradient` prop to use background-image instead of background-color. When the `gradient` prop is set, the `color` and `backgroundOpacity` props are ignored.

<div>
  <c-aspect-ratio mx="auto" pos="relative" :maw="400" :ratio="16 / 9">
    <img alt="demo" src="https://picsum.photos/960/540" style="margin: 0" />
    <c-overlay color="#000" gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)" v-if="gradientVisible" :opacity="0.85" />
  </c-aspect-ratio>

  <c-button full-width variant="filled" :maw="200" mt="xl" mx="auto" @click="gradientToggle">Toggle overlay</c-button>
</div>

```vue
<template>
  <c-aspect-ratio mx="auto" pos="relative" :maw="400" :ratio="16 / 9">
    <img alt="demo" src="https://picsum.photos/960/540" style="margin: 0" />
    <c-overlay color="#000" gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)" v-if="visible" :opacity="0.85" />
  </c-aspect-ratio>

  <c-button full-width variant="filled" :maw="200" mt="xl" mx="auto" @click="toggle">Toggle overlay</c-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const toggle = () => {
  visible.value = !visible.value
}
</script>
```

## Blur

Set the `blur` prop to add `backdrop-filter: blur({ value })` styles. Note that `backdrop-filter` [is not supported in all browsers](https://caniuse.com/css-backdrop-filter).

<div>
  <c-aspect-ratio mx="auto" pos="relative" :maw="400" :ratio="16 / 9">
    <img alt="demo" src="https://picsum.photos/960/540" style="margin: 0" />
    <c-overlay color="#000" :blur="15" :background-opacity="0.35" />
  </c-aspect-ratio>
</div>

```vue
<template>
  <c-aspect-ratio mx="auto" pos="relative" :maw="400" :ratio="16 / 9">
    <img alt="demo" src="https://picsum.photos/960/540" style="margin: 0" />
    <c-overlay color="#000" :blur="15" :background-opacity="0.35" />
  </c-aspect-ratio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const toggle = () => {
  visible.value = !visible.value
}
</script>
```

## Polymorphic component

`Overlay` is a polymorphic component - its default root element is `div`, but it can be changed to any other element or component with the `tag` prop:

```vue
<c-overlay tag="a" />
```

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const toggle = () => {
  visible.value = !visible.value
}

const gradientVisible = ref(true)
const gradientToggle = () => {
  gradientVisible.value = !gradientVisible.value
}
</script>

## Props

### Overlay props

|Name|Type|Description|Default value|
|---|---|---|---|
|backgroundOpacity|number|Overlay `background-color` opacity 0-1, ignored when `gradient` prop is set|`0.6`|
|blur|string \| number|Overlay background blur in px (converted to rem). Applies `backdrop-filter: blur()`. Note: backdrop-filter is not supported in all browsers.|`0`|
|center|boolean|Centers content inside the overlay using flexbox (sets display: flex, align-items: center, justify-content: center)|`false`|
|color|BackgroundColor|Overlay `background-color`|`#000`|
|fixed|boolean|Changes position from `absolute` to `fixed` (viewport-relative instead of parent-relative)|`false`|
|gradient|string|Changes overlay to gradient. If set, both `color` and `backgroundOpacity` props are ignored.|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius|`0`|
|zIndex|string \| number|Overlay z-index|`200`|

### Overlay slots

|Name|Description|
|---|---|
|default|Content inside overlay|

## Styles API

`Overlay` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Overlay Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Overlay-root|Root element|

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
      <td rowspan="4">root</td>
      <td>--overlay-bg</td>
      <td>Controls <code>background-color</code></td>
    </tr>
    <tr>
      <td>--overlay-filter</td>
      <td>Controls <code>backdrop-filter</code></td>
    </tr>
    <tr>
      <td>--overlay-radius</td>
      <td>Controls <code>border-radius</code></td>
    </tr>
    <tr>
      <td>--overlay-z-index</td>
      <td>Controls <code>z-index</code></td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|root|data-center|`center` prop is set|
|root|data-fixed|`fixed` prop is set|