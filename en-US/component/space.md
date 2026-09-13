---
title: Space
lang: en-US
---

# Space

Add horizontal or vertical spacing from theme

## Usage

Use `Space` component to add horizontal or vertical spacing between elements:

<div>
  <c-text>First line</c-text>
  <c-space h="md" />
  <c-text>Second line</c-text>
</div>

```vue
<template>
  <c-text>First line</c-text>
  <c-space h="md" />
  <c-text>Second line</c-text>
</template>
```

<div style="display: flex;">
  <c-text>First part</c-text>
  <c-space w="md" />
  <c-text>Second part</c-text>
</div>

```vue
<template>
  <div style="display: flex;">
    <c-text>First part</c-text>
    <c-space w="md" />
    <c-text>Second part</c-text>
  </div>
</template>
```

## Where to use 

In most cases, you would want to use margin props instead of `Space` when working with CCK UI components:

```vue
<!-- Space is not required as the same can be achieved with `mt` prop -->
<template>
  <c-text>First line</c-text>
  <c-text mt="md">Second line</c-text>
</template>
```

But when you work with regular HTML elements you do not have access to `theme.spacing` and you may want to use `Space` component to skip direct theme subscription:

```vue
<!-- Margin props are not available on div, -->
<!-- use Space to add spacing from theme -->
<template>
  <div>First line</div>
  <c-space h="md" />
  <div>Second line</div>
</template>
```