---
title: Card
lang: en-US
---

# Card

Card with sections

## Usage

`Card` is a wrapper around the [Paper](./paper) component with some additional styles and a `CardSection` component that allows you to split the card into sections. If you do not need sections, you can use the [Paper](./paper) component instead.

<c-card padding="lg" shadow="sm" with-border :w="400">
  <c-card-section>
    <c-image alt="ShunFeng Mountain" src="https://raw.githubusercontent.com/JackAtlas/cck-ui/main/.demo/images/bg-3.jpg" :height="160" :m="0" />
  </c-card-section>
  <c-group justify="space-between" mb="xs" mt="md">
    <c-text :fw="500" :m="0">ShunFeng Mountain Tour</c-text>
    <c-badge color="pink" variant="filled">On Sale</c-badge>
  </c-group>
  <c-text c="dimmed" size="sm" :m="0">With atlas Atlas Tours you can explore more of the magical ShunFeng Mountain with tours and activities</c-text>
  <c-button full-width mt="md" variant="filled">Book classic tour now</c-button>
</c-card>

```vue
<template>
  <c-card padding="lg" shadow="sm" with-border>
    <c-card-section>
      <c-image alt="ShunFeng Mountain" src="https://raw.githubusercontent.com/JackAtlas/cck-ui/main/.demo/images/bg-3.jpg" :height="160" />
    </c-card-section>
    <c-group justify="space-between" mb="xs" mt="md">
      <c-text :fw="500">ShunFeng Mountain Tour</c-text>
      <c-badge color="pink" variant="filled">On Sale</c-badge>
    </c-group>
    <c-text c="dimmed" size="sm">With atlas Atlas Tours you can explore more of the magical ShunFeng Mountain with tours and activities</c-text>
    <c-button full-width mt="md" variant="filled">Book classic tour now</c-button>
  </c-card>
</template>
```

## Horizontal orientation

<c-card orientation="horizontal" padding="sm" with-border>
  <c-card-section inherit-padding px="xs" with-border>
    <c-center h="100%">
      <c-semi-circle-progress :value="81">
        <template #label>
          <c-text m="0">81%</c-text>
          <c-text c="dimmed" m="0">Completed</c-text>
        </template>
      </c-semi-circle-progress>
    </c-center>
  </c-card-section>

  <c-card-section inherit-padding px="md">
    <c-text fz="xl" m="0">Project tasks</c-text>
    <c-box mt="xs">
      <c-text m="0">1887</c-text>
      <c-text c="dimmed" fz="xs" m="0">Completed</c-text>
    </c-box>
    <c-group mt="sm">
      <div>
        <c-text m="0">447</c-text>
        <c-text c="dimmed" m="0" size="xs">Remaining</c-text>
      </div>
      <div>
        <c-text m="0">76</c-text>
        <c-text c="dimmed" m="0" size="xs">In progress</c-text>
      </div>
    </c-group>
  </c-card-section>
</c-card>

```vue
<template>
  <c-card orientation="horizontal" padding="sm" with-border>
    <c-card-section inherit-padding px="xs" with-border>
      <c-semi-circle-progress :value="81">
        <template #label>
          <c-text>81%</c-text>
          <c-text c="dimmed">Completed</c-text>
        </template>
      </c-semi-circle-progress>
    </c-card-section>

    <c-card-section inherit-padding px="md">
      <c-text fz="xl">Project tasks</c-text>
      <c-box mt="xs">
        <c-text>1887</c-text>
        <c-text c="dimmed" fz="xs">Completed</c-text>
      </c-box>
      <c-group mt="sm">
        <div>
          <c-text>447</c-text>
          <c-text c="dimmed" size="xs">Remaining</c-text>
        </div>
        <div>
          <c-text>76</c-text>
          <c-text c="dimmed" size="xs">In progress</c-text>
        </div>
      </c-group>
    </c-card-section>
  </c-card>
</template>
```

## Polymorphic component

Card is a [polymorphic component](../styles/polymorphic), you can change its root element:

<c-card href="javascript: void(0);" padding="xl" shadow="sm" tag="a" target="_blank" :w="400">
  <c-card-section>
    <c-image alt="No way!" src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" :h="160" :m="0" />
  </c-card-section>
  <c-text c="black" mb="0" mt="md" size="lg" :fw="500">
    You&apos;ve won a million dollars in cash!
  </c-text>
  <c-text c="dimmed" mb="0" mt="xs" size="sm">Please click anywhere on this card to claim your reward, this is not a fraud, trust us</c-text>
</c-card>

```vue
<template>
  <c-card href="javascript: void(0);" padding="xl" shadow="sm" tag="a" target="_blank" :w="400">
    <c-card-section>
      <c-image alt="No way!" src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" :h="160" :m="0" />
    </c-card-section>
    <c-text c="black" mb="0" mt="md" size="lg" :fw="500">
      You&apos;ve won a million dollars in cash!
    </c-text>
    <c-text c="dimmed" mb="0" mt="xs" size="sm">Please click anywhere on this card to claim your reward, this is not a fraud, trust us</c-text>
  </c-card>
</template>
```

## CardSection

`CardSection` is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. `CardSection` works in the following way:

- If the component is the first child of the Card, then it has negative top, left and right margins
- If it is the last child in Card, then it has negative bottom, left and right margins
- If it is in the middle, then only the left and right margins will be negative

```vue
<template>
  <c-card>
    <!-- top, right, left margin are negative - -1 * theme.spacing.xl -->
    <c-card-section>First section</c-card-section>

    <!-- Content that is not inside CardSection will have theme.spacing.xl spacing on all sides relative to Card -->
    <c-text>Some other content</c-text>

    <!-- right, left margins are negative - -1 * theme.spacing.xl -->
    <c-card-section></c-card-section>

    <!-- bottom, right, left margins are negative - -1 * theme.spacing.xl -->
    <card-section></card-section>
  </c-card>
</template>
```

Note that `Card` relies on mapping direct children and you cannot use fragments or other wrappers for `CardSection`:

```vue
<template>
  <c-card>
    <div>
      <c-card-section>Won't work</c-card-section>
    </div>

    <c-card-section>Works fine</c-card-section>
  </c-card>
</template>
```

## Polymorphic CardSection

CardSection is a [polymorphic component](../styles/polymorphic), you can change its root element:

<c-card padding="lg" shadow="sm" with-border :w="400">
  <c-card-section tag="a" href="https://chi-ui.jackatlas.xyz">
    <c-image alt="ShunFeng Mountain" src="https://raw.githubusercontent.com/JackAtlas/cck-ui/main/.demo/images/bg-3.jpg" :height="160" :m="0" />
  </c-card-section>
  <c-group justify="space-between" mb="xs" mt="md">
    <c-text :fw="500" :m="0">ShunFeng Mountain Tour</c-text>
    <c-badge color="pink" variant="filled">On Sale</c-badge>
  </c-group>
  <c-text c="dimmed" size="sm" :m="0">With atlas Atlas Tours you can explore more of the magical ShunFeng Mountain with tours and activities</c-text>
  <c-button full-width mt="md" variant="filled">Book classic tour now</c-button>
</c-card>

```vue
<template>
  <c-card padding="lg" shadow="sm" with-border>
    <c-card-section tag="a" href="https://chi-ui.jackatlas.xyz">
      <c-image alt="ShunFeng Mountain" src="https://raw.githubusercontent.com/JackAtlas/cck-ui/main/.demo/images/bg-3.jpg" :height="160" />
    </c-card-section>
    <c-group justify="space-between" mb="xs" mt="md">
      <c-text :fw="500">ShunFeng Mountain Tour</c-text>
      <c-badge color="pink" variant="filled">On Sale</c-badge>
    </c-group>
    <c-text c="dimmed" size="sm">With atlas Atlas Tours you can explore more of the magical ShunFeng Mountain with tours and activities</c-text>
    <c-button full-width mt="md" variant="filled">Book classic tour now</c-button>
  </c-card>
</template>
```

## withBorder and inheritPadding props

- `withBorder` prop adds top and bottom borders to `CardSection` depending on its position relative to other content and sections
- `inheritPadding` prop adds the same left and right padding to `CardSection` as set in the `Card` component

## Props

### Card props

|Name|Type|Description|Default value|
|---|---|---|---|
|orientation|"horizontal" \| "vertical"|Card orientation|`'vertical'`|
|padding|CSpacing|Key of `theme.spacing` or any valid CSS value to set padding|`'md'`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem|`theme.defaultRadius`|
|shadow|CShadow|Key of `theme.shadows` or any valid CSS value to set `box-shadow`||
|withBorder|boolean|Adds border to the card||

### CardSection props

|Name|Type|Description|
|---|---|---|
|inheritPadding|boolean|If set, the section inherits padding from the parent `Card`|
|withBorder|boolean|Adds border to the root element|

### Styles API

`Card` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Card Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Card-root|Root element|
|section|.c-Card-section|`CardSection` root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--card-padding|Controls `padding` of the card, also used to control `CardSection` spacing|

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|section|data-first-section|`CardSection` is the first child of the `Card`|
|section|data-last-section|`CardSection` is the last child of the `Card`|
|root|data-with-border|`withBorder` prop is set on `Card` component|
|section|data-with-border|`withBorder` prop is set on `CardSection` component|
|section|data-inherit-padding|`inheritPadding` prop is set on `CardSection` component|