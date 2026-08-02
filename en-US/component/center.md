---
title: Center
lang: en-US
---

# Center

Centers content vertically and horizontally

## usage

<c-center :maw="400" :h="100" bg="var(--c-color-gray-light)">
  <c-box bg="var(--c-color-blue-light)">All elements inside Center are centered</c-box>
</c-center>

## Inline

To use `Center` with inline elements, set the `inline` prop. For example, you can center a link icon and label:

<a href="https://cck-ui.jackatlas.xyz" target="_blank">
  <c-center inline>
    <arrow-left-icon :size="12" />
    <c-box :ml="5">Back to CCK UI website</c-box>
  </c-center>
</a>

<script setup>
import { ArrowLeftIcon } from '@lucide/vue'
</script>

## Polymorphic component

`Center` is a polymorphic component - its default root element is `div`, but it can be changed to any other element or component with the `tag` prop:

```vue
<c-center tag="button"></c-center>
```

## API

### Center props

|Name|Type|Description|
|---|---|---|
|inline|boolean|If set, `inline-flex` is used instead of `flex`|

## Styles API

`Center` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Center Styles API

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Center-root|Root element|