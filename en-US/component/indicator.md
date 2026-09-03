---
title: Indicator
lang: en-US
---

# Indicator

Display element at the corner of another element

## Usage

<c-group>
  <c-indicator position="top-end" show-zero>
    <c-avatar radius="sm" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</c-group>

```vue
<template>
  <c-indicator position="top-end" show-zero>
    <c-avatar radius="sm" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</template>
```

## Inline

When the target element has a fixed width, set the `inline` prop to add `display: inline-block;` styles to the Indicator container. Alternatively, you can set width and height with the `style` prop if you still want the root element to keep `display: block`.

<c-group>
  <c-indicator inline label="New" show-zero :size="16">
    <c-avatar radius="sm" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</c-group>

```vue
<template>
  <c-indicator inline label="New" show-zero :size="16">
    <c-avatar radius="sm" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</template>
```

## Offset

Set `offset` to change the indicator position. It is useful when the indicator component is used with children that have border-radius. You can provide a number for uniform offset or an object with `x` and `y` properties for separate horizontal and vertical offsets:

<c-group>
  <c-indicator color="red" inline position="bottom-end" show-zero with-border :offset="7" :size="16">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</c-group>

```vue
<template>
  <c-indicator color="red" inline position="bottom-end" show-zero with-border :offset="7" :size="16">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</template>
```

## Processing animation

<c-group>
  <c-indicator color="red" inline processing show-zero :size="12">
    <c-avatar radius="sm" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</c-group>

```vue
<template>
  <c-indicator color="red" inline processing show-zero :size="12">
    <c-avatar radius="sm" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</template>
```

## Disabled

Set `disabled` to hide the indicator:

<c-stack>
  <c-group>
    <c-indicator color="red" inline show-zero :disabled="!visible" :size="12">
      <c-avatar radius="sm" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
    </c-indicator>
  </c-group>
  <c-group>
    <c-button variant="filled" @click="toggle">Toggle indicator</c-button>
  </c-group>
</c-stack>

## Max value

Set `maxValue` prop to display `${maxValue}+` when the label exceeds the maximum value. This is useful for notification counters that should not show exact large numbers:

<c-group>
  <c-indicator inline show-zero :label="50" :max-value="99">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator inline show-zero :label="100" :max-value="99">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator inline show-zero :label="1000" :max-value="999">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</c-group>

```vue
<template>
  <c-indicator inline show-zero :label="50" :max-value="99">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator inline show-zero :label="100" :max-value="99">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator inline show-zero :label="1000" :max-value="999">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</template>
```

## Show zero

By default, the indicator is displayed when the label is `0`. Set `:showZero="false"` to hide the indicator when the label is `0`:

<c-group>
  <c-indicator inline show-zero :label="0">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator inline :label="0" :show-zero="false">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</c-group>

```vue
<template>
  <c-indicator inline show-zero :label="0">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator inline :label="0" :show-zero="false">
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</template>
```

## Auto contrast

Set `autoContrast` prop to automatically adjust text color based on the background color to ensure readable contrast:

<c-group>
  <c-indicator color="lime.4" inline label="99" show-zero>
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator auto-contrast color="lime.4" inline label="99" show-zero>
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator color="cyan.9" inline label="99" show-zero>
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator auto-contrast color="cyan.9" inline label="99" show-zero>
    <c-avatar radius="xl" size="lg" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</c-group>

## Label prop and label slot

You can set label via label prop or label slot, here are the points:

- Label slot has higher priority
- Label prop only accepts `string` or `number`, and is affected by `maxValue` and `showZero` props
- Label slot is fully customizable, and is not affected by `maxValue` and `showZero` props

<c-group>
  <c-indicator inline label="hi" show-zero :size="24">
    <c-avatar radius="xl" size="xl" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator inline :show-zero="false" :size="24">
    <template #label>
      <message-circle-icon :size="16" />
    </template>
    <c-avatar radius="xl" size="xl" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</c-group>

```vue
<template>
  <c-indicator inline label="hi" show-zero :size="24">
    <c-avatar radius="xl" size="xl" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
  <c-indicator inline :show-zero="false" :size="24">
    <template #label>
      <message-circle-icon :size="16" />
    </template>
    <c-avatar radius="xl" size="xl" src="https://randomuser.me/api/portraits/women/60.jpg"></c-avatar>
  </c-indicator>
</template>
```

<script setup lang="ts">
import { ref } from 'vue'
import { MessageCircleIcon } from '@lucide/vue'

const visible = ref(true)

const toggle = () => {
  visible.value = !visible.value
}
</script>

<style scope>
.c-Avatar-image {
  margin: 0 !important;
}
</style>

## Props

### Indicator props

|Name|Type|Description|Default value|
|---|---|---|---|
|autoContrast|boolean|If set, adjusts text color based on background color||
|color|CColor|Key of `theme.colors` or any valid CSS color value|`theme.primaryColor`|
|disabled|boolean|Hides the indicator when set||
|inline|boolean|Changes container display from block to inline-block, use when wrapping elements with fixed width|`false`|
|label|string \| number|Label displayed inside the indicator, for example, notification||
|maxValue|number|Maximum value to display. If label is a number greater than this value, it will be displayed as `${maxValue}+`||
|offset|number \| { x: number; y: number }|Distance in pixels to offset the indicator from its default position, useful for elements with border-radius. Can be a number for uniform offset or an object with `x` and `y` properties for separate horizontal and vertical offsets|`0`|
|position|"bottom-end" \| "bottom-start" \| "top-end" \| "top-start" \| "bottom-center" \| "top-center" \| "middle-center" \| "middle-end" \| "middle-start"|Indicator position relative to the target element|`'top-end'`|
|processing|boolean|If set, the indicator has processing animation|`false`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set `border-radius`|`100`|
|showZero|boolean|Determines whether indicator with label `0` should be displayed|`true`|
|size|string \| number|Indicator width and height|`10`|
|withBorder|boolean|Adds border to the root element||
|zIndex|string \| number|Indicator z-index|`200`|

### Indicator slots

|Name|Description|
|---|---|
|label|Label displayed inside the indicator, for example, notification|

## Styles API

`Indicator` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Indicator Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Indicator-root|Root element|
|indicator|.c-Indicator-indicator|Indicator element|

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
      <td rowspan="11">root</td>
      <td>--indicator-bottom</td>
      <td>Controls <code>bottom</code> style</td>
    </tr>
    <tr>
      <td>--indicator-left</td>
      <td>Controls <code>left</code> style</td>
    </tr>
    <tr>
      <td>--indicator-right</td>
      <td>Controls <code>right</code> style</td>
    </tr>
    <tr>
      <td>--indicator-top</td>
      <td>Controls <code>top</code> style</td>
    </tr>
    <tr>
      <td>--indicator-radius</td>
      <td>Controls <code>border-radius</code></td>
    </tr>
    <tr>
      <td>--indicator-size</td>
      <td>Controls <code>min-width</code> and <code>height</code></td>
    </tr>
    <tr>
      <td>--indicator-translate-x</td>
      <td>Controls <code>translate-x</code> style, used for positioning</td>
    </tr>
    <tr>
      <td>--indicator-translate-y</td>
      <td>Controls <code>translate-y</code> style, used for positioning</td>
    </tr>
    <tr>
      <td>--indicator-z-index</td>
      <td>Controls <code>z-index</code> style</td>
    </tr>
    <tr>
      <td>--indicator-color</td>
      <td>Controls <code>background-color</code> style</td>
    </tr>
    <tr>
      <td>--indicator-text-color</td>
      <td>Controls <code>color</code></td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|root|data-inline|`inline` prop is set|
|indicator|data-with-label|`label` prop is set, or label slot is provided|
|indicator|data-with-border|`withBorder` prop is set|
|indicator|data-processing|`processing` prop is set|