---
title: Grid
lang: en-US
---

# Grid

Responsive 12 columns grid system

## Usage

<c-grid>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid>
    <c-col span="4">1</c-col>
    <c-col span="4">2</c-col>
    <c-col span="4">3</c-col>
  </c-grid>
</template>
```

## Columns span

The `c-col` `span` prop controls the ratio of column width to the total width of the row. By default, grid uses a 12 columns layout, so the `span` prop can be any number from 1 to 12.

Examples:

- `<c-col span="3" />` - 3 / 12 = 25% of the row width
- `<c-col span="4" />` - 4 / 12 = 33% of the row width
- `<c-col span="6" />` - 6 / 12 = 50% of the row width
- `<c-col span="12" />` - 12 / 12 = 100% of the row width

The `span` prop also supports object syntax to change column width based on viewport width. It accepts `xs`, `sm`, `lg` and `xl` keys and values from 1 to 12.

In the following example `span="{ base: 12, md: 6, lg: 3 }"`:

- `base` - 12 / 12 = 100% of row width when viewport width is less than `md` breakpoint
- `md` - 6 / 12 = 50% of row width when viewport width is between `md` and `lg` breakpoint
- `lg` - 3 / 12 = 25% of row width when viewport width is greater than `lg` breakpoint

<c-grid>
  <c-col :span="{ base: 12, md: 6, lg: 3 }">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col :span="{ base: 12, md: 6, lg: 3 }">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col :span="{ base: 12, md: 6, lg: 3 }">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
  <c-col :span="{ base: 12, md: 6, lg: 3 }">
    <div class="item">
      <div class="item-inner">4</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid>
    <c-col :span="{ base: 12, md: 6, lg: 3 }">1</c-col>
    <c-col :span="{ base: 12, md: 6, lg: 3 }">2</c-col>
    <c-col :span="{ base: 12, md: 6, lg: 3 }">3</c-col>
    <c-col :span="{ base: 12, md: 6, lg: 3 }">4</c-col>
  </c-grid>
</template>
```

## Row and column gap

Use `rowGap` and `columnGap` props to set different spacing for rows and columns. `rowGap` and `columnGap` override `gap` prop if both are set:

<c-grid gap="md" rowGap="xl" columnGap="sm">
  <c-col span="3">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col span="3">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="3">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
  <c-col span="3">
    <div class="item">
      <div class="item-inner">4</div>
    </div>
  </c-col>
  <c-col span="3">
    <div class="item">
      <div class="item-inner">5</div>
    </div>
  </c-col>
  <c-col span="3">
    <div class="item">
      <div class="item-inner">6</div>
    </div>
  </c-col>
  <c-col span="3">
    <div class="item">
      <div class="item-inner">7</div>
    </div>
  </c-col>
  <c-col span="3">
    <div class="item">
      <div class="item-inner">8</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid gap="md" rowGap="xl" columnGap="sm">
    <c-col span="3">1</c-col>
    <c-col span="3">2</c-col>
    <c-col span="3">3</c-col>
    <c-col span="3">4</c-col>
    <c-col span="3">5</c-col>
    <c-col span="3">6</c-col>
    <c-col span="3">7</c-col>
    <c-col span="3">8</c-col>
  </c-grid>
</template>
```

## Grow

If the `grow` prop is set, the column will grow to fill the remaining space in the row:

<c-grid grow>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">4</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">5</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid grow>
    <c-col span="4">1</c-col>
    <c-col span="4">2</c-col>
    <c-col span="4">3</c-col>
    <c-col span="4">4</c-col>
    <c-col span="4">5</c-col>
  </c-grid>
</template>
```

## Column offset

Set the `offset` prop on the `c-col` component to add gaps to the grid. The `offset` prop supports the same syntax as the `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

<c-grid>
  <c-col span="3">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col :span="3">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="3" :offset="3">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid>
    <c-col span="3">1</c-col>
    <c-col span="3">2</c-col>
    <c-col span="3" :offset="3">3</c-col>
  </c-grid>
</template>
```

## Order

Set the `order` prop on the `c-col` component to change the order of columns. The `order` prop supports the same syntax as the `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

<c-grid>
  <c-col span="3" :order="{ base: 2, sm: 1, lg: 3 }">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="3" :order="{ base: 3, sm: 2, lg: 2 }">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
  <c-col span="3" :order="{ base: 1, sm: 3, lg: 1 }">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid>
    <c-col span="3" :order="{ base: 2, sm: 1, lg: 3 }">2</c-col>
    <c-col span="3" :order="{ base: 3, sm: 2, lg: 2 }">3</c-col>
    <c-col span="3" :order="{ base: 1, sm: 3, lg: 1 }">1</c-col>
  </c-grid>
</template>
```

## Multiple rows

Once the columns' `span` and `offset` sum exceeds the `columns` prop (12 by default), columns are moved to the next row:

<c-grid>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
  <c-col span="4">
    <div class="item">
      <div class="item-inner">4</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid>
    <c-col span="4">1</c-col>
    <c-col span="4">2</c-col>
    <c-col span="4">3</c-col>
    <c-col span="4">4</c-col>
  </c-grid>
</template>
```

## Justify and align (WIP)

You can control the `justify-content` and `align-items` CSS properties with the `justify` and `align` props on the `c-grid` component:

<c-grid justify="flex-start" align="flex-start">
  <c-col span="3" style="height: calc(5rem * var(--c-scale))">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col span="3" style="height: calc(7.5rem * var(--c-scale))">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="3" style="height: calc(6.25rem * var(--c-scale));">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid justify="flex-start" align="flex-start">
    <c-col span="3" h="80">1</c-col>
    <c-col span="3" h="120">2</c-col>
    <c-col span="3" h="100">3</c-col>
  </c-grid>
</template>
```

## Column alignment

Use the `align` prop on individual `c-col` components to control the `align-self` CSS property for each column. This allows you to override the grid's `align` prop for specific columns:

<c-grid align="stretch">
  <c-col span="4" align="flex-start">
    <div class="item">
      <div class="item-inner">flex-start</div>
    </div>
  </c-col>
  <c-col span="4" align="center">
    <div class="item">
      <div class="item-inner">center</div>
    </div>
  </c-col>
  <c-col span="4" align="flex-end">
    <div class="item">
      <div class="item-inner">flex-end</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid align="stretch">
    <c-col span="4" align="flex-start">
      <div class="item">
        <div class="item-inner">flex-start</div>
      </div>
    </c-col>
    <c-col span="4" align="center">
      <div class="item">
        <div class="item-inner">center</div>
      </div>
    </c-col>
    <c-col span="4" align="flex-end">
      <div class="item">
        <div class="item-inner">flex-end</div>
      </div>
    </c-col>
  </c-grid>
</template>
```

## Auto sized columns

All columns in a row with `span="auto"` grow as much as they can to fill the row. In the following example, the second column takes up to 50% of the row while the other two columns automatically resize to fill the remaining space:

<c-grid>
  <c-col span="auto">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col span="6">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="auto">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid>
    <c-col span="auto">
      <div class="item">
        <div class="item-inner">1</div>
      </div>
    </c-col>
    <c-col span="6">
      <div class="item">
        <div class="item-inner">2</div>
      </div>
    </c-col>
    <c-col span="auto">
      <div class="item">
        <div class="item-inner">3</div>
      </div>
    </c-col>
  </c-grid>
</template>
```

## Fit column content

If you set `span="content"`, the column's size will automatically adjust to match the width of its content:

<c-grid>
  <c-col span="content">
    <div class="item">
      <div class="item-inner">fit content</div>
    </div>
  </c-col>
  <c-col span="6">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid>
    <c-col span="content">
      <div class="item">
        <div class="item-inner">fit content</div>
      </div>
    </c-col>
    <c-col span="6">
      <div class="item">
        <div class="item-inner">2</div>
      </div>
    </c-col>
  </c-grid>
</template>
```

## Change columns count

By default, grid uses a 12 columns layout. You can change it by setting the `columns` prop on the `c-grid` component. Note that in this case, columns span and offset will be calculated relative to this value.

In the following example, the first column takes 50% with 12 span (12/24), second span and third take 25% (6/24):

<c-grid columns="24">
  <c-col span="12">
    <div class="item">
      <div class="item-inner">1</div>
    </div>
  </c-col>
  <c-col span="6">
    <div class="item">
      <div class="item-inner">2</div>
    </div>
  </c-col>
  <c-col span="6">
    <div class="item">
      <div class="item-inner">3</div>
    </div>
  </c-col>
</c-grid>

```vue
<template>
  <c-grid columns="24">
    <c-col span="12">1</c-col>
    <c-col span="6">2</c-col>
    <c-col span="6">3</c-col>
  </c-grid>
</template>
```

## Container queries

To use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) instead of media queries, set `type="container"`. With container queries, all responsive values are adjusted based on the container width, not the viewport width.

Note that, when using container queries, it is also required to set `breakpoints` prop to the exact container width values.

To see how the grid changes, resize the root element of the demo with the resize handle located at the bottom right corner of the demo:

<div style="resize: horizontal; overflow: hidden; max-width: 100%">
  <c-grid
    type="container"
    :breakpoints="{
      xs: '100px',
      sm: '200px',
      md: '300px',
      lg: '400px',
      xl: '500px'
    }"
  >
    <c-col :span="{ base: 12, md: 6, lg: 3 }">
      <div class="item">
        <div class="item-inner">1</div>
      </div>
    </c-col>
    <c-col :span="{ base: 12, md: 6, lg: 3 }">
      <div class="item">
        <div class="item-inner">2</div>
      </div>
    </c-col>
    <c-col :span="{ base: 12, md: 6, lg: 3 }">
      <div class="item">
        <div class="item-inner">3</div>
      </div>
    </c-col>
    <c-col :span="{ base: 12, md: 6, lg: 3 }">
      <div class="item">
        <div class="item-inner">4</div>
      </div>
    </c-col>
  </c-grid>
</div>

```vue
<template>
  <!-- Wrapper div is added for demonstration purposes only. -->
  <!-- It is not required in real projects. -->
  <div style="resize: horizontal; overflow: hidden; max-width: 100%">
    <c-grid
      type="container"
      :breakpoints="{
        xs: '100px',
        sm: '200px',
        md: '300px',
        lg: '400px',
        xl: '500px'
      }"
    >
      <c-col :span="{ base: 12, md: 6, lg: 3 }">
        <div class="item">
          <div class="item-inner">1</div>
        </div>
      </c-col>
      <c-col :span="{ base: 12, md: 6, lg: 3 }">
        <div class="item">
          <div class="item-inner">2</div>
        </div>
      </c-col>
      <c-col :span="{ base: 12, md: 6, lg: 3 }">
        <div class="item">
          <div class="item-inner">3</div>
        </div>
      </c-col>
      <c-col :span="{ base: 12, md: 6, lg: 3 }">
        <div class="item">
          <div class="item-inner">4</div>
        </div>
      </c-col>
    </c-grid>
  </div>
</template>
```

## Browser support

Grid component uses flexbox with native `gap` for layout, which is supported in all modern browsers.

### Container queries

When using `type="container"`, the Grid component uses [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) are supported in the following browsers:

- Chrome 105+
- Safari 16+
- Firefox 110+
- Edge 105+

If you need to support older browsers, use the default `type="media"` which uses standard media queries instead of container queries.

Example with media queries (default):

```vue
<template>
  <c-grid gap="md">
    <c-col :span="{ base: 12, md: 6 }">1</c-col>
    <c-col :span="{ base: 12, md: 6 }">2</c-col>
  </c-grid>
</template>
```

Example with container queries:

```vue
<template>
  <c-grid
    type="container"
    :breakpoints="{
      xs: '100px',
      sm: '200px',
      md: '300px',
      lg: '400px',
      xl: '500px'
    }"
  >
    <c-col :span="{ base: 12, md: 6 }">1</c-col>
    <c-col :span="{ base: 12, md: 6 }">2</c-col>
  </c-grid>
</template>
```

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--c-spacing-md);
  background-color: var(--c-color-blue-0);
}
[data-c-color-scheme="dark"] .item {
  background-color: var(--c-color-dark-4);
}

.item-inner {
  font-size: --c-font-size-xl;
  font-weight: 700;
  text-align: center;
  color: var(--c-color-blue-6);
}
[data-c-color-scheme="dark"] .item-inner {
  color: var(--c-color-dimmed);
}
</style>

## API

### Grid props

| Name        | Type                     | Description                                                        | Default value |
| ----------- | ------------------------ | ------------------------------------------------------------------ | ------------- |
| align       | AlignItems               | Sets `align-items`                                                 | `stretch`     |
| breakpoints | GridBreakpoints          | Breakpoints values, only used with `type="container"`              |               |
| columnGap   | StyleProp<CSpacing\>     | Column gap, overrides `gap` for horizontal spacing                 |               |
| columns     | NumberLikeString         | Number of columns in each row                                      | `12`          |
| grow        | boolean                  | If set, columns in the last row expand to fill all available space | `false`       |
| justify     | JustifyContent           | Sets `justify-content`                                             | `flex-start`  |
| overflow    | Overflow                 | Sets `overflow` CSS property on the root element                   | `'visible'`   |
| rowGap      | StyleProp<CSpacing\>     | Row gap, overrides `gap` for vertical spacing                      |               |
| type        | `"media" \| "container"` | Type of queries used for responsive styles                         | `'media'`     |

### Col props

| Name   | Type                         | Description                                                      | Default value |
| ------ | ---------------------------- | ---------------------------------------------------------------- | ------------- |
| align  | StyleProp<AlignSelf\>        | Vertical alignment of the column `align-self` CSS property       |               |
| offset | StyleProp<NumberLikeString\> | Column start offset - number of empty columns before this column |               |
| order  | StyleProp<NumberLikeString\> | Column order, use to reorder columns at different viewport sizes |               |
| span   | StyleProp<ColSpan\>          | Column span                                                      | `12`          |
