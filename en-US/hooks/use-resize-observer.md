---
title: use-resize-observer
lang: en-US
---

# use-resize-observer

Tracks element size and position changes with ResizeObserver

## Usage

<div :class="classes.root">
  <c-group justify="center">
    <div ref="usageRef" :class="classes.demo">Resize me!</div>
  </c-group>

  <table>
    <caption>Resize element by dragging its right bottom corner</caption>
    <thead>
      <tr>
        <th>Property</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>width</td>
        <td>{{ usageRect.width }}</td>
      </tr>
      <tr>
        <td>height</td>
        <td>{{ usageRect.height }}</td>
      </tr>
    </tbody>
  </table>
</div>

```vue
<template>
  <div :class="classes.root">
    <c-group justify="center">
      <div ref="usageRef" :class="classes.demo">Resize me!</div>
    </c-group>

    <table>
      <caption>Resize element by dragging its right bottom corner</caption>
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>width</td>
          <td>{{ usageRect.width }}</td>
        </tr>
        <tr>
          <td>height</td>
          <td>{{ usageRect.height }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@cck-ui/hooks'
import classes from './demo.module.css'

const { ref: usageRef, rect: usageRect } = useResizeObserver()
</script>
```

```scss
// demo.module.css
.root {
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.demo {
  width: 400px;
  max-width: 800px;
  min-width: 160px;
  height: 200px;
  max-height: 220px;
  min-height: 80px;
  background-color: light-dark(var(--c-color-blue-6), var(--c-color-blue-8));
  resize: both;
  overflow: auto;
  color: var(--c-color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
}
```

<script setup lang="ts">
import { useResizeObserver } from '@cck-ui/hooks'
import classes from './_styles/use-resize-observer.module.css'

const { ref: usageRef, rect: usageRect } = useResizeObserver()
</script>

## API

The `use-resize-observer` hook returns a `ref` object that should be passed to the observed element, and the current element content rect, as returned by the `ResizeObserver`'s callback `entry.contentRect`. See the [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) documentation to learn more. On the first render (as well as during SSR), or when no element is being observed, all of the properties are equal to `0`.

See also the [use-element-size](./use-element-size) hook in case you need to subscribe only to `width` and `height`.

## Definition

```typescript
type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>

interface UseResizeObserverReturnValue<T extends HTMLElement = any> {
  ref: Ref<T | null>
  rect: Ref<ObserverRect>
}

function useResizeObserver<T extends HTMLElement = any>(
  options?: ResizeObserverOptions
): UseResizeObserverReturnValue<T>
```