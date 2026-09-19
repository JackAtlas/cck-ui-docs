---
title: Scroller
lang: en-US
---

# Scroller

Horizontal scroll container with navigation controls

## Usage

`Scroller` is a horizontal scroll container that displays navigation controls (chevron buttons) when content overflows its container. It supports native scrolling via trackpad, shift + mouse wheel, or touch gestures.

<c-scroller>
  <c-group gap="xs" wrap="nowrap">
    <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 20})" :key="index">Badge {{ index + 1 }}</c-badge>
  </c-group>
</c-scroller>

```vue
<template>
  <c-scroller>
    <c-group gap="xs" wrap="nowrap">
      <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 20})" :key="index">Badge {{ index + 1 }}</c-badge>
    </c-group>
  </c-scroller>
</template>
```

## Mouse drag scrolling

Set `draggable` prop to enable scrolling by clicking and dragging with the mouse:

<c-scroller draggable>
  <c-group gap="xs" wrap="nowrap">
    <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 20})" :key="index">Badge {{ index + 1 }}</c-badge>
  </c-group>
</c-scroller>

```vue
<template>
  <c-scroller draggable>
    <c-group gap="xs" wrap="nowrap">
      <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 20})" :key="index">Badge {{ index + 1 }}</c-badge>
    </c-group>
  </c-scroller>
</template>
```

## Scroll amount

Use the `scrollAmount` prop to control how many pixels the container scrolls when clicking the navigation buttons. The default value is `200`.

<c-scroller :scroll-amount="300">
  <c-group gap="xs" wrap="nowrap">
    <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 30})" :key="index">Badge {{ index + 1 }}</c-badge>
  </c-group>
</c-scroller>

```vue
<template>
  <c-scroller :scroll-amount="300">
    <c-group gap="xs" wrap="nowrap">
      <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 30})" :key="index">Badge {{ index + 1 }}</c-badge>
    </c-group>
  </c-scroller>
</template>
```

## Control size

Use the `controlSize` prop to change the size of the navigation buttons, and use the `chevronSize` prop to change the size of chevron icons inside navigation buttons. They accept any valid CSS size value or number (converted to rem).

<c-scroller control-size="40px" chevron-size="24">
  <c-group gap="xs" wrap="nowrap">
    <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 30})" :key="index">Badge {{ index + 1 }}</c-badge>
  </c-group>
</c-scroller>

```vue
<template>
  <c-scroller control-size="40px" chevron-size="24">
    <c-group gap="xs" wrap="nowrap">
      <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 30})" :key="index">Badge {{ index + 1 }}</c-badge>
    </c-group>
  </c-scroller>
</template>
```

## Custom icons

Provide `start-control-icon` and `end-control-icon` slots to replace default chevron icons with custom icons:

<c-scroller>
  <template #start-control-icon>
    <span>L</span>
  </template>
  <c-group gap="xs" wrap="nowrap">
    <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 30})" :key="index">Badge {{ index + 1 }}</c-badge>
  </c-group>
  <template #end-control-icon>
    <span>R</span>
  </template>
</c-scroller>

```vue
<template>
  <c-scroller>
    <template #start-control-icon>
      <span>L</span>
    </template>
    <c-group gap="xs" wrap="nowrap">
      <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({length: 30})" :key="index">Badge {{ index + 1 }}</c-badge>
    </c-group>
    <template #end-control-icon>
      <span>R</span>
    </template>
  </c-scroller>
</template>
```

## Props

### Scroller props

|Name|Type|Description|Default value|
|---|---|---|---|
|controlSize|string \| number|Size of the control buttons|`60px`|
|draggable|boolean|Determines whether content can be scrolled by dragging with mouse|`true`|
|edgeGradientColor|string|Background color for the gradient fade on controls|`'var(--c-color-gray)'`|
|endControlProps|ComponentProps<"button">|Props passed to the end button||
|scrollAmount|number|Amount of pixels to scroll when clicking the control buttons|`200`|
|showEndControl|boolean|Determines whether end control should always be visible regardless of scroll position|`false`|
|showStartControl|boolean|Determines whether start control should always be visible regardless of scroll position|`false`|
|startControlProps|ComponentProps<"button">|Props passed to the start button||

### Scroller slots

|Name|Description|
|---|---|
|default|Content to display|
|end-control-icon|Icon component for the end control|
|start-control-icon|Icon component for the start control|

## Styles API

`Scroller` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Scroller Styles API

#### Selectors:

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Scroller-root|Root element|
|container|.c-Scroller-container|Scrollable container|
|content|.c-Scroller-content|Wraps component children|
|control|.c-Scroller-control|Start and end scroll control buttons|
|chevron|.c-Scroller-chevron|Chevron icon inside controls|

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
      <td rowspan="2">root</td>
      <td>--scroller-control-size</td>
      <td>Controls width and chevron size</td>
    </tr>
    <tr>
      <td>--scroller-background-color</td>
      <td>Background color for the control edge gradients</td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|container|data-draggable|`draggable` prop is set|-|
|control|data-position|-|"start" or "end" depending on control position|
|control|data-hidden|Control is hidden because scrolling is not available in that direction|-|