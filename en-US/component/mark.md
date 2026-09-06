---
title: Mark
lang: en-US
---

# Mark

Highlight part of the text

## Usage

<c-text>Highlight <c-mark>this chunk</c-mark> of the text</c-text>

```vue
<template>
  <c-text>Highlight <c-mark>this chunk</c-mark> of the text</c-text>
</template>
```

## Props

### Mark props

|Name|Type|Description|Default value|
|---|---|---|---|
|color|CColor|Key of `theme.colors` or any valid CSS color|`yellow`|

## Styles API

`Mark` component supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Mark Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Mark-root|Root element|

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
      <td>--mark-bg-dark</td>
      <td>Controls <code>background-color</code> in dark color scheme</td>
    </tr>
    <tr>
      <td>--mark-bg-light</td>
      <td>Controls <code>background-color</code> in light color scheme</td>
    </tr>
  </tbody>
</table>