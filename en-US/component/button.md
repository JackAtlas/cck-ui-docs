---
title: Button
lang: en-US
---

# Button

Button component to render button or link

## Variant

<script setup>
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, DownloadIcon, ImageIcon } from '@lucide/vue'
import { h, ref } from 'vue'
import { darken, defaultVariantColorsResolver, parseThemeColor, rgba } from '@cck-ui/core'

const downloadIcon = h(DownloadIcon, { size: 14 })

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

const count = ref(123)
const increment = () => {
  count.value += 1
}
const decrement = () => {
  count.value -= 1
}
</script>

<style module>
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--c-color-gray-3), var(--c-color-dark-4));
    background-color: transparent;
  }
}
</style>

<div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <c-button>Default</c-button>
    <c-button variant="filled">Filled</c-button>
    <c-button variant="light">Light</c-button>
    <c-button variant="outline">Outline</c-button>
    <c-button variant="dashed">Dashed</c-button>
    <c-button variant="subtle">Subtle</c-button>
    <c-button variant="transparent">Transparent</c-button>
    <c-button variant="white">White</c-button>
</div>

```vue
<template>
  <c-button>Default</c-button>
  <c-button variant="filled">Filled</c-button>
  <c-button variant="light">Light</c-button>
  <c-button variant="outline">Outline</c-button>
  <c-button variant="subtle">Subtle</c-button>
  <c-button variant="transparent">Transparent</c-button>
  <c-button variant="white">White</c-button>
</template>
```

## Color

Default theme includes several color presets. And custom color is acceptable.

### Presets:

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
  variant:
  <c-button variant="filled" color="dark">Dark</c-button>
  <c-button variant="filled" color="gray">Gray</c-button>
  <c-button variant="filled" color="red">Red</c-button>
  <c-button variant="filled" color="pink">Pink</c-button>
  <c-button variant="filled" color="grape">Grape</c-button>
  <c-button variant="filled" color="violet">Violet</c-button>
  <c-button variant="filled" color="indigo">Indigo</c-button>
  <c-button variant="filled" color="blue">Blue</c-button>
  <c-button variant="filled" color="cyan">Cyan</c-button>
  <c-button variant="filled" color="teal">Teal</c-button>
  <c-button variant="filled" color="green">Green</c-button>
  <c-button variant="filled" color="lime">Lime</c-button>
  <c-button variant="filled" color="yellow">Yellow</c-button>
  <c-button variant="filled" color="orange">Orange</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  light:
  <c-button variant="light" color="dark">Dark</c-button>
  <c-button variant="light" color="gray">Gray</c-button>
  <c-button variant="light" color="red">Red</c-button>
  <c-button variant="light" color="pink">Pink</c-button>
  <c-button variant="light" color="grape">Grape</c-button>
  <c-button variant="light" color="violet">Violet</c-button>
  <c-button variant="light" color="indigo">Indigo</c-button>
  <c-button variant="light" color="blue">Blue</c-button>
  <c-button variant="light" color="cyan">Cyan</c-button>
  <c-button variant="light" color="teal">Teal</c-button>
  <c-button variant="light" color="green">Green</c-button>
  <c-button variant="light" color="lime">Lime</c-button>
  <c-button variant="light" color="yellow">Yellow</c-button>
  <c-button variant="light" color="orange">Orange</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  outline:
  <c-button variant="outline" color="dark">Dark</c-button>
  <c-button variant="outline" color="gray">Gray</c-button>
  <c-button variant="outline" color="red">Red</c-button>
  <c-button variant="outline" color="pink">Pink</c-button>
  <c-button variant="outline" color="grape">Grape</c-button>
  <c-button variant="outline" color="violet">Violet</c-button>
  <c-button variant="outline" color="indigo">Indigo</c-button>
  <c-button variant="outline" color="blue">Blue</c-button>
  <c-button variant="outline" color="cyan">Cyan</c-button>
  <c-button variant="outline" color="teal">Teal</c-button>
  <c-button variant="outline" color="green">Green</c-button>
  <c-button variant="outline" color="lime">Lime</c-button>
  <c-button variant="outline" color="yellow">Yellow</c-button>
  <c-button variant="outline" color="orange">Orange</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  subtle:
  <c-button variant="subtle" color="dark">Dark</c-button>
  <c-button variant="subtle" color="gray">Gray</c-button>
  <c-button variant="subtle" color="red">Red</c-button>
  <c-button variant="subtle" color="pink">Pink</c-button>
  <c-button variant="subtle" color="grape">Grape</c-button>
  <c-button variant="subtle" color="violet">Violet</c-button>
  <c-button variant="subtle" color="indigo">Indigo</c-button>
  <c-button variant="subtle" color="blue">Blue</c-button>
  <c-button variant="subtle" color="cyan">Cyan</c-button>
  <c-button variant="subtle" color="teal">Teal</c-button>
  <c-button variant="subtle" color="green">Green</c-button>
  <c-button variant="subtle" color="lime">Lime</c-button>
  <c-button variant="subtle" color="yellow">Yellow</c-button>
  <c-button variant="subtle" color="orange">Orange</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  transparent:
  <c-button variant="transparent" color="dark">Dark</c-button>
  <c-button variant="transparent" color="gray">Gray</c-button>
  <c-button variant="transparent" color="red">Red</c-button>
  <c-button variant="transparent" color="pink">Pink</c-button>
  <c-button variant="transparent" color="grape">Grape</c-button>
  <c-button variant="transparent" color="violet">Violet</c-button>
  <c-button variant="transparent" color="indigo">Indigo</c-button>
  <c-button variant="transparent" color="blue">Blue</c-button>
  <c-button variant="transparent" color="cyan">Cyan</c-button>
  <c-button variant="transparent" color="teal">Teal</c-button>
  <c-button variant="transparent" color="green">Green</c-button>
  <c-button variant="transparent" color="lime">Lime</c-button>
  <c-button variant="transparent" color="yellow">Yellow</c-button>
  <c-button variant="transparent" color="orange">Orange</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  white:
  <c-button variant="white" color="dark">Dark</c-button>
  <c-button variant="white" color="gray">Gray</c-button>
  <c-button variant="white" color="red">Red</c-button>
  <c-button variant="white" color="pink">Pink</c-button>
  <c-button variant="white" color="grape">Grape</c-button>
  <c-button variant="white" color="violet">Violet</c-button>
  <c-button variant="white" color="indigo">Indigo</c-button>
  <c-button variant="white" color="blue">Blue</c-button>
  <c-button variant="white" color="cyan">Cyan</c-button>
  <c-button variant="white" color="teal">Teal</c-button>
  <c-button variant="white" color="green">Green</c-button>
  <c-button variant="white" color="lime">Lime</c-button>
  <c-button variant="white" color="yellow">Yellow</c-button>
  <c-button variant="white" color="orange">Orange</c-button>
</div>

## Custom color:

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  variant:
  <c-button variant="filled" color="skyblue">Custom</c-button>
  <c-button variant="filled" color="rgba(148, 22, 22, 1)">Custom</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  light:
  <c-button variant="light" color="skyblue">Custom</c-button>
  <c-button variant="light" color="rgba(148, 22, 22, 1)">Custom</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  outline:
  <c-button variant="outline" color="skyblue">Custom</c-button>
  <c-button variant="outline" color="rgba(148, 22, 22, 1)">Custom</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  subtle:
  <c-button variant="subtle" color="skyblue">Custom</c-button>
  <c-button variant="subtle" color="rgba(148, 22, 22, 1)">Custom</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  transparent:
  <c-button variant="transparent" color="skyblue">Custom</c-button>
  <c-button variant="transparent" color="rgba(148, 22, 22, 1)">Custom</c-button>
</div>

<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:12px;">
  white:
  <c-button variant="white" color="skyblue">Custom</c-button>
  <c-button variant="white" color="rgba(148, 22, 22, 1)">Custom</c-button>
</div>

```vue
<template>
  <!-- Preset color -->
  <c-button variant="filled" color="dark">Dark</c-button>
  <c-button variant="filled" color="gray">Gray</c-button>
  <!-- ... -->

  <!-- Custom color -->
  <c-button variant="filled" color="skyblue">Custom</c-button>
  <c-button variant="filled" color="rgba(148, 22, 22, 1)">Custom</c-button>
  <!-- ... -->
 </template>
```

## Full width

If the `fullWidth` props is set, the `Button` will take 100% of the parent width:

<div>
  <c-button full-width>Full width button</c-button>
</div>

```vue
<c-button full-width>Full width button</c-button>
```

## Left and right sections

`left-section` and `right-section` allow adding icons or any other element to the left and right sides of the button. When a section is added, padding on the corresponding side is reduced. Both slot and prop are acceptable.

<div style="display:flex;justify-content:center;gap:12px;">
  <c-button>
    <template #left-section>
      <ImageIcon size="14" />
    </template>
    Gallery
  </c-button>
  <c-button variant="filled" :right-section="downloadIcon">Download</c-button>
  <c-button variant="light">
    <template #left-section>
      <ImageIcon size="14" />
    </template>
    Visit gallery
    <template #right-section>
      <ChevronRightIcon size="14" />
    </template>
  </c-button>
</div>

```vue
<script setup>
import { ChevronRightIcon, DownloadIcon, ImageIcon } from '@lucide/vue'
import { h } from 'vue'

const downloadIcon = h(DownloadIcon, { size: 14 }) // or jsx
</script>

<template>
  <c-button>
    <template #left-section>
      <ImageIcon size="14" />
    </template>
    Gallery
  </c-button>

  <c-button :right-section="downloadIcon">Download</c-button>

  <c-button>
    <template #left-section>
      <ImageIcon size="14" />
    </template>
    Visit gallery
    <template #right-section>
      <ChevronRightIcon size="14" />
    </template>
  </c-button>
</template>
```

(**WIP**) Note that `left-section` and `right-section` are flipped in RTL mode (`left-section` is displayed on the right and `right-section` is displayed on the left).

## Sections position

The `justify` prop sets the `justify-content` of the `inner` element. You can use it to change the alignment of left and right sections. For example, to spread them across the button, set `justify="space-between"`.

If you need to align just one section to the side of the button, set `justify` to `space-between` and add an empty `<span />` to the opposite section.

<div style="display:flex;flex-direction:column;gap:12px;">
  <c-button justify="space-between" full-width>
    <template #left-section>
      <ImageIcon size="14" />
    </template>
    Button label
    <template #right-section>
      <ImageIcon size="14" />
    </template>
  </c-button>
  <c-button justify="space-between" full-width>
    <template #left-section>
      <ImageIcon size="14" />
    </template>
    Button label
  </c-button>
  <c-button justify="start" full-width>
    Button label
    <template #left-section>
      <ImageIcon size="14" />
    </template>
  </c-button>
  <c-button justify="end" full-width>
    Button label
    <template #right-section>
      <ImageIcon size="14" />
    </template>
  </c-button>
  <c-button justify="space-between" full-width>
    <template #left-section>
      <span></span>
    </template>
    Button label
    <template #right-section>
      <ImageIcon size="14" />
    </template>
  </c-button>
</div>

```vue
<template>
  <c-button justify="space-between" full-width>
    <template #left-section>
      <ImageIcon size="14" />
    </template>
    Button label
    <template #right-section>
      <ImageIcon size="14" />
    </template>
  </c-button>

  <c-button justify="space-between" full-width>
    <template #left-section>
      <ImageIcon size="14" />
    </template>
    Button label
  </c-button>

  <c-button justify="start" full-width>
    Button label
    <template #left-section>
      <ImageIcon size="14" />
    </template>
  </c-button>

  <c-button justify="end" full-width>
    Button label
    <template #right-section>
      <ImageIcon size="14" />
    </template>
  </c-button>

  <c-button justify="space-between" full-width>
    <template #left-section>
      <span></span>
    </template>
    Button label
    <template #right-section>
      <ImageIcon size="14" />
    </template>
  </c-button>
</template>
```

## Size

`Button` support `xs` - `xl` and `compact-xs` - `compact-xl` sizes. `compact` sizes have the same font size as `xs` - `xl` but with reduced padding and height.

<c-group>
  <c-button size="xs">Regular xs</c-button>
  <c-button size="sm">Regular sm</c-button>
  <c-button size="md">Regular md</c-button>
  <c-button size="lg">Regular lg</c-button>
  <c-button size="xl">Regular xl</c-button>
</c-group>
<c-group :mt="12">
  <c-button size="compact-xs">Compact xs</c-button>
  <c-button size="compact-sm">Compact sm</c-button>
  <c-button size="compact-md">Compact md</c-button>
  <c-button size="compact-lg">Compact lg</c-button>
  <c-button size="compact-xl">Compact xl</c-button>
</c-group>

```vue
<template>
  <c-group>
    <c-button size="xs">Regular xs</c-button>
    <c-button size="sm">Regular sm</c-button>
    <c-button size="md">Regular md</c-button>
    <c-button size="lg">Regular lg</c-button>
    <c-button size="xl">Regular xl</c-button>
  </c-group>
  <c-group :mt="12">
    <c-button size="compact-xs">Compact xs</c-button>
    <c-button size="compact-sm">Compact sm</c-button>
    <c-button size="compact-md">Compact md</c-button>
    <c-button size="compact-lg">Compact lg</c-button>
    <c-button size="compact-xl">Compact xl</c-button>
  </c-group>
</template>
```

## Gradient variant

When the `variant` prop is set to `gradient`, you can control the gradient with the `gradient` prop, which accepts an object with `form`,`to` and `deg` properties. If the `gradient` props is not set, `Button` will use `theme.defaultGradient` which can be configured on the theme object. The `gradient` prop is ignored when `variant` is not `gradient`.

(**WIP**) Note that `variant="gradient"` supports only linear gradients with two colors. If you need a more complex gradient, use the Styles API to modify `Button` styles.

<div style="display:flex;gap:12px;">
  <c-button variant="gradient">Gradient button</c-button>
  <c-button variant="gradient" :gradient="{from: 'yellow', to: 'green'}">Gradient button</c-button>
  <c-button variant="gradient" :gradient="{from: 'rgba(245, 56, 56, 1)', to: 'rgba(230, 106, 48, 1)', deg: 90}">Gradient button</c-button>
</div>

```vue
<c-button variant="gradient">Gradient button</c-button>
<c-button
  variant="gradient"
  :gradient="{ from: 'yellow', to: 'green' }"
>Gradient button</c-button>
<c-button
  variant="gradient"
  :gradient="{
    from: 'rgba(245, 56, 56, 1)',
    to: 'rgba(230, 106, 48, 1)',
    deg: 90
  }"
>Gradient button</c-button>
```

## Disabled state

To make a `Button` disabled, set the `disabled` prop. This will prevent any interactions with the button and add disabled styles. If you want the button to just look disabled but still be interactive, set the `data-disabled` prop instead. Note that disabled styles are the same for all variants.

<div style="display:flex;gap:12px;flex-wrap:wrap;">
  <c-button disabled>Disabled button</c-button>
</div>

### Disabled state when Button is link

The `<a />` element does not support the `disabled` attribute. To make a `Button` disabled when it is rendered as a link, set the `data-disabled` attribute instead and prevent default behavior in the `@click` event handler.

**Note**: The blue text color and underline you see here are styles injected by VitePress for all `<a>` tags. When using this button component in your own project, these styles won't appear unless you explicitly add them to your theme.

<div>
  <c-button tag="a" href="https://jackatlas.xyz" data-disabled @click="(event) => event.preventDefault()">Disabled button</c-button>
</div>

```vue
<c-button
  tag="a"
  href="https://jackatlas.xyz"
  data-disabled
  @click="(event) => event.preventDefault()"
>Disabled button</c-button>
```

## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]` selectors:

- `&:disabled` is used to style the button when the `disabled` prop is set and also when the button is disabled by the parent component (for example, when the `disabled` prop is set on a `<fieldset />` element which contains the `Button`).
- `&[data-disabled]` is used to style the button when it is not actually disabled but should look like it is (for example, `data-disabled` should be used if you need to use Tooltip with a disabled `Button` or when the `Button` is used as a link).

<c-button :className="$style.button" disabled>Disabled with styles</c-button>

```vue
<template>
  <c-button :className="$style.button" disabled>Disabled with styles</c-button>
</template>

<style module>
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--c-color-gray-3), var(--c-color-dark-4));
    background-color: transparent;
  }
}
</style>
```

## Disabled button with Tooltip (WIP)

The `onMouseLeave` event is not triggered when a `Button` is disabled, so if you need to use a Tooltip with a disabled `Button`, you need to set the `data-disabled` prop on the `Button` instead of `disabled`. Note that it is also required to change the `onClick` event library to `(event) => event.preventDefault()` as the `Button` is not actually disabled and will still trigger the `onClick` event.

## Loading state

When the `loading` prop is set, the `Button` will be disabled and a Loader with overlay will be rendered in the center of the button. Loader color depends on the `Button` variant.

<c-group>
  <c-button variant="filled" loading>Filled button</c-button>
  <c-button variant="light" loading>Light button</c-button>
  <c-button variant="outline" loading>Outline button</c-button>
</c-group>

```vue
<template>
  <c-group>
    <c-button loading variant="filled">Filled button</c-button>
    <c-button loading variant="light">Light button</c-button>
    <c-button loading variant="outline">Outline button</c-button>
  </c-group>
</template>
```

## Loader props

You can customize the Loader with the `loaderProps` prop, which accepts all props that the Loader component has.

<c-button loading :loader-props="{ type: 'dots' }">Loading button</c-button>

```vue
<template>
  <c-button loading :loader-props="{ type: 'dots' }">Loading button</c-button>
</template>
```

## Styles API (WIP)

## Custom variants (WIP)

To add new `Button` variants, use the data-variant attribute. Usually the new variants are added to the theme, this way they are available in all `c-button` components in your application.

## Custom variant colors

You can customize colors for `c-button` and other component variants by adding variantColorResolver to your theme.

<cck-config-provider :theme="{ variantColorResolver }">
  <c-group>
    <c-button color="lime.4" variant="filled">Lime filled button</c-button>
    <c-button color="orange" variant="light">Orange light button</c-button>
    <c-button variant="danger">Danger button</c-button>
  </c-group>
</cck-config-provider>

```vue
<template>
  <cck-config-provider :theme="{ variantColorResolver }">
    <c-group>
      <c-button color="lime.4" variant="filled">Lime filled button</c-button>
      <c-button color="orange" variant="light">Orange light button</c-button>
      <c-button variant="danger">Danger button</c-button>
    </c-group>
  </cck-config-provider>
</template>

<script setup>
import { darken, defaultVariantColorsResolver, parseThemeColor, rgba } from '@cck-ui/core'

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

## Auto contrast

`Button` supports the `auto-contrast` prop and theme.autoContrast. If `autoContrast` is set either on `Button` or on the theme, the content color will be ajusted to have sufficient contrast with the value specified in the `color` prop.

Note that the `auto-contrast` feature works only if you use the `color` prop to change the background color. `auto-contrast` works only with the `filled` variant.

<c-group>
  <c-button color="lime.4" variant="filled">Default</c-button>
  <c-button color="lime.4" variant="filled" auto-contrast>Auto contrast</c-button>
</c-group>

```vue
<template>
  <c-group>
    <c-button color="lime.4" variant="filled">Default</c-button>
    <c-button color="lime.4" variant="filled" auto-contrast>Auto contrast</c-button>
  </c-group>
</template>
```

## Button group

<div style="display:flex; flex-direction:column; align-items: center; gap: 12px;">
  <c-button-group>
    <c-button>Left</c-button>
    <c-button>Center</c-button>
    <c-button>Right</c-button>
  </c-button-group>

  <c-button-group orientation="vertical">
    <c-button>Top</c-button>
    <c-button>Middle</c-button>
    <c-button>Bottom</c-button>
  </c-button-group>
</div>

```vue
<template>
  <c-button-group>
    <c-button>Left</c-button>
    <c-button>Center</c-button>
    <c-button>Right</c-button>
  </c-button-group>

  <c-button-group orientation="vertical">
    <c-button>Top</c-button>
    <c-button>Middle</c-button>
    <c-button>Bottom</c-button>
  </c-button-group>
</template>
```

Note that you must not wrap child `c-button` components with any additional elements.

```vue
<template>
  <c-button-group>
    <div>
      <c-button>This will not work</c-button>
    </div>
    <c-button>Buttons will have incorrect borders</c-button>
  </c-button-group>
</template>
```

## Button group section

Use `c-button-group-section` component to render sections that are not buttons inside `c-button-group`

<c-button-group>
  <c-button @click="decrement">
    <chevron-down-icon color="var(--c-color-red-text)" />
  </c-button>
  <c-button-group-section>{{ count }}</c-button-group-section>
  <c-button @click="increment">
    <chevron-up-icon color="var(--c-color-teal-text)" />
  </c-button>
</c-button-group>

```vue
<template>
  <c-button-group>
    <c-button @click="decrement">
      <chevron-down-icon color="var(--c-color-red-text)" />
    </c-button>
    <c-button-group-section>{{ count }}</c-button-group-section>
    <c-button @click="increment">
      <chevron-up-icon color="var(--c-color-teal-text)" />
    </c-button>
  </c-button-group>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(123)
const increment = () => {
  count.value += 1
}
const decrement = () => {
  count.value -= 1
}
</script>
```

## Polymorphic

## Get element ref

```vue
<template>
  <c-button ref="buttonRef" variant="filled" size="lg">点击我</c-button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const buttonRef = ref(null)

onMounted(() => {
  console.log(buttonRef.value.ref)
})
</script>
```

## API

### Button Props

```typescript
type ButtonVariant =
  | 'default'
  | 'filled'
  | 'light'
  | 'outline'
  | 'dashed'
  | 'transparent'
  | 'white'
  | 'subtle'
  | 'gradient'
```

| Name         | Type                    | Description                                                                                         | Default value           |
| ------------ | ----------------------- | --------------------------------------------------------------------------------------------------- | ----------------------- |
| autoContrast | boolean                 | If set, adjusts text color based on background color for filled variant                             |                         |
| color        | CColor                  | Key of `theme.colors` or any valid CSS color                                                        | `theme.primaryColor`    |
| disabled     | boolean                 | Sets `disabled` attribute, applies disabled styles                                                  |                         |
| fullWidth    | boolean                 | Sets `width: 100%`                                                                                  | `false`                 |
| gradient     | CGradient               | Gradient configuration used for `variant="gradient"`                                                | `theme.defaultGradient` |
| justify      | JustifyContent          | Sets `justify-content` of `inner` element, can be used to change distribution of sections and label | `'center'`              |
| leftSection  | vue.Component           | Content on the left side of the button label                                                        |                         |
| loaderProps  | LoaderProps             | Props added to the `loader` component (only visible when `loading` prop is set)                     |                         |
| loading      | boolean                 | If set, the `Loader` component is displayed over the button                                         |                         |
| radius       | CRadius\|number         | Key of `theme.radius` or any valid CSS value to set `border-radius`                                 | `theme.defaultRadius`   |
| rightSection | vue.Component           | Content on the right side of the button label                                                       |                         |
| size         | CSize                   | Controls button `height`, `font-size` and horizontal `padding`                                      | `'sm'`                  |
| tag          | string \| vue.Component | Custom element tag                                                                                  | `'button'`              |
| variant      | ButtonVariant           | Variant of button                                                                                   | `'default'`             |

### Button Slots

| Name          | Description                                   |
| ------------- | --------------------------------------------- |
| default       | Button content                                |
| left-section  | Content on the left side of the button label  |
| right-section | Content on the right side of the button label |

### Button Expose

| Name     | Type                                  | Description                |
| -------- | ------------------------------------- | -------------------------- |
| disabled | boolean                               | Whether button is disabled |
| ref      | Ref<HTMLButtonElement /\>             | `<button />` html element  |
| size     | CSize \| `compact-${CSize}` \| string | Button size                |
| variant  | ButtonVariant                         | Variant of button          |

### Button Group Props

| Name        | Type                         | Description                                                                    | Default value  |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------ | -------------- |
| borderWidth | string \| number             | `border-width` of the child `Button` components. Numbers are converted to rem. | `1`            |
| orientation | `"horizontal" \| "vertical"` | Orientation of the group                                                       | `'horizontal'` |

### Button Group Section Props

| Name         | Type              | Description                                                               | Default value           |
| ------------ | ----------------- | ------------------------------------------------------------------------- | ----------------------- |
| autoContrast | boolean           | If set, adjusts text color based on background color for `filled` variant |                         |
| gradient     | CGradient         | Gradient configuration used when `variant="gradient"`                     | `theme.defaultGradient` |
| radius       | CRadius \| number | Key of `theme.radius` or any valid CSS value to set `border-radius`       | `theme.defaultRadius`   |
| size         | ButtonSize        | Controls section `height`, `font-size` and horitontal `padding`           | `'sm'`                  |
