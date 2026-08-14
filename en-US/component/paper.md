---
title: Paper
lang: en-US
---

# Paper

Renders white or dark background depending on color scheme

## Usage

<c-paper shadow="xs" p="xl">
  <c-text>Paper is the most basic ui component</c-text>
  <c-text>Use it to create cards, dropdowns, modals and other components that require background with shadow</c-text>
</c-paper>

```vue
<template>
  <c-paper shadow="xs" p="xl">
    <c-text>Paper is the most basic ui component</c-text>
    <c-text>Use it to create cards, dropdowns, modals and other components that require background with shadow</c-text>
  </c-paper>
</template>
```

## Polymorphic component

`Paper` is a [polymorphic component](../styles/polymorphic) - its default root element is `div`, but it can be changed to any other element or component with the `tag` prop:

```vue
<c-paper tag="button" />
```

## Props

### Paper props

|Name|Type|Description|Default value|
|---|---|---|---|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem|`theme.defaultRadius`|
|shadow|CShadow|Key of `theme.shadows` or any valid CSS value to set `box-shadow`||
|withBorder|boolean|Adds border to the root element||

## Styles API

`Paper` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Paper Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Paper-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--paper-radius|Controls `border-radius`|
||--paper-shadow|Controls `box-shadow`|

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|root|data-with-border|`withBorder` is set|