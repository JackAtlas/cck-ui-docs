---
title: Group
lang: en-US
---

# Group

Compose elements and components in a horizontal flex container

## Usage

`Group` is a horizontal flex container. If you need a vertical flex container, use the [Stack](./stack) component insted. If you need to have full control over flex container properties, use the [Flex](./flex) component.

<c-group>
  <c-button>First</c-button>
  <c-button>Second</c-button>
  <c-button>Third</c-button>
</c-group>

## prevent-grow-overflow

The `prevent-grow-overflow` prop allows you to control how `Group` children should behave when there is not enough space to fit them all on one line. By default, children are not allowed to take more space than `(1 / children.length) * 100%` of parent width (`prevent-grow-overflow` is set to `true`). To change this behavior, set `prevent-grow-overflow` to `false` and children will be allowed to grow and take as much space as they need.

<c-box :style="{ overflow: 'hidden' }">
  <c-box :maw="500" p="md" mx="auto" bg="var(--c-color-blue-light)">
    <c-text size="sm" :mb="5">
      prevent-grow-overflow: true - each child width is always limited to 33% of parent (since there are 3 children)
    </c-text>
    <c-group grow wrap="nowrap">
      <c-button>First button</c-button>
      <c-button>Second button with large content</c-button>
      <c-button>Third button</c-button>
    </c-group>
    <c-text size="sm" :mb="5" mt="md">
      prevent-grow-overflow: false - children will grow based on their content, they can take more than 33% of parent width
    </c-text>
    <c-group grow :prevent-grow-overflow="false" wrap="nowrap">
      <c-button>First button</c-button>
      <c-button>Second button with large content</c-button>
      <c-button>Third button</c-button>
    </c-group>
  </c-box>
</c-box>

```vue
<template>
  <c-box :style="{ overflow: 'hidden' }">
    <c-box :maw="500" p="md" mx="auto" bg="var(--c-color-blue-light)">
      <c-text size="sm" :mb="5">
        prevent-grow-overflow: true - each child width is always limited to 33% of parent (since there are 3 children)
      </c-text>
      <c-group grow wrap="nowrap">
        <c-button>First button</c-button>
        <c-button>Second button with large content</c-button>
        <c-button>Third button</c-button>
      </c-group>
      <c-text size="sm" :mb="5" mt="md">
        prevent-grow-overflow: false - children will grow based on their content, they can take more than 33% of parent width
      </c-text>
      <c-group grow :prevent-grow-overflow="false" wrap="nowrap">
        <c-button>First button</c-button>
        <c-button>Second button with large content</c-button>
        <c-button>Third button</c-button>
      </c-group>
    </c-box>
  </c-box>
</template>
```

## Group children

**!important** `Group` workds correctly only with Vue elements. Strings, numbers, fragments may have incorrect styles if the `grow` prop is set:

```vue
<!-- Invalid Group usage, do not do this -->
<c-group grow>
  First string
  <Fragment>
    <div>element inside fragment</div>
    <div>another inside fragment</div>
  </Fragment>
  {{ 20 }}
</c-group>
```

## Browser support

`Group` uses [flexbox gap](https://caniuse.com/flexbox-gap) to add spacing between children. In older browsers, `Group` children may not have spacing. You can install PostCSS [flex-gap-polyfill](https://github.com/gavinmcfarland/flex-gap-polyfill) to add support for older browsers.

## API

### Group Props

|Name|Type|Description|Default value|
|---|---|---|---|
|align|AlignItem|Controls `align-items` CSS property|`'center'`|
|gap|CSpacing|Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem|`'md'`|
|grow|boolean|Determines whether each child element should have `flex-grow: 1` style|`false`|

## Styles API

`Group` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Group Styles API

#### Selectors:

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Group-root|Root element|

#### CSS variables:

|Selector|Variable|Description|
|---|---|---|
|root|--group-align|Controls `align-items` property|
||--group-justify|Controls `justify-content` property|
||--group-gap|Controls `gap` property|
||--group-wrap|Controls `flex-wrap` property|
||--group-child-width| Controls `max-width` of child elements, applied when grow prop is set and `preventGrowOverflow` is `true`|

#### Data attributes:

|Selector|Attribute|Condition|
|---|---|---|
|root|data-grow|`grow` prop is set|