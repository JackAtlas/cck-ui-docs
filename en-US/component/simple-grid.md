---
title: Simple Grid
lang: en-US
---

# Simple Grid

Responsive grid in which each item takes equal amount of space

## Usage

`SimpleGrid` is a responsive grid system with equal-width columns. It uses CSS grid layout. If you need to set different widths for columns, use [Grid](./grid) component instead.

<c-simple-grid cols="3">
  <div class="item">
    <div class="item-inner">1</div>
  </div>
  <div class="item">
    <div class="item-inner">2</div>
  </div>
  <div class="item">
    <div class="item-inner">3</div>
  </div>
  <div class="item">
    <div class="item-inner">4</div>
  </div>
  <div class="item">
    <div class="item-inner">5</div>
  </div>
</c-simple-grid>

```vue
<template>
  <c-simple-grid cols="3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </c-simple-grid>
</template>
```

## spacing and vertical-spacing props

The `spacing` prop controls horizontal spacing between columns. By default, it is also used for vertical spacing between rows. If you want different vertical spacing, set the `vertical-spacing` prop explicitly.

<div style="display: flex; flex-direction: column; gap: 12px;">
  <c-simple-grid cols="3" spacing="xl">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
    <div class="item">
      <div class="item-inner">2</div>
    </div>
    <div class="item">
      <div class="item-inner">3</div>
    </div>
    <div class="item">
      <div class="item-inner">4</div>
    </div>
    <div class="item">
      <div class="item-inner">5</div>
    </div>
    <div class="item">
      <div class="item-inner">6</div>
    </div>
  </c-simple-grid>
  
  <c-simple-grid cols="3" spacing="xl" vertical-spacing="lg">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
    <div class="item">
      <div class="item-inner">2</div>
    </div>
    <div class="item">
      <div class="item-inner">3</div>
    </div>
    <div class="item">
      <div class="item-inner">4</div>
    </div>
    <div class="item">
      <div class="item-inner">5</div>
    </div>
    <div class="item">
      <div class="item-inner">6</div>
    </div>
  </c-simple-grid>
</div>

```vue
<template>
  <c-simple-grid cols="3" spacing="xl">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </c-simple-grid>

  <c-simple-grid cols="3" spacing="xl" vertical-spacing="lg">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </c-simple-grid>
</template>
```

## Responsive props

`cols`, `spacing` and `verticalSpacing` props support object notation for responsive values, it works the same way as style props: the object may have `base`, `xs`, `sm`, `md`, `lg` and `xl` key, and values from those keys will be applied according to current viewport width.

In the following example, `:cols="{ base: 1, sm: 2, lg: 5 }"` means:

- 1 column if viewport width is less than `sm` breakpoint
- 2 columns if viewport width is between `sm` and `lg` breakpoints
- 5 columns if viewport width is greater than `lg` breakpoint

Same logic applies to `spacing` and `vertical-spacing` props.

<c-simple-grid :cols="{ base: 1, sm: 2, lg: 5 }" :spacing="{ base: 10, sm: 'xl' }" :verticalSpacing="{ base: 'md', sm: 'xl' }">
  <div class="item">
    <div class="item-inner">1</div>
  </div>
  <div class="item">
    <div class="item-inner">2</div>
  </div>
  <div class="item">
    <div class="item-inner">3</div>
  </div>
  <div class="item">
    <div class="item-inner">4</div>
  </div>
  <div class="item">
    <div class="item-inner">5</div>
  </div>
</c-simple-grid>

```vue
<template>
  <c-simple-grid
    :cols="{ base: 1, sm: 2, lg: 5 }"
    :spacing="{ base: 10, sm: 'xl' }"
    :verticalSpacing="{ base: 'md', sm: 'xl' }"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </c-simple-grid>
</template>
```

## Container queries

To use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) instead of media queries, set `type="container"`. With container queries, grid columns and spacing will be ajusted based on the container width, not the viewport width.

Note that, when using container queries, `cols`, `spacing` and `vertical-spacing` props cannot reference `theme.breakpoints` values in keys. It is required to use exact px or em values.

To see how the grid changes, resize the root element of the demo with the resize handle located at the bottom right corner of the demo:

<div :style="{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }">
  <c-simple-grid
    type="container"
    :cols="{ base: 1, '300px': 2, '500px': 5 }"
    :spacing="{ base: 10, '300px': 'xl' }"
  >
    <div class="item">
      <div class="item-inner">1</div>
    </div>
    <div class="item">
      <div class="item-inner">2</div>
    </div>
    <div class="item">
      <div class="item-inner">3</div>
    </div>
    <div class="item">
      <div class="item-inner">4</div>
    </div>
    <div class="item">
      <div class="item-inner">5</div>
    </div>
  </c-simple-grid>
</div>

```vue
<template>
  <!-- Wrapper div is added for demonstration purposes only, -->
  <!-- it is not required in real projects -->
  <div :style="{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }">
    <c-simple-grid
      type="container"
      :cols="{ base: 1, '300px': 2, '500px': 5 }"
      :spacing="{ base: 10, '300px': 'xl' }"
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </c-simple-grid>
  </div>
</template>
```

## Auto-fill columns

Set the `min-col-width` prop to use CSS Grid `auto-fill` to automatically adjust the number of columns based on available space and minimum column width. When `min-col-width` is set, the `cols` props is ignored.

<c-simple-grid min-col-width="200px">
  <div class="item">
    <div class="item-inner">1</div>
  </div>
  <div class="item">
    <div class="item-inner">2</div>
  </div>
  <div class="item">
    <div class="item-inner">3</div>
  </div>
  <div class="item">
    <div class="item-inner">4</div>
  </div>
  <div class="item">
    <div class="item-inner">5</div>
  </div>
</c-simple-grid>

```vue
<template>
  <c-simple-grid min-col-width="200px">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </c-simple-grid>
</template>
```

## auto-fill vs auto-fit

By default, `min-col-width` uses `auto-fill` behavior. You can change it to `auto-fit` with the `auto-flow` prop. The difference between the two:

- `auto-fill` creates as many tracks as possible without overflowing the container, leaving empty tracks if items don't fill the row
- `auto-fit` works the same way but collapses empty tracks, allowing items to stretch and fill the remaining space

<div style="display:flex;flex-direction:column;gap:12px;">
  <c-simple-grid min-col-width="200px" auto-flow="auto-fill">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
    <div class="item">
      <div class="item-inner">2</div>
    </div>
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-simple-grid>
  <c-simple-grid min-col-width="200px" auto-flow="auto-fit">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
    <div class="item">
      <div class="item-inner">2</div>
    </div>
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-simple-grid>
</div>

```vue
<template>
  <c-simple-grid min-col-width="200px" auto-flow="auto-fill">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </c-simple-grid>
  <c-simple-grid min-col-width="200px" auto-flow="auto-fit">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </c-simple-grid>
</template>
```

## Auto rows

Set the `auto-rows` prop to control the size of implicitly created grid rows. This is useful when you need all rows to have equal height or a minimum height.

<c-simple-grid cols="3" auto-rows="minmax(100px, auto)">
  <div class="item">
    <div class="item-inner">1</div>
  </div>
  <div class="item">
    <div class="item-inner">2</div>
  </div>
  <div class="item">
    <div class="item-inner">3</div>
  </div>
  <div class="item">
    <div class="item-inner">4</div>
  </div>
  <div class="item">
    <div class="item-inner">5</div>
  </div>
</c-simple-grid>

```vue
<template>
  <c-simple-grid cols="3" auto-rows="minmax(100px, auto)">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </c-simple-grid>
</template>
```

## Browser support

`SimpleGrid` uses CSS Grid Layout, it is supported in all modern browsers. If you need to support older browsers, use Grid (flexbox based) component instead.

When `type="container"` is set, `SimpleGrid` uses container queries. Since February 2023, container queries are supported in all modern browsers. If you need to support older browsers, do not use container queries option.

## API

| Name            | Type                         | Description                                                                        | Default value |
| --------------- | ---------------------------- | ---------------------------------------------------------------------------------- | ------------- |
| autoFlow        | "auto-fit" \| "auto-fill"    | Grid repeat type when minColWidth is set                                           | `'auto-fill'` |
| autoRow         | string                       | Sets the size of implicitly created grid rows                                      |               |
| cols            | StyleProp<NumberLikeString\> | Number of columns                                                                  | 1             |
| minColWidth     | string \| number             | Minimum column width when using auto-fit/auto-fill. When set, cols prop is ignored |               |
| spacing         | StyleProp<CSpacing\>         | Spacing between columns                                                            | `'md'`        |
| type            | "media" \| "container"       | Determines type of queries that are used for responsive styles                     | `'media'`     |
| verticalSpacing | StyleProp<CSpacing\>         | Spacing between rows. When not set, falls back to spacing value                    | `undefined`   |

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--c-spacing-md);
  background-color: var(--c-color-blue-0);
}

.item-inner {
  font-size: --c-font-size-xl;
  font-weight: 700;
  text-align: center;
  color: var(--c-color-blue-6);
}
</style>
