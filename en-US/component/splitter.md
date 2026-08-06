---
title: Splitter
lang: en-US
---

# Splitter

Resizable split pane layout

## Usage

`Splitter` component provides resizable split pane layout. It is built on top of the use-splitter hook and provides a declarative API with Styles API integration.

<c-splitter :h="300" :with-handle="true" :reset-on-double-click="true">
  <c-splitter-pane :default-size="50" :min="20" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Left pane</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="50" :min="20" bg="teal" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Right pane</div>
  </c-splitter-pane>
</c-splitter>

```vue
<template>
  <c-splitter :h="300" :with-handle="true" :reset-on-double-click="true">
    <c-splitter-pane :default-size="50" :min="20" bg="blue">Left pane</c-splitter-pane>
    <c-splitter-pane :default-size="50" :min="20" bg="teal">Right pane</c-splitter-pane>
  </c-splitter>
</template>
```

## CSS units

`SplitterPane` `defaultSize`, `min` and `max` props accept CSS units in addition to plain numbers:

- A plain `number` or a `%` string (`'30%'`) is a **flexible** size - the pane shares the leftover space with other flexible panes.
- A `px` or `rem` string (`'240px'`, `'15rem'`) is a **fixed** size - the pane keeps its pixel size when the container is resized and only changes when its own handle is dragged.

This makes it possible to mix a fixed-width sidebar with a fluid content pane that absorbs the remaining space:

<c-splitter :h="300" :with-handle="true" :reset-on-double-click="true">
  <c-splitter-pane default-size="240px" min="160px" max="50%" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Left pane</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="100" bg="teal" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Right pane</div>
  </c-splitter-pane>
</c-splitter>

```vue
<template>
  <c-splitter :h="300" :with-handle="true" :reset-on-double-click="true">
    <c-splitter-pane default-size="240px" min="160px" max="50%" bg="blue">Left pane</c-splitter-pane>
    <c-splitter-pane :default-size="100" bg="teal">Right pane</c-splitter-pane>
  </c-splitter>
</template>
```

Sizes are reported back in the unit they were declared in: a `'240px'` pane styles `'240px'` in `sizes` / `onSizeChange`, while a flexible pane reports its resolved percentage. When the container becomes smaller than the sum of the fixed panes, fixed panes shrink proportionally.

## Vertical orientation

Set `orientation="vertical"` to split panes vertically:

<c-splitter orientation="vertical" :h="300" :with-handle="true" :reset-on-double-click="true">
  <c-splitter-pane :default-size="60" :min="20" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Top pane</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="40" :min="20" bg="teal" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Bottom pane</div>
  </c-splitter-pane>
</c-splitter>

```vue
<template>
  <c-splitter orientation="vertical" :h="300" :with-handle="true" :reset-on-double-click="true">
    <c-splitter-pane :default-size="60" :min="20" bg="blue">Top pane</c-splitter-pane>
    <c-splitter-pane :default-size="40" :min="20" bg="teal">Bottom pane</c-splitter-pane>
  </c-splitter>
</template>
```

## Collapsible panes

Set `collapsible` prop on `SplitterPane` to allow the pane to be collapsed by dragging past its minimum size. Use `splitterRef` to access imperative API for programmatic collapse/expand:

<c-splitter ref="toggleRef" :h="200" :with-handle="true" :reset-on-double-click="true">
  <c-splitter-pane :default-size="30" :min="20" :collapsible="true" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Collapsible sidebar</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="70" :min="30" bg="teal" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Main content</div>
  </c-splitter-pane>
</c-splitter>
<div style="margin-top: 10px;">
  <c-button @click="toggleRef?.toggleCollapse(0)">Toggle sidebar</c-button>
</div>

```vue
<template>
  <c-splitter ref="splitterRef" :h="200" :with-handle="true" :reset-on-double-click="true">
    <c-splitter-pane :default-size="30" :min="20" :collapsible="true" bg="blue">Collapsible sidebar</c-splitter-pane>
    <c-splitter-pane :default-size="70" :min="30" bg="teal">Main content</c-splitter-pane>
  </c-splitter>
  <div style="margin-top: 10px;">
    <c-button @click="splitterRef?.toggleCollapse(0)">Toggle sidebar</c-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const splitterRef = ref(null)
</script>
```

## Controlled

To control panel sizes, use `sizes` and `onSizeChange` props:

<c-stack>
  <c-splitter :sizes="sizes" :h="300" :with-handle="true" :reset-on-double-click="true" :on-size-change="handleSizeChange">
    <c-splitter-pane :default-size="50" :min="20" bg="blue" style="display:flex;">
      <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Left ({{ sizes[0].toFixed(1) }}%)</div>
    </c-splitter-pane>
    <c-splitter-pane :default-size="50" :min="20" bg="teal" style="display:flex;">
      <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Right ({{ sizes[1].toFixed(1) }}%)</div>
    </c-splitter-pane>
  </c-splitter>
  <c-text size="sm">
    Current sizes: [{{ sizes.map(s => Math.round(s)).join(', ') }}]
  </c-text>
  <c-group>
    <c-button variant="filled" @click="setSizes([30, 70])">30/70</c-button>
    <c-button variant="filled" @click="setSizes([50, 50])">50/50</c-button>
    <c-button variant="filled" @click="setSizes([70, 30])">70/30</c-button>
  </c-group>
</c-stack>

```vue
<template>
  <c-stack>
    <c-splitter :sizes="sizes" :h="300" :with-handle="true" :reset-on-double-click="true" :on-size-change="handleSizeChange">
      <c-splitter-pane :default-size="50" :min="20" bg="blue">Left ({{ sizes[0].toFixed(1) }}%)</c-splitter-pane>
      <c-splitter-pane :default-size="50" :min="20" bg="teal">Right ({{ sizes[1].toFixed(1) }}%)</c-splitter-pane>
    </c-splitter>
    <c-text size="sm">
      Current sizes: [{{ sizes.map(s => Math.round(s)).join(', ') }}]
    </c-text>
    <c-group>
      <c-button variant="filled" @click="setSizes([30, 70])">30/70</c-button>
      <c-button variant="filled" @click="setSizes([50, 50])">50/50</c-button>
      <c-button variant="filled" @click="setSizes([70, 30])">70/30</c-button>
    </c-group>
  </c-stack>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sizes = ref([50, 50])
const handleSizeChange = (next: number[]) => {
  sizes.value = next
}
const setSizes = (newSizes: number[]) => {
  sizes.value = newSizes
}
</script>
```

## Multiple panes

`Splitter` supports any number of panes. Handles are automatically rendered between panes:

<c-splitter :h="200" :with-handle="true" :reset-on-double-click="true">
  <c-splitter-pane :default-size="25" :min="10" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Left</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="50" :min="10" bg="teal" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Middle</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="25" :min="10" bg="grape" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Right</div>
  </c-splitter-pane>
</c-splitter>

```vue
<template>
  <c-splitter :h="200" :with-handle="true" :reset-on-double-click="true">
    <c-splitter-pane :default-size="25" :min="10" bg="blue">Left</c-splitter-pane>
    <c-splitter-pane :default-size="50" :min="10" bg="teal">Middle</c-splitter-pane>
    <c-splitter-pane :default-size="25" :min="10" bg="grape">Right</c-splitter-pane>
  </c-splitter>
</template>
```

## Nested splitters

You can nest `Splitter` components to create complex layouts:

<c-splitter :h="350" :with-handle="true" :reset-on-double-click="true">
  <c-splitter-pane :default-size="30" :min="15" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Sidebar</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="70" :min="30">
    <c-splitter orientation="vertical" h="100%" :with-handle="true" :reset-on-double-click="true">
      <c-splitter-pane :default-size="60" :min="20" bg="teal" style="display:flex;">
        <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Editor</div>
      </c-splitter-pane>
      <c-splitter-pane :default-size="40" :min="20" bg="grape" style="display:flex;">
        <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Terminal</div>
      </c-splitter-pane>
    </c-splitter>
  </c-splitter-pane>
</c-splitter>

```vue
<template>
  <c-splitter :h="350" :with-handle="true" :reset-on-double-click="true">
    <c-splitter-pane :default-size="30" :min="15" bg="blue">Sidebar</c-splitter-pane>
    <c-splitter-pane :default-size="70" :min="30">
      <c-splitter orientation="vertical" h="100%" :with-handle="true" :reset-on-double-click="true">
        <c-splitter-pane :default-size="60" :min="20" bg="teal">Editor</c-splitter-pane>
        <c-splitter-pane :default-size="40" :min="20" bg="grape">Terminal</c-splitter-pane>
      </c-splitter>
    </c-splitter-pane>
  </c-splitter>
</template>
```

## Redistribute

When using multiple panes, set `redistribute` prop to control how space is borrowed from non-adjacent panels when the immediate neighbor is at its min/max:

<c-splitter redistribute="nearest" :h="200" :with-handle="true" :reset-on-double-click="true">
  <c-splitter-pane :default-size="25" :min="10" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Panel A</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="25" :min="10" bg="teal" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Panel B</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="25" :min="10" bg="grape" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Panel C</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="25" :min="10" bg="orange" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Panel D</div>
  </c-splitter-pane>
</c-splitter>

```vue
<template>
  <c-splitter redistribute="nearest" :h="200" :with-handle="true" :reset-on-double-click="true">
    <c-splitter-pane :default-size="25" :min="10" bg="blue">Panel A</c-splitter-pane>
    <c-splitter-pane :default-size="25" :min="10" bg="teal">Panel B</c-splitter-pane>
    <c-splitter-pane :default-size="25" :min="10" bg="grape">Panel C</c-splitter-pane>
    <c-splitter-pane :default-size="25" :min="10" bg="orange">Panel D</c-splitter-pane>
  </c-splitter>
</template>
```

## Line size

Use `lineSize` prop to control the thickness of the separator line between panes:

<c-splitter :line-size="6" :h="200" :with-handle="true" :reset-on-double-click="true">
  <c-splitter-pane :default-size="50" :min="20" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">First pane</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="50" :min="20" bg="teal" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Second pane</div>
  </c-splitter-pane>
</c-splitter>

```vue
<template>
  <c-splitter :line-size="6" :h="200" :with-handle="true" :reset-on-double-click="true">
    <c-splitter-pane :default-size="50" :min="20" bg="blue">First pane</c-splitter-pane>
    <c-splitter-pane :default-size="50" :min="20" bg="teal">Second pane</c-splitter-pane>
  </c-splitter>
</template>
```

## Without handle

Set `:with-handle="false"` to hide the thumb with grip icon. The separator line between panes is still visible and draggable:

<c-splitter :h="200" :with-handle="false" :reset-on-double-click="true">
  <c-splitter-pane :default-size="50" :min="20" bg="blue" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">First pane</div>
  </c-splitter-pane>
  <c-splitter-pane :default-size="50" :min="20" bg="teal" style="display:flex;">
    <div style="flex:1;display:flex;align-items:center;justify-content:center;color:white;">Second pane</div>
  </c-splitter-pane>
</c-splitter>

```vue
<template>
  <c-splitter :h="200" :with-handle="false" :reset-on-double-click="true">
    <c-splitter-pane :default-size="50" :min="20" bg="blue">First pane</c-splitter-pane>
    <c-splitter-pane :default-size="50" :min="20" bg="teal">Second pane</c-splitter-pane>
  </c-splitter>
</template>
```

## Wrap SplitterPane

`Splitter` component relies on `SplitterPane` order. Wrapping `SplitterPane` is not supported, `SplitterPane` must be a direct child of `Splitter`.

## use-splitter hook

`Splitter` component is built on top of the use-splitter hook. If you need more control over the layout and styling, you can use the hook directly.

<script setup lang="ts">
import { ref } from 'vue'

const toggleRef = ref(null)

const sizes = ref([50, 50])
const handleSizeChange = (next: number[]) => {
  sizes.value = next
}
const setSizes = (newSizes: number[]) => {
  sizes.value = newSizes
}
</script>

## API

## Splitter props

|Name|Type|Description|Default value|
|---|---|---|---|
|handleColor|CColor|Key of `theme.colors` or any valid CSS color for the separator line||
|handleIcon||Custom icon displayed in the handle thumb|uses grip icon based on orientation|
|lineSize|string\|number|CSS value for separator line thickness between panes|`2`|
|onCollapseChange|(panelIndex: number, collapsed: boolean) => void|Called when a panel collapses or expands||
|onResizeEnd|(handleIndex: number, sizes: SplitterPaneSize[]) => void|Called when drag ends||
|onResizeStart|(handleIndex: number) => void|Called when drag starts||
|onSizeChange|(sizes: SplitterPaneSize[]) => void|Called during resize with updated sizes, each value keeps in declared unit||
|orientation|"horizontal" \| "vertical"|Layout direction|`'horizontal'`|
|redistribute|"nereast" \| "equal" \| UseSplitterRedistributeFn|How to redistribute space when immediate neighbor is at its min/max||
|resetOnDoubleClick|boolean|Restore the two panes adjacent to a handle to their default ratio (preserving their combined size) when the handle is double-clicked|`true`|
|shiftStep|SplitterStep|Shift + arrow step size, a `number`/`%` is a percentage, `px`/`rem` is resolved to pixels|`10`|
|sizes|SplitterPaneSize[]|Controlled sizes, each value keeps the unit it was declared in (number/`%` flexible, `px`/`rem` fixed)||
|step|SplitterStep|Keyboard step size, a `number`/`%` is a percentage, `px`/`rem` is resolved to pixels|`1`|
|withHandle|boolean|Determines whether the thumb with grip icon is displayed on the handle|`true`|

## Styles API

`Splitter` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Splitter Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Splitter-root|Root element|
|pane|.c-Splitter-pane|Pane element (`SplitterPane` component)|
|handle|.c-Splitter-handle|Handle element between panes, contains the separator line and the thumb|
|thumb|.c-Splitter-thumb|Thumb element inside the handle, contains the grip icon|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--splitter-line-size|Controls the thickness of the separator line between panes
||--splitter-handle-color|Controls the color of the separator line between panes

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|root, handle, thumb|data-orientation|-|Value of `orientation` prop|
|handle, thumb|data-active|Handle is being dragged|-|
|pane|data-collapsed|Pane is collapsed|-|