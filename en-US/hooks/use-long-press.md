---
title: use-long-press
lang: en-US
---

# use-long-press

Call function on long press

## Usage

<c-center>
  <c-button variant="filled" v-bind="handlers">Press and hold</c-button>
</c-center>

```vue
<template>
  <c-button variant="filled" v-bind="handlers">Press and hold</c-button>
</template>

<script setup lang="ts">
import { useLongPress } from '@cck-ui/hooks'

const handlers = useLongPress(() => alert('Long press triggered'))
</script>
```

<script setup lang="ts">
import { useLongPress } from '@cck-ui/hooks'

const handlers = useLongPress(() => alert('Long press triggered'))
</script>

## Definition

```typescript
type UseLongPressEvent = 'mouse' | 'touch'

interface UseLongPressOptions {
  /**
   * Time in milliseconds to trigger the long press
   * @default 400ms
   */
  threshold?: MaybeRefOrGetter<number>

  /**
   * Input types that can trigger the long press
   * @default ['mouse','touch']
   */
  events?: UseLongPressEvent[]

  /**
   * If set, the longpress is cancelled when the pointer moves further than the given distance in px from the start position. `true` uses a 10px threshold, a number sets a custom threshold.
   * @default false
   */
  cancelOnMove?: MaybeRefOrGetter<boolean | number>

  /** Callback triggered when the long press starts */
  onStart?: (event: MouseEvent | TouchEvent) => void

  /** Callback triggered when the long press finished */
  onFinish?: (event: MouseEvent | TouchEvent) => void

  /** Callback triggered when the long press is cancelled */
  onCancel?: (event: MouseEvent | TouchEvent) => void
}

interface UseLongPressReturnValue {
  onMousedown?: (event: MouseEvent) => void
  onMouseup?: (event: MouseEvent) => void
  onMouseleave?: (event: MouseEvent) => void
  onMousemove?: (event: MouseEvent) => void
  onTouchstart?: (event: TouchEvent) => void
  onTouchend?: (event: TouchEvent) => void
  onTouchcancel?: (event: TouchEvent) => void
  onTouchmove?: (event: TouchEvent) => void
}

function useLongPress(
  onLongPress: (event: MouseEvent | TouchEvent) => void,
  options?: UseLongPressOptions
): UseLongPressReturnValue
```

## Restrict to specific input types

By default the long press is triggered by both mouse and touch input. Use the `events` option to restrict it to a subset - for example, `['touch']` returns only touch handlers, leaving mouse input to your own handlers:

```typescript
const handlers = useLongPress(() => console.log('Long pressed'), {
  events: ['touch']
})
```

## Cancel on movement

Set `cancelOnMove` to cancel a pending long press when the pointer moves further than the given distance from the start position. This is useful on touch devices so that a scroll gesture does not trigger the long press. Pass `true` to use the default 10px threshold or a number to set a custom one:

```typescript
const handlers = useLongPress(() => console.log('Long pressed'), {
  cancelOnMove: true
})
```

## Exported types

`UseLongPressEvent`, `UseLongPressOptions` and `UseLongPressReturnValue` types are exported from the `@cck-ui/hooks` package; you can import them in your application:

```typescript
import type { UseLongPressEvent, UseLongPressOptions, UseLongPressReturnValue } from '@cck-ui/hooks'
```