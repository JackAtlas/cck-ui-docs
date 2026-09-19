---
title: use-scroller
lang: en-US
---

# use-scroller

Manages horizontal scroll behavior with scroll state tracking and drag-to-scroll functionality

## Usage

The `use-scroller` hook manages horizontal scroll behavior for a container element. It provides scroll state (whether content can be scrolled in either direction), scroll functions, and drag-to-scroll functionality.

<c-box>
  <c-group mb="md">
    <c-button size="xs" :disabled="!usageScroller.canScrollStart.value" @click="usageScroller.scrollStart">← Scroll left</c-button>
    <c-button size="xs" :disabled="!usageScroller.canScrollEnd.value" @click="usageScroller.scrollEnd">Scroll right →</c-button>
  </c-group>
  <div
    :ref="usageScroller.ref"
    :style="{
      overflow: 'auto',
      cursor: usageScroller.isDragging ? 'grabbing': 'grab'
    }"
    @mousedown="usageScroller.dragHandlers.onMousedown"
  >
    <c-group gap="md" wrap="nowrap">
      <c-box
        v-for="(_, index) in Array.from({ length: 20 })"
        :h="80"
        :miw="100"
        :key="index"
        :style="{
          alignItems: 'center',
          backgroundColor: 'var(--c-color-blue-filled)',
          borderRadius: 'var(--c-radius-md)',
          color: 'white',
          display: 'flex',
          fontWeight: 500,
          justifyContent: 'center',
        }"
      >
        {{ index + 1 }}
      </c-box>
    </c-group>
  </div>
</c-box>

```vue
<template>
  <c-box>
    <c-group mb="md">
      <c-button size="xs" :disabled="!scroller.canScrollStart.value" @click="scroller.scrollStart">← Scroll left</c-button>
      <c-button size="xs" :disabled="!scroller.canScrollEnd.value" @click="scroller.scrollEnd">Scroll right →</c-button>
    </c-group>
    <div
      :ref="scroller.ref"
      :style="{
        overflow: 'auto',
        cursor: scroller.isDragging ? 'grabbing': 'grab'
      }"
      @mousedown="scroller.dragHandlers.onMousedown"
    >
      <c-group gap="md" wrap="nowrap">
        <c-box
          v-for="(_, index) in Array.from({ length: 20 })"
          :h="80"
          :miw="100"
          :key="index"
          :style="{
            alignItems: 'center',
            backgroundColor: 'var(--c-color-blue-filled)',
            borderRadius: 'var(--c-radius-md)',
            color: 'white',
            display: 'flex',
            fontWeight: 500,
            justifyContent: 'center',
          }"
        >
          {{ index + 1 }}
        </c-box>
      </c-group>
    </div>
  </c-box>
</template>

<script setup lang="ts">
import { useScroller } from '@cck-ui/hooks'

const scroller = useScroller()
</script>
```

## Scroll amount

Use `scrollAmount` option to control how many pixels the content scrolls when `scrollStart` or `scrollEnd` functions are called. Default value is `200`:

<c-box>
  <c-group mb="md">
    <c-button size="xs" :disabled="!amountScroller.canScrollStart.value" @click="amountScroller.scrollStart">← Scroll left</c-button>
    <c-button size="xs" :disabled="!amountScroller.canScrollEnd.value" @click="amountScroller.scrollEnd">Scroll right →</c-button>
  </c-group>
  <div
    :ref="amountScroller.ref"
    :style="{
      overflow: 'auto',
      cursor: amountScroller.isDragging ? 'grabbing': 'grab'
    }"
    @mousedown="amountScroller.dragHandlers.onMousedown"
  >
    <c-group gap="md" wrap="nowrap">
      <c-box
        v-for="(_, index) in Array.from({ length: 20 })"
        :h="80"
        :miw="100"
        :key="index"
        :style="{
          alignItems: 'center',
          backgroundColor: 'var(--c-color-blue-filled)',
          borderRadius: 'var(--c-radius-md)',
          color: 'white',
          display: 'flex',
          fontWeight: 500,
          justifyContent: 'center',
        }"
      >
        {{ index + 1 }}
      </c-box>
    </c-group>
  </div>
</c-box>

```vue
<template>
  <c-box>
    <c-group mb="md">
      <c-button size="xs" :disabled="!scroller.canScrollStart.value" @click="scroller.scrollStart">← Scroll left</c-button>
      <c-button size="xs" :disabled="!scroller.canScrollEnd.value" @click="scroller.scrollEnd">Scroll right →</c-button>
    </c-group>
    <div
      :ref="scroller.ref"
      :style="{
        overflow: 'auto',
        cursor: scroller.isDragging ? 'grabbing': 'grab'
      }"
      @mousedown="scroller.dragHandlers.onMousedown"
    >
      <c-group gap="md" wrap="nowrap">
        <c-box
          v-for="(_, index) in Array.from({ length: 20 })"
          :h="80"
          :miw="100"
          :key="index"
          :style="{
            alignItems: 'center',
            backgroundColor: 'var(--c-color-blue-filled)',
            borderRadius: 'var(--c-radius-md)',
            color: 'white',
            display: 'flex',
            fontWeight: 500,
            justifyContent: 'center',
          }"
        >
          {{ index + 1 }}
        </c-box>
      </c-group>
    </div>
  </c-box>
</template>

<script setup lang="ts">
import { useScroller } from '@cck-ui/hooks'

const scroller = useScroller({ scrollAmount: 400 })
</script>
```

## Draggable

Use `draggable` option to enable or disable drag-to-scroll functionality. When `draggable` is `true` (default), users can click and drag to scroll the content:

<c-box>
  <c-group mb="md" justify="space-between">
    <c-group>
      <c-button size="xs" :disabled="!draggableScroller.canScrollStart.value" @click="draggableScroller.scrollStart">← Scroll left</c-button>
      <c-button size="xs" :disabled="!draggableScroller.canScrollEnd.value" @click="draggableScroller.scrollEnd">Scroll right →</c-button>
    </c-group>
    <c-text c="dimmed" size="sm">draggable: false</c-text>
  </c-group>
  <div
    style="overflow: auto"
    :ref="draggableScroller.ref"
    @mousedown="draggableScroller.dragHandlers.onMousedown"
  >
    <c-group gap="md" wrap="nowrap">
      <c-box
        v-for="(_, index) in Array.from({ length: 20 })"
        :h="80"
        :miw="100"
        :key="index"
        :style="{
          alignItems: 'center',
          backgroundColor: 'var(--c-color-blue-filled)',
          borderRadius: 'var(--c-radius-md)',
          color: 'white',
          display: 'flex',
          fontWeight: 500,
          justifyContent: 'center',
        }"
      >
        {{ index + 1 }}
      </c-box>
    </c-group>
  </div>
</c-box>

```vue
<template>
  <c-box>
    <c-group mb="md" justify="space-between">
      <c-group>
        <c-button size="xs" :disabled="!scroller.canScrollStart.value" @click="scroller.scrollStart">← Scroll left</c-button>
        <c-button size="xs" :disabled="!scroller.canScrollEnd.value" @click="scroller.scrollEnd">Scroll right →</c-button>
      </c-group>
      <c-text c="dimmed" size="sm">draggable: false</c-text>
    </c-group>
    <div
      style="overflow: auto"
      :ref="scroller.ref"
      @mousedown="scroller.dragHandlers.onMousedown"
    >
      <c-group gap="md" wrap="nowrap">
        <c-box
          v-for="(_, index) in Array.from({ length: 20 })"
          :h="80"
          :miw="100"
          :key="index"
          :style="{
            alignItems: 'center',
            backgroundColor: 'var(--c-color-blue-filled)',
            borderRadius: 'var(--c-radius-md)',
            color: 'white',
            display: 'flex',
            fontWeight: 500,
            justifyContent: 'center',
          }"
        >
          {{ index + 1 }}
        </c-box>
      </c-group>
    </div>
  </c-box>
</template>

<script setup lang="ts">
import { useScroller } from '@cck-ui/hooks'

const scroller = useScroller()
</script>
```

## Scroller component

If you prefer component API, you can use [Scroller](../component/scroller) component. It provides the same functionality with additional styling and control button features.

<c-scroller>
  <c-group gap="xs" wrap="nowrap">
    <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({ length: 20 })" :key="index">
      Badge {{ index + 1}}
    </c-badge>
  </c-group>
</c-scroller>

```vue
<template>
  <c-scroller>
    <c-group gap="xs" wrap="nowrap">
      <c-badge miw="fit-content" size="lg" variant="light" v-for="(_, index) in Array.from({ length: 20 })" :key="index">
        Badge {{ index + 1}}
      </c-badge>
    </c-group>
  </c-scroller>
</template>
```

## Definition

```typescript
interface UseScrollerOptions {
  /**
   * Amount of pixels to scroll when calling scroll functions
   * @default 200
   */
  scrollAmount?: MaybeRefOrGetter<number>

  /**
   * Determines whether content can be scrolled by dragging with mouse
   * @default true
   */
  draggable?: MaybeRefOrGetter<boolean>

  /** Called when scroll state changes (canScrollStart or canScrollEnd) */
  onScrollStateChange?: (state: UseScrollerScrollState) => void
}

interface UseScrollerScrollState {
  /** Whether content can be scrolled towards the start (left in LTR, right in RTL) */
  canScrollStart: boolean

  /** Whether content can be scrolled towards the end (right in LTR, left in RTL) */
  canScrollEnd: boolean
}

interface UseScrollerReturnValue {
  /** Ref to attach to the scrollable container element */
  ref: VNodeRef

  /** Whether content can be scrolled towards the start */
  canScrollStart: Ref<boolean>

  /** Whether content can be scrolled towards the end */
  canScrollEnd: Ref<boolean>

  /** Scrolls towards the start direction */
  scrollStart: () => void

  /** Scrolls towards the end direction */
  scrollEnd: () => void

  /** `true` if the user is currently dragging the content */
  isDragging: Ref<boolean>

  dragHandlers: {
    onMousedown: (e: MouseEvent) => void
    onMousemove: (e: MouseEvent) => void
    onMouseup: () => void
    onMouseleave: () => void
  }
}

function useScroller(options: UseScrollerOptions = {}): UseScrollerReturnValue
```

## Exported types

`UseScrollerOptions`, `UseScrollerReturnValue` and `UseScrollerScrollState` types are exported from the `@cck-ui/hooks` package; you can import them in your application:

```typescript
import type {
  UseScrollerOptions,
  UseScrollerReturnValue,
  UseScrollerScrollState
} from '@cck-ui/hooks'
```

<script setup lang="ts">
import { useScroller } from '@cck-ui/hooks'

const usageScroller = useScroller()
const amountScroller = useScroller({ scrollAmount: 400 })
const draggableScroller = useScroller({ draggable: false })
</script>