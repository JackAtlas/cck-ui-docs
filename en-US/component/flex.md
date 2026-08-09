---
title: Flex
lang: en-US
---

# Flex

Compose elements in a flex container

## Usage

<c-flex :mih="50" bg="rgba(0, 0, 0, .3)" gap="md" justify="flex-start" align="flex-start" direction="row" wrap="wrap">
  <c-button>Button 1</c-button>
  <c-button>Button 2</c-button>
  <c-button>Button 3</c-button>
</c-flex>

```vue
<template>
  <c-flex :mih="50" bg="rgba(0, 0, 0, .3)" gap="md" justify="flex-start" align="flex-start" direction="row" wrap="wrap">
    <c-button>Button 1</c-button>
    <c-button>Button 2</c-button>
    <c-button>Button 3</c-button>
  </c-flex>
</template>
```

## Supported props

|Prop|CSS Property|Theme key|
|---|---|---|
|`gap`|`gap`|`theme.spacing`|
|`rowGap`|`rowGap`|`theme.spacing`|
|`columnGap`|`columnGap`|`theme.spacing`|
|`align`|`alignItems`||
|`justify`|`justifyContent`||
|`wrap`|`flexWrap`||
|`direction`|`flexDirection`||

## Responsive props

`Flex` component props can have responsive values the same way as other [style props](../styles/style-props):

<c-flex
  :direction="{ base: 'column', sm: 'row' }"
  :gap="{ base: 'sm', sm: 'lg' }"
  :justify="{ sm: 'center' }"
>
  <c-button>Button 1</c-button>
  <c-button>Button 2</c-button>
  <c-button>Button 3</c-button>
</c-flex>

## Difference from Group and Stack

The `flex` component is an alternative to [Group](./group) and [Stack](./stack). `Flex` is more flexible - it allows creating both horizontal and vertical flexbox layouts, but requires more configuration. Unlike [Group](./group) and [Stack](./stack), `Flex` is polymorphic and supports responsive props.

||Group|Stack|Flex|
|---|---|---|---|
|Direction|horizontal|vertical|both|
|Equal width children|✅|❌|❌|
|flex-wrap support|✅|❌|✅|
|Responsive flexbox props|❌|❌|✅|
|Polymorphic component|❌|❌|✅|

## Browser support

`Flex` uses [flex gap](https://caniuse.com/flexbox-gap) to add spacing between children. In older browsers, `Flex` children may not have spacing. You can install PostCSS [flex-gap-polyfill](https://github.com/gavinmcfarland/flex-gap-polyfill) to add support for older browsers.

## Flex props

|Name|Type|Description|
|---|---|---|
|align|StyleProp<AlignItems\>|`align-items` CSS property|
|columnGap|StyleProp<CSpacing\>|`column-gap` CSS property|
|direction|StyleProp<FlexDirection\>|`flex-direction` CSS property|
|gap|StyleProp<CSpacing\>|`gap` CSS property|
|justify|StyleProp<JustifyContent\>|`justify-content` CSS property|
|rowGap|StyleProp<CSpacing\>|`row-gap` CSS property|
|wrap|StyleProp<FlexWrap\>|`flex-wrap` CSS property|

## Styles API

`Flex` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Flex Styles API

#### Selectors

|Selector|Static selector|Description
|---|---|---|
|root|.c-Flex-root|Root element|
