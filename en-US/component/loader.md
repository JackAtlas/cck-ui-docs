---
title: Loader
lang: en-US
---

# Loader

Indicate loading state

## Usage

The `loader` component supports 3 types of loaders by default: `oval`, `bars`, and `dots`. All loaders are animated with CSS for better performance.

<div style="display: flex; gap: 12px">
  <c-loader></c-loader>
  <c-loader type="bars"></c-loader>
  <c-loader type="dots"></c-loader>
</div>

```vue
<div style="display: flex; gap: 12px">
  <c-loader></c-loader>
  <c-loader type="bars"></c-loader>
  <c-loader type="dots"></c-loader>
</div>
```

## Color

Default theme includes several color presets. And custom color is supported.

<div style="display: flex; gap: 12px">
  <c-loader></c-loader>
  <c-loader color="gray"></c-loader>
  <c-loader color="red"></c-loader>
  <c-loader color="pink"></c-loader>
  <c-loader color="grape"></c-loader>
  <c-loader color="violet"></c-loader>
  <c-loader color="indigo"></c-loader>
  <c-loader color="cyan"></c-loader>
  <c-loader color="teal"></c-loader>
  <c-loader color="green"></c-loader>
  <c-loader color="lime"></c-loader>
  <c-loader color="yellow"></c-loader>
  <c-loader color="orange"></c-loader>
  <c-loader color="rgb(123, 21, 98)"></c-loader>
</div>

```vue
<div style="display: flex; gap: 12px">
  <c-loader></c-loader>
  <c-loader color="gray"></c-loader>
  <c-loader color="red"></c-loader>
  <c-loader color="pink"></c-loader>
  <c-loader color="grape"></c-loader>
  <c-loader color="violet"></c-loader>
  <c-loader color="indigo"></c-loader>
  <c-loader color="cyan"></c-loader>
  <c-loader color="teal"></c-loader>
  <c-loader color="green"></c-loader>
  <c-loader color="lime"></c-loader>
  <c-loader color="yellow"></c-loader>
  <c-loader color="orange"></c-loader>
  <c-loader color="rgb(123, 21, 98)"></c-loader>
</div>
```

## Size prop

Preset sizes from `xs` to `xl`. Default size is `md`.

<div style="display: flex; gap: 12px">
  <c-loader size="xs"></c-loader>
  <c-loader size="sm"></c-loader>
  <c-loader size="md"></c-loader>
  <c-loader size="lg"></c-loader>
  <c-loader size="xl"></c-loader>
</div>

```vue
<div style="display: flex; gap: 12px">
  <c-loader size="xs"></c-loader>
  <c-loader size="sm"></c-loader>
  <c-loader size="md"></c-loader>
  <c-loader size="lg"></c-loader>
  <c-loader size="xl"></c-loader>
</div>
```

Also, you can pass any valid CSS values or numbers to the `size` prop. Numbers are treated as px, but converted to rem. For example, `size="32"` will produce the `--loader-size: 2rem` CSS variable.

<div style="display: flex; gap: 12px">
  <c-loader size="32"></c-loader>
  <c-loader size="3em"></c-loader>
</div>

```vue
<div style="display: flex; gap: 12px">
  <c-loader size="32"></c-loader>
  <c-loader size="3em"></c-loader>
</div>
```

## Adding custom loaders

The `Loader` component is used in other components. You can change the loader type with default props by setting `type`. You can also add a custom CSS or SVG loader with the `loaders` default prop.

### Custom CSS only loader

Note that in order for the `size` and `color` props to work with custom loaders, you need to use the `--loader-size` and `--loader-color` CSS variables in your loader styles.

<div>
  <c-loader
    type="custom"
    :loaders="{ ...CDefaultLoaders, custom: CustomSpanLoader }"
  ></c-loader>
</div>

```vue
<template>
  <div>
    <c-loader
      type="custom"
      :loaders="{ ...CDefaultLoaders, custom: CustomSpanLoader }"
    ></c-loader>
  </div>
</template>

<script setup lang="ts">
import { CDefaultLoaders } from 'cck-ui'
import CustomSpanLoader from './custom-span-loader.vue'
</script>
```

```vue
<!-- custom-span-loader.vue -->
<template>
  <span class="loader" v-bind="$attrs" :class="loaderClass"></span>
</template>

<script setup lang="ts">
import { useNamespace } from '@cck-ui/hooks'

const ns = useNamespace('loader')
const loaderClass = ns.e('root')
</script>

<style scoped>
.loader {
  display: inline-block;
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: var(--loader-size);
  background: var(--loader-color);
  animation: loader-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes loader-animation {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
}
</style>
```

### Custom SVG loader

It is recommended to use CSS-only loaders, as SVG-based animations may have the following issues:

- Hight CPU usage - the loader may look glitchy on low-end devices
- Loader animation may not start playing until JS is loaded - users may see a static loader

In your SVG loader, you need to use the `--loader-size` and `--loader-color` variables the same way as in CSS-only custom loaders in order for the `size` and `color` props to work. Usually, you would need to set `width` and `height` to `var(--loader-size)` and `fill / stroke` to `var(--loader-color)`.

<div>
  <c-loader
    type="custom"
    :loaders="{ ...CDefaultLoaders, custom: CustomSvgLoader }"
  ></c-loader>
</div>

```vue
<template>
  <div>
    <c-loader
      type="custom"
      :loaders="{ ...CDefaultLoaders, custom: CustomSvgLoader }"
    ></c-loader>
  </div>
</template>

<script setup lang="ts">
import { CDefaultLoaders } from 'cck-ui'
import CustomSvgLoader from './custom-svg-loader.vue'
</script>
```

```vue
<!-- custom-svg-loader.vue -->
<template>
  <svg
    class="loader"
    v-bind="$attrs"
    :class="loaderClass"
    :style="{
      width: 'var(--loader-size)',
      height: 'var(--loader-size)',
      stroke: 'var(--loader-color)'
    }"
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g
      fill="none"
      fillRule="evenodd"
      transform="translate(1 1)"
      strokeWidth="2"
    >
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { useNamespace } from '@cck-ui/hooks'

const ns = useNamespace('loader')
const loaderClass = ns.e('root')
</script>
```

<script setup lang="ts">
import { CDefaultLoaders } from 'cck-ui'
import CustomSpanLoader from '../../examples/loader/custom-span-loader.vue'
import CustomSvgLoader from '../../examples/loader/custom-svg-loader.vue'
</script>
