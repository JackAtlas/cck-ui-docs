---
title: CloseButton
lang: en-US
---

# CloseButton

Button with close icon

## Usage

`CloseButton` renders a button with an `x` icon inside. It is used in other CCK-UI components.

<c-close-button variant="subtle"></c-close-button>
<c-close-button variant="transparent"></c-close-button>

```vue
<template>
  <c-close-button variant="subtle"></c-close-button>
  <c-close-button variant="transparent"></c-close-button>
</template>
```

## Change icon

You can change the icon by placing any VNode to the `icon` slot. It is useful when `CloseButton` is used as a part of other components. Note that if you use the `icon` slot, the `icon-size` prop is ignored - you will have to set the icon size manually.

<c-close-button>
  <template #icon>
    <circle-x-icon :size="18"></circle-x-icon>
  </template>
</c-close-button>

```vue
<template>
  <c-close-button>
    <template #icon>
      <circle-x-icon :size="18"></circle-x-icon>
    </template>
  </c-close-button>
</template>
```

## Accessibility

To make the `CloseButton` accessible for screen readers, you need to set `aria-label`.

```vue
<template>
  <c-close-button aria-label="Close modal"></c-close-button>
</template>
```

<script setup lang="ts">
import { CircleXIcon } from '@lucide/vue'
</script>

## API

### CloseButton props

|Name|Type|Description|Default value|
|---|---|---|---|
|disabled|boolean|Sets `disabled` attribute, assigns disabled styles||
|iconSize|string \| number|`x` icon `width` and `height`|`70%`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem.|`theme.defaultRadius`|
|size|CSize \| number|Controls width and height of the button. Numbers are converted to rem.|`'md'`|

### CloseButton slots

|Name|Description|
|---|---|
|default|Content rendered inside the button.|
|icon|VNode to replace the default close icon. If set, `iconSize` prop is ignored.|

## Styles API

`CloseButton` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### CloseButton Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-CloseButton-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--cb-icon-size|Controls `width` of the `x` icon|
||--cb-radius|Controls `border-radius` of the button|
||--cb-size|Controls `width` and `height` of the button|