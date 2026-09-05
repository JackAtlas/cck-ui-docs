---
title: Code
lang: en-US
---

# Code

## Usage

By default, the Code component renders an inline `code` html element:

<c-code>window.addEventListener(type, listener, options)</c-code>

```vue
<template>
  <c-code>window.addEventListener(type, listener, options)</c-code>
</template>
```

## Block code

To render code in a `pre` element, pass the `block` prop to the Code component:

<c-code block>{{ code }}</c-code>

```vue
<template>
  <c-code block>{{ code }}</c-code>
</template>

<script setup lang="ts">
const code = `
export function Usage() {
  return (
    <div :style="{ padding: 40 }">
      <Code>Some code</Code>
      <Code color="blue.4">Code with color</Code>
    </div>
  );
}
`.trim()
</script>
```

## Custom color

By default, the code color is gray. You can change it to any valid CSS color or to one of the [theme.colors](../theming/colors):

**Note**: Code styles in this documentation website is infuenced by injected styles provided by Vitepress' default theme. We will rebuild this website with custom theme using CCK UI components in the future.

<c-group>
  <c-code color="blue.9" c="white">window.addEventListener(type, listener, options)</c-code>
  <c-code color="var(--c-color-blue-light)">window.addEventListener(type, listener, options)</c-code>
</c-group>

<script setup lang="ts">
const code = `
export function Usage() {
  return (
    <div :style="{ padding: 40 }">
      <Code>Some code</Code>
      <Code color="blue.4">Code with color</Code>
    </div>
  );
}
`.trim()
</script>

## Props

### Code props

|Name|Type|Description|
|---|---|---|
|block|boolean|If set, code is rendered in `pre`|
|color|CColor|Key of `theme.colors` or any valid CSS color, controls `background-color` of the code. By default, calculated based on the color scheme.|

## Styles API

`Code` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Code Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Code-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--code-bg|Controls `background-color`|

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|root|data-block|`block` prop is set|