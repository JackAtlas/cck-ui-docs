---
title: DataList
lang: en-US
---

# DataList

Display label-value pairs as a description list

## Usage

`DataList` component renders a description list(`dl`) element with label-value pairs. It uses semantic `dt` and `dd` HTML elements.

<c-data-list>
  <c-data-list-item v-for="item in data" :key="item.label">
    <c-data-list-item-label>{{ item.label }}</c-data-list-item-label>
    <c-data-list-item-value>{{ item.value }}</c-data-list-item-value>
  </c-data-list-item>
</c-data-list>

```vue
<template>
  <c-data-list>
    <c-data-list-item v-for="item in data" :key="item.label">
      <c-data-list-item-label>{{ item.label }}</c-data-list-item-label>
      <c-data-list-item-value>{{ item.value }}</c-data-list-item-value>
    </c-data-list-item>
</c-data-list>
</template>

<script setup lang="ts">
const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
]
</script>
```

## With Divider

Set `withDivider` prop to add a border between items:

<c-data-list with-divider>
  <c-data-list-item v-for="item in data" :key="item.label">
    <c-data-list-item-label>{{ item.label }}</c-data-list-item-label>
    <c-data-list-item-value>{{ item.value }}</c-data-list-item-value>
  </c-data-list-item>
</c-data-list>

```vue
<template>
  <c-data-list with-divider>
    <c-data-list-item v-for="item in data" :key="item.label">
      <c-data-list-item-label>{{ item.label }}</c-data-list-item-label>
      <c-data-list-item-value>{{ item.value }}</c-data-list-item-value>
    </c-data-list-item>
  </c-data-list>
</template>

<script setup lang="ts">
const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
]
</script>
```

## Vertical orientation

Set `orientation="vertical"` to stack label on top of value within each item:

<c-data-list orientation="vertical">
  <c-data-list-item v-for="item in data" :key="item.label">
    <c-data-list-item-label>{{ item.label }}</c-data-list-item-label>
    <c-data-list-item-value>{{ item.value }}</c-data-list-item-value>
  </c-data-list-item>
</c-data-list>

<c-data-list mt="md" orientation="vertical" with-divider>
  <c-data-list-item v-for="item in data" :key="item.label">
    <c-data-list-item-label>{{ item.label }}</c-data-list-item-label>
    <c-data-list-item-value>{{ item.value }}</c-data-list-item-value>
  </c-data-list-item>
</c-data-list>

```vue
<template>
  <c-data-list orientation="vertical">
    <c-data-list-item v-for="item in data" :key="item.label">
      <c-data-list-item-label>{{ item.label }}</c-data-list-item-label>
      <c-data-list-item-value>{{ item.value }}</c-data-list-item-value>
    </c-data-list-item>
  </c-data-list>

  <c-data-list mt="md" orientation="vertical" with-divider>
    <c-data-list-item v-for="item in data" :key="item.label">
      <c-data-list-item-label>{{ item.label }}</c-data-list-item-label>
      <c-data-list-item-value>{{ item.value }}</c-data-list-item-value>
    </c-data-list-item>
  </c-data-list>
</template>

<script setup lang="ts">
const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
]
</script>
```

<script setup lang="ts">
const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
]
</script>

## Props

### DataList props

|Name|Type|Description|Default value|
|---|---|---|---|
|gap|CSpacing|Key of `theme.spacing` or any valid CSS value to set gap between items|`'sm'`|
|labelWidth|MinWidth<string \| number>|Controls min-width of the label(dt) element, any valid CSS value|`'120px'`|
|orientation|"horizontal" \| "vertical"|Controls arrangement of label and value within each item. `horizontal` renders label and value side by side, `vertical` stacks label on top of value|`'horizontal'`|
|size|CSize|Controls `font-size` and `line-height`|`'sm'`|
|withDivider|boolean|Adds border between items|`false`|

## Styles API

`DataList` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### DataList Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-DataList-root|Root `dl` element|
|item|.c-DataList-item|DataListItem root element|
|itemLabel|.c-DataList-itemLabel|DataListItemLabel `dt` element|
|itemValue|.c-DataList-itemValue|DataListItemValue `dd` element|

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
      <td rowspan="4">root</td>
      <td>--data-list-fz</td>
      <td>Controls <code>font-size</code></td>
    </tr>
    <tr>
      <td>--data-list-lh</td>
      <td>Controls <code>line-height</code></td>
    </tr>
    <tr>
      <td>--data-list-gap</td>
      <td>Controls gap between items</td>
    </tr>
    <tr>
      <td>--data-list-label-width</td>
      <td>Controls <code>min-width</code> of <code>DataListItemLabel</code></td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|root|data-orientation|-|Value of `orientation` prop|
|root|data-with-divider|`withDivider` prop is set|-|