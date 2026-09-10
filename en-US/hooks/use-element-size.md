---
title: use-element-size
lang: en-US
---

# use-element-size

Returns element width and height and observes changes with ResizeObserver

## Usage

<c-text align="center">Resize textarea by dragging its right bottom corner</c-text>

<c-center>
  <textarea ref="ref" style="background-color: var(--c-color-teal-filled); width: 400px; height: 120px; resize: both;"></textarea>
</c-center>

<c-text align="center">Width: {{ width }}, height: {{ height }}</c-text>

```vue
<template>
  <c-center>
    <textarea ref="ref" style="background-color: var(--c-color-teal-filled); width: 400px; height: 120px; resize: both;"></textarea>
  </c-center>
</template>

<c-text align="center">Width: {{ width }}, height: {{ height }}</c-text>

<script setup lang="ts">
import { useElementSize } from '@cck-ui/hooks'

const { ref, width, height } = useElementSize()
</script>
```

<script setup lang="ts">
import { useElementSize } from '@cck-ui/hooks'

const { ref, width, height } = useElementSize()
</script>

## API

`use-element-size` is a simpler version of the [use-resize-observer](./use-resize-observer) hook. The hook returns a `ref` object that should be passed to the observed element, and the element's `height` and `width`. On the first render (as well as during SSR), or when no element is being observed, the `width` and `height` properties are equal to `0`.

## Definition

```typescript
interface UseElementSizeReturnValue<T extends HTMLElement = any> {
  ref: Ref<T | null>
  width: Ref<number>
  height: Ref<number>
}

function useElementSize<T extends HTMLElement = any>(
  options?: ResizeObserverOptions
): UseElementSizeReturnValue<T>
```