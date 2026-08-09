---
title: Stack
lang: en-US
---

# Stack

Compose elements and components in a vertical flex container

## Usage

`Stack` is a vertical flex container. If you need a horizontal flex container, use [Group](./group) component instead. If you need to have full control over flex container properties, use [Flex](./flex) component.

<c-stack :h="300" bg="var(--c-color-body)" align="stretch" justify="center" gap="md">
  <c-button>1</c-button>
  <c-button>2</c-button>
  <c-button>3</c-button>
</c-stack>

```vue
<template>
  <c-stack :h="300" bg="var(--c-color-body)" align="stretch" justify="center" gap="md">
    <c-button>1</c-button>
    <c-button>2</c-button>
    <c-button>3</c-button>
  </c-stack>
</template>
```

## Browser support

`Stack` uses [flexbox gap](https://caniuse.com/flexbox-gap) to add spacing between children. In older browsers, `Stack` children may not have spacing. You can install PostCSS [flex-gap-polyfill](https://github.com/gavinmcfarland/flex-gap-polyfill) to add support for older browsers.

## API

### Stack Props

|Name|Type|Description|Default value|
|---|---|---|---|
|align|AlignItems|Controls `align-items` CSS property|`'stretch'`|
|gap|CSpacing|Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem|`'md'`|
|justify|JustifyContent|Controls `justify-content` CSS property|`'flex-start'`|

## Styles API

`Stack` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Stack Styles API

#### Selectors:

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Stack-root|Root element|

#### CSS variables:

|Selector|Variable|Description|
|---|---|---|
|root|--stack-align|Controls `align-items` property|
||--stack-justify|Controls `justify-content` property|
||--stack-gap|Controls `gap` property|