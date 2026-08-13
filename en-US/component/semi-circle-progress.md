---
title: SemiCircleProgress
lang: en-US
---

# SemiCircleProgress

Represent progress with semi circle diagram

## Usage

<c-group>
  <c-semi-circle-progress fillDirection="left-to-right" orientation="up" filledSegmentColor="blue" :size="200" :thickness="12" :value="40">
    <template #label>Label</template>
  </c-semi-circle-progress>

  <c-semi-circle-progress fillDirection="right-to-left" orientation="up" filledSegmentColor="blue" :size="300" :thickness="12" :value="40">
    <template #label>Label</template>
  </c-semi-circle-progress>

  <c-semi-circle-progress fillDirection="left-to-right" orientation="down" filledSegmentColor="red" :size="200" :thickness="12" :value="40">
    <template #label>Label</template>
  </c-semi-circle-progress>

  <c-semi-circle-progress fillDirection="right-to-left" orientation="down" filledSegmentColor="blue" :size="200" :thickness="16" :value="50">
    <template #label>Label</template>
  </c-semi-circle-progress>
</c-group>

```vue
<template>
  <c-semi-circle-progress fillDirection="left-to-right" orientation="up" filledSegmentColor="blue" :size="200" :thickness="12" :value="40">
    <template #label>Label</template>
  </c-semi-circle-progress>

  <c-semi-circle-progress fillDirection="right-to-left" orientation="up" filledSegmentColor="blue" :size="300" :thickness="12" :value="40">
    <template #label>Label</template>
  </c-semi-circle-progress>

  <c-semi-circle-progress fillDirection="left-to-right" orientation="down" filledSegmentColor="red" :size="200" :thickness="12" :value="40">
    <template #label>Label</template>
  </c-semi-circle-progress>

  <c-semi-circle-progress fillDirection="right-to-left" orientation="down" filledSegmentColor="blue" :size="200" :thickness="16" :value="50">
    <template #label>Label</template>
  </c-semi-circle-progress>
</template>
```

## Change empty segment color

Use `emptySegmentColor` prop to change color of empty segment, it accepts key of `theme.colors` or any valid CSS color value:

<c-semi-circle-progress empty-segment-color="var(--c-color-dimmed)" :value="40">
  <template #label>Label</template>
</c-semi-circle-progress>

```vue
<template>
  <c-semi-circle-progress empty-segment-color="var(--c-color-dimmed)" :value="40">
    <template #label>Label</template>
  </c-semi-circle-progress>
</template>
```

## Change label position

By default, the label is displayed at the bottom of the component, you can change its position to `center` by using `labelPosition` prop:

<c-group>
  <c-semi-circle-progress :value="40">
    <template #label>Bottom</template>
  </c-semi-circle-progress>
  <c-semi-circle-progress label-position="center" :value="40">
    <template #label>Center</template>
  </c-semi-circle-progress>
</c-group>

```vue
<template>
  <c-semi-circle-progress :value="40">
    <template #label>Bottom</template>
  </c-semi-circle-progress>
  <c-semi-circle-progress label-position="center" :value="40">
    <template #label>Center</template>
  </c-semi-circle-progress>
</template>
```

## Filled segment transition

By default, transitions are disabled, to enable them, set `transitionDuration` prop to a number of milliseconds:

<c-semi-circle-progress :transition-duration="250" :value="value">
  <template #label>{{ value }}%</template>
</c-semi-circle-progress>

<c-button mt="xl" variant="filled" @click="() => setValue()">Set random value</c-button>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(0)

function setValue() {
  value.value = Math.floor(Math.random() * 100)
}
</script>

## Props and Slots

### SemiCircleProgress props

|Name|Type|Description|Default value|
|---|---|---|---|
|emptySegmentColor|CColor|Key of `theme.colors` or any valid CSS color value|`'gray.2'` in light mode, `'dark.4'` in dark mode|
|fillDirection|`"right-to-left"` \| `"left-to-right"`|Direction from which the circle is filled|`'left-to-right'`|
|filledSementColor|CColor|Key of `theme.colors` or any valid CSS color value|`theme.primaryColor`|
|labelPosition|`"center"` \| `"bottom"`|Label position relative to the circle center|`'bottom'`|
|orientation|`"up"` \| `"down"`|Orientation of the circle|`'up'`|
|size|number|Width of the component and diameter of the full circle in px. The visible SVG height will be size / 2|`200`|
|thickness|number|Stroke width of the circle segments in px|`12`|
|transitionDuration|number|Transition duration for the filled segment progress changes in ms. Does not affect color transitions|`0`|
|value <span style="color: var(--c-color-red-filled)">*</span>|number|Progress value from `0` to `100`||

### SemiCircleProgress slots

|Name|Description|
|---|---|
|label|Label rendered inside the circle|

## Styles API

`SemiCircleProgress` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### SemiCircleProgress Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-SemiCircleProgress-root|Root element|
|svg|.c-SemiCircleProgress-svg|Root svg element|
|emptySegment|.c-SemiCircleProgress-emptySegment|Empty circle segment|
|filledSegment|.c-SemiCircleProgress-filledSegment|Filled circle segment|
|label|.c-SemiCircleProgress-label|Label element|

#### CSS variables

|Selector|Variables|Description|
|---|---|---|
|root|--scp-empty-segment-color|Color of the empty segment|
||--scp-filled-segment-color|Color of the filled segment|
||--scp-rotation|Transform styles of the svg, controlled by `orientation` and `fillDirection` props|
||--scp-thickness|Controls `strokeWidth` of the circle|
||--scp-transition-duration|Controls transition duration of the filled segment|

#### Data attributes

|Selector|Attribute|Value|
|---|---|---|
|label|data-position|Value of `labelPosition` prop|
|label|data-orientation|Value of `orientation` prop|