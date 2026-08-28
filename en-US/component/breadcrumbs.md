---
title: Breadcrumbs
lang: en-US
---

# Breadcrumbs

Separates list of vue nodes with given separator

## Usage

`Breadcrumbs` component accepts any number of Vue nodes as children and adds a given separator (defaults to `/`) between them:

<c-breadcrumbs>
  <c-anchor href="#" title="CCK UI">CCK UI</c-anchor>
  <c-anchor href="#" title="CCK UI hooks">CCK UI hooks</c-anchor>
  <c-anchor href="#" title="use-id">use-id</c-anchor>
</c-breadcrumbs>

<c-breadcrumbs mt="xs" separator="→" separatorMargin="md">
  <c-anchor href="#" title="CCK UI">CCK UI</c-anchor>
  <c-anchor href="#" title="CCK UI hooks">CCK UI hooks</c-anchor>
  <c-anchor href="#" title="use-id">use-id</c-anchor>
</c-breadcrumbs>

```vue
<template>
  <c-breadcrumbs>
    <c-anchor href="#" title="CCK UI">CCK UI</c-anchor>
    <c-anchor href="#" title="CCK UI hooks">CCK UI hooks</c-anchor>
    <c-anchor href="#" title="use-id">use-id</c-anchor>
  </c-breadcrumbs>

  <c-breadcrumbs mt="xs" separator="→" separatorMargin="md">
    <c-anchor href="#" title="CCK UI">CCK UI</c-anchor>
    <c-anchor href="#" title="CCK UI hooks">CCK UI hooks</c-anchor>
    <c-anchor href="#" title="use-id">use-id</c-anchor>
  </c-breadcrumbs>
</template>
```

## Separator

You can set the separator via slot or prop, and slot has higher priority. `Breadcrumbs` component accepts following types as separator:

- string
- VNode
- (child: VNode, index: number, length: number) => string | VNode

<c-breadcrumbs separator="→" separatorMargin="md">
  <c-anchor href="#" title="CCK UI">CCK UI</c-anchor>
  <c-anchor href="#" title="CCK UI hooks">CCK UI hooks</c-anchor>
  <c-anchor href="#" title="use-id">use-id</c-anchor>
</c-breadcrumbs>

<c-breadcrumbs mt="xs">
  <template #separator>
    <span style="color: var(--c-color-red-filled); font-weight: bold;">→</span>
  </template>
  <c-anchor href="#">Home</c-anchor>
  <c-anchor href="#">Products</c-anchor>
  <c-anchor href="#">Electronics</c-anchor>
  <span>Phone</span>
</c-breadcrumbs>

<c-breadcrumbs mt="xs" :separator="dynamicSeparator">
  <c-anchor href="#">Dashboard</c-anchor>
  <c-anchor href="#">Settings</c-anchor>
  <c-anchor href="#">Profile</c-anchor>
  <span>Edit</span>
</c-breadcrumbs>

```vue
<template>
  <c-breadcrumbs separator="→" separatorMargin="md">
    <c-anchor href="#" title="CCK UI">CCK UI</c-anchor>
    <c-anchor href="#" title="CCK UI hooks">CCK UI hooks</c-anchor>
    <c-anchor href="#" title="use-id">use-id</c-anchor>
  </c-breadcrumbs>

  <c-breadcrumbs mt="xs">
    <template #separator>
      <span style="color: var(--c-color-red-filled); font-weight: bold;">→</span>
    </template>
    <c-anchor href="#">Home</c-anchor>
    <c-anchor href="#">Products</c-anchor>
    <c-anchor href="#">Electronics</c-anchor>
    <span>Phone</span>
  </c-breadcrumbs>

  <c-breadcrumbs mt="xs" :separator="dynamicSeparator">
    <c-anchor href="#">Dashboard</c-anchor>
    <c-anchor href="#">Settings</c-anchor>
    <c-anchor href="#">Profile</c-anchor>
    <span>Edit</span>
  </c-breadcrumbs>
</template>

<script setup lang="ts">
const dynamicSeparator = (_child: VNode, index: number, _length: number) => {
  if (index === 1) {
    return '>'
  }
  return '/'
}
</script>
```

<script setup lang="ts">
const dynamicSeparator = (_child: VNode, index: number, _length: number) => {
  if (index === 1) {
    return '>'
  }
  return '/'
}
</script>

## Props

### Breadcrumbs props

|Name|Type|Description|Default value|
|---|---|---|---|
|separator|string \| VNode \|<br /> ((child: VNode, index: number, length: number) => string \| VNode)|Separator between children|`'/'`|
|separatorMargin|CSpacing|Controls spacing between separator and breadcrumb|`'xs'`|

## Styles API

`Breadcrumbs` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Breadcrumbs-root|Root element|
|separator|.c-Breadcrumbs-separator|Separator between children|
|breadcrumb|.c-Breadcrumbs-breadcrumb|Breadcrumb item||

### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--bc-separaotr-margin|Control left and right `margin` of separator|