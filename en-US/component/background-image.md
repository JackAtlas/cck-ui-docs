---
title: BackgroundImage
lang: en-US
---

# BackgroundImage

Displays image as background

## Usage

<c-box mx="auto" :maw="300">
  <c-background-image radius="md" src="https://raw.githubusercontent.com/JackAtlas/cck-ui/main/.demo/images/bg-1.gif">
    <c-center p="md">
      <c-text c="white">
        BackgroundImage component can be used to add any content on image. It is useful for hero headers and other similar sections
      </c-text>
    </c-center>
  </c-background-image>
</c-box>

```vue
<template>
  <c-box mx="auto" :maw="300">
    <c-background-image radius="md" src="https://raw.githubusercontent.com/JackAtlas/cck-ui/main/.demo/images/bg-1.gif">
      <c-center p="md">
        <c-text c="white">
          BackgroundImage component can be used to add any content on image. It is useful for hero headers and other similar sections
        </c-text>
      </c-center>
    </c-background-image>
  </c-box>
</template>
```

## Polymorphic component

`BackgroundImage` is a [polymorphic component](../styles/polymorphic) - its defaut root element is `div`, but it can be changed to any other element or component with the `tag` prop:

```vue
<template>
  <c-background-image tag="button" />
</template>
```

## Props

### BackgroundImage props

|Name|Type|Description|Default value|
|---|---|---|---|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem|`0`|
|src <span style="color: var(--c-color-red-filled)">*</span>|string|Image url|

## Styles API

`BackgroundImage` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### BackgroundImage Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-BackgroundImage-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--bi-radius|Controls `border-radius`|