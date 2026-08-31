---
title: Badge
lang: en-US
---

# Badge

Display badge, pill or tag

## Usage

<c-badge color="blue" variant="filled">BADGE</c-badge>

```vue
<template>
  <c-badge color="blue" variant="filled">BADGE</c-badge>
</template>
```

## Gradient variant

When the `variant` prop is set to `gradient`, you can control the gradient with the `gradient` prop, which accepts an object with `from`, `to` and `deg` properties. If the `gradient` prop is not set, `Badge` will use `theme.defaultGradient` which can be configured on the [theme object](../theming/theme-object). The `gradient` prop is ignored when `variant` is not `gradient`.

Note that `variant="gradient"` supports only linear gradients with two colors. If you need a more complex gradient, use the [Style API](../styles/styles-api) to modify `Badge` styles.

<c-badge size="xl" variant="gradient" :gradient="{ from: 'blue', to: 'cyan', deg: 90 }">GRADIENT BADGE</c-badge>

```vue
<template>
  <c-badge size="xl" variant="gradient" :gradient="{ from: 'blue', to: 'cyan', deg: 90 }">GRADIENT BADGE</c-badge>
</template>
```

## Rounded

Set the `circle` prop to reduce horizontal padding and make the badge width equal to its height:

<c-group>
  <c-badge size="xs" circle variant="outline">1</c-badge>
  <c-badge size="sm" circle variant="outline">7</c-badge>
  <c-badge size="md" circle variant="outline">9</c-badge>
  <c-badge size="lg" circle variant="outline">3</c-badge>
  <c-badge size="xl" circle variant="outline">8</c-badge>
</c-group>

```vue
<template>
  <c-group>
    <c-badge size="xs" circle variant="outline">1</c-badge>
    <c-badge size="sm" circle variant="outline">7</c-badge>
    <c-badge size="md" circle variant="outline">9</c-badge>
    <c-badge size="lg" circle variant="outline">3</c-badge>
    <c-badge size="xl" circle variant="outline">8</c-badge>
  </c-group>
</template>
```

## Left and right sections

You can set left and right section by slots and props, slots have higher priority.

<c-group>
  <c-badge left-section="L" variant="light">With left section</c-badge>
  <c-badge variant="light">
    <template #left-section>
      <at-sign-icon :size="12" />
    </template>
    With left section
  </c-badge>
  <c-badge right-section="R" variant="light">With right section</c-badge>
  <c-badge variant="light">
    <template #right-section>
      <at-sign-icon :size="12" />
    </template>
    With right section
  </c-badge>
</c-group>

```vue
<template>
  <c-group>
    <c-badge left-section="L" variant="light">With left section</c-badge>
    <c-badge variant="light">
      <template #left-section>
        <at-sign-icon :size="12" />
      </template>
      With left section
    </c-badge>
    <c-badge right-section="R" variant="light">With right section</c-badge>
    <c-badge variant="light">
      <template #right-section>
        <at-sign-icon :size="12" />
      </template>
      With right section
    </c-badge>
  </c-group>
</template>
```

## Full width

Set `fullWidth` to make the badge span the full width of its parent element:

<c-badge full-width variant="dashed">Full width badge</c-badge>

```vue
<template>
  <c-badge full-width variant="dashed">Full width badge</c-badge>
</template>
```

## Custom variant colors

You can customize colors for `Badge` and other component variants by adding [variantColorResolver](../theming/colors) to your theme.

<cck-config-provider :theme="{ variantColorResolver }" :with-css-variables="true" :with-static-classes="true"  :with-global-classes="true">
  <c-group>
    <c-badge color="lime.4" variant="filled">Lime filled</c-badge>
    <c-badge color="orange" variant="light">Orange light</c-badge>
    <c-badge variant="danger">Danger</c-badge>
  </c-group>
</cck-config-provider>

```vue
<template>
  <cck-config-provider :theme="{ variantColorResolver }" :with-css-variables="true" :with-static-classes="true"  :with-global-classes="true">
    <c-group>
      <c-badge color="lime.4" variant="filled">Lime filled</c-badge>
      <c-badge color="orange" variant="light">Orange light</c-badge>
      <c-badge variant="danger">Danger</c-badge>
    </c-group>
  </cck-config-provider>
</template>

<script setup lang="ts">
import { CckConfigProvider, darken, defaultVariantColorsResolver, parseThemeColor, rgba } from '@cck-ui/core'

const variantColorResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme
  })

  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--c-color-black)',
      hoverColor: 'var(--c-color-black)'
    }
  }

  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1)
    }
  }

  if (input.variant === 'danger') {
    return {
      background: 'var(--c-color-red-9)',
      hover: 'var(--c-color-red-8)',
      color: 'var(--c-color-white)',
      border: 'none'
    }
  }

  return defaultResolvedColors
}
</script>
```

## autoContrast

`Badge` supports the `autoContrast` prop and [theme.autoContrast](../theming/theme-object). If `autoContrast` is set either on `Badge` or on the theme, the content color will be adjusted to have sufficient contrast with the value specified in the `color` prop.

Note that the `autoContrast` feature works only if you use the `color` prop to change the background color. `autoContrast` works only with the `filled` variant.

<c-group>
  <c-badge color="lime.4" size="lg" variant="filled">Default</c-badge>
  <c-badge auto-contrast color="lime.4" size="lg" variant="filled">Auto contrast</c-badge>
</c-group>

```vue
<template>
  <c-group>
    <c-badge color="lime.4" size="lg" variant="filled">Default</c-badge>
    <c-badge auto-contrast color="lime.4" size="lg" variant="filled">Auto contrast</c-badge>
  </c-group>
</template>
```

## Polymorphic component

`Badge` is a [polymorphic component](../styles/polymorphic) - its defaut root element is `div`, but it can be changed to any other element or component with the `tag` prop:

```vue
<template>
  <c-badge tag="a" />
</template>
```

<script setup lang="ts">
import { AtSignIcon } from '@lucide/vue'
import { CckConfigProvider, darken, defaultVariantColorsResolver, parseThemeColor, rgba } from '@cck-ui/core'

const variantColorResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme
  })

  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--c-color-black)',
      hoverColor: 'var(--c-color-black)'
    }
  }

  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1)
    }
  }

  if (input.variant === 'danger') {
    return {
      background: 'var(--c-color-red-9)',
      hover: 'var(--c-color-red-8)',
      color: 'var(--c-color-white)',
      border: 'none'
    }
  }

  return defaultResolvedColors
}
</script>

## Props

### Badge props

|Name|Type|Description|Default value|
|---|---|---|---|
|autoContrast|boolean|If set, adjusts text color based on background color for `filled` variant||
|circle|boolean|If set, badge `min-width` becomes equal to its `height` and horizontal padding is removed||
|color|CColor|Key of `theme.colors` or any valid CSS color|`theme.primaryColor`|
|fullWidth|boolean|Determines whether Badge should take 100% of its parent width|`false`|
|gradient|CGradient|Gradinet configuration used when `variant="gradient"`|`theme.defaultGradient`|
|leftSection|string \| VNode|Content displayed on the left side of the badge label||
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set `border-radius`|`'xl'`|
|rightSection|string \| VNode|Content displayed on the right side of the badge label||
|size|CSize|Controls `font-size`, `height` and horizontal `padding`|`'md'`|

### Badge slots

|Name|Description|
|---|---|
|leftSection|Content displayed on the left side of the badge label|
|rightSection|Content displayed on the right side of the badge label|

## Styles API

`Badge` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Badge styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Badge-root|Root element|
|section|.c-Badge-section|Left and right sections|
|label|.c-Badge-label|Badge children|

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
      <td rowspan="8">root</td>
      <td>--badge-bd</td>
      <td>Controls <code>border</code></td>
    </tr>
    <tr>
      <td>--badge-bg</td>
      <td>Controls <code>background</code></td>
    </tr>
    <tr>
      <td>--badge-color</td>
      <td>Controls text <code>color</code></td>
    </tr>
    <tr>
      <td>--badge-dot-color</td>
      <td>Controls dot <code>color</code>, only applicated when <code>variant="dot"</code></td>
    </tr>
    <tr>
      <td>--badge-fz</td>
      <td>Controls <code>font-size</code></td>
    </tr>
    <tr>
      <td>--badge-height</td>
      <td>Controls <code>height</code></td>
    </tr>
    <tr>
      <td>--badge-padding-x</td>
      <td>Controls horizontal <code>padding</code></td>
    </tr>
    <tr>
      <td>--badge-radius</td>
      <td>Controls <code>border-radius</code></td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|root|data-block|`fullWidth` prop is set|-|
|section|data-position|-|Section position: left or right|