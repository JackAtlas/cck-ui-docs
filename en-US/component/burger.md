---
title: Burger
lang: en-US
---

# Burger

Open/close navigation button

## Usage

The `Burger` component renders an open/close menu button. Set the `opened` and `onClick` props to control the component state. If the `opened` prop is set, a cross will be rendered, otherwise a burger icon.

<c-burger aria-label="Toggle navigation" :opened="opened" @click="toggle" />

```vue
<template>
  <c-burger aria-label="Toggle navigation" :opened="opened" @click="toggle" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const opened = ref<boolean>(false)

const toggle = () => {
  opened.value = !opened.value
}
</script>
```

## Change line size

<c-burger aria-label="Toggle navigation" size="xl" :line-size="5" :opened="lOpened" @click="lToggle" />

```vue
<template>
  <c-burger aria-label="Toggle navigation" size="xl" :line-size="5" :opened="opened" @click="toggle" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const opened = ref<boolean>(false)

const toggle = () => {
  opened.value = !opened.value
}
</script>
```

## Accessibility

To make the `Burger` accessibility for screen readers, you need to set `aria-label` or use the [VisuallyHidden](./visually-hidden) component:

```vue
<template>
  <c-burger aria-label="Toggle navigation" />

  <c-burger>
    <c-visually-hidden>Toggle navigation</c-visually-hidden>
  </c-burger>
</template>
```

<script setup lang="ts">
import { ref } from 'vue'

const opened = ref<boolean>(false)
const lOpened = ref<boolean>(false)

const toggle = () => {
  opened.value = !opened.value
}

const lToggle = () => {
  lOpened.value = !lOpened.value
}
</script>

## Props

### Burger props

|Name|Type|Description|Default value|
|---|---|---|---|
|color|CColor|Key of `theme.colors` of any valid CSS value, by default `theme.white` in dark color scheme and `theme.black` in light||
|lineSize|string \| number|Controls height of lines, by default calculated based on `size` prop||
|opened|boolean|State of the burger, when `true` burger is transformed into X|`false`|
|size|CSize \| number|Controls burger `width` and `height`, numbers are converted to rem|`'md'`|
|transitionDuration|number|`transition-duration` property value in ms|`300`|
|transitionTimingFunction|string|`transition-timing-function` property value|`'ease'`|

## Styles API

`Burger` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Burger Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Burger-root|Root element (button)|
|burger|.c-Burger-burger|Inner element that contains burger lines|

#### CSS variables

<table tabindex="0">
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
      <td>--burger-color</td>
      <td>Controls height of lines</td>
    </tr>
    <tr>
      <td>--burger-color</td>
      <td>Controls background-color of lines</td>
    </tr>
    <tr>
      <td>--burger-transition-duration</td>
      <td>Controls transition-duration of lines</td>
    </tr>
    <tr>
      <td>--burger-transition-timing-function</td>
      <td>Controls transition-timing-function of lines</td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|burger|data-opened|opened prop is set|