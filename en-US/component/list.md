---
title: List
lang: en-US
---

# List

Display ordered or unordered list

## Usage

<c-list>
  <c-list-item>Clone or download repository from Github</c-list-item>
  <c-list-item>Install dependencies with pnpm</c-list-item>
  <c-list-item>To start development server run pnpm start command</c-list-item>
  <c-list-item>Run tests to make sure your changes do not break the build</c-list-item>
  <c-list-item>Submit a pull request once you are done</c-list-item>
</c-list>

<c-list type="ordered">
  <c-list-item>Clone or download repository from Github</c-list-item>
  <c-list-item>Install dependencies with pnpm</c-list-item>
  <c-list-item>To start development server run pnpm start command</c-list-item>
  <c-list-item>Run tests to make sure your changes do not break the build</c-list-item>
  <c-list-item>Submit a pull request once you are done</c-list-item>
</c-list>

```vue
<template>
  <c-list>
    <c-list-item>Clone or download repository from Github</c-list-item>
    <c-list-item>Install dependencies with pnpm</c-list-item>
    <c-list-item>To start development server run pnpm start command</c-list-item>
    <c-list-item>Run tests to make sure your changes do not break the build</c-list-item>
    <c-list-item>Submit a pull request once you are done</c-list-item>
  </c-list>

  <c-list type="ordered">
    <c-list-item>Clone or download repository from Github</c-list-item>
    <c-list-item>Install dependencies with pnpm</c-list-item>
    <c-list-item>To start development server run pnpm start command</c-list-item>
    <c-list-item>Run tests to make sure your changes do not break the build</c-list-item>
    <c-list-item>Submit a pull request once you are done</c-list-item>
  </c-list>
</template>
```

## With icons

You can replace list bullets with an icon. To do so, provide the following slots:

- `icon` on the List component will be used as the default icon for all list elements
- `icon` on the ListItem component will override the context icon from list
- `spacing` - spacing between list items from the theme or any valid CSS value to set spacing, defaults to `0`
- `center` - center item content with the icon
- `size` - set font size from the theme

<c-list center size="sm" spacing="xs">
  <template #icon>
    <c-theme-icon color="blue" radius="xl" variant="filled" :size="24">
      <circle-check-icon size="1rem" />
    </c-theme-icon>
  </template>
  <c-list-item>Clone or download repository from Github</c-list-item>
  <c-list-item>Install dependencies with pnpm</c-list-item>
  <c-list-item>To start development server run pnpm start command</c-list-item>
  <c-list-item>Run tests to make sure your changes do not break the build</c-list-item>
  <c-list-item>
    <template #icon>
      <c-theme-icon color="blue" radius="xl" variant="filled" :size="24">
        <circle-dashed-icon size="1rem" />
      </c-theme-icon>
    </template>
    Submit a pull request once you are done
  </c-list-item>
</c-list>

```vue
<template>
  <c-list center size="sm" spacing="xs">
    <template #icon>
      <c-theme-icon color="blue" radius="xl" variant="filled" :size="24">
        <circle-check-icon size="1rem" />
      </c-theme-icon>
    </template>
    <c-list-item>Clone or download repository from Github</c-list-item>
    <c-list-item>Install dependencies with pnpm</c-list-item>
    <c-list-item>To start development server run pnpm start command</c-list-item>
    <c-list-item>Run tests to make sure your changes do not break the build</c-list-item>
    <c-list-item>
      <template #icon>
        <c-theme-icon color="blue" radius="xl" variant="filled" :size="24">
          <circle-dashed-icon size="1rem" />
        </c-theme-icon>
      </template>
      Submit a pull request once you are done
    </c-list-item>
  </c-list>
</template>

<script setup lang="ts">
import { CircleCheckIcon, CircleDashedIcon } from '@lucide/vue'
</script>
```

## Nested lists

Set the `withPadding` prop to offset nested lists and `listStyleType` to control the bullet type:

<c-list list-style-type="disc">
  <c-list-item>First order item</c-list-item>
  <c-list-item>First order item</c-list-item>
  <c-list-item>
    First order item with list
    <c-list with-padding list-style-type="disc">
      <c-list-item>Nested item</c-list-item>
      <c-list-item>Nested item</c-list-item>
      <c-list-item>
        Nested item with list
        <c-list with-padding list-style-type="disc">
          <c-list-item>Even more nested</c-list-item>
          <c-list-item>Even more nested</c-list-item>
        </c-list>
      </c-list-item>
      <c-list-item>Nested item</c-list-item>
    </c-list>
  </c-list-item>
  <c-list-item>First order item</c-list-item>
</c-list>

```vue
<template>
  <c-list list-style-type="disc">
    <c-list-item>First order item</c-list-item>
    <c-list-item>First order item</c-list-item>
    <c-list-item>
      First order item with list
      <c-list with-padding list-style-type="disc">
        <c-list-item>Nested item</c-list-item>
        <c-list-item>Nested item</c-list-item>
        <c-list-item>
          Nested item with list
          <c-list with-padding list-style-type="disc">
            <c-list-item>Even more nested</c-list-item>
            <c-list-item>Even more nested</c-list-item>
          </c-list>
        </c-list-item>
        <c-list-item>Nested item</c-list-item>
      </c-list>
    </c-list-item>
    <c-list-item>First order item</c-list-item>
  </c-list>
</template>
```

## Ordered list numbering

### Start from specific number

Use the `start` prop to begin numbering from a specific value:

<c-list type="ordered" :start="5">
  <c-list-item>This is item #5</c-list-item>
  <c-list-item>This is item #6</c-list-item>
  <c-list-item>This is item #7</c-list-item>
  <c-list-item>This is item #8</c-list-item>
</c-list>

```vue
<template>
  <c-list type="ordered" :start="5">
    <c-list-item>This is item #5</c-list-item>
    <c-list-item>This is item #6</c-list-item>
    <c-list-item>This is item #7</c-list-item>
    <c-list-item>This is item #8</c-list-item>
  </c-list>
</template>
```

### Custom item values

Use the `value` prop on individual `ListItem` components to set specific numbers:

<c-list type="ordered">
  <c-list-item>First item</c-list-item>
  <c-list-item :value="5">This item is #5</c-list-item>
  <c-list-item>This item is #6 (continues from previous)</c-list-item>
  <c-list-item :value="10">This item is #10</c-list-item>
  <c-list-item>This item is #11</c-list-item>
</c-list>

```vue
<template>
  <c-list type="ordered">
    <c-list-item>First item</c-list-item>
    <c-list-item :value="5">This item is #5</c-list-item>
    <c-list-item>This item is #6 (continues from previous)</c-list-item>
    <c-list-item :value="10">This item is #10</c-list-item>
    <c-list-item>This item is #11</c-list-item>
  </c-list>
</template>
```

<script setup lang="ts">
import { CircleCheckIcon, CircleDashedIcon } from '@lucide/vue'
</script>

## Props

### List props

|Name|Type|Description|Default value|
|---|---|---|---|
|center|boolean|Vertically centers list items with their icons|`false`|
|listStyleType|ListStyleType|Controls CSS `list-style-type` property. Overrides the default list marker style based on list type||
|reversed|boolean|Reverse the order of list items (only works with type="ordered")||
|size|CSize|Controls `font-size` and `line-height`|`'md'`|
|spacing|CSpacing|Key of `theme.spacing` or any valid CSS value to set spacing between items|`0`|
|start|number|Starting value for ordered list numbering (only works with type="ordered")||
|type|"ordered" \| "unordered"|List type|`'unordered'`|
|withPadding|boolean|Adds extra horizontal padding to the list, useful for nested lists|`false`|

### List slots

|Name|Description|
|---|---|
|default|`ListItem` components|
|icon|Icon to replace default list markers. Applied to all items unless overriden on individual ListItem components|

### ListItem slots

|Name|Description|
|---|---|
|default|Item content|
|icon|Icon to replace item bullet|

## Styles API

`List` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### List Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-List-root|Root element|
|item|.c-List-item|ListItem root element|
|itemIcon|.c-List-itemIcon|ListItem icon|
|itemLabel|.c-List-itemLabel|ListItem content|
|itemWrapper|.c-List-itemWrapper|ListItem wrapper element, container, icon and content|

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
      <td rowspan="3">root</td>
      <td>--list-fz</td>
      <td>Controls <code>font-size</code></td>
    </tr>
    <tr>
      <td>--list-lh</td>
      <td>Controls <code>line-height</code></td>
    </tr>
    <tr>
      <td>--list-spacing</td>
      <td>Controls spacing between items</td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|root|data-with-padding|`withPadding` prop is set|
|item|data-centered|`center` prop is set on List component|
|item|data-with-icon|`icon` is provided on ListItem component|