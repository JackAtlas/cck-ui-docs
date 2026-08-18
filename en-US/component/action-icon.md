---
title: ActionIcon
lang: en-US
---

# ActionIcon

Icon button

## Usage

<c-action-icon aria-label="Settings">
  <sliders-horizontal-icon :style="{ width: '70%', height: '70%' }" />
</c-action-icon>

```vue
<template>
  <c-action-icon aria-label="Settings">
    <sliders-horizontal-icon :style="{ width: '70%', height: '70%' }" />
  </c-action-icon>
</template>

<script setup lang="ts">
import { SlidersHorizontalIcon } from '@lucide/vue'
</script>
```

## Gradient variant

When the `variant` prop is set to `gradient`, you can control the gradient with the `gradient` prop, which accepts an object with `from`, `to` and `deg` properties. If the `gradient` prop is not set, `ActionIcon` will use `theme.defaultGradient` which can be configured on the [theme object](../theming/theme-object). The `gradient` prop is ignored when `variant` is not `gradient`.

Note that `variant="gradient"` supports only linear gradients with two colors. If you need a more complex gradient, use the [Styles API](../styles/styles-api) to modify `ActionIcon` styles.

<c-action-icon aria-label="Gradient action icon" size="xl" variant="gradient" :gradient="{ from: 'blue', to: 'cyan', deg: 90 }">
  <heart-icon :style="{ width: '50%', height: '50%' }" />
</c-action-icon>

```vue
<template>
  <c-action-icon
    aria-label="Gradient action icon"
    size="xl" variant="gradient"
    :gradient="{ from: 'blue', to: 'cyan', deg: 90 }"
  >
    <heart-icon :style="{ width: '50%', height: '50%' }" />
  </c-action-icon>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'
</script>
```

## Size

You can use any valid CSS value in the `size` prop, which is used to set the `width`, `min-width`, `min-height` and `height` properties. Note that the `size` prop does not control the child icon size - you need to set it manually on the icon component. When `size` is a number, the value is treated as `px` units and converted to [rem](../styles/rem) units.

<c-action-icon aria-label="Action icon with size as a number" :size="42">
  <heart-icon :size="24" />
</c-action-icon>

```vue
<template>
  <c-action-icon aria-label="Action icon with size as a number" :size="42">
    <heart-icon :size="24" />
  </c-action-icon>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'
</script>
```

## Disabled state

To make `ActionIcon` disabled, set the `disabled` prop. This will prevent any interactions with the button and add disabled styles. If you want the button to just look disabled but still be interactive, set the `data-disabled` prop instead. Note that disabled styles are the same for all variants.

<c-group>
  <c-action-icon size="xl" disabled aria-label="Disabled and not interactive">
    <heart-icon />
  </c-action-icon>
  <c-action-icon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
    <heart-icon />
  </c-action-icon>
</c-group>

```vue
<template>
  <c-action-icon size="xl" disabled aria-label="Disabled and not interactive">
    <heart-icon />
  </c-action-icon>
  <c-action-icon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
    <heart-icon />
  </c-action-icon>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'
</script>
```

## Disabled state when ActionIcon is link

The `<a />` element does not support the `disabled` attribute. To make `ActionIcon` disabled when it is rendered as a link, set the `data-disabled` attribute instead and prevent default behavior in the `click` event handler.

**Note**: The blue text color you see here is style injected by VitePress for all `<a />` tags. When using this ActionIcon component in your own project, these style won't appear unless you explicitly add them to your theme.

<c-action-icon aria-label="Open in a new tab" data-disabled href="https://cck-ui.jackatlas.xyz" size="xl" tag="a">
  <square-arrow-out-up-right-icon></square-arrow-out-up-right-icon>
</c-action-icon>

```vue
<template>
  <c-action-icon
    aria-label="Open in a new tab"
    data-disabled
    href="https://cck-ui.jackatlas.xyz"
    size="xl"
    tag="a"
  >
    <square-arrow-out-up-right-icon></square-arrow-out-up-right-icon>
  </c-action-icon>
</template>

<script setup lang="ts">
import { SquareArrowOutUpRightIcon } from '@lucide/vue'
</script>
```

## Custom disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]` selectors:

- `&:disabled` is used to style the button when the `disabled` prop is set and also when the button is disabled by the parent component (for example, when the `disabled` prop is set on a `<fieldset />` element which contains `ActionIcon`).
- `&[data-disabled]` is used to style the button when it is not actually disabled but should look like it is (for example, `data-disabled` should be used if you need to use Tooltip(WIP) with a disabled `ActionIcon` or when `ActionIcon` is used as a link)

<c-action-icon aria-label="Disabled with styles" disabled size="xl" :className="cdsClasses.button">
  <heart-icon />
</c-action-icon>

```vue
<template>
  <c-action-icon aria-label="Disabled with styles" disabled size="xl" :className="classes.button">
    <heart-icon />
  </c-action-icon>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'
import classes from './demo.module.css'
</script>
```

```scss
// demo.module.css
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--c-color-gray-3), var(--c-color-dark-4));
    background-color: transparent;
  }
}
```

## Disabled button with Tooltip (WIP)

## Loading state

When the `loading` prop is set, `ActionIcon` will be disabled and a [Loader](./loader) with overlay will be rendered in the center of the button. The [Loader](./loader) color depends on the `ActionIcon` variant.

<c-group>
  <c-action-icon aria-label="Like" variant="filled" :loading="loading">
    <heart-icon :size="18" />
  </c-action-icon>
  <c-action-icon aria-label="Like" variant="light" :loading="loading">
    <heart-icon :size="18" />
  </c-action-icon>
  <c-action-icon aria-label="Like" variant="outline" :loading="loading">
    <heart-icon :size="18" />
  </c-action-icon>
  <c-button @click="toggle">Toggle loading</c-button>
</c-group>

```vue
<template>
  <c-action-icon aria-label="Like" variant="filled" :loading="loading">
    <heart-icon :size="18" />
  </c-action-icon>
  <c-action-icon aria-label="Like" variant="light" :loading="loading">
    <heart-icon :size="18" />
  </c-action-icon>
  <c-action-icon aria-label="Like" variant="outline" :loading="loading">
    <heart-icon :size="18" />
  </c-action-icon>
  <c-button @click="toggle">Toggle loading</c-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HeartIcon } from '@lucide/vue'
const loading = ref(true)

function toggle() {
  loading.value = !loading.value
}
</script>
```

## Loader props

You can customize the [Loader](./loader) with the `loaderProps` prop, which accepts all props that the [Loader](./loader) component has:

<c-action-icon aria-label="Loading..." loading variant="filled" :loaderProps="{ type: 'dots' }">
  <heart-icon :size="18" />
</c-action-icon>

```vue
<template>
  <c-action-icon aria-label="Loading..." loading variant="filled" :loaderProps="{ type: 'dots' }">
    <heart-icon :size="18" />
  </c-action-icon>
</template>
```

## Add custom variants

To add new `ActionIcon` variants, use the data-variant attribute. Usually new variants are added to the [theme](../theming/theme-object). This way they are available in all `ActionIcon` components in your application.

<cck-config-provider :theme="customVariantsTheme" :with-css-variables="true" :with-static-classes="true" :with-global-classes="true">
  <c-group justify="center">
    <c-action-icon aria-label="Danger variant" size="xl" variant="danger">
      <heart-icon />
    </c-action-icon>
    <c-action-icon aria-label="Primary variant" size="xl" variant="primary">
      <heart-icon />
    </c-action-icon>
  </c-group>
</cck-config-provider>

```vue
<template>
  <cck-config-provider :theme="customVariantsTheme" :with-css-variables="true" :with-static-classes="true" :with-global-classes="true">
    <c-group justify="center">
      <c-action-icon aria-label="Danger variant" size="xl" variant="danger">
        <heart-icon />
      </c-action-icon>
      <c-action-icon aria-label="Primary variant" size="xl" variant="primary">
        <heart-icon />
      </c-action-icon>
    </c-group>
  </cck-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HeartIcon } from '@lucide/vue'
import { createTheme, CActionIcon, CckConfigProvider } from '@cck-ui/core'
import classes from './demo.module.css'

const customVariantsTheme = createTheme({
  components: {
    ActionIcon: CActionIcon.extend({
      classNames: classes
    })
  }
})
</script>
```

```scss
.root {
  &[data-variant='danger'] {
    background-color: var(--c-color-red-9);
    color: var(--c-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--c-color-white);
  }
}
```

## Customize variants colors

You can customize colors for `ActionIcon` and other components variants by adding [variantColorResolver](../theming/colors) to your theme.

<cck-config-provider :theme="{ variantColorResolver }" :with-css-variables="true" :with-static-classes="true" :with-global-classes="true">
  <c-group>
    <c-action-icon aria-label="Photo" color="lime.4" size="lg" variant="filled">
      <image-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="FingerprintIcon" color="orange" size="lg" variant="light">
      <fingerprint-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Error 404" size="lg" variant="danger">
      <triangle-alert-icon :size="20" />
    </c-action-icon>
  </c-group>
</cck-config-provider>

```vue
<template>
  <cck-config-provider :theme="{ variantColorResolver }" :with-css-variables="true" :with-static-classes="true" :with-global-classes="true">
    <c-group>
      <c-action-icon aria-label="Photo" color="lime.4" size="lg" variant="filled">
        <image-icon :size="20" />
      </c-action-icon>
      <c-action-icon aria-label="FingerprintIcon" color="orange" size="lg" variant="light">
        <fingerprint-icon :size="20" />
      </c-action-icon>
      <c-action-icon aria-label="Error 404" size="lg" variant="danger">
        <triangle-alert-icon :size="20" />
      </c-action-icon>
    </c-group>
  </cck-config-provider>
</template>

<script setup lang="ts">
import { FingerprintIcon, ImageIcon, TriangleAlertIcon } from '@lucide/vue'
import { CckConfigProvider, darken, defaultVariantColorsResolver, parseThemeColor, rgba, type VariantColorsResolver } from '@cck-ui/core'

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme
  })

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--c-color-black)',
      hoverColor: 'var(--c-color-black)'
    }
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1)
    }
  }

  // Add new variants support
  if (input.variant = 'danger') {
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

`ActionIcon` supports the `autoContrast` prop and [theme.autoContrast](../theming/theme-object). If `autoContrast` is set either on `ActionIcon` or on the theme, the content color will be adjusted to have sufficient contrast with the value specified in the `color` prop.

Note that the `autoContrast` feature works only if you use the `color` prop to change the background color. `autoContrast` works only with the `filled` variant.

<c-group>
  <c-action-icon aria-label="default action icon" size="lg" color="lime.4" variant="filled">
    <fingerprint-icon />
  </c-action-icon>
  <c-action-icon aria-label="default action icon" auto-contrast size="lg" color="lime.4" variant="filled">
    <fingerprint-icon />
  </c-action-icon>
</c-group>

```vue
<template>
  <c-action-icon aria-label="default action icon" size="lg" color="lime.4" variant="filled">
    <fingerprint-icon />
  </c-action-icon>
  <c-action-icon aria-label="default action icon" auto-contrast size="lg" color="lime.4" variant="filled">
    <fingerprint-icon />
  </c-action-icon>
</template>

<script setup lang="ts">
import { FingerprintIcon } from '@lucide/vue'
</script>
```

## Add custom sizes

`ActionIcon` sizes are defined by `--ai-size-{x}` CSS variables. The easiest way to add new sizes is to define additional `--ai-size-{x}` variables on the `root` element:

<cck-config-provider :theme="customSizesTheme" :with-css-variables="true" :with-static-classes="true" :with-global-classes="true">
  <c-group>
    <c-action-icon aria-label="Custom xxs size" size="xxs" variant="filled">
      <heart-icon :style="{ width: '70%', height: '70%' }" />
    </c-action-icon>
    <c-action-icon aria-label="Custom xxl size" size="xxl" variant="filled">
      <heart-icon :style="{ width: '70%', height: '70%' }" />
    </c-action-icon>
  </c-group>
</cck-config-provider>

```vue
<template>
  <cck-config-provider :theme="customSizesTheme" :with-css-variables="true" :with-static-classes="true" :with-global-classes="true">
    <c-group>
      <c-action-icon aria-label="Custom xxs size" size="xxs" variant="filled">
        <heart-icon :style="{ width: '70%', height: '70%' }" />
      </c-action-icon>
      <c-action-icon aria-label="Custom xxl size" size="xxl" variant="filled">
        <heart-icon :style="{ width: '70%', height: '70%' }" />
      </c-action-icon>
    </c-group>
  </cck-config-provider>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'
import { createTheme, CActionIcon, CckConfigProvider } from '@cck-ui/core'
import classes from './demo.module.css'

const customSizesTheme = createTheme({
  components: {
    ActionIcon: CActionIcon.extend({
      classNames: classes
    })
  }
})
</script>
```

```scss
// demo.module.css
.root {
  --ai-size-xxs: 16px;
  --ai-size-xxl: 50px;
}
```

## ActionIconGroup

<c-stack>
  <c-action-icon-group>
    <c-action-icon aria-label="Gallery" size="lg">
      <image-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Settings" size="lg">
      <settings-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Likes" size="lg">
      <heart-icon :size="20" />
    </c-action-icon>
  </c-action-icon-group>

  <c-action-icon-group orientation="vertical">
    <c-action-icon aria-label="Gallery" size="lg">
      <image-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Settings" size="lg">
      <settings-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Likes" size="lg">
      <heart-icon :size="20" />
    </c-action-icon>
  </c-action-icon-group>
</c-stack>

```vue
<template>
  <c-action-icon-group>
    <c-action-icon aria-label="Gallery" size="lg">
      <image-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Settings" size="lg">
      <settings-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Likes" size="lg">
      <heart-icon :size="20" />
    </c-action-icon>
  </c-action-icon-group>

  <c-action-icon-group orientation="vertical">
    <c-action-icon aria-label="Gallery" size="lg">
      <image-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Settings" size="lg">
      <settings-icon :size="20" />
    </c-action-icon>
    <c-action-icon aria-label="Likes" size="lg">
      <heart-icon :size="20" />
    </c-action-icon>
  </c-action-icon-group>
</template>
```

`ActionIconGroup` renders with `role="group"`. When the group represents a meaningful set of actions, give it an accessible name with `aria-label` (or `aria-labelledby`) so screen readers can announce its purpose:

```vue
<template>
  <c-action-icon-group aria-label="Text formatting">
    <!-- ActionIcon components -->
  </c-action-icon-group>
</template>
```

Note that you must not wrap child `ActionIcon` components with any additional elements:

```vue
<!-- Will not work correctly -->
<template>
  <c-action-icon-group>
    <div>
      <c-action-icon aria-label="Gallery" size="lg">
        <image-icon :size="20" />
      </c-action-icon>
    </div>
    <c-action-icon aria-label="Settings" size="lg">
      <settings-icon :size="20" /> 
    </c-action-icon>
  </c-action-icon-group>
</template>
```

## ActionIconGroupSection

Use the `ActionIconGroupSection` component to render sections that are not `ActionIcon` inside `ActionIconGroup`:

<c-action-icon-group>
  <c-action-icon aria-label="Decrement value" size="lg" @click="decrement">
    <chevron-down-icon color="var(--c-color-red-text)" />
  </c-action-icon>
  <c-action-icon-group-section size="lg">{{ value }}</c-action-icon-group-section>
  <c-action-icon aria-label="Increment value" size="lg" @click="increment">
    <chevron-up-icon color="var(--c-color-teal-text)" />
  </c-action-icon>
</c-action-icon-group>

```vue
<template>
  <c-action-icon-group>
    <c-action-icon aria-label="Decrement value" size="lg" @click="decrement">
      <chevron-down-icon color="var(--c-color-red-text)" />
    </c-action-icon>
    <c-action-icon-group-section size="lg">{{ value }}</c-action-icon-group-section>
    <c-action-icon aria-label="Increment value" size="lg" @click="increment">
      <chevron-up-icon color="var(--c-color-teal-text)" />
    </c-action-icon>
  </c-action-icon-group>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from '@lucide/vue'
</script>
```

## Polymorphic component

`ActionIcon` is a [polymorphic component](../styles/polymorphic) - its default root element is `button`, but it can be changed to any other element or component with the `component` prop:

```vue
<template>
  <c-action-icon tag="a" />
</template>
```

## Accessiblility

To make `ActionIcon` accessible for screen readers, you need to set `aria-label`:

```vue
<template>
  <c-action-icon aria-label="Like post">
    <heart-icon />
  </c-action-icon>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'
</script>
```

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon, ChevronUpIcon, FingerprintIcon, HeartIcon, ImageIcon, SettingsIcon, SlidersHorizontalIcon, SquareArrowOutUpRightIcon, TriangleAlertIcon } from '@lucide/vue'
import { createTheme, CActionIcon, CckConfigProvider, darken, defaultVariantColorsResolver, parseThemeColor, rgba, type VariantColorsResolver } from '@cck-ui/core'
import cdsClasses from './_styles/action-icon-cds.module.css'
import csClasses from './_styles/action-icon-cs.module.css'
import cvClasses from './_styles/action-icon-cv.module.css'

const loading = ref(true)

function toggle() {
  loading.value = !loading.value
}

const value = ref(135)

function decrement() {
  value.value -= 1
}

function increment() {
  value.value += 1
}

const customVariantsTheme = createTheme({
  components: {
    ActionIcon: CActionIcon.extend({
      classNames: cvClasses
    })
  }
})

const customSizesTheme = createTheme({
  components: {
    ActionIcon: CActionIcon.extend({
      classNames: csClasses
    })
  }
})

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme
  })

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--c-color-black)',
      hoverColor: 'var(--c-color-black)'
    }
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1)
    }
  }

  // Add new variants support
  if (input.variant = 'danger') {
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