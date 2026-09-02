---
title: ColorSwatch
lang: en-US
---

# ColorSwatch

Display color

## Usage

<c-group>
  <c-color-swatch color="#009790" :with-shadow="true" />
  <c-color-swatch color="rgba(234, 22, 173, 0.5)" :with-shadow="true" />
  <c-color-swatch color="var(--c-color-orange-5)" :with-shadow="true" />
</c-group>

```vue
<template>
  <c-group>
    <c-color-swatch color="#009790" :with-shadow="true" />
    <c-color-swatch color="rgba(234, 22, 173, 0.5)" :with-shadow="true" />
    <c-color-swatch color="var(--c-color-orange-5)" :with-shadow="true" />
  </c-group>
</template>
```

## withShadow

By default, `ColorSwatch` has an inner box-shadow to make it more visible on light backgrounds. You can disable it by setting the `:withShadow="false"` prop:

<c-group>
  <c-color-swatch color="rgba(255, 255, 255, 0.7)" :with-shadow="true" />
  <c-color-swatch color="rgba(255, 255, 255, 0.7)" :with-shadow="false" />
</c-group>

```vue
<template>
  <c-group>
    <c-color-swatch color="rgba(255, 255, 255, 0.7)" :with-shadow="true" />
    <c-color-swatch color="rgba(255, 255, 255, 0.7)" :with-shadow="false" />
  </c-group>
</template>
```

## Polymorphic component

`ColorSwatch` is a [polymorphic component](../styles/polymorphic) - its defaut root element is `div`, but it can be changed to any other element or component with the `tag` prop:

```vue
<template>
  <c-color-swatch tag="button" />
</template>
```

## Props

### ColorSwatch props

|Name|Type|Description|Default value|
|---|---|---|---|
|color <span style="color: var(--c-color-red-filled);">*</span>|string|Valid CSS color to display||
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem.|`1000`|
|size|Properties['width']|Swatch `width` and `height`, any valid CSS value, numbers are converted to rem.|`28`|
|withShadow|boolean|If set, the swatch has inner `box-shadow`|`true`|

## Styles API

`ColorSwatch` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### ColorSwatch Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-ColorSwatch-root|Root element|
|alphaOverlay|.c-ColorSwatch-alphaOverlay|Overlay with checkerboard pattern|
|shadowOverlay|.c-ColorSwatch-shadowOverlay|Overlay with inner box-shadow|
|colorOverlay|.c-ColorSwatch-colorOverlay|Overlay with given color background|
|childrenOverlay|.c-ColorSwatch-childrenOverlay|Overlay with `children` inside|

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
      <td>--cs-radius</td>
      <td>Controls <code>border-radius</code> of all overlays and `root` element</td>
    </tr>
    <tr>
      <td>--cs-size</td>
      <td>Controls <code>width</code>, <code>height</code>, <code>min-width</code> and <code>min-height</code> of the <code>root</code> element</td>
    </tr>
  </tbody>
</table>