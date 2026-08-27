---
title: Anchor
lang: en-US
---

# Anchor

Display link with theme styles

## Usage

**Note**: The blue text color and underline you see here is style injected by VitePress for all `<a />` tags. When using this Anchor component in your own project, these style won't appear unless you explicitly add them to your theme. We will rebuild this website with custom theme using CCK UI components in the future.

<c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank">Anchor component</c-anchor>

```vue
<template>
  <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank">Anchor component</c-anchor>
</template>
```

## Underline

Use the `underline` prop to configure the `text-decoration` property. It accepts the following values:

- `always` - link is always underlined
- `hover` - link is underlined on hover
- `never` - link is never underlined
- `not-hover` - link is underlined when not hovered

<c-group>
  <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank" underline="always">Underline always</c-anchor>
  <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank" underline="always">Underline hover</c-anchor>
  <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank" underline="always">Underline never</c-anchor>
  <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank" underline="always">Underline not-hover</c-anchor>
</c-group>

```vue
<template>
  <c-group>
    <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank" underline="always">Underline always</c-anchor>
    <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank" underline="always">Underline hover</c-anchor>
    <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank" underline="always">Underline never</c-anchor>
    <c-anchor href="https://cck-ui.jackatlas.xyz" target="_blank" underline="always">Underline not-hover</c-anchor>
  </c-group>
</template>
```

You can also configure the `underline` prop for all `Anchor` components with [default props](../theming/default-props):

```vue
<template>
  <cck-config-provider :theme="theme" :with-css-variables="true" :with-global-classes="true" :with-static-classes="true">
    <!-- Your app here -->
  </cck-config-provider>
</template>

<script setup lang="ts">
import { CAnchor, createTheme, CckConfigProvider } from '@cck-ui/core'

const theme = createTheme({
  components: {
    Anchor: CAnchor.extend({
      defaultProps: {
        underline: 'always'
      }
    })
  }
})
</script>
```

## Text props

The `Anchor` component supports all [Text](./text) component props. For example, you can use the gradient variant:

<c-anchor href="#text-props" fz="lg" variant="gradient" :fw="500" :gradient="{ from: 'pink', to: 'yellow' }">A link with pink to yellow gradient</c-anchor>

## Polymorphic component

`Anchor` is a [polymorphic component](../styles/polymorphic) - its default root element is `a`, but it can be changed to any other element or component with the `tag` prop:

```vue
<template>
  <c-anchor tag="button" />
</template>
```

## Props

### Anchor props

|Name|Type|Description|Default value|
|---|---|---|---|
|gradient|CGradient|Gradient configuration, ignored when `variant` is not `gradient`|`theme.defaultGradient`|
|inherit|boolean|Determines whether font properties should be inherited from the parent|`false`|
|inline|boolean|Sets `line-height` to 1 for centering|`false`|
|lineClamp|number|Number of lines after which Text will be truncated|
|size|CSize \| (string & {})|Controls `font-size` and `line-height`|`'md'`|
|textWrap|"wrap" \| "nowrap" \| "balance" \| "pretty" \| "stable"|Controls `text-wrap` CSS property||
|truncate|TextTruncate|Side on which Text must be truncated, if `true`, text is truncated from the start||
|underline|"always" \| "hover" \| "not-hover" \| "never"|Defines when `text-decoration: underline` styles are applied.|`hover`|

## Styles API

`Anchor` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Anchor Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Anchor-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--text-fz|Controls `font-size` property|
||--text-lh|Controls `line-height` property|
||--text-gradient|Text fill gradient|
||--text-line-clamp|Number of lines that should be visible|
||--text-text-wrap|Controls `text-wrap` property|

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|root|data-truncate|`truncate` prop is set|Value of `truncate` prop|
|root|data-line-clamp|`lineClamp` prop is a number|-|
|root|data-inline|`inline` prop is set|-|
|root|data-inherit|`inherit` prop is set|-|
|root|data-underline|-|Value of `underline` prop|