---
title: Image
lang: en-US
---

# Image

Image with optional fallback

## Usage

`Image` is a wrapper for `img` with minimal styles. By default, the image will take 100% of the parent width. The image size can be controlled with `w` and `h` [style props](../styles/style-props).

<c-image radius="md" src="https://picsum.photos/960/540" />

```vue
<template>
  <c-image radius="md" src="https://picsum.photos/960/540" />
</template>
```

## Image height

In most cases, you will need to set the image height to prevent layout jumps when the image is loading. You can do so with the `h` [style props](../styles/style-props).

<c-image radius="md" src="https://picsum.photos/960/540" :h="200"></c-image>

```vue
<template>
  <c-image radius="md" src="https://picsum.photos/960/540" :h="200"></c-image>
</template>
```

## Fallback image

Set the `fallbackSrc` prop to display a fallback image when the image fails to load:

<c-image fallbackSrc="https://placehold.co/600x400?text=Placeholder" radius="md" :h="200" :src="null"></c-image>

```vue
<template>
  <c-image fallbackSrc="https://placehold.co/600x400?text=Placeholder" radius="md" :h="200" :src="null"></c-image>
</template>
```

## Props

### Image Props

|Name|Type|Description|Default value|
|---|---|---|---|
|fallbackSrc|string|Image url used as a fallback if the image cannot be loaded|
|fit|ObjectFit|Controls `object-fit` style|`'cover'`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set `border-radius`|`0`|
|src|any|Image url||

### Image Events

|Name|Type|Description|
|---|---|---|
|error|(event: Event) => void|Called when image fails to load|

## Styles API

`Image` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Image Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Image-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--image-object-fit|Controls `object-fit` property|
||--image-radius|Controls `border-radius` property|

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|root|data-fallback|Image failed to load|