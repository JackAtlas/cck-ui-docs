---
title: Marquee
lang: en-US
---

# Marquee

Create continuous scrolling animation for content

## Usage

`Marquee` component creates a continuous scrolling animation for its children. It is commonly used for displaying logos, testimonials, or any repeating content.

<c-marquee gap="lg">
  <heart-icon v-for="color in colors" :color="color" :key="color" />
</c-marquee>

```vue
<template>
  <c-marquee gap="lg">
    <heart-icon v-for="color in colors" :color="color" :key="color" />
  </c-marquee>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'

const colors = ['blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange', 'red']
</script>
```

## Pause on hover

Set `pauseOnHover` prop to pause the animation when the user hovers over the component:

<c-marquee gap="lg" pause-on-hover>
  <heart-icon v-for="color in colors" :color="color" :key="color" />
</c-marquee>

```vue
<template>
  <c-marquee gap="lg" pause-on-hover>
    <heart-icon v-for="color in colors" :color="color" :key="color" />
  </c-marquee>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'

const colors = ['blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange', 'red']
</script>
```

## Vertical orientation

Set `orientation="vertical"` to scroll content vertically. Note that you need to set a fixed height on the container for vertical scrolling:

<c-marquee orientation="vertical" :h="300">
  <heart-icon v-for="color in colors" :color="color" :key="color" />
</c-marquee>

```vue
<template>
  <c-marquee orientation="vertical" :h="300">
    <heart-icon v-for="color in colors" :color="color" :key="color" />
  </c-marquee>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'

const colors = ['blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange', 'red']
</script>
```

## Multiple rows

You can combine multiple `Marquee` components with different directions to create more complex layouts:

<c-marquee>
  <heart-icon v-for="color in colors" :color="color" :key="color" />
</c-marquee>
<c-marquee reverse>
  <heart-icon v-for="color in colors" :color="color" :key="color" />
</c-marquee>

```vue
<template>
  <c-marquee>
    <heart-icon v-for="color in colors" :color="color" :key="color" />
  </c-marquee>
  <c-marquee reverse>
    <heart-icon v-for="color in colors" :color="color" :key="color" />
  </c-marquee>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'

const colors = ['blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange', 'red']
</script>
```

## Fade edges

By default, `Marquee` displays gradient fade on edges to create a smooth transition effect. You can customize the fade using the following props:

- `fadeEdges` - enables/disables fade gradient (default: `true`)
- `fadeEdgeColor` - color of the fade gradient (default: `var(--c-color-body)`)
- `fadeEdgeSize` - size of the fade area (default: `5%`)

<c-stack>
  <div>
    <c-text mb="xs" size="sm">Default fade (5%)</c-text>
    <c-marquee>
      <heart-icon v-for="color in colors" :color="color" :key="color" />
    </c-marquee>
  </div>

  <div>
    <c-text mb="xs" size="sm">Larger fade (15%)</c-text>
    <c-marquee fade-edge-size="15%">
      <heart-icon v-for="color in colors" :color="color" :key="color" />
    </c-marquee>
  </div>

  <div>
    <c-text mb="xs" size="sm">Custom fade color</c-text>
    <c-marquee fade-edge-color="var(--c-color-blue-light)">
      <heart-icon v-for="color in colors" :color="color" :key="color" />
    </c-marquee>
  </div>

  <div>
    <c-text mb="xs" size="sm">No fade</c-text>
    <c-marquee :fade-edges="false">
      <heart-icon v-for="color in colors" :color="color" :key="color" />
    </c-marquee>
  </div>
</c-stack>

```vue
<template>
  <c-stack>
    <div>
      <c-text mb="xs" size="sm">Default fade (5%)</c-text>
      <c-marquee>
        <heart-icon v-for="color in colors" :color="color" :key="color" />
      </c-marquee>
    </div>

    <div>
      <c-text mb="xs" size="sm">Larger fade (15%)</c-text>
      <c-marquee fade-edge-size="15%">
        <heart-icon v-for="color in colors" :color="color" :key="color" />
      </c-marquee>
    </div>

    <div>
      <c-text mb="xs" size="sm">Custom fade color</c-text>
      <c-marquee fade-edge-color="var(--c-color-blue-light)">
        <heart-icon v-for="color in colors" :color="color" :key="color" />
      </c-marquee>
    </div>

    <div>
      <c-text mb="xs" size="sm">No fade</c-text>
      <c-marquee :fade-edges="false">
        <heart-icon v-for="color in colors" :color="color" :key="color" />
      </c-marquee>
    </div>
  </c-stack>
</template>

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'

const colors = ['blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange', 'red']
</script>
```

## Customization

Use the following props to customize the marquee behavior:

- `reverse` - reverse animation direction
- `pauseOnHover` - pauses animation on hover
- `orientation` - `horizontal` (default) or `vertical` scroll direction
- `repeat` - number of times children are repeated for seamless scrolling (default: 4)
- `duration` - animation duration in ms (default: 40000)
- `gap` - gap between repeated children, key of `theme.spacing` or any valid CSS value

<script setup lang="ts">
import { HeartIcon } from '@lucide/vue'

const colors = ['blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange', 'red']
</script>

## Props

### Marquee props

|Name|Type|Description|Default value|
|---|---|---|---|
|duration|number|Animation duration in ms|`40000`|
|fadeEdgeColor|string|Color of the fade gradient|`'var(--c-color-body)'`|
|fadeEdgeSize|string|Size of the fade gradient|`'5%'`|
|fadeEdges|boolean|Whether to show gradient fade on edges|`true`|
|gap|CSpacing|Gap between repeated children, key of `theme.spacing` or any valid CSS value|`'md'`|
|orientation|"horizontal" \| "vertical"|Scroll orientation|`'horizontal'`|
|pauseOnHover|boolean|Pauses animation on hover|`false`|
|repeat|number|Number of times children are repeated inline for seamless scrolling|`4`|
|reverse|boolean|Reverses animation direction|`false`|

## Styles API

`Marquee` component supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Marquee Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Marquee-root|Root element|
|content|.c-Marquee-content|Animated scrolling container|
|group|.c-Marquee-group|Repeated children wrapper|

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
      <td rowspan="5">root</td>
      <td>--marquee-duration</td>
      <td>Controls animation duration</td>
    </tr>
    <tr>
      <td>--marquee-gap</td>
      <td>Controls gap between items</td>
    </tr>
    <tr>
      <td>--marquee-repeat</td>
      <td>Numbers of times content is repeated</td>
    </tr>
    <tr>
      <td>--marquee-fade-color</td>
      <td>Controls the fade edge gradient color</td>
    </tr>
    <tr>
      <td>--marquee-fade-size</td>
      <td>Controls the size of the fade gradient</td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|root|data-orientation|Value depends on `orientation` prop|horizontal \| vertical|
|root|data-reverse|`reverse` prop is set|-|
|root|data-pause-on-hover|`pauseOnHover` prop is set|-|
|root|data-fade-edges|`fadeEdges` prop is `true` (default)|-|