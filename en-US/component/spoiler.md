---
title: Spoiler
lang: en-US
---

# Spoiler

Hide long sections of content under a spoiler

## Usage

Use `Spoiler` to hide a long section of content. Set the `maxHeight` prop to control the point at which content will be hidden under the spoiler and the show/hide control appears. If the content height is less than `maxHeight`, the spoiler will just render children.

`hideLabel` and `showLabel` slots are required - they are used as the spoiler toggle button label in the corresponding state.

<c-spoiler :max-height="120">
  <template #show-label>Show more</template>
  <template #hide-label>Hide</template>
  From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
</c-spoiler>

```vue
<template>
  <c-spoiler :max-height="120">
    <template #show-label>Show more</template>
    <template #hide-label>Hide</template>
    From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
  </c-spoiler>
</template>
```

## Control expanded state

To control expanded state, use `expanded` and `onExpandedChange` props. Note that the expanded prop does not have any effect on spoiler visuals if the content height is less than the given `maxHeight`.

```vue
<template>
  <c-spoiler :expanded="expanded" :onExpandedChange="setExpanded">
    <template #show-label>Show more</template>
    <template #hide-label>Hide details</template>
    From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
  </c-spoiler>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(false)
const setExpanded = (val: boolean) => {
  expanded.value = val
}
</script>
```

## Subscribe to expanded state changes

Use `onExpandedChange` to subscribe to expanded state changes:

```vue
<template>
  <c-spoiler :onExpandedChange="(expanded) => console.log(expanded)">
    <template #show-label>Show more</template>
    <template #hide-label>Hide details</template>
    From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
  </c-spoiler>
</template>
```

## Transition duration

Control the transition duration by setting the `transitionDuration` prop (transition-duration CSS property in ms). To disable animations, set `:transitionDuration="0"`:

<c-spoiler :max-height="120" :transition-duration="0">
  <template #show-label>Show more</template>
  <template #hide-label>Hide details</template>
  From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
</c-spoiler>

```vue
<template>
  <c-spoiler :max-height="120" :transition-duration="0">
    <template #show-label>Show more</template>
    <template #hide-label>Hide details</template>
    From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
  </c-spoiler>
</template>
```

## Accessiblility

The Spoiler component implements proper ARIA attributes for screen reader support:

- Toggle button has `aria-expanded` indicating the expanded/collapsed state
- Content region has `role="region"` and is associated with the button via `aria-controls`
- Keyboard support: Space or Enter key toggles the spoiler when the button is focused

### Custom accessibility labels

If your button labels don't clearly describe the action for screen reader users, use the `showAriaLabel` and `hideAriaLabel` props to provide custom ARIA labels:

```vue
<template>
  <c-spoiler hideAriaLabel="Hide discussion comments" showAriaLabel="Show discussion comments">
    <template #show-label>👁️</template>
    <template #hide-label>👁️</template>
    <!-- Comments content -->
  </c-spoiler>
</template>
```

## Props

### Spoiler props

|Name|Type|Description|Default value|
|---|---|---|---|
|defaultExpanded|boolean|Initial expanded state in uncontrolled mode. If `true`, content starts expanded. If `false`, content starts collapsed|`false`|
|expanded|boolean|Controlled expanded state value|
|hideAriaLabel|string|Accessible label for the toggle button when expanded.||
|maxHeight|number|Maximum height of visible content in px. When content exceeds this height, the toggle control appears|`100`|
|onExpandedChange|(expanded: boolean) => void|Called when expanded state changes (when spoiler visibility is toggled by the user)||
|showAriaLabel|string|Accessible label for the toggle button when collapsed.||
|transitionDuration|number|Spoiler reveal transition duration in ms. Set to 0 to disable animation|`200`|

### Spoiler slots

|Name|Description|
|---|---|
|hideLabel|Content displayed in the toggle button when content is expanded (to collapse)|
|showLabel|Content displayed in the toggle button when content is collapsed (to expand)|

## Styles API

`Spoiler` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Spoiler Styles API

#### Selectors:

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Spoiler-root|Root element|
|content|.c-Spoiler-content|Wraps content to set max-height and transition|
|control|.c-Spoiler-control|Show/hide content control|

#### CSS variables:

|Selector|Variable|Description|
|---|---|---|
|root|--spoiler-transition-duration|Controls transition duration|

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|root|data-has-spoiler|Whether the control button is shown or not|