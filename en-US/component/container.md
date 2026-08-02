---
title: Container
lang: en-US
---

# Container

Center content with padding and max-width

## Grid strategy

Differences from the default `strategy="block"`:

- Uses `display: grid` instead of `display: block`
- Does not include default inline padding
- Does not set `max-width` on the root element (uses grid template columns instead)

Features supported by `strategy="grid"`:

- Everything that is supported by `strategy="block"`
- Children with `data-breakout` attribute take the entire width of the container's parent element
- Children with `data-container` inside `data-breakout` have the same width as the main grid column

Example of using breakout feature:


<c-container strategy="grid" :size="500">
  <c-box bg="var(--c-color-indigo-light)" :h="50">
    Main content
  </c-box>

  <c-box data-breakout bg="var(--c-color-indigo-light)" mt="xs">
    <div>Breakout</div>
    <c-box data-container bg="indigo" c="white" :h="50">
      <div>Container inside breakout</div>
    </c-box>
  </c-box>
</c-container>

## Usage

`Container` centers content and limits its `max-width` to the value specified in the `size` prop. Note that the `size` prop does not make `max-width` responsive. For example, when it is set to `lg` it will always be `lg` regardless of screen size.

<c-container bg="var(--c-color-blue-light)" :h="50" mt="md">Default Container</c-container>

<c-container size="xs" bg="var(--c-color-blue-light)" :h="50" mt="md">xs Container</c-container>

<c-container :px="0" :size="480" bg="var(--c-color-blue-light)" :h="50" mt="md">480px Container without padding</c-container>

```vue
<template>
  <c-container bg="var(--c-color-blue-light)" :h="50" mt="md">Default Container</c-container>
  <c-container size="xs" bg="var(--c-color-blue-light)" :h="50" mt="md">xs Container</c-container>
  <c-container :px="0" :size="480" bg="var(--c-color-blue-light)" :h="50" mt="md">480px Container without padding</c-container>
</template>
```

## Fluid

Set the `fluid` prop to make the container fluid. It will take 100% of available width, which is the same as setting `size="100%"`.

<c-container fluid :h="50" bg="var(--c-color-blue-light)">
  Fluid container has 100% max-width
</c-container>

```vue
<template>
  <c-container fluid :h="50" bg="var(--c-color-blue-light)">
    Fluid container has 100% max-width
  </c-container>
</template>
```

## Customize sizes

You can customize existing `Container` sizes and add new ones with [CSS variables](../styles/css-variables) on [theme](../theming/theme-object):

<cck-config-provider :theme="theme">
  <c-container size="xxs" bg="var(--c-color-blue-light)">
    Container with custom size
  </c-container>
</cck-config-provider>

<script setup lang="ts">
import { CckConfigProvider, CContainer, createTheme, rem } from '@cck-ui/core'
const CONTAINER_SIZES: Record<string, number> = {
  xxs: 300,
  xs: 400,
  sm: 500,
  md: 600,
  lg: 700,
  xl: 800,
  xxl: 900
}

const theme = createTheme({
  components: {
    Container: CContainer.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid ? '100%' : size !== undefined && size in CONTAINER_SIZES ? rem(CONTAINER_SIZES[size]) : rem(size)
        }
      })
    })
  }
})
</script>

## API

### Container props

|Name|Type|Description|Default value|
|---|---|---|---|
|fluid|boolean|If set, the container takes 100% width of its parent and `size` prop is ignored.|`false`|
|size|CSize \| number|`max-width` of the container, value is not responsive - it is the same for all screen sizes. Numbers are converted to rem. Ignore when `fluid` prop is set.|`'md'`|
|strategy|"block" \| "grid"|Centering strategy|`'block'`|

## Styles API

`Container` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Container Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Container-root|Root element|